import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../service/actions/userAction";
import logo from "../../../assets/images/logo.jpg";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.loginUser
  );

  console.log(error);
  console.log(isAuthenticated);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isOTPSelected, setIsOTPSelected] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loginPhone, setLoginPhone] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword, navigate));
  };

  const handleBackToPasswordLogin = (e) => {
    setIsOTPSelected(false);
    setIsOtpSent(false);
  };

  const handleSendOTP = (e) => {
    if (loginPhone.length !== 10) {
      alert.error("Please enter a valid phone number");
      return;
    }
    alert.success("OTP sent to your phone number");
    setIsOtpSent(true);
  };

  const handleLoginWithOTP = (e) => {
    if (OTP.length !== 4) {
      alert.error("Please enter a valid OTP");
      return;
    }
    navigate("/");
    alert.success("Login Successful");
  };

  useEffect(() => {
    if (
      error ===
      "CSRF Failed: Referer checking failed - Referer is insecure while host is secure."
    ) {
      alert.error("You are already logged in");
    } else if (isAuthenticated) {
      alert.success("Login Successful");
    } else if (error) {
      alert.error(error);
    }
  }, [error, isAuthenticated, alert]);

  const handleResendOTP = (e) => {};
  const [counter, setCounter] = useState(0);

  const [OTP, setOTP] = useState("");

  useEffect(() => {
    let intervalId;
    if (counter > 0) {
      intervalId = setInterval(() => setCounter(counter - 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [counter]);

  const handleClick = () => {
    handleResendOTP();
    alert.success("OTP sent to your phone number");
    setCounter(30); // Reset the counter to 30 seconds
  };

  return (
    <Fragment>
      <div className="Cushion"></div>
      <div className="NewFormContainer">
        <div className="LoginForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer">
              <img className="FormLogo" src={logo} alt="Thriible" />
              {/* <h3 className="FormLogoText">Thriible</h3> */}
            </div>
          </Link>
          <h3 className="FormHeading">Login</h3>
          <div className="FormSocialContainer">
            {/* <div className="FormSocial facebook">
              <a href="http://localhost:8000/accounts/facebook/login/">
                <BsFacebook className="FormSocialIcon" />
                <p className="FormSocialText">Login with Facebook</p>
              </a>
            </div> */}
            <div className="FormSocial google">
              <a href="http://localhost:8000/accounts/google/login/">
                <BsGoogle className="FormSocialIcon" />
                <p className="FormSocialText">Login with Google</p>
              </a>
            </div>
          </div>
          <div className="FormDividerContainer">
            <hr className="FormDivider" />
            <p className="FormDividerText">or</p>
            <hr className="FormDivider" />
          </div>
          <form className="FormInputContainer" onSubmit={loginSubmit}>
            {!isOTPSelected && (
              <input
                className="FormInput"
                type="tel"
                placeholder="Email or Phone Number"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            )}

            {!isOTPSelected && (
              <div className="PasswordInputContainer">
                <input
                  className="FormInput PasswordInput"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required={true}
                  value={loginPassword}
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
            )}

            {!isOTPSelected && (
              <p className="FormDividerText1">
                <Link to="/forgot">Forgot Password?</Link>
              </p>
            )}

            {!isOTPSelected && (
              <button className="FormSubmit" type="submit">
                Login
              </button>
            )}

            <form />
            {!isOTPSelected && (
              <button
                className="FormSubmit"
                type="submit"
                onClick={() => setIsOTPSelected(true)}
              >
                Login with OTP
              </button>
            )}
            {!isOTPSelected && <hr className="FormDivider1" />}
            <p className="FormDividerText1">
              New?&nbsp;Create Account&nbsp;&nbsp;
              <Link to="/signup">Sign Up</Link>
            </p>

            {isOTPSelected && (
              <>
                <input
                  className="FormInput"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="Phone Number"
                  value={loginPhone}
                  required
                  onChange={(e) => {
                    setLoginPhone(e.target.value);
                    let phone = e.target.value;
                    // Remove any non-digit characters
                    phone = phone.replace(/\D/g, "");
                    // Check if the number starts with "+91" and remove it
                    if (phone.startsWith("91")) {
                      phone = phone.slice(2);
                    } else if (phone.startsWith("+91")) {
                      phone = phone.slice(3);
                    }
                  }}
                />

                {!isOtpSent && (
                  <button
                    className="FormSubmit"
                    type="submit"
                    onClick={() => handleSendOTP()}
                  >
                    Send OTP
                  </button>
                )}

                {isOtpSent && (
                  <input
                    className="FormInput"
                    type="tel"
                    placeholder="Enter OTP"
                    required
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                    // add state to handle OTP input
                  />
                )}

                {isOtpSent && (
                  <p className="FormDividerText1">
                    <button
                      className="BackToPasswordLoginButton ResendOTPButton"
                      onClick={handleClick}
                      disabled={counter !== 0}
                    >
                      Resend OTP
                    </button>
                    &nbsp;in&nbsp;{counter}
                    &nbsp;seconds
                  </p>
                )}

                {isOtpSent && (
                  <button
                    className="FormSubmit"
                    type="submit"
                    onClick={() => handleLoginWithOTP()}
                  >
                    Login with OTP
                  </button>
                )}

                <hr className="FormDivider1" />
                <p className="FormDividerText1">
                  Back to login with password&nbsp;&nbsp;
                  <button
                    className="BackToPasswordLoginButton"
                    onClick={() => handleBackToPasswordLogin()}
                  >
                    Back
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
