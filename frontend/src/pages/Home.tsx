import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Icon,
  Text,
} from "@chakra-ui/react";
import BidHome from "../components/Home/Bid-Home";
import Headline from "../components/Home/Headline";
import NftScroller from "../components/Home/NftScroller";
import TopCreator from "../components/Home/TopCreator";
import {
  collections,
  collectors,
  dummyNfts,
  recommended,
  topCreators,
} from "../helpers/dummyData";
import { NavLink } from "react-router-dom";
import NftGrid from "../components/Marketplace/NFT-Grid";
import CollectionCard from "../components/Home/CollectionCard";
import CreateNftBox from "../components/Home/CreateNftBox";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { FaWallet } from "react-icons/fa";
import CollectorCard from "../components/Home/CollectorCard";
import NftCard from "../components/Marketplace/NFT-Card";
import { HiCollection } from "react-icons/hi";
import { AiFillPicture } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import Recommended from "../components/Marketplace/Recommended";
import { buyNsell } from "../helpers/Global";

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
          {buyNsell}
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
          {buyNsell}
        </Text>
        <SimpleGrid columns={3} spacing={6} mt="4">
          {collections.map((collection) => (
            <CollectionCard collection={collection} />
          ))}
        </SimpleGrid>
      </Box>
      {/* End Popular Collections */}

      {/* Create NFT Box */}
      <CreateNftBox />
      {/* End */}

      {/* Start top collections */}
      <Box width={"82%"} mt="16" mx={"auto"}>
        <Flex justify={"space-between"} align="center">
          <Stack gap={2}>
            <Heading>Top Collections in 1 Day</Heading>
            <Text fontSize={"sm"}>
              Buy and sell NFTs from the world's top artistsBuy and sell NFTs
              from
            </Text>
          </Stack>
          <Flex gap={"3"}>
            <IconButton
              aria-label="prev"
              variant={"navigateicon"}
              icon={<ArrowBackIcon />}
            />
            <IconButton
              aria-label="next"
              variant={"navigateicon"}
              icon={<ArrowForwardIcon />}
            />
          </Flex>
        </Flex>
        <Flex mt={"5"} gap="4">
          {collectors.map((collector) => (
            <CollectorCard collector={collector} />
          ))}
        </Flex>
      </Box>
      {/* End top collections */}

      {/* Recommended Art */}
      <Box bg={"rgba(37, 113, 234, 0.1)"} width="100%" mt={"8"} py="24">
        <Box width={"82%"} m="auto">
          <Recommended headline="Recommended Art" showBuyNSell={true} />
        </Box>
      </Box>
      {/* End recommended art */}

      {/* Ending */}
      <Container maxW={"82%"} mt="14" mb={"24"}>
        <Heading textAlign={"center"}>Create and Sell Your NFTs</Heading>
        <Text fontSize={"sm"} mt="4" textAlign={"center"}>
          {buyNsell}
        </Text>
        <SimpleGrid columns={4} spacing={"8"} mt="14">
          <Stack gap={"3"}>
            <Circle bg={"rgba(37, 113, 234, 0.1)"} size="20">
              <Icon as={FaWallet} color="Main" boxSize={"7"} />
            </Circle>
            <Heading fontSize={"md"}>Set Up your Wallet</Heading>
            <Text fontSize={"sm"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has Ipsum.
            </Text>
          </Stack>
          <Stack gap={"3"}>
            <Circle bg={"rgba(37, 113, 234, 0.1)"} size="20">
              <Icon as={HiCollection} color="Main" boxSize={"9"} />
            </Circle>
            <Heading fontSize={"md"}>Set Up your Wallet</Heading>
            <Text fontSize={"sm"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has Ipsum.
            </Text>
          </Stack>
          <Stack gap={"3"}>
            <Circle bg={"rgba(37, 113, 234, 0.1)"} size="20">
              <Icon as={AiFillPicture} color="Main" boxSize={"9"} />
            </Circle>
            <Heading fontSize={"md"}>Set Up your Wallet</Heading>
            <Text fontSize={"sm"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has Ipsum.
            </Text>
          </Stack>
          <Stack gap={"3"}>
            <Circle bg={"rgba(37, 113, 234, 0.1)"} size="20">
              <Icon as={BsBookmarkFill} color="Main" boxSize={"7"} />
            </Circle>
            <Heading fontSize={"md"}>Set Up your Wallet</Heading>
            <Text fontSize={"sm"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has Ipsum.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* Landing Page Over */}
    </Box>
  );
};

export default Home;
