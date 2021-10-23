import { FC } from "react";
import CreateOrSignIn from "../createOrSignIn/CreateOrSignIn";
import SignForm from "./SignForm";
import { SIGNIN, SIGNUP } from "@utils/routes";

const SignUp: FC = () => {
  return (
    <>
      <SignForm title="Sign up to SilCode" route={SIGNUP} />
      <CreateOrSignIn
        text="Already have an account?"
        link={SIGNIN}
        linkName="Log in"
      />
    </>
  );
};

export default SignUp;
