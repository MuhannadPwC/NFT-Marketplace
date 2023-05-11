import {
  Box,
  Button,
  Checkbox,
  Flex,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { LoginValues } from "../../../helpers/types/otherTypes";
import InputField from "./InputField";

const Login = () => {
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().min(8).required("Required!"),
  });
  const onSubmit = (values: LoginValues) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Stack gap={"5"}>
              <InputField name="email" label="Email" type="email" />
              <InputField name="password" label="Password" type="password" />
              <Flex justify={"space-between"} align="center">
                <Checkbox>
                  <Text opacity="1">Remember me</Text>
                </Checkbox>
                <Link
                  as={NavLink}
                  to={"reset-password"}
                  fontSize="xs"
                  color={"Main"}
                >
                  Forgot Password?
                </Link>
              </Flex>
              <Button
                type="submit"
                fontSize={"sm"}
                h="10"
                w={"96"}
                isLoading={formik.isSubmitting}
              >
                Log in
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
