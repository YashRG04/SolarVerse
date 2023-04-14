import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAlert } from "react-alert";

const ResetPassword = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const resetSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
    alert.success("Password Reset Successful");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetpassword1, setResetPassword1] = useState("");
  const [resetpassword2, setResetPassword2] = useState("");

  return (
    <Fragment>
      <div className="Cushion"></div>
      <div className="NewFormContainer">
        <div className="ResetPasswordForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer">
              <img className="FormLogo" src={logo} alt="MeriElectricity Logo" />
              <h3 className="FormLogoText">MeriElectricity</h3>
            </div>
          </Link>
          <h3 className="FormHeading">Reset Password</h3>
          <form className="FormInputContainer" onSubmit={resetSubmit}>
            <div className="PasswordInputContainer">
              <input
                className="FormInput PasswordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={resetpassword1}
                onChange={(e) => setResetPassword1(e.target.value)}
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
                value={resetpassword2}
                onChange={(e) => setResetPassword2(e.target.value)}
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
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
