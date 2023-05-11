import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import Login from "../../components/user/AuthFroms/Login";
import Signup from "../../components/user/AuthFroms/Signup";
import { backToTop } from "../../helpers/functions/helperFunctions";

const Auth = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState<boolean>(location.state);

  return (
    <Flex justify={"center"} align="center" mt={"40"}>
      <Stack
        gap={"2"}
        bg={"white"}
        borderRadius="xl"
        py="12"
        px={"6"}
        align={"center"}
        w="500px"
        minW={"350px"}
        boxShadow="10px 10px 100px rgba(206, 206, 206, 0.25)"
        _dark={{
          bg: "#1D1D1D",
          boxShadow: "12px 12px 100px rgba(12, 12, 12, 0.25)",
        }}
      >
        <Heading>
          Sign {isSignUp ? "Up" : "In"} to{" "}
          <Heading
            as={"b"}
            bgGradient="linear(to-r, Main 0.53%, #7185D0 29.11%, #F5A8A4 78.24%)"
            bgClip={"text"}
          >
            Larcible
          </Heading>
        </Heading>
        <Text fontSize={"sm"} opacity="0.4">
          Connect with one of your available wallet providers
        </Text>
        <Flex align={"center"} width="100%">
          <Divider />
          <Text
            padding={"2"}
            fontSize="2xs"
            whiteSpace={"nowrap"}
            opacity="0.4"
          >
            {isSignUp ? "Signup" : "Login"} With Social
          </Text>
          <Divider />
        </Flex>
        <Flex justify={"space-evenly"} align="center" w={"100%"}>
          <Button
            variant={"social"}
            leftIcon={<Icon as={AiOutlineGoogle} color="Main" boxSize={4} />}
          >
            Google
          </Button>
          <Button
            variant={"social"}
            leftIcon={<Icon as={GrFacebookOption} color="Main" boxSize={4} />}
          >
            Facebook
          </Button>
        </Flex>
        <Flex align={"center"} width="100%">
          <Divider />
          <Text
            padding={"2"}
            fontSize="2xs"
            whiteSpace={"nowrap"}
            opacity="0.4"
          >
            {isSignUp ? "OR" : "Or login with email"}
          </Text>
          <Divider />
        </Flex>
        {isSignUp ? <Signup /> : <Login />}
        {isSignUp ? (
          <Text opacity={1}>
            Already have an account?{" "}
            <Link
              onClick={() => {setIsSignUp(false); backToTop()}}
              color="Main"
              textDecoration={"underline"}
            >
              Log In
            </Link>
          </Text>
        ) : (
          <Text opacity={1}>
            Don't have an account?{" "}
            <Link
              onClick={() => {setIsSignUp(true); backToTop()}}
              color="Main"
              textDecoration={"underline"}
            >
              Sign Up
            </Link>
          </Text>
        )}
      </Stack>
    </Flex>
  );
};

export default Auth;
