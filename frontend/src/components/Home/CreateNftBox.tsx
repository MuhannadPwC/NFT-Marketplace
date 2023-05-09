import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import smolImg1 from "../../assets/rectangle1.png";
import smolImg2 from "../../assets/rectangle2.png";
import longImg from "../../assets/rectangle3.png";

const CreateNftBox = () => {
  return (
    <Container
      maxW={"82%"}
      centerContent
      mt={"16"}
      h={"500px"}
      borderRadius="3xl"
      className="container-gradient"
    >
      <Grid
        templateColumns="45% 53%"
        width="84%"
        h={"100%"}
        columnGap="3"
        justifyContent="center"
      >
        <GridItem alignSelf={"center"}>
          <Heading lineHeight={"normal"}>
            Create your NFT's & Sell Your NFT at one place
          </Heading>
          <Text noOfLines={3} mt="4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </Text>
          <Button as={NavLink} to="/" fontSize={"xs"} mt="3">
            {/* TODO: ADD LINK */}
            Create your item
          </Button>
        </GridItem>
        <GridItem>
          <Flex h={"90%"} gap="5">
            <Image
              src={smolImg2}
              borderRadius={"xl"}
              alignSelf="end"
              boxSize={"28"}
              objectFit={"contain"}
              mb="8"
            />
            <Image
              src={smolImg1}
              borderRadius={"xl"}
              alignSelf="center"
              boxSize={"40"}
              objectFit={"contain"}
              mt="16"
            />
            <Image
              src={longImg}
              borderRadius={"xl"}
              boxSize="80"
              alignSelf={"center"}
              objectFit={"contain"}
              maxWidth="200px"
              mt={"28"}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CreateNftBox;
