import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    _pressed: {
      bg: "Main",
    },
    _hover: {
      bg: "pink",
    },
  },
  sizes: {
    sm: {
      width: "114px",
      height: "32px",
      padding: "4px 12px 4px 12px",
    },
    md: {
      width: "122px",
      height: "48px",
      padding: "12px 16px 12px 16px",
    },
    lg: {
      width: "138px",
      height: "56px",
      padding: "16px 24px 16px 24px",
    },
  },
  variants: {
    outline: {
      border: "1px solid #DCDEE6",
      _hover: {
        bg: "Kiss",
      },
    },
    solid: {
      bg: "Main",
      color: "#FFFFFF",
      _hover: {
        bg: "Kiss",
      },
    },
  },
  defaultProps: {},
});
