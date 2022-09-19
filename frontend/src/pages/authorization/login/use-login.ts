import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "src/api/queries/user/mutations";
import { IloginValues, Iuser } from "src/utils/types/interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  identifier: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be longer than 6 chars")
    .max(30, "Password must be shorter than 30 chars")
    .required("Required"),
});

const initialValues: IloginValues = {
  identifier: "",
  password: "",
};

const useLogin = () => {
  const [loginMutation, { loading }] = useMutation<
    { login: { jwt: string; user: Iuser } },
    IloginValues
  >(LOGIN);
  const navigate = useNavigate();

  const [error, setError] = useState<string | undefined>();

  const login = async ({ identifier, password }: IloginValues) => {
    try {
      const { data } = await loginMutation({
        variables: {
          identifier,
          password,
        },
      });

      localStorage.setItem("jwt", JSON.stringify(data?.login.jwt));
      localStorage.setItem("user", JSON.stringify(data?.login.user));

      navigate("/dashboard");
      window.location.reload();
    } catch {
      setError("Invalid email or password");
    }
  };

  return {
    initialValues,
    loginSchema,
    login,
    error,
    loading,
  };
};
export default useLogin;
