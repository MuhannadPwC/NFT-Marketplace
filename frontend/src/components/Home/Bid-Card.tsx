import { Button, Card, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import img from "../../assets/image2.png"

const BidCard = () => {
  return (
    <Card w={"50%"} borderRadius="2xl" _dark={{ bg: "#1D1D1D" }}>
      <Image src={img} borderRadius="2xl" />
      <CardFooter justify={"space-between"}>
        <Stack>
          <Text as={"b"} fontSize="xs">Current Bid:</Text>
          <Heading fontSize={"lg"}>4.08 ETH</Heading>
        </Stack>
        <Button as={NavLink} to="/" fontSize={"sm"}>Place A Bid</Button> {/* ADD LINK */}
      </CardFooter>
    </Card>
  );
}
 
export default BidCard;