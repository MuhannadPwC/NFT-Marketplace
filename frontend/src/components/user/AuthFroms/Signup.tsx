import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { SignupValues } from "../../../helpers/types/otherTypes";
import InputField from "./InputField";

const Signup = () => {
  const initialValues: SignupValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required!"),
    lastname: Yup.string().required("Required!"),
    username: Yup.string().required("Required!"),
    email: Yup.string()
      .email("Please enter correct email address")
      .required("Required!"),
    password: Yup.string().min(8, "Minimum 8 characters").required("Reqired!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password does not match")
      .required("Required!"),
  });
  const onSubmit = (values: SignupValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Stack align={"center"} gap="4">
              <Flex align={"center"} gap="6" width={"100%"}>
                <InputField type="text" name="firstname" label="First Name" />
                <InputField type="text" name="lastname" label="Last Name" />
              </Flex>
              <InputField type="text" name="username" label="Username" />
              <InputField type="email" name="email" label="Email" />
              <Flex align={"center"} gap="6">
                <InputField type="password" name="password" label="Password" />
                <InputField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                />
              </Flex>
              <Checkbox alignSelf={"flex-start"} isRequired>
                <Text>
                  I agree to all <u>Terms</u> and <u>conditions</u> and Privacy
                  Policy
                </Text>
              </Checkbox>
              <Button
                type="submit"
                fontSize={"sm"}
                h="10"
                w={"96"}
                mt="6"
                isLoading={formik.isSubmitting}
              >
                Create An Account
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
