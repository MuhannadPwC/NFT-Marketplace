import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { accordionStyles } from "./accordionStyles";
import { Button } from "./buttonStyles";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    Main: "#2571EA",
    Kiss: "#F4A7A5",
    Dark: "#060707",
    primary: {
      10: "#E9F1FD",
      20: "#D3E3FB",
      30: "#BED4F9",
      40: "#A8C6F7",
      50: "#92B8F4",
      60: "#7CAAF2",
      70: "#669CF0",
      80: "#518DEE",
      90: "#0A41CC",
    },
    secondary: {
      10: "#FEF6F6",
      20: "#FDEDED",
      30: "#FCE5E4",
      40: "#FBDCDB",
      50: "#F9D3D2",
      60: "#F8CAC9",
      70: "#F7C1C0",
      80: "#F6B9B7",
      90: "#F5B0AE",
    },
    blackout: {
      10: "#E6E6E6",
      20: "#CDCDCD",
      30: "#B4B5B5",
      40: "#9B9C9C",
      50: "#838383",
      60: "#6A6A6A",
      70: "#515151",
      80: "#383939",
      90: "#1F2020",
    },
    positive: "#3ABA6D",
    info: "#3EAEFF",
    warning: "#FFC75B",
    negative: "#FF5B5B",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("Dark", "#FFFFFF")(props),
        bg: mode("#FFFFFF", "#060707")(props),
      },
      p: {
        opacity: "60%",
        fontSize: "xs"
      },
    }),
  },
  components: {
    Button,
    Accordion: accordionStyles,
  },
});
