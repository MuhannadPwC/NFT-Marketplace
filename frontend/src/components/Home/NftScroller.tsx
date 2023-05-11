import {
  Box,
  ChakraComponent,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import image from "../../assets/image.png";

const NftScroller = () => {
  const { colorMode } = useColorMode();
  const firstColumn = useRef(null);
  const secondColumn = useRef(null);
  const lastColumn = useRef(null);
  let index = true;

  setInterval(() => {
    firstColumn.current.scroll({
      top: index ? 9000 : 0,
      left: 0,
      behavior: "smooth",
    });
    index = !index;
  }, 3000);

  setInterval(() => {
    secondColumn.current.scroll({
      top: index ? 9000 : 0,
      left: 0,
      behavior: "smooth",
    });
    index = !index;
  }, 3000);

  setInterval(() => {
    lastColumn.current.scroll({
      top: index ? 9000 : 0,
      left: 0,
      behavior: "smooth",
    });
    index = !index;
  }, 3000);
  
  return (
    <Box
      h={"600px"}
      position="relative"
      className={
        colorMode === "light"
          ? "gradient-scroller-light"
          : "gradient-scroller-dark"
      }
    >
      <Grid h={"100%"} templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem h={"100%"} overflow={"scroll"} ref={firstColumn}>
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
        </GridItem>
        <GridItem h={"100%"} overflow={"scroll"} pt={"10"} ref={secondColumn}>
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
        </GridItem>
        <GridItem h={"100%"} overflow={"scroll"} pt={"5"} ref={lastColumn}>
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default NftScroller;
