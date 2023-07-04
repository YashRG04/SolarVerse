import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAlert } from "react-alert";
import { confirmResetPassword } from "../../../service/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { err, user } = useSelector((state) => state.registerComplete);

  const initialState = {
    username: "",
    password1: "",
    password2: "",
    otp: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const resetSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // navigate("/login");
    dispatch(confirmResetPassword(formData, navigate));
    // alert.success("Password Reset Successful");
  };
  useEffect(() => {
    if (err) {
      alert.error(err.statusText);
      setTimeout(() => {
        dispatch({ type: "REGISTER_COMPLETE_USER_CLEAR" });
      }, 2000);
    }

    if (user === "Password changed succesfully,Please login") {
      alert.success("Password changed succesfully,Please login");
      setTimeout(() => {
        dispatch({ type: "REGISTER_COMPLETE_USER_CLEAR" });
      }, 2000);
      setFormData(initialState);
    }
  }, [err, alert, dispatch, user]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <title> Thriible Reset Password</title>
        <meta name="description" content="thriible Reset Password" />
      </Helmet>
      <div className="Cushion"></div>
      <div className="NewFormContainer">
        <div className="ResetPasswordForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer">
              <img className="FormLogo" src={logo} alt="Thriible" />
              {/* <h3 className="FormLogoText">Thriible</h3> */}
            </div>
          </Link>
          <h3 className="FormHeading">Reset Password</h3>
          <form className="FormInputContainer" onSubmit={resetSubmit}>
            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type="text"
                placeholder="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password1"
                value={formData.password1}
                onChange={handleChange}
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
                name="password2"
                value={formData.password2}
                onChange={handleChange}
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
            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type="number"
                placeholder="OTP"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required={true}
              />
            </div>
            <button className="FormSubmit" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
