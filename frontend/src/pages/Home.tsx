import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import BidHome from "../components/Home/Bid-Home";
import Headline from "../components/Home/Headline";
import NftScroller from "../components/Home/NftScroller";
import TopCreator from "../components/Home/TopCreator";
import { topCreators } from "../helpers/DummyData";

const Home = () => {
  return (
    <Box>
      <SimpleGrid columns={2} spacing="8" width={"82%"} m="auto">
        <Headline />
        <NftScroller />
      </SimpleGrid>
      <Box mt={"14"}>
        <Heading textAlign={"center"}>🔥 Top Creator</Heading>
        <Text textAlign={"center"} opacity="40%" mt={4} fontSize="sm">
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
        <Flex gap={12} mt="12" overflow={"scroll"}>
          {topCreators.map((user) => (
            <TopCreator user={user} />
          ))}
        </Flex>
        <Flex gap={12} mt="12" overflow={"scroll"} direction="row-reverse">
          {topCreators.map((user) => (
            <TopCreator user={user} />
          ))}
        </Flex>
      </Box>
      <BidHome />
    </Box>
  );
};

export default Home;
