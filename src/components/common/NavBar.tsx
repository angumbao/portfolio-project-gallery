import {
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  Flex,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <div>
      <Box bg={"#012B56"}>
        <Container size="lg" h={70}>
          <Flex align={"center"} w="100%" h="100%" justify={"space-between"}>
            <Group h="100%">
              <Link to="/">ALX SE</Link>
            </Group>
            <Group h="100%" visibleFrom="sm">
              <Menu
                trigger="click-hover"
                closeOnClickOutside
                closeOnEscape
                closeOnItemClick
              >
                <Menu.Target>
                  <Button mx="lg" variant="transparent">
                    Portfolio Projects
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component="a" href="/projects">
                    All Projects
                  </Menu.Item>
                  <Menu.Item component="a" href="/projects/ecommerce-projects">
                    E-Commerce Projects
                  </Menu.Item>
                  <Menu.Item
                    component="a"
                    href="/projects/business-solution-projects"
                  >
                    E-Commerce Projects
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Link to="/faq">FAQ</Link>
            </Group>
            <Group h="100%" hiddenFrom="sm">
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
                hiddenFrom="sm"
              />
            </Group>
          </Flex>
        </Container>
      </Box>
      <Drawer offset={8} onClose={close} opened={opened}>
        <Container size="lg">
          <Group dir="column" align="center" gap={"lg"}>
            <Link to="/projects">All Projects</Link>
            <Link to="/projects/ecommerce-projects">E-Commerce Projects</Link>
            <Link to="/projects/business-solution-projects">
              Business Solution Projects
            </Link>
            <Link to="/faq">FAQ</Link>
          </Group>
        </Container>
      </Drawer>
    </div>
  );
};

export default NavBar;
