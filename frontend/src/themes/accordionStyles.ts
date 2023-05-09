import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "#F8F8F8",
    _dark: {
      bg: "#1D1D1D"
    },
    border: 'none',
    borderRadius: "12px",
    padding: "12px 6px"
  },
})

export const accordionStyles = defineMultiStyleConfig({ baseStyle })