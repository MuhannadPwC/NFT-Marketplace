import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    _pressed: {
      bg: "Main",
    },
    _hover: {
      bg: "pink",
    },
    fontSize: "xs",
  },
  sizes: {
    sm: {
      width: "114px",
      height: "32px",
      padding: "4px 12px",
    },
    md: {
      width: "122px",
      height: "48px",
      padding: "12px 16px",
    },
    lg: {
      width: "138px",
      height: "56px",
      padding: "16px 24px",
    },
  },
  variants: {
    outline: {
      border: "1px solid #DCDEE6",
      bg: "white",
      _hover: {
        bg: "Kiss",
        color: "white",
      },
      _dark: {
        bg: "Dark",
        _hover: {
          bg: "Kiss",
          color: "white",
        },
      },
    },
    solid: {
      bg: "Main",
      color: "#FFFFFF",
      _hover: {
        bg: "Kiss",
      },
    },
    icon: {
      width: "80px",
      height: "80px",
      clipPath: "circle(35% at 50% 50%)",
      bg: "#1D1D1D",
      _hover: {
        bg: "#1D1D1D",
      },
    },
  },
  defaultProps: {},
});
