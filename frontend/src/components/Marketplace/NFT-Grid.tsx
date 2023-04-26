import { Button, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { dummyNfts } from "../../helpers/dummyData";
import { categories } from "../../helpers/Global";
import NftCard from "./NFT-Card";

const NftGrid = ({ Nfts }: any) => {
  return (
    <>
      <Flex gap={"3"}>
        {categories.map((category) => (
          <Button variant={"outline"} size={"xs"} _hover={{ bg: "Main", color: "white" }}>
            {category}
          </Button>
        ))}
      </Flex>
      <SimpleGrid columns={4} spacing="5" rowGap={"4"}>
        {dummyNfts.map((nft) => (
          <GridItem>
            <NftCard nft={nft} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default NftGrid;
