import { ViewIcon, ViewOffIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import { useState } from "react";

type InputFieldProps = {
  name: string;
  label: string;
  type: string;
};

const InputField = ({ name, label, type, ...rest }: InputFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {

        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name] ? true : false}
            isRequired
          >
            <FormLabel fontSize={"2xs"} opacity="0.7" htmlFor={name}>
              {label}
            </FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : type}
                id={name}
                {...field}
                {...rest}
                size="sm"
                borderRadius={"md"}
              />
              {type === "password" ? (
                <InputRightElement>
                  <IconButton
                    aria-label="show-password"
                    icon={
                      show ? (
                        <ViewOffIcon color={"gray"} />
                      ) : (
                        <ViewIcon color={"gray"} />
                      )
                    }
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    size="xs"
                    onClick={() => setShow(!show)}
                  />
                </InputRightElement>
              ) : null}
            </InputGroup>
            <FormErrorMessage fontSize={"2xs"}>
              <WarningTwoIcon /> {form.errors[name]?.toString()}
            </FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default InputField;
