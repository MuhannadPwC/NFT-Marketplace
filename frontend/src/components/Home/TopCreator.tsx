import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const TopCreator = ({ user }: any) => {
  return (
    <Card
      size={"xs"}
      direction="row"
      align={"center"}
      justify="center"
      gap={"4"}
      minWidth="240px"
      minH={"80px"}
      borderRadius={"full"}
    >
      <Avatar src={user.avatar} size="md" name={user.name}/>
      <Stack>
        <CardHeader>
          <Heading fontSize={"md"}>{user.name}</Heading>
        </CardHeader>
        <CardFooter>
          <Text fontSize="xs">{user.eth} ETH</Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default TopCreator;
