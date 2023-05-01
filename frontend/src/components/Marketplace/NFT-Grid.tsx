import { Button, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import { categories } from "../../helpers/Global";
import NftCard from "./NFT-Card";

const NftGrid = ({ nfts, cols, showSort = false, spaceTop = "0" }: any) => {
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
        {showSort && (
          <Select size={"sm"} width={"40"} fontSize="xs" borderRadius={"lg"}>
            <option value={"Trending"}>Trending</option>
            <option value={"Recent"}>Recently Listed</option>
            <option value={"Ascending"}>Price: low to high</option>
            <option value={"Descending"}>Price: high to low</option>
            <option value={"Ending"}>Ending soon</option>
          </Select>
        )}
      </Flex>
      <SimpleGrid columns={cols} spacing="5" rowGap={"4"} mt={spaceTop}>
        {nfts.map((nft: any) => (
          <NftCard nft={nft} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NftGrid;
