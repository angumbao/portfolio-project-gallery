import { Space, Text } from "@mantine/core";
import ProjectPageHeroText from "../projects/ProjectPageHeroText";

const TemplateProjectPage = (props: {
  heroText: string;
  heroSubtitleText?: string;
}) => {
  const { heroText, heroSubtitleText } = props;
  return (
    <div>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <ProjectPageHeroText text={heroText} />
      {heroSubtitleText && (
        <Text ta={"center"} lh="1.6em" fz="xl" fw="400" my={"xl"}>
          {heroSubtitleText}
        </Text>
      )}
    </div>
  );
};

export default TemplateProjectPage;
