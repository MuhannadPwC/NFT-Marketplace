import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Circle, Text, Link } from "@chakra-ui/react";
import Brand from "./Brand";
import Subscribe from "./Subscribe";
import UsefulLinks from "./UsefulLinks";
import { NavLink as RouterLink } from "react-router-dom";
import { backToTop } from "../../helpers/backToTop";

const Footer = () => {

  return (
    <Box
      padding="60px 0px 120px 0px"
      bg={"Dark"}
      color="white"
    >
      <Subscribe />
      <Flex justify={"space-between"} mt="50px" ml={"175px"} mr="120px">
        <Brand />
        <UsefulLinks />
      </Flex>
      <Circle
        position={"absolute"}
        bottom={5}
        right={5}
        size="50px"
        bgGradient="linear(to-r, Main 0%, Kiss 100%)"
      >
        <IconButton
          aria-label={"Back to Top"}
          variant="icon"
          onClick={backToTop}
          icon={<ArrowUpIcon />}
        />
      </Circle>
      <Flex pos={"absolute"} bottom={4} left={40} paddingBottom={4} gap={14}>
        <Text>
          &copy;2022 <b>Larcible.</b> All Right reserved
        </Text>
        <Flex gap={4}>
          <Link
            as={RouterLink}
            to="/policy"
            fontSize={"xs"}
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            <b>Privacy Policy</b>
          </Link>
          <Link
            as={RouterLink}
            to="/terms"
            fontSize={"xs"}
            _hover={{ textDecor: "none" }}
            onClick={backToTop}
          >
            <b>Term of Service</b>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
