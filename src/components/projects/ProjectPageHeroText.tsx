import { Text } from "@mantine/core";

const ProjectPageHeroText = (props: { text: string }) => {
  const { text } = props;
  return (
    <Text fz="h1" c="blue.7" fw={700} my="lg" ta={"center"}>
      {text}
    </Text>
  );
};

export default ProjectPageHeroText;
