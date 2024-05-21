import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import ThemeProvider from "../ThemeProvider";
import { Box, Container } from "@mantine/core";

/**
 * TODO: Add search button
 * Will be able to search using project stack or cohort or project name
 */

const ProjectsLayout = () => {
  return (
    <ThemeProvider>
      <Box mih="calc(100vh - 112px)">
        <NavBar />
        <Container size={"lg"}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default ProjectsLayout;
