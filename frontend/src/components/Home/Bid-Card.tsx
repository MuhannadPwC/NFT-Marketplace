import { Button, Card, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import img from "../../assets/image2.png"

const BidCard = () => {
  return (
    <Card w={"50%"} borderRadius="2xl">
      <Image src={img} borderRadius="2xl" />
      <CardFooter justify={"space-between"}>
        <Stack>
          <Text as={"b"} fontSize="xs">Current Bid:</Text>
          <Heading fontSize={"md"}>4.08 ETH</Heading>
        </Stack>
        <Button fontSize={"sm"}>Place A Bid</Button>
      </CardFooter>
    </Card>
  );
}
 
export default BidCard;