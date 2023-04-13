import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Link,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import logoNameDark from "../assets/logo-text-dark.svg";
import logoNameLight from "../assets/logo-text-light.svg";
import { NavLink as RouterLink } from "react-router-dom";
import { MoonIcon, Search2Icon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import AuthPopover from "./AuthPopover";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      gap={"10px"}
      align={"center"}
      padding="10px 84px"
      justify={"space-evenly"}
    >
      <Flex gap={"8px"} align="center">
        <Image src={logo} />
        <Image src={colorMode === "light" ? logoNameDark : logoNameLight} />
      </Flex>
      <Flex gap={"30px"} align="center">
        <Link
          as={RouterLink}
          to="/"
          fontSize={"sm"}
          _activeLink={{ color: "Main", textDecoration: "none" }}
          _hover={{ textDecor: "none" }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/market"
          fontSize={"sm"}
          _activeLink={{ color: "Main", textDecoration: "none" }}
          _hover={{ textDecor: "none" }}
        >
          Marketplace
        </Link>
        <Text fontSize={"sm"}>Community</Text>
        <Link
          as={RouterLink}
          to="/activity"
          fontSize={"sm"}
          _activeLink={{ color: "Main", textDecoration: "none" }}
          _hover={{ textDecor: "none" }}
        >
          Activity
        </Link>
        <Link
          as={RouterLink}
          to="/blogs"
          fontSize={"sm"}
          _activeLink={{ color: "Main", textDecoration: "none" }}
          _hover={{ textDecor: "none" }}
        >
          Blog
        </Link>
      </Flex>
      <Flex align={"center"} gap="17px">
        <InputGroup size="sm" width={"250px"}>
          <Input placeholder="Search" fontSize={"sm"} />
          <InputRightElement children={<Search2Icon boxSize={3} />} />
        </InputGroup>
        {colorMode === "light" ? (
          <SunIcon
            color={"blackout.90"}
            onClick={toggleColorMode}
            _hover={{ cursor: "pointer" }}
          />
        ) : (
          <MoonIcon onClick={toggleColorMode} _hover={{ cursor: "pointer" }} />
        )}
      </Flex>
      <Flex gap={"20px"} align="center">
        <AuthPopover />
        <Button size={"md"} fontSize="sm">
          Connect Wallet
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
