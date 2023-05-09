import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Select, SimpleGrid } from "@chakra-ui/react";
import { activityNfts } from "../../helpers/dummyData";
import ActivityCard from "./ActivityCard";

const ActivityGrid = () => {
  return (
    <Box mt={"8"}>
      <Flex justify={"space-between"} align="center" mb={"5"}>
        <Select
          placeholder="Choose Event"
          fontSize={"xs"}
          width="44"
          size={"sm"}
          borderRadius="md"
        >
          <option value={"listing"}>Listing</option>
          <option value={"purchased"}>Purchased</option>
          <option value={"sales"}>Sales</option>
          <option value={"transfer"}>Transfer</option>
          <option value={"likes"}>Likes</option>
          <option value={"bids"}>Bids</option>
          <option value={"following"}>Followings</option>
        </Select>
        <InputGroup width={"80"} size="sm">
          <Input type={"search"} placeholder="Search" borderRadius={"md"} />
          <InputRightElement children={<Search2Icon  />}/>
        </InputGroup>
      </Flex>
      <SimpleGrid columns={3} spacing={5}>
        {activityNfts.map(nft => (
          <ActivityCard nft={nft} />
        ))}
      </SimpleGrid>
      <Flex justify={"center"} align="center" mt={"12"}>
        <Button fontSize={"sm"}>Load More</Button>
      </Flex>
    </Box>
  );
};

export default ActivityGrid;
