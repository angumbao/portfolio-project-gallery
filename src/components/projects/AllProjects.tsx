/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Flex,
  Loader,
  LoadingOverlay,
  Space,
  Text,
  Title,
} from "@mantine/core";
import ProjectPageHeroText from "./ProjectPageHeroText";
// import { Carousel } from "@mantine/carousel";
import { useEffect } from "react";
import useProjectsData from "../../hooks/useProjectData";
import { ParsedProject } from "../../types/Project";
import ProjectCard from "./ProjectCard";
import { cleanJson } from "../../utils/parseProjectJSON";

export const ProjectSection = (props: {
  title?: string;
  description?: string;
  projects: ParsedProject[];
}) => {
  const { title, description, projects } = props;

  return (
    <Box>
      {title && (
        <Title order={3} my="lg">
          {title}
        </Title>
      )}
      {description && <Text>{description}</Text>}
      {/* <Carousel>
        {projects.map((project, key) => {
          return <Carousel.Slide key={key}></Carousel.Slide>;
        })}
      </Carousel> */}
      <Flex wrap="wrap" align="center" justify="center" gap="xl">
        {projects.map((project, key) => {
          return <ProjectCard key={key} project={project} />;
        })}
      </Flex>
    </Box>
  );
};

const AllProjects = () => {
  const { csvData: data, loading, error } = useProjectsData();

  // useEffect(() => {
  //   if (data) console.log(data);
  // }, [data]);

  return (
    <div>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <ProjectPageHeroText text={"ALL PORTFOLIO PROJECTS"} />
      <Text ta={"center"} lh="1.6em" fz="xl" fw="400" my={"xl"}>
        We're thrilled to showcase a handpicked selection of standout projects
        meticulously created by our graduates. From cutting-edge technologies to
        visionary designs, you'll gain invaluable insights into the caliber and
        potential of our graduates making real world impact with their skills.
      </Text>
      {/* <ProjectSection />
			<ProjectSection /> */}
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Flex align={"center"} justify={"center"}>
        {loading || !data ? <Loader /> : <ProjectSection projects={data} />}
      </Flex>
      {error && <>Unable to fetch data!</>}
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </div>
  );
};

export default AllProjects;
