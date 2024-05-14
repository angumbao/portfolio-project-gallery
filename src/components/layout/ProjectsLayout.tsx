import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import ThemeProvider from "../ThemeProvider";

const ProjectsLayout = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default ProjectsLayout;
