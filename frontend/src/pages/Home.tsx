import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import BidHome from "../components/Home/Bid-Home";
import Headline from "../components/Home/Headline";
import NftScroller from "../components/Home/NftScroller";
import TopCreator from "../components/Home/TopCreator";
import { collections, dummyNfts, topCreators } from "../helpers/dummyData";
import { NavLink } from "react-router-dom";
import NftGrid from "../components/Marketplace/NFT-Grid";
import CollectionCard from "../components/Home/CollectionCard";
import CreateNftBox from "../components/Home/CreateNftBox";

const Home = () => {
  return (
    <Box>
      {/* Start of NFT animated scroller */}
      <SimpleGrid columns={2} spacing="8" width={"82%"} m="auto">
        <Headline />
        <NftScroller />
      </SimpleGrid>
      {/* End NFT scroller */}

      {/* Start of Top Creators */}
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
      {/* End Top Creator */}

      {/* Live ART Bidding */}
      <BidHome />
      {/* End of Live */}

      {/* Home page Marketplace */}
      <Stack width={"82%"} mx="auto" mt={"16"} gap="4">
        <Flex width={"100%"} justify="space-between" align={"center"}>
          <Stack gap={"4"}>
            <Heading>Explore NFT Art</Heading>
            <Text>
              Buy and sell NFTs from the world's top artistsBuy and sell NFTs
              from
            </Text>
          </Stack>
          <Button as={NavLink} to="/market" variant={"outline"} fontSize="xs">
            Explore More
          </Button>
        </Flex>
        <NftGrid nfts={dummyNfts} cols={4} />
      </Stack>
      {/* End Marketplace */}

      {/* Start Popular Collections */}
      <Box width={"82%"} mx="auto" mt={"16"}>
        <Heading>Popular Collections</Heading>
        <Text mt={"4"} fontSize="sm">
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
        <SimpleGrid columns={3} spacing={6} mt="4">
          {collections.map(collection => (
            <CollectionCard collection={collection} />
          ))}
        </SimpleGrid>
      </Box>
      {/* End Popular Collections */}

      {/* Create NFT Box */}
      <CreateNftBox />
      {/* End */}
    </Box>
  );
};

export default Home;
