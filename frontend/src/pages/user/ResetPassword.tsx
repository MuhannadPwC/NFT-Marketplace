import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Card
      mt={"44"}
      mx="auto"
      mb="20"
      width={"32%"}
      px="5"
      pb={"4"}
      borderRadius={"lg"}
      boxShadow={"lg"}
    >
      <CardHeader>
        <Stack align={"center"} mt="2" gap={"2"}>
          <Heading>Forgot Password?</Heading>
          <Text>No worries, we'll send you reset instructions.</Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack gap={"4"}>
          <FormControl>
            <FormLabel fontSize={"2xs"}>Email</FormLabel>
            <Input type={"email"} size="sm" borderRadius={"md"} />
          </FormControl>
          <Button w={"100%"} h="10" fontSize={"xs"}>
            Reset Password
          </Button>
          <Text textAlign={"center"} opacity="1">
            Back to{" "}
            <Link
              as={NavLink}
              to="/auth"
              state={false}
              color="Main"
              textDecor={"underline"}
              fontWeight="900"
            >
              Log In
            </Link>
          </Text>
        </Stack>
      </CardBody>

    </Card>
  );
};

export default ResetPassword;
