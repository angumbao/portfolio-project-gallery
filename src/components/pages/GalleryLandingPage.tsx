import { Box, Button, Flex, Space, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingHeroBanner = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();

  return (
    <Box
      mih="80%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Text
          pt="xl"
          fz={{ base: "4em", md: "13em" }}
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
            width: isMobile ? "14em" : "22em",
            height: isMobile ? "4em" : "9em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "9em",
            maxWidth: "22em",
          }}
        >
          <Text
            c="yellow.6"
            fz={{ base: "2em", md: "5em" }}
            fw={700}
            ta="center"
            fs="italic"
          >
            ALX SE
          </Text>
        </motion.div>
      </div>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Flex
        w="100%"
        m="auto"
        direction={{
          base: "column",
          sm: "column",
          md: "row",
        }}
        align={"center"}
        justify={isMobile ? "space-around" : "space-between"}
      >
        <Text
          w={isMobile ? "90%" : "60%"}
          fz={{ base: "md", md: "xl" }}
          c="white"
          fw={isMobile ? 400 : 600}
          lh="1.8em"
        >
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
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Button
        ta="center"
        color="green.7"
        size="xl"
        onClick={() => {
          navigate("/projects");
        }}
      >
        View All Portfolio Projects
      </Button>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  );
};

const AnimatedHeroText = () => {
  const phrases = useMemo(
    () => ["4k+ PROJECTS BUILT", "SINCE 2022", "ACROSS 14 COHORTS"],
    []
  );
  const [phrase, setPhrase] = useState(phrases[0]);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const interval = setInterval(() => {
      // set phrase based on order of phrases
      const currentIndex = phrases.indexOf(phrase);
      const nextIndex =
        currentIndex === phrases.length - 1 ? 0 : currentIndex + 1;
      setPhrase(phrases[nextIndex]);
    }, 2300);

    return () => clearInterval(interval);
  }, [phrase, phrases]);

  return (
    <motion.div
      style={{
        maxWidth: "27%",
        height: "24em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.p
        key={phrase}
        initial={{ opacity: 0.2, scale: 0.4, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0.2, scale: 0.8, y: -40 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          color: theme.colors.green[6],
          fontSize: isMobile ? "3.5em" : "5em",
          fontWeight: 700,
          textAlign: "center",
          lineHeight: "1.4em",
          padding: "1em",
        }}
      >
        {phrase}
      </motion.p>
    </motion.div>
  );
};

const GalleryLandingPage = () => {
  return (
    <Box>
      <LandingHeroBanner />
    </Box>
  );
};

export default GalleryLandingPage;
