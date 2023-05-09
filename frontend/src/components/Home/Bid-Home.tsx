import {
  Avatar,
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
import { NavLink } from "react-router-dom";
import { buyNsell } from "../../helpers/Global";

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
        <Text fontSize={"sm"} textAlign={"center"}>
          {buyNsell}
        </Text>
      </Stack>
      <Flex gap={"6"} justify="center" width={"100%"}>
        <BidCard />
        <VStack w={"30%"} justify="center" align={"flex-start"} gap="2">
          <Text
            fontSize={"2xs"}
            bg={colorMode === "light" ? "white" : "Dark"}
            p="8px"
            borderRadius={"full"}
          >
            Remaining Time: 12H : 9M : 45S
          </Text>
          <Heading fontSize={"2xl"}>A Brush with Arts</Heading>
          <Text as={"b"} fontSize="xs">
            Mar 20 2020, 10:00pm
          </Text>
          <Text>
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
            <Button as={NavLink} to="/" variant={"outline"} fontSize="xs">
              {" "}
              {/* TODO: ADD LINK */}
              Explore Work
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default BidHome;
