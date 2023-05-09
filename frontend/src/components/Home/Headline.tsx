import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom'

const Headline = () => {
  return (
    <Container h="500px">
      <Heading fontSize={"6xl"} marginTop="32">
        Discover the NFT for worldwide creators.
      </Heading>
      <Flex mt={5} direction="column" gap={"6"}>
        <Text fontSize="lg">
          Buy and sell NFTs from the world's top artists
        </Text>
        <Flex gap={"6"}>
          <Button as={NavLink} to="/auth" variant="solid" fontSize={"xs"} width="40">
            Become A Creator
          </Button>
          <Button as={NavLink} to="/market" variant={"outline"} fontSize={"xs"}>
            Explore NFT
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Headline;
