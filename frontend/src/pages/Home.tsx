import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Headline from "../components/Home/Headline";
import NftScroller from "../components/Home/NftScroller";

const Home = () => {
  return (
    <Box width={"82%"} m="auto">
      <SimpleGrid columns={2} spacing="8">
        <Headline />
        <NftScroller />
      </SimpleGrid>
      <Box mt={"14"}>
        <Heading textAlign={"center"}>🔥 Top Creator</Heading>
        <Text textAlign={"center"} opacity="40%" mt={4} fontSize="sm">
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
        <Flex gap={12} mt="12" overflow={"scroll"}>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
        </Flex>
        <Flex gap={12} mt="6" overflow={"scroll"} direction="row-reverse">
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
          <Box bg={"Main"} height="50px" minW={"200px"}></Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
