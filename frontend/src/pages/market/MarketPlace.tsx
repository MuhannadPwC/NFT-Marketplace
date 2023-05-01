import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Filters from "../../components/Marketplace/Filters";
import NftGrid from "../../components/Marketplace/NFT-Grid";
import { dummyNfts } from "../../helpers/dummyData";

const MarketPlace = () => {
  return (
    <Box w={"82%"} m="auto">
      <Stack gap={"3"} justify="center" align={"center"} mt="40">
        <Heading>Marketplace</Heading>
        <Text fontSize={"sm"}>
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
      </Stack>
      <Grid templateColumns={"20% 80%"} columnGap="12" mt={"8"}>
        <GridItem>
          <Filters />
        </GridItem>
        <GridItem>
          <NftGrid nfts={dummyNfts} cols={3} showSort={true} spaceTop={"12"} />
          <Flex justify={"center"} mt="8">
            <Button fontSize={"sm"}>Load More</Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MarketPlace;
