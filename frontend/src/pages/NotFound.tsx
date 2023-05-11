import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack
      height={"300px"}
      mt="44"
      width={"82%"}
      mx="auto"
      gap={"4"}
      align="center"
    >
      <Heading>Something went wrong {":("}</Heading>
      <Text color={"red"} fontSize="lg">
        It seems that the page you are looking for was not found.
      </Text>
      <Text fontSize={"lg"} color="info">
        Go back to the home page and try again{" "}
        <Button as={NavLink} to="/" size={"sm"}>
          Home Page
        </Button>
      </Text>
    </Stack>
  );
};

export default NotFound;
