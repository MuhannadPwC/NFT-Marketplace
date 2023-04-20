import { Box, Container, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import image from "../../assets/image.png";

const NftScroller = () => {

  return (
    <Box h={"600px"} className="gradient-scroller">
      <Grid h={"100%"} templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem h={"100%"} overflow={"scroll"}>
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
        </GridItem>
        <GridItem h={"100%"} overflow={"scroll"} pt={"10"}>
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
          <Image src={image} h={"250px"} mb={4} borderRadius="3xl" />
        </GridItem>
        <GridItem h={"100%"} overflow={"scroll"} pt={"5"}>
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
