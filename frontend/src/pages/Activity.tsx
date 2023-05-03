import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import ActivityGrid from "../components/activity/ActivityGrid";

const Activity = () => {
  return (
    <Box width={"82%"} m="auto">
      <Stack gap={"3"} justify="center" align={"center"} mt="40">
        <Heading>NFT Activity</Heading>
        <Text fontSize={"sm"}>
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
      </Stack>
      <ActivityGrid />
    </Box>
  );
};

export default Activity;
