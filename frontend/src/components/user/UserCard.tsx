import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import avtr from "../../assets/userpfp.svg";

const UserCard = ({ user, type }: any) => {
  return (
    <Flex gap={"3"}>
      <Avatar src={avtr} size="sm" />
      <Box>
        <Text opacity={1}>{type}</Text>
        <Heading fontSize={"xs"}>{user}</Heading>
      </Box>
    </Flex>
  );
};

export default UserCard;
