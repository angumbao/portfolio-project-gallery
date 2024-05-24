import {
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  Flex,
  Box,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <div>
      <Box
        bg={"white"}
        style={{
          borderBottom: `1px solid ${theme.colors.slate[3]}`,
        }}
      >
        <Container size="lg" h={{ sm: 90, md: 70 }}>
          <Flex align={"center"} w="100%" h="100%" justify={"space-between"}>
            <Group h="100%">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Text fz="2em" fw={900} c="green.7" td="none">
                  ALX SE
                </Text>
              </Link>
            </Group>
            <Group h="100%" visibleFrom="sm">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Text c="slate.7" fz="lg" fw={700}>
                  Home
                </Text>
              </Link>
              <Menu
                trigger="click-hover"
                closeOnClickOutside
                closeOnEscape
                closeOnItemClick
              >
                <Menu.Target>
                  <Button mx="lg" variant="transparent" c="slate.7" fz="lg">
                    Portfolio Projects
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component="a" href="/projects">
                    All Projects
                  </Menu.Item>
                  <Menu.Item component="a" href="/projects/e-commerce">
                    E-Commerce Projects
                  </Menu.Item>
                  <Menu.Item component="a" href="/projects/business-solution">
                    Business Solution Projects
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Link to="/faq" style={{ textDecoration: "none" }}>
                <Text c="slate.7" fz="lg" fw={700}>
                  FAQ
                </Text>
              </Link>
            </Group>
            <Group h="100%" hiddenFrom="sm">
              <Burger
                color="white"
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
          <Stack gap={"lg"}>
            <Link
              to="/projects"
              style={{
                textDecoration: "none",
              }}
            >
              <Text fz="h2" c="slate.7" fw={700}>
                All Projects
              </Text>
            </Link>
            <Link
              to="/projects/e-commerce"
              style={{
                textDecoration: "none",
              }}
            >
              <Text fz="h2" c="slate.7" fw={700}>
                E-Commerce Projects
              </Text>
            </Link>
            <Link
              to="/projects/business-solution"
              style={{
                textDecoration: "none",
              }}
            >
              <Text fz="h2" c="slate.7" fw={700}>
                Business Solution Projects
              </Text>
            </Link>
            <Link
              to="/faq"
              style={{
                textDecoration: "none",
              }}
            >
              <Text fz="h2" c="slate.7" fw={700}>
                FAQ
              </Text>
            </Link>
          </Stack>
        </Container>
      </Drawer>
    </div>
  );
};

export default NavBar;
