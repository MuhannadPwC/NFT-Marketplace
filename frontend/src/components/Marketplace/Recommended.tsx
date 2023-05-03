import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { recommended } from "../../helpers/dummyData";
import NftCard from "./NFT-Card";

const Recommended = ({ headline, showBuyNSell }: any) => {
  return (
    <Box>
      <Flex justify={"space-between"} align="center">
        <Stack gap={2}>
          <Heading>{headline}</Heading>
          {showBuyNSell && (
            <Text fontSize={"sm"}>
              Buy and sell NFTs from the world's top artistsBuy and sell NFTs
              from
            </Text>
          )}
        </Stack>
        <Flex gap={"3"}>
          <IconButton
            aria-label="prev"
            variant={"navigateicon"}
            icon={<ArrowBackIcon />}
          />
          <IconButton
            aria-label="prev"
            variant={"navigateicon"}
            icon={<ArrowForwardIcon />}
          />
        </Flex>
      </Flex>
      <SimpleGrid columns={4} spacing={6} mt="8">
        {recommended.map((item) => (
          <NftCard nft={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Recommended;
