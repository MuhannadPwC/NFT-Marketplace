import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Flex justify={"space-evenly"}>
      <Heading color={"Kiss"} fontSize="2xl">
        Join our community
      </Heading>
      <Text fontSize={"xs"} opacity="60%">
        Meet the Known Origin team, artists and collectors for <br /> platform
        updates, announcements, and more...
      </Text>
      <InputGroup width={"250px"}>
        <Input placeholder="Enter email..." h="2.25rem" fontSize={'xs'}/>
        <Button h="2.25rem" size={'sm'} w="85px" position={'absolute'} top="0" right="0" fontSize={'xs'}>Subscribe</Button>
      </InputGroup>
    </Flex>
  );
};

export default Subscribe;
