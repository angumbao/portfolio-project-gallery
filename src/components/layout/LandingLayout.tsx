import { Box } from "@mantine/core";
import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import ThemeProvider from "../ThemeProvider";

const LandingLayout = () => {
  return (
    <ThemeProvider>
      <Box mih="calc(100vh - 112px)">
        <NavBar />

        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default LandingLayout;
