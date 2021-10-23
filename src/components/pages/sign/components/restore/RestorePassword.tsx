import { FC } from "react";
import RestoreForm from "./RestoreForm";
import CreateOrSignIn from "../createOrSignIn/CreateOrSignIn";
import { SIGNIN } from "@utils/routes";

const RestorePassword: FC = () => {
  return (
    <>
      <RestoreForm />
      <CreateOrSignIn
        text="Back to previous page"
        link={SIGNIN}
        linkName="Log In"
      />
    </>
  );
};
export default RestorePassword;
