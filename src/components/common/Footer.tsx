import { Container, Text, useMantineTheme } from "@mantine/core";

const Footer = () => {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        width: "100%",
        height: "112px",
        backgroundColor: theme.colors.blue[7],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Text fz="h2" fw={1000} c="green.7">
          #DOHARDTHINGS
        </Text>
      </Container>
    </div>
  );
};

export default Footer;
