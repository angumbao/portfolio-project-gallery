/* eslint-disable @typescript-eslint/no-explicit-any */
import { MantineProvider, createTheme } from "@mantine/core";

const burntOrange: any = [
  "#d3dee7",
  "#d7e1e9",
  "#dce5ec",
  "#e0e8ee",
  "#e5ebf1",
  "#e9eff3",
  "#edf2f5",
  "#f2f5f8",
  "#f6f8fa",
  "#fbfcfd",
  "#ffffff",
].reverse();

export const slate: any = [
  "#F8FAFC",
  "#F2F5F9",
  "#E2E8F0",
  "#CBD5E1",
  "#94A3B8",
  "#64748B",
  "#475569",
  "#334155",
  "#1E293B",
  "#0F172A",
  "#020617",
];

export const alxBlue: any = [
  "#3C5165",
  "#324A60",
  "#29435D",
  "#1F3D5A",
  "#153759",
  "#0C3258",
  "#022E59",
  "#0A2948",
  "#0E253B",
  "#112131",
];

export const alxGreen: any = [
  "#D2E4DB",
  "#B5D9C8",
  "#98D2B7",
  "#78D1A7",
  "#55D69A",
  "#2CE38E",
  "#05F283",
  "#1AC475",
  "#27A168",
  "#2E865D",
];

const alxYellow: any = [
  "#F9F8F4",
  "#ECE7D4",
  "#E5DBB2",
  "#E4D38E",
  "#EBD066",
  "#FBD437",
  "#E4C030",
  "#C8AA30",
  "#A69139",
  "#8C7C3D",
];

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  const getRootElement = () =>
    typeof window === "undefined" ? undefined : document.body;

  const theme = createTheme({
    fontFamily: "Poppins, sans-serif",
    primaryShade: 6,
    colors: {
      dark: slate,
      burntOrange: burntOrange,
      slate: slate,
      blue: alxBlue,
      green: alxGreen,
      yellow: alxYellow,
    },
    primaryColor: "slate",
    lineHeights: {
      xs: "1.4",
      sm: "1.4",
      md: "1.4",
      lg: "1.4",
      xl: "1.4",
    },
    other: {
      secondaryFontFamily: "Inter, sans-serif",
    },
  });

  return (
    <MantineProvider
      defaultColorScheme="light"
      forceColorScheme="light"
      cssVariablesSelector=":not(.sidebar):not(.landing-layout)"
      getRootElement={getRootElement}
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
}
