import React, { useContext, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../service/actions/userAction";
import "./loginForm.css";

export function LoginForm(props) {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { switchToSignup } = useContext(AccountContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("loginSubmit");
    
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [dispatch, error, isAuthenticated, props.history]);

  return (
    <BoxContainer>
      <form className="FormContainer" onSubmit={loginSubmit}>
        <input
          className="Input"
          type="email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          className="Input"
          type="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </form>
      <Marginer direction="vertical" margin={10} />
      <Link to="/password/forgot">
        <NotMutedLink href="">Forgot your password?</NotMutedLink>
      </Link>

      <Marginer direction="vertical" margin="1.6em" />
      <button className="SubmitButton" type="submit">
        SignIn
      </button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          SignUp
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
