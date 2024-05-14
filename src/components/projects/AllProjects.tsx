/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, LoadingOverlay, Space, Text, Title } from "@mantine/core";
import ProjectPageHeroText from "./ProjectPageHeroText";
import { Carousel } from "@mantine/carousel";
import { useEffect } from "react";
import useProjectsData from "../../hooks/useProjectData";

const ProjectSection = (props: {
  title: string;
  description?: string;
  projects: {
    teamMembers: string[];
    title: string;
    technologies: string[];
    videoUrl: string;
  }[];
}) => {
  const { title, description, projects } = props;

  return (
    <Box>
      <Title order={3} my="lg">
        {title}
      </Title>
      {description && <Text>{description}</Text>}
      <Carousel>
        {projects.map((project, key) => {
          return <Carousel.Slide key={key}></Carousel.Slide>;
        })}
      </Carousel>
    </Box>
  );
};

const AllProjects = () => {
  const { csvData: data, loading, error } = useProjectsData();

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

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
      {loading ? <LoadingOverlay /> : <>Got data!</>}
      {error && <>Unable to fetch data!</>}
    </div>
  );
};

export default AllProjects;
