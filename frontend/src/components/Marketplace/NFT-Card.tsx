import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import nftImage from "../../assets/image3.png";
import avtr from "../../assets/userpfp.svg";
import UserCard from "../user/UserCard";

const NftCard = ({ nft }: any) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <Card
      pt={"2"}
      pb="3"
      bg="#F8F8F8"
      _dark={{ bg: "#1D1D1D", _hover: { bg: "white", color: "Dark" } }}
      size="sm"
      borderRadius={"lg"}
      _hover={{ bg: "white" }}
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
    >
      <Container position={"relative"} centerContent>
        <Image
          src={nft?.image}
          fallbackSrc={nftImage}
          boxSize="2xs"
          borderRadius={"xl"}
        />
        {showButton && (
          <Button
            as={NavLink}
            to="/"
            position={"absolute"}
            left={"7"}
            bottom="5"
            width="80%"
            fontSize={"sm"}
          >
            Place a Bid
          </Button>
        )}
        {/* TODO: ADD LINK */}
      </Container>
      <CardBody>
        <Stack gap={"2"}>
          <Heading fontSize={"md"}>A Brush with Arts</Heading>
          <UserCard user={nft.creator} type="Creator" avtrSize="sm" />
          <Stack>
            <Text as={"b"} fontSize="xs">
              Current Bid:
            </Text>
            <Heading fontSize={"lg"}>{nft.bid} ETH</Heading>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default NftCard;
