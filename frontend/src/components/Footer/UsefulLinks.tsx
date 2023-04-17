import { Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { NavLink as RouterLink, Route } from "react-router-dom";
import { backToTop } from "../../helpers/backToTop";

const UsefulLinks = () => {
  return (
    <Flex justify={"space-evenly"} width="64%">
      <VStack align={"flex-start"} gap="10px">
        <Heading fontSize={"md"}>Support</Heading>
        <VStack align={"flex-start"} gap="5px">
          <Heading fontSize={"xs"} opacity="60%">
            Community
          </Heading>
          <Link
            as={RouterLink}
            to={"/guideline"}
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Guideline
          </Link>
          <Heading fontSize={"xs"} opacity="60%">
            Chat with us
          </Heading>
        </VStack>
      </VStack>
      <VStack align={"flex-start"} gap="10px">
        <Heading fontSize={"md"}>Company</Heading>
        <VStack align={"flex-start"} gap="5px">
          <Link
            as={RouterLink}
            to="/about"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/faq"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            FAQ
          </Link>
          <Link
            as={RouterLink}
            to="/market"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Marketplace
          </Link>
          <Link
            as={RouterLink}
            to="/blogs"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Blog
          </Link>
        </VStack>
      </VStack>
      <VStack align={"flex-start"} gap="10px">
        <Heading fontSize={"md"}>Explore</Heading>
        <VStack align={"flex-start"} gap="5px">
          <Link
            as={RouterLink}
            to="/market"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Art
          </Link>
          <Link
            as={RouterLink}
            to="/market"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Collection
          </Link>
          <Link
            as={RouterLink}
            to="/user"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Creator / Owner
          </Link>
          <Link
            as={RouterLink}
            to="/contact"
            fontSize={"xs"}
            opacity="60%"
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            Contact Us
          </Link>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default UsefulLinks;
