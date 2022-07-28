import * as Yup from "yup";
import { IsignUp, IsignUpValues, IsignUpVariables, Iuser } from "src/types/interfaces";
import { SIGN_UP } from "src/api/queries/user/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CREATE_DOPAMINE_MANAGEMENT } from "src/api/queries/dopamine-management/mutations";

const initialValues: IsignUpValues = {
  username: "",
  email: "",
  password: "",
  repeatedPassword: "",
};

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Password must be longer than 6 chars")
    .max(30, "Password must be shorter than 30 chars")
    .required("Required"),
  email: Yup.string()
    .min(6, "Password must be longer than 6 chars")
    .max(30, "Password must be shorter than 30 chars")
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be longer than 6 chars")
    .max(30, "Password must be shorter than 30 chars")
    .required("Required"),
  repeatedPassword: Yup.string()
    .min(6, "Password must be longer than 6 chars")
    .max(30, "Password must be shorter than 30 chars")
    .required("Required")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const useSignUp = () => {
  const navigate = useNavigate();
  const [createDopamineManagement] = useMutation(CREATE_DOPAMINE_MANAGEMENT);
  const [createUser, { loading }] = useMutation<{ data: { register: Iuser } }, IsignUpVariables>(
    SIGN_UP
  );

  const [error, setError] = useState<string | undefined>();
  const signUp = async ({ username, email, password }: IsignUp) => {
    try {
      const { data } = await createDopamineManagement();
      await createUser({
        variables: {
          username,
          email,
          password,
          dopamine_management_datum: data.createDopamineManagementData.data.id,
        },
      });

      navigate("/login");
    } catch (error) {
      const err = error as { message: string };
      setError(err.message);
    }
  };

  return {
    initialValues,
    signUpSchema,
    signUp,
    loading,
    error,
  };
};
export default useSignUp;
