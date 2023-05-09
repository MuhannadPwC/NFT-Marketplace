import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";

const PriceCard = () => {
  return (
    <Card variant={"outline"} size="sm" borderRadius={"lg"}>
      <CardBody>
        <Stack>
          <Heading fontSize={"xs"}>Current Price:</Heading>
          <Heading fontSize={"md"}>0.10195 ETH ($120.00)</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PriceCard;
