import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import pic from "../../assets/image5.png";
import Countdown from "../../components/Marketplace/Countdown";
import NftTabs from "../../components/Marketplace/NFT-Tabs";
import PriceCard from "../../components/Marketplace/PriceCard";
import Recommended from "../../components/Marketplace/Recommended";
import Statistics from "../../components/Marketplace/Statistics";
import UserCard from "../../components/user/UserCard";

const NftDetails = () => {
  const date = new Date(2023, 5, 12);

  return (
    <Box width={"82%"} mt="40" mx="auto">
      <Grid templateColumns={"40% 45%"} columnGap="16">
        <GridItem>
          <Image src={pic} objectFit={"contain"} borderRadius="lg" />
          <Statistics views={280} likes={2732} />
        </GridItem>
        <GridItem>
          <Heading>A Fasty Brush Flower Arts</Heading>
          <Heading fontSize={"lg"} mt="7">
            Description
          </Heading>
          <Text mt={"4"} w="90%">
            Lorem ipsum dolor sit amet adipiscing elit. Proin qual de suis
            erestopius iquee nean sollicituin lorem quis. Keep pace down the
            forest road, and pretend there's no echo. Go numb with exhaustion,
            heaving sharp, icy breath.
          </Text>
          <Flex mt={"7"} gap="5">
            <PriceCard />
            <Countdown date={date} />
            {/* Price and Countdown */}
          </Flex>
          <Flex mt={"8"} gap="5">
            <UserCard user="Damian Wayne" type="Creator" />
            <UserCard user="Connor Kent" type="Owner" />
          </Flex>
          <Flex mt={"8"} align="center" gap={"8"}>
            <Button fontSize={"xs"} width="40%">
              Place A Bid
            </Button>
            <Button fontSize={"xs"} width="40%" variant={"outline"}>
              Buy Now For {/* TODO: ADD Price */} ETH
            </Button>
          </Flex>
          <NftTabs />
        </GridItem>
      </Grid>
      <Box mt={"12"}>
        <Recommended headline="You might also like" showBuyNSell={false} />
      </Box>
    </Box>
  );
};

export default NftDetails;
