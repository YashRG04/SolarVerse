import React, { useContext, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../service/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isRegistered } = useSelector(
    (state) => state.registerUser
  );

  const { isAuthenticated } = useSelector((state) => state.loginUser);

  console.log(error);
  console.log(isRegistered);

  const initialState = {
    email: "",
    password1: "",
    password2: "",
    phone_number: "",
    first_name: "",
    lastname: "",
  };

  const alert = useAlert();

  const [formdata, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    dispatch(register(formdata, navigate));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (isRegistered && !isAuthenticated ) {
      navigate("/");
      alert.success("Registration Successful");
      setTimeout(() => {
        navigate("/login");
        alert.show("Please Login");
      }, 2000);
    }
  }, [error, isRegistered, alert, navigate]);

  useEffect(() => {
    setFormData(initialState);
  }, []);

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
          className="phone Input"
          placeholder="Phone Number"
          type="tel"
          pattern="[0-9]{10}"
          maxLength={10}
          onChange={(e) => {
            let phone = e.target.value;
            // Remove any non-digit characters
            phone = phone.replace(/\D/g, "");
            // Check if the number starts with "+91" and remove it
            if (phone.startsWith("91")) {
              phone = phone.slice(2);
            } else if (phone.startsWith("+91")) {
              phone = phone.slice(3);
            }
            setFormData({ ...formdata, phone_number: phone });
          }}
        />

        <input
          className="firstname Input"
          placeholder="First Name"
          type="text"
          onChange={(e) =>
            setFormData({ ...formdata, first_name: e.target.value })
          }
        />

        <input
          className="lastname Input"
          placeholder="Last Name"
          type="text"
          onChange={(e) =>
            setFormData({ ...formdata, lastname: e.target.value })
          }
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
