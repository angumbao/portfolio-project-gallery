import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const ProjectsLayout = () => {
  return (
    <MantineProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </MantineProvider>
  );
};

export default ProjectsLayout;
