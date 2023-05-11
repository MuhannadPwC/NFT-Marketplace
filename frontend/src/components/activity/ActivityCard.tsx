import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";
import { ActivityCardProps } from "../../helpers/types/propsTypes";
import img from "../../assets/image4.png";
import { dateSubtraction } from "../../helpers/functions/helperFunctions";
import { NavLink } from "react-router-dom";

const ActivityCard = ({ nft }: ActivityCardProps) => {
  const today = new Date();

  return (
    <Card
      direction={"row"}
      bg="#F8F8F8"
      pl={"3"}
      h={"40"}
      align={"center"}
      _dark={{ bg: "#1D1D1D", _hover: { bg: "white", color: "Dark" } }}
      borderRadius={"lg"}
      overflow="hidden"
      _hover={{ bg: "white" }}
      as={NavLink}
      to="" /* TODO: ADD LINK */
    >
      <Image src={img} objectFit={"contain"} maxW={"40"} minW="24" />
      <CardBody>
        <Heading fontSize={"md"} pb="2">
          A Brush with Arts
        </Heading>
        <Text opacity={1} pb="1">
          From{" "}
          <Link as={NavLink} to="" color={"Main"}>
            {nft.from}
          </Link>
        </Text>
        {/* TODO: ADD LINK */}
        <Text opacity={1} pb="1">
          To{" "}
          <Link as={NavLink} to="" color={"Main"}>
            {nft.to}
          </Link>
        </Text>
        <Text opacity={1} pb="1">
          Price: {nft.price}
        </Text>
        <Text opacity={1} pb="1">
          QTY: {nft.quantity.toString()}
        </Text>
        <Text>{dateSubtraction(today, nft.datePosted)}</Text>
      </CardBody>
    </Card>
  );
};

export default ActivityCard;
