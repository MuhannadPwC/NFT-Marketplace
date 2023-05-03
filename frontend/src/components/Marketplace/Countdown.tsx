import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { useCountdown } from "../../hooks/useCountdown";

const Countdown = ({ date }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <Card variant={"outline"} size="sm" borderRadius={"lg"}>
      <CardBody>
        <Stack>
          <Heading fontSize={"xs"}>Count Down:</Heading>
          <Heading fontSize={"md"}>
            {days} : {hours} : {minutes} : {seconds}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Countdown;
