import React, { useContext, useState} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  NotMutedLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Link to="/forgot-password">
        <NotMutedLink href="">Forgot your password?</NotMutedLink>
      </Link>

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
