import { Box, Flex, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

const LandingHeroBanner = () => {
  const theme = useMantineTheme();

  return (
    <Box mih="60vh" bg="blue.7">
      <div
        style={{
          position: "relative",
        }}
      >
        <Text
          pt="xl"
          fz="13em"
          fw={700}
          fs="italic"
          c={"green.5"}
          style={{
            textShadow: `10px 10px 2px ${theme.colors.green[9]}`,
          }}
          ta="center"
        >
          PORTFOLIO SHOWCASE
        </Text>
        <motion.div
          animate={{
            background: theme.colors.blue[7],
            paddingTop: "1em",
            paddingBottom: "1em",
            paddingLeft: "2em",
            paddingRight: "2em",
            width: "22em",
            height: "9em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
          }}
          style={{
            maxHeight: "9em",
            maxWidth: "22em",
          }}
        >
          <Text c="yellow.6" fz="5em" fw={700} ta="center" fs="italic">
            ALX SE
          </Text>
        </motion.div>
      </div>
      <Flex
        maw="52%"
        m="auto"
        style={{
          outline: "1px solid yellow",
        }}
      >
        <Text w="60%" fz="xl" c="white" fw={600} lh="1.8em">
          As part of our graduation criteria, ALX Software Engineering Learners
          undertake the challenge of crafting portfolio projects that epitomise
          their capabilities and potential.
          <br />
          <br />
          These portfolio projects are more than just showcases; they're
          demonstrations of real-world skills in action and a testament of our
          learners expertise, creativity, and dedication to excellence.
          <br />
          <br />
          Discover the next generation of leaders shaping the future.
        </Text>
        <AnimatedHeroText />
      </Flex>
    </Box>
  );
};

const AnimatedHeroText = () => {
  return <motion.div></motion.div>;
};

const GalleryLandingPage = () => {
  return (
    <>
      <LandingHeroBanner />
    </>
  );
};

export default GalleryLandingPage;
