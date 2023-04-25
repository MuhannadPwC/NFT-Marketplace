import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import BidCard from "./Bid-Card";
import avtr from "../../assets/userpfp.svg";

const BidHome = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bg={colorMode == "light" ? "secondary.10" : "#160303"}
      p="48px 8px 34px 8px"
      width={"84%"}
      mx="auto"
      mt={"12"}
      borderRadius={"40px"}
      direction="column"
      align={"center"}
      justify="center"
      gap={"6"}
    >
      <Stack gap={"4"}>
        <Heading fontSize={"4xl"} textAlign="center">
          😍Live ART Bidding
        </Heading>
        <Text fontSize={"sm"} opacity="60%" textAlign={"center"}>
          Buy and sell NFTs from the world's top artistsBuy and sell NFTs from
        </Text>
      </Stack>
      <Flex gap={"6"} justify="center" width={"100%"}>
        <BidCard />
        <VStack w={"30%"} justify="center" align={"flex-start"} gap="2">
          <Text fontSize={"2xs"} bg={colorMode === "light" ? "white" : "Dark"} p="8px" borderRadius={"full"} >
            Remaining Time: 12H : 9M : 45S
          </Text>
          <Heading fontSize={"2xl"}>A Brush with Arts</Heading>
          <Text as={"b"} fontSize="xs">
            Mar 20 2020, 10:00pm
          </Text>
          <Text fontSize={"xs"}>
            Lorem Ipsum is simply dummy text of the printing and Lor Ipsum has
            been thtypesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown has been
            printer took.
          </Text>
          <Flex justify={"space-between"} w="100%">
            <Flex gap={"2"} align="center">
              <Avatar src={avtr} />
              <Stack>
                <Heading fontSize={"sm"}>Ahmad Mohammad</Heading>
                <Text fontSize={"2xs"}>Owner</Text>
              </Stack>
            </Flex>
            <Button variant={"outline"} fontSize="xs">
              Explore Work
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default BidHome;
