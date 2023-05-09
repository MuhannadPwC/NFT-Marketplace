import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import collectorPfp from "../../assets/collector.png";

const CollectorCard = ({ collector }: any) => {

  return (
    <Card
      bg={"#F8F8F8"}
      p="14px 14px 0px 14px"
      borderRadius={"2xl"}
      _dark={{
        bg: "#1D1D1D",
        _hover: {
          bgGradient:
            "linear(to-r, Main 0.53%, #7185D0 29.11%, #F5A8A4 78.24%)",
        },
      }}
      _hover={{
        bgGradient: "linear(to-r, Main 0.53%, #7185D0 29.11%, #F5A8A4 78.24%)",
        color: "white"
      }}
    >
      <Image src={collectorPfp} borderRadius="2xl" objectFit={"contain"} />
      <CardBody>
        <Flex justify={"space-between"}>
          <Stack>
            <Heading
              fontSize={"sm"}
              bgGradient="linear(to-r, Main 0.53%, #7185D0 29.11%, #F5A8A4 78.24%)" /* TODO: REMOVE GRADIENT ON HOVER */
              bgClip={"text"}
            >
              @{collector.username}
            </Heading>
            <Text>Total items: {collector.items}</Text>
          </Stack>
          <Stack>
            <Text opacity={1}>Current Price</Text>
            <Heading fontSize={"sm"}>{collector.price} ETH</Heading>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CollectorCard;
