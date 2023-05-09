import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { AuthFormProps } from "../../helpers/types/propsTypes";

const AuthForm = ({ isSignup }: AuthFormProps) => {
  return (
    <Formik>
      <Form></Form>
    </Formik>
  );
};

export default AuthForm;
