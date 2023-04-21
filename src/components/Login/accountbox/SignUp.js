import React, { Fragment, useEffect, useState } from "react";
import "./SignUp.css";
import logo from "../../../assets/images/logo.jpg";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { register } from "../../../service/actions/userAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isRegistered } = useSelector(
    (state) => state.registerUser
  );

  const { isAuthenticated } = useSelector((state) => state.loginUser);

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    dispatch(register(formdata, navigate));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (isRegistered && !isAuthenticated) {
      navigate("/");
      alert.success("Registration Successful");
      // setTimeout(() => {
      //   navigate("/login");
      //   alert.show("Please Login");
      // }, 2000);
    }
  }, [error, isRegistered, alert, navigate]);

  useEffect(() => {
    setFormData(initialState);
  }, []);

  

  return (
    <Fragment>
      <div className="Cushion2"></div>
      <div className="NewFormContainer">
        <div className="SignUpForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer SignupLogo">
              <img className="FormLogo" src={logo} alt="MeriElectricity Logo" />
              <h3 className="FormLogoText">MeriElectricity</h3>
            </div>
          </Link>
          <h3 className="FormHeading">Sign Up</h3>
          <div className="FormSocialContainer">
            {/* <div className="FormSocial facebook">
              <a href="http://localhost:8000/accounts/facebook/login/">
                <BsFacebook className="FormSocialIcon" />
                <p className="FormSocialText">Continue with Facebook</p>
              </a>
            </div> */}
            <div className="FormSocial google">
              <a href="http://localhost:8000/accounts/google/login/">
                <BsGoogle className="FormSocialIcon" />
                <p className="FormSocialText">Continue with Google</p>
              </a>
            </div>
          </div>
          <div className="FormDividerContainer">
            <hr className="FormDivider" />
            <p className="FormDividerText">or</p>
            <hr className="FormDivider" />
          </div>
          <form className="FormInputContainer" onSubmit={handleSubmit}>
            <input
              className="FormInput"
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formdata, email: e.target.value })
              }
              required={true}
            />

            <input
              className="phone FormInput"
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
              required={true}
            />

            <input
              className="firstname FormInput"
              placeholder="First Name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formdata, first_name: e.target.value })
              }
              required={true}
            />

            <input
              className="lastname FormInput"
              placeholder="Last Name"
              type="text"
              onChange={(e) =>
                setFormData({ ...formdata, lastname: e.target.value })
              }
              required={true}
            />

            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formdata, password1: e.target.value })
                }
                required={true}
              />
              <button
                className="ShowPasswordButton"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? (
                  <AiFillEye className="PasswordIcon" />
                ) : (
                  <AiFillEyeInvisible className="PasswordIcon" />
                )}
              </button>
            </div>

            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) =>
                  setFormData({ ...formdata, password2: e.target.value })
                }
                required={true}
              />
              <button
                className="ShowPasswordButton"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                type="button"
              >
                {showConfirmPassword ? (
                  <AiFillEye className="PasswordIcon" />
                ) : (
                  <AiFillEyeInvisible className="PasswordIcon" />
                )}
              </button>
            </div>

            <button className="FormSubmit" type="submit">
              Sign Up
            </button>
            <form />
            <hr className="FormDivider1" />
            <p className="FormDividerText1">
              Already have an account?&nbsp;&nbsp;<Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
