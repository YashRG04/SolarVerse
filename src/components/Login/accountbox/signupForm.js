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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../service/actions/userAction";
import { useNavigate } from "react-router-dom";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const initialState = {
      email:'',
      password1:'',
      password2:''
  }
  const [formdata,setFormData] =useState(initialState);
  const handleSubmit=(e)=>{
    e.preventDefault();
     console.log(formdata);
    dispatch(register(formdata,navigate));

  }


  return (
    <BoxContainer>
      <form className="FormContainer" onSubmit={handleSubmit}>
        {/* <input className="Input" type="text" placeholder="Full Name" /> */}
        <input
          className="Input"
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
        />
        <input
          className="Input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formdata, password1: e.target.value })
          }
        />
        <input
          className="Input"
          type="password"
          placeholder="ConfirmPassword"
          onChange={(e) =>
            setFormData({ ...formdata, password2: e.target.value })
          }
        />

        <Marginer direction="vertical" margin={10} />
        <button className="SubmitButton" type="submit">
          SignUp
        </button>
        <Marginer direction="vertical" margin="1em" />
      </form>
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
