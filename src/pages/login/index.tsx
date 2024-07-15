import { AuthPage } from "@refinedev/antd";
import { authCredits } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredits,
      }}
    />
  );
};
