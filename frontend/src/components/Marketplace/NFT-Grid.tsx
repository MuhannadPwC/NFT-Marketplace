import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { categories } from "../../helpers/Global";
import NftCard from "./NFT-Card";

const NftGrid = ({ nfts, cols }: any) => {
  return (
    <>
      <Flex gap={"3"}>
        {categories.map((category) => (
          <Button
            variant={"outline"}
            size={"xs"}
            _hover={{ bg: "Main", color: "white" }}
          >
            {category}
          </Button>
        ))}
      </Flex>
      <SimpleGrid columns={cols} spacing="5" rowGap={"4"}>
        {nfts.map((nft: any) => (
          <NftCard nft={nft} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NftGrid;
