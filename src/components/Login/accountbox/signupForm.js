import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./loginForm.css";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <form className="FormContainer">
        <input className="Input" type="text" placeholder="Full Name" />
        <input className="Input" type="email" placeholder="Email" />
        <input className="Input" type="password" placeholder="Password" />
      </form>
      <Marginer direction="vertical" margin={10} />
      <button className="SubmitButton" type="submit">SignUp</button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
