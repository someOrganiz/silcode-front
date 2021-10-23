import { FC } from "react";
import CreateOrSignIn from "../createOrSignIn/CreateOrSignIn";
import SignForm from "./SignForm";
import { SIGNUP, SIGNIN } from "@utils/routes";

const SignIn: FC = () => {
  return (
    <>
      <SignForm title="Sign in to SilCode" route={SIGNIN} />
      <CreateOrSignIn
        text="New to Silcode?"
        link={SIGNUP}
        linkName="Create an account"
      />
    </>
  );
};

export default SignIn;
