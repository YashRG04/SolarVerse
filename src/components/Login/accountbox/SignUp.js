import React, { Fragment, useEffect, useState } from "react";
import "./SignUp.css";
import logo from "../../../assets/images/logo.jpg";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import {
  register,
  registerComplete,
} from "../../../service/actions/userAction";
import { Helmet } from "react-helmet";
import { TokenService } from "../../../service/TokenService";


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const access_token = TokenService.getAccessToken();
   

  const { error, loading, isRegistered, user } = useSelector(
    (state) => state.registerUser
  );
  const { err } = useSelector((state) => state.registerComplete);

  const [initialInfoFilled, setInitialInfoFilled] = useState(false);

  const initialState = {
    email: "",
    password1: "",
    password2: "",
    phone_number: "",
    first_name: "",
    lastname: "",
  };

  const initialState1 = {
    email: "",
    password1: "",
    password2: "",
    phone_number: "",
    first_name: "",
    lastname: "",
    otp: "",
  };

  const alert = useAlert();

  const [formdata, setFormData] = useState(initialState);
  const [formOtpdata, setFormOtpData] = useState(initialState1);
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formdata);
  //   dispatch(register(formdata, navigate));

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialInfoFilled) {
      // Registration with OTP
      const formDataWithOTP = {
        ...formdata,
        otp: formOtpdata.otp,
      };
      // console.log(formdata);
      console.log(formDataWithOTP);
      // Make a POST request with formDataWithOTP
      dispatch(registerComplete(formDataWithOTP, navigate));
    } else {
      // Sending OTP request
      console.log(formdata);
      dispatch(register(formdata, navigate));
      // Make a POST request to send OTP
      // For example:
      // dispatch(sendOTP(formdata.email));
      // alert.success('OTP sent successfully')

      // Update the state to show the OTP input
    }
  };

  useEffect(() => {
    console.log("useEffect");
    if (error) {
      alert.error(error);
      setTimeout(() => {
        dispatch({ type: "REGISTER_USER_CLEAR" });
      }, 2000);
    }
     if (access_token) {
      navigate("/");
    }
    if (err) {
      alert.error(err.statusText);
      setTimeout(() => {
        dispatch({ type: "REGISTER_COMPLETE_USER_CLEAR" });
      }, 2000);
    }
    // console.log(user, typeof user === 'object',Object.keys(user).length !== 0);
    console.log(typeof user);
    if (user === "OTP Sent") {
      console.log("user", user);
      alert.success("OTP sent successfully");
      setInitialInfoFilled(true);
      // navigate("/login");
      setTimeout(() => {
        dispatch({ type: "REGISTER_USER_CLEAR" });
      }, 2000);
    }

    if (isRegistered) {
      alert.success("Registration Successful");
    }
  }, [error, alert, isRegistered, user, dispatch, err,access_token]);

  // useEffect(() => {
  //   setFormData(initialState);
  // }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Thriible SignUp</title>
        <meta name="signup" content="Thriible SignUp" />
      </Helmet>
      <div className="Cushion2"></div>
      <div className="NewFormContainer">
        <div className="SignUpForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer SignupLogo">
              <img className="FormLogo" src={logo} alt="MeriElectricity Logo" />
              {/* <h3 className="FormLogoText">MeriElectricity</h3> */}
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
            {initialInfoFilled ? (
              <input
                className="otp FormInput"
                placeholder="Enter OTP"
                type="text"
                onChange={(e) =>
                  setFormOtpData({ ...formOtpdata, otp: e.target.value })
                }
                required={true}
              />
            ) : (
              <>
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
              </>
            )}

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
