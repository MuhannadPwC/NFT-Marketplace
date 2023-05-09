import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import img from "../../assets/image3.png";

const BidCard = () => {
  return (
    <Card
      pl={"2"}
      bg="#F8F8F8"
      _dark={{ bg: "#1D1D1D", _hover: { bg: "white", color: "Dark" } }}
      size="sm"
      borderRadius={"lg"}
      direction="row"
    >
      <Image src={img} objectFit={"contain"} width="10" borderRadius={"full"} />
      <CardBody>
        <Stack>
          <Flex justify={"space-between"} align="center">
            <Heading fontSize={"xs"}>Mason Woodeenry</Heading>
            <Heading fontSize={"xs"}>4.98 ETH</Heading>
          </Flex>
          <Flex justify={"space-between"} align="center">
            <Flex gap={"2"}>
              <Text fontSize={"2xs"}>8 hours ago</Text>
              <Text opacity={1} fontSize={"2xs"}>
                From:
                <Link as={NavLink} to="" color={"Main"}>
                  @{/* TODO: ADD Username and ADD LINK */}Darius
                </Link>
              </Text>
              <Text opacity={1} fontSize={"2xs"}>
                To:{" "}
                <Link as={NavLink} to="" color={"Main"}>
                  @{/* TODO: ADD Username and Link */}tsht20
                </Link>
              </Text>
            </Flex>
            <Text fontSize={"2xs"} opacity="1">
              = $12.245
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BidCard;
