import {
  Box,
  Button,
  // Center,
  Container,
  Flex,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const LandingHeroBanner = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();

  return (
    <Box
      mih="80%"
      bg="blue.7"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <div
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
      </div> */}
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
        justify={"center"}
      >
        {/* <Text
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
        </Text> */}
        <AnimatedHeroText />
      </Flex>
      {/* <Space h="xl" />
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
      </Button> */}
      <Space h="xl" />
      <Space h="xl" />
      {/* <Space h="xl" />
      <Space h="xl" /> */}
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

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack justify="center">
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Box my="xl">
          <Title ta="center" fz="h1" c="blue.7">
            Experience Innovation, Expertise, and Excellence in Software
            Engineering
          </Title>
          <Text ta="center" size="lg" mt="md">
            Discover the Next Generation of Tech Talent Ready to Transform the
            Industry!
          </Text>
        </Box>
        <Space h="xl" />
        <VideoPlayer
          videoTitle="ALX learner testimonial"
          videoSrc="https://youtu.be/KbAWy_8l-Wo?si=48D8nIh9nUKEGY8R"
          autoPlay={true}
          width={"95%"}
          position="relative"
        />
        <Space h="xl" />
        <Space h="xl" />
        <Button
          ta="center"
          color="green.7"
          size="xl"
          m="auto"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Witness Greatness!
        </Button>
        <Space h="xl" />
        <Space h="xl" />
      </Stack>
    </Container>
  );
};

const Testimonials = () => {
  const learnerTestimonials = [
    {
      name: "Edward Junior Agyemang-Prempeh",
      testimonialText:
        "Prior to my entry into the ALX SE program, I had little to no understanding of how programming works even though I had taken a course on C back in the university. This changed a few months into the program as ALX's approach completely transformed how I approached self-learning. I now have a full grasp of software and there's little I cannot yet do. Thank you ALX. Thank you Fred Swaniker!",
    },
    {
      name: "Uchechukwu Samuel Ottah",
      testimonialText:
        "Before the program, I was struggling to understand many different concepts and landing proper fulltime jobs or even interviews. Towards the tail end of the program however, I have been getting many interview invitations, I landed a remote opportunity where I worked for about 3 months. I currently landed an even better higher paying role (onsite) as a backend developer. Thank you ALX, thank you Fred Swaniker, thank you Julien, thank you Maarten, thank you Danson, thank you Felix, Jude Iwuji, Kalkidan Betre, Obed and all my peers and PLD mates in cohort 7!!! Cheers to us!",
    },
    {
      name: "Nathaniel Osei",
      testimonialText:
        'All the learning platforms I came across on the internet "highway" during my search for good yet affordable Software Engineering program are nothing compared to the ALX SE program. I don\'t think I would have been able to pay for this knowledge I have gained from the program if the knowledge acquisition came with fees charged like similar platforms and institutions do.',
    },
    {
      name: "Joseph Ochieng Kamau",
      testimonialText:
        "In my pursuit of technical know-how, I found the ALX SE program. I came in a noob and fast-forward to today, I have completed the program with not only technical and soft skills, but also a richer, supportive network of friends and a sense of community. You cannot put a price on that, for sure.",
    },
    {
      name: "Edun Oluwadamilare",
      testimonialText:
        "This programme really helped me a lot. It help my confidence and improve my technical skills, it also helps me me work with different teams. Thank you alx_africa for this wonderful programme.",
    },
    {
      name: "Dawit Belete",
      testimonialText:
        "Thank you for creating this opportunity. I had zero experience in coding and now I can build fully functional web app on my own. This happened because of you ALX. Thank you so much!",
    },
    {
      name: "Yonas Berhanu Andualem",
      testimonialText:
        "ALX gave me a unique opportunity to develop my skills and become one of the finest software engineers. Through their comprehensive training programs and hands-on learning approach, I was able to acquire deep knowledge and expertise in various programming languages, tools, and technologies. Moreover, ALX also helped me develop essential soft skills, such as how to engage with peers and work effectively in teams. This not only improved my communication and collaboration abilities but also helped me become a more well-rounded and versatile professional. Overall, I am grateful for the invaluable learning experience and career development opportunities that ALX has provided me with. Their commitment to empowering individuals with the skills and knowledge needed to succeed in the tech industry is truly impressive, and I highly recommend their programs to anyone looking to take their career to the next level.",
    },
    {
      name: "Kalkidan Betre",
      testimonialText:
        "What an amazing program. It reassured my true passion for SE. The program is not all about solving problems through coding, but also about collaboration, friendship, networking, and fun! I am super glad I joined. It's worth every min.",
    },
    {
      name: "Millie Muteti",
      testimonialText:
        "I wholeheartedly recommend the Software Engineering Program offered by Alx to aspiring software engineers seeking a comprehensive and impactful learning experience. The program's exceptional curriculum, experienced faculty, industry collaboration, and supportive learning environment make it a top choice for anyone looking to excel in the field of software engineering.",
    },
    {
      name: "Abiodun Shittu",
      testimonialText:
        "Completing the 12 Month ALX Software Engineering Programme with a specialization in Back End Development has been a transformative journey. The hands-on experience, industry-relevant projects, and collaborative learning environment have equipped me with a robust skill set and deep understanding of backend technologies. This program's emphasis on problem-solving, code optimization, and teamwork has not only elevated my technical abilities but also honed my critical thinking and communication skills. The guidance of experienced mentors and exposure to real-world challenges have instilled in me the confidence to tackle complex backend development tasks. I am now well-prepared to contribute effectively to innovative software solutions and thrive in the ever-evolving tech landscape",
    },
  ];

  const theme = useMantineTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.blue[7],
        padding: "2em",
        width: "100%",
      }}
    >
      {/* <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" /> */}
      <Title c="green.6" ta={"center"} mb="xl">
        Our Learner's Testimonials
      </Title>
      <Space h="xl" />
      <Container>
        <Carousel
          withIndicators={false}
          h={{ sm: 300, md: 400 }}
          controlsOffset={0}
          slideGap={"md"}
          loop
          nextControlIcon={<IconChevronRight />}
          previousControlIcon={<IconChevronLeft />}
        >
          {learnerTestimonials.map(({ name, testimonialText }, idx) => {
            return (
              <Carousel.Slide key={idx}>
                <Flex
                  justify={"center"}
                  align={"center"}
                  direction={"column"}
                  w="100%"
                  h="100%"
                  // bg="blue.7"
                  ta="center"
                  p="xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <Text c="white" fz="h3" mb="xl">
                    {testimonialText}
                  </Text>
                  <Text c="green.4" fz="xl">
                    {name}
                  </Text>
                </Flex>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </div>
  );
};

const GalleryLandingPage = () => {
  return (
    <Box>
      <LandingHero />
      <LandingHeroBanner />
      <Testimonials />
    </Box>
  );
};

export default GalleryLandingPage;
