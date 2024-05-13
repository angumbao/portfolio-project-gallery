import { Box, MantineProvider } from "@mantine/core";
import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const LandingLayout = () => {
  return (
    <MantineProvider>
      <Box>
        <NavBar />
        <Outlet />
        <Footer />
      </Box>
    </MantineProvider>
  );
};

export default LandingLayout;
