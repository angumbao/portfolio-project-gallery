/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Flex,
  Modal,
  ScrollArea,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { ParsedProject } from "../../types/Project";
// @ts-ignore
import { IconBrandLinkedin } from "@tabler/icons-react";
import VideoPlayer from "../common/VideoPlayer";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const ProjectCard = (props: { project: ParsedProject }) => {
  const { project } = props;
  const teamMemberNames = project.team.split("+");

  const [opened, { open, close }] = useDisclosure();

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const isZoomVideo = project.video.includes("zoom");

  const isYoutubeVideo =
    project.video.includes("youtube") || project.video.includes("youtu.be");
  const isLoomVideo = project.video.includes("loom");

  const isGoogleVideo = project.video.includes("drive.google");

  const TeamMembers = (props: { inModal?: boolean }) => {
    const { inModal } = props;
    return (
      teamMemberNames && (
        <Box mt="auto" w="100%" my={inModal ? "sm" : ""}>
          <Text size="sm">Team Members: </Text>
          <Flex wrap={"wrap"} align={"center"}>
            {teamMemberNames.map((name, index) => {
              if (index > 1) return null;
              return (
                <Flex w="70%" key={index} mb="0.3em">
                  <Text size="xs" c="blue.6">
                    {name}
                  </Text>
                  <ActionIcon
                    color="blue.2"
                    size={"sm"}
                    ml="xs"
                    onClick={() => {
                      window.open(
                        project.linkedIn.split("+")[index].replace(" ", ""),
                        "_blank"
                      );
                    }}
                  >
                    <IconBrandLinkedin />
                  </ActionIcon>{" "}
                </Flex>
              );
            })}
          </Flex>
        </Box>
      )
    );
  };

  const ProjectTitle = (props: { inModal?: boolean }) => {
    const { inModal } = props;
    return inModal ? (
      <Title order={3} c="blue.7" mb={"md"}>
        {project.projectName}
      </Title>
    ) : (
      <Flex mt="md" mb="xs" w="100%">
        <Text w={500}>{project.projectName}</Text>
      </Flex>
    );
  };

  const Technologies = () => (
    <Flex align="center" wrap="wrap" gap="sm">
      {project.techonologies &&
        project.techonologies.split("+").map((technology, idx) => (
          <Badge key={idx} color="blue.7" variant="light">
            {technology}
          </Badge>
        ))}
    </Flex>
  );

  return (
    <Box h="auto">
      <Modal
        opened={opened}
        onClose={close}
        title={`${project.projectName} `}
        centered
        fullScreen={isMobile}
        size={isMobile ? "90%" : "60%"}
        overlayProps={{
          color: theme.colors.dark[9],
          opacity: 1,
          blur: 5,
        }}
      >
        <Box w="100%" h="auto" my={"md"}>
          {isYoutubeVideo && (
            <VideoPlayer
              videoSrc={project.video}
              videoTitle={project.projectName}
              width="100%"
              // maxHeight="30%"
            />
          )}
          {(isLoomVideo || isZoomVideo || isGoogleVideo) && (
            <iframe
              src={project.video}
              allowFullScreen
              style={{
                width: "100%",
                height: "auto",
                borderRadius: theme.radius.md,
              }}
            />
          )}
        </Box>
        <ProjectTitle inModal />
        <Technologies />
        {project.projectDescription && (
          <Text mt="lg" size="sm" c="dimmed" my="sm">
            {project.projectDescription.split("+").join(", ")}
          </Text>
        )}
        <TeamMembers inModal />
      </Modal>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        style={{
          width: "23em",
          height: "34em",
        }}
      >
        <ScrollArea h="100%" type="hover">
          <Card
            // component="button"
            onClick={() => {
              //open modal
              open();
            }}
            style={{
              cursor: "pointer",
            }}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w="23em"
            h="30em"
          >
            <Card.Section mih="55%" mb="-2em" pb="0">
              {isYoutubeVideo && (
                <VideoPlayer
                  videoSrc={project.video}
                  videoTitle={project.projectName}
                  width="100%"
                  // maxHeight="30%"
                />
              )}
              {(isLoomVideo || isZoomVideo || isGoogleVideo) && (
                <iframe
                  src={project.video}
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: theme.radius.md,
                  }}
                />
              )}
            </Card.Section>
            <ProjectTitle />
            <Technologies />
            {project.projectDescription && (
              <Tooltip
                label={project.projectDescription.split("+").join(", ")}
                withArrow
                multiline
                w={420}
              >
                <Text truncate mt="lg" size="sm" c="dimmed">
                  {project.projectDescription.split("+").join(", ")}
                </Text>
              </Tooltip>
            )}
            <TeamMembers />
          </Card>
        </ScrollArea>
      </motion.div>
    </Box>
  );
};

export default ProjectCard;
