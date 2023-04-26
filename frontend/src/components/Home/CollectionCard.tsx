import { Avatar, Card, CardBody, CardHeader, Flex, GridItem, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import avtr from "../../assets/userpfp.svg"
import collImg1 from "../../assets/collection-imgs/collection1.png"
import collImg2 from "../../assets/collection-imgs/collection2.png"
import collImg3 from "../../assets/collection-imgs/collection3.png"

const CollectionCard = ({ collection }: any) => {
  return (
    <Card
      pt={"2"}
      pb="3"
      bg="#F8F8F8"
      _dark={{ bg: "#1D1D1D", _hover: { bg: "white", color: "Dark" } }}
      size="sm"
      borderRadius={"lg"}
    >
      <CardHeader>
        <Flex gap={"3"} align="center">
          <Avatar src={avtr} borderRadius={"xl"} />
          <Stack>
            <Heading fontSize={"lg"}>{collection.name}</Heading>
            <Text opacity={1} fontSize="2xs">Created by <b>{collection.creator}</b></Text>
          </Stack>
        </Flex>
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={2} spacing={3}>
          <Image src={collImg1} borderRadius="xl" />
          <Image src={collImg2} borderRadius="xl" />
          <GridItem colSpan={2}>
            <Image src={collImg3} borderRadius="xl" />
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default CollectionCard;
