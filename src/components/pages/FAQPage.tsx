import { Accordion, Box, Container, List, Space, Text } from "@mantine/core";
import ProjectPageHeroText from "../projects/ProjectPageHeroText";

const FAQPage = () => {
  const faqData = [
    {
      value: "build-portfolio-project",
      controlText: "How long does it take to build a portfolio project?",
      panelText:
        "ALX SE Learners have a month to conceptualise and build their portfolio project. During the month, learners have 1 week to pitch their project and 3 weeks to build the project.",
    },
    {
      value: "rate-projects",
      controlText: "What criteria is used to rate the projects?",
      panelText: (
        <Box>
          <Text fz="sm" mb="sm">
            There are four main aspects of a great portfolio project:
          </Text>
          <List fz="sm">
            <List.Item>
              The Presentation: Clear project description, Github, Google slides
              & Youtube Links provided, Clear improvements and next steps.
            </List.Item>
            <List.Item>
              Video Demo of the project: A video not longer than 3 min
              showcasing the features of the project.
            </List.Item>
            Quality of presentation and project: Clear and readable code base,
            explores new technologies and has a test plan.
            <List.Item>
              Good use of version control: git commit style is professional with
              a clear README file providing clear setup instructions.
            </List.Item>
          </List>
        </Box>
      ),
    },
    {
      value: "review-portfolio-projects",
      controlText: "How are portfolio projects reviewed?",
      panelText:
        "All Portfolio Projects are reviewed by our team of Technical Mentors during the Portfolio Project Review Period. During this time, learners are prompted to book a 15 minutes slot with our Technical Mentors to have their projects reviewed by our team.",
    },
    {
      value: "not-reviewed",
      controlText: "What happens if a project is not reviewed?",
      panelText:
        "In the unlikely event that a learner misses out on having their portfolio project reviewed, they do not graduate HOWEVER, their journey does not come to an end. They are encouraged to defer into an active cohort and have another chance to have thier project reviewed to become an #ALXSEGrad",
    },
    {
      value: "graduation-criteria",
      controlText: "What is the ALX SE graduation criteria?",
      panelText: (
        <List fz="sm">
          <List.Item>A score of 70% in Month #2 of specialisation</List.Item>
          <List.Item>
            A Portfolio Project that has been reviewed and scored by our
            Technical Mentors
          </List.Item>
        </List>
      ),
    },
    {
      value: "not-meet-graduation-criteria",
      controlText:
        "What happens if a learner does not meet the graduation criteria?",
      panelText:
        "They do not graduate HOWEVER, their journey does not come to an end. They are encouraged to defer into an active cohort and have another chance to become an #ALXSEGrad with our next available cohort.",
    },
  ];

  return (
    <Container>
      <Space h="xl" />
      <ProjectPageHeroText text={"Frequently Asked Questions"} />
      <Space h="xl" />
      <Accordion>
        {faqData.map((faq, idx) => {
          return (
            <Accordion.Item key={idx} value={faq.value}>
              <Accordion.Control>{faq.controlText}</Accordion.Control>

              <Accordion.Panel fz="sm">{faq.panelText}</Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default FAQPage;
