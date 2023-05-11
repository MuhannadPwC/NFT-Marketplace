import {
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  StackDivider,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { IoBag } from "react-icons/io5";

const AuthPopover = () => {
  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Link
          as={RouterLink}
          to="/auth"
          state={false}
          _hover={{ textDecor: "none" }}
          fontSize={"sm"}
        >
          Sign In
        </Link>
      </PopoverTrigger>
      <PopoverContent width={"250px"}>
        <PopoverArrow />
        <PopoverHeader>
          <Flex justify={"space-between"}>
            <Text fontSize={"sm"} as="b">
              New Customer?
            </Text>
            <Link
              as={RouterLink}
              to="/auth"
              state={true}
              color={"Main"}
              _hover={{ textDecor: "none" }}
            >
              Sign Up
            </Link>
          </Flex>
        </PopoverHeader>
        <PopoverBody>
          <VStack divider={<StackDivider />} spacing={2}>
            <Flex align={"center"} gap="12px" width={"200px"}>
              <Icon as={HiUser} color="Main" />
              <Link
                as={RouterLink}
                to="/" /* TODO: ADD LINK */
                fontSize={"sm"}
                _hover={{ textDecor: "none" }}
              >
                My Profile
              </Link>
            </Flex>
            <Flex align={"center"} gap="12px" width={"200px"}>
              <Icon as={IoBag} color="Main" />
              <Link
                as={RouterLink}
                to="/" /* TODO: ADD LINK */
                fontSize={"sm"}
                _hover={{ textDecor: "none" }}
              >
                Orders
              </Link>
            </Flex>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AuthPopover;
