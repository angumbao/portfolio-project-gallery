/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Modal,
  ScrollArea,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { ParsedProject } from "../../types/Project";
// @ts-ignore
import VideoThumbnail from "react-video-thumbnail";
import { IconBrandLinkedin } from "@tabler/icons-react";
import VideoPlayer from "../common/VideoPlayer";
import { useDisclosure } from "@mantine/hooks";

const ProjectCard = (props: { project: ParsedProject }) => {
  const { project } = props;
  const teamMemberNames = project.team.split("+");
  const teamMemberEmails = project.email.split("+");

  const [opened, { open, close }] = useDisclosure();

  const theme = useMantineTheme();

  const isZoomVideo = project.video.includes("zoom");

  const isYoutubeVideo =
    project.video.includes("youtube") || project.video.includes("youtu.be");
  const isLoomVideo = project.video.includes("loom");

  const isGoogleVideo = project.video.includes("drive.google");

  return (
    <Box h="auto">
      <Modal
        opened={opened}
        onClose={close}
        title={project.projectName}
        centered
        size={"xl"}
        overlayProps={{
          color: theme.colors.dark[9],
          opacity: 0.55,
          blur: 3,
        }}
      ></Modal>
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
        {/* <ScrollArea h="100%" type="hover"> */}
        <Card.Section mih="55%">
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
        <Flex mt="md" mb="xs" w="100%">
          <Text w={500}>{project.projectName ?? "Portfolio Project"}</Text>
          {/* <Badge color="green.7" variant="light" w="60px">
            C{project.cohort}
          </Badge> */}
        </Flex>
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
        {teamMemberNames && (
          <Box mt="auto" w="100%">
            <Text size="sm">Team Members: </Text>
            <Flex wrap={"wrap"}>
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
        )}
        {/* </ScrollArea> */}
      </Card>
    </Box>
  );
};

export default ProjectCard;
