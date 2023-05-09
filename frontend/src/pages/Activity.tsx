import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import ActivityGrid from "../components/activity/ActivityGrid";
import { buyNsell } from "../helpers/Global";

const Activity = () => {
  return (
    <Box width={"82%"} m="auto">
      <Stack gap={"3"} justify="center" align={"center"} mt="40">
        <Heading>NFT Activity</Heading>
        <Text fontSize={"sm"}>{buyNsell}</Text>
      </Stack>
      <ActivityGrid />
    </Box>
  );
};

export default Activity;
