import React, { Fragment, useState } from "react";
import "./ForgotPassword.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { useAlert } from "react-alert";

function ForgotPassword() {
  const alert = useAlert();
  const navigate = useNavigate();
  const forgotSubmit = (e) => {
    e.preventDefault();

    navigate("/");
    alert.success("Reset Password Link Sent to your Email");
  };

  const handleforgotnext = (e) => {
    
  };

  const [forgotEmail, setForgotEmail] = useState("");

  return (
    <Fragment>
      <div className="Cushion"></div>
      <div className="NewFormContainer">
        <div className="ForgotPasswordForm FormCard">
          <Link to="/">
            <div className="FormLogoContainer">
              <img className="FormLogo" src={logo} alt="MeriElectricity Logo" />
              <h3 className="FormLogoText">MeriElectricity</h3>
            </div>
          </Link>
          <h3 className="FormHeading">Forgot Password</h3>
          <p
            className="FormDividerText1"
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              color: "#262726",
              fontWeight: "300",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            Enter your MeriElectricity email address so we can reset your
            password.
          </p>
          <form className="FormInputContainer" onSubmit={forgotSubmit}>
            <input
              style={{ marginTop: "0.5rem" }}
              className="FormInput"
              type="email"
              placeholder="Email"
              required
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            <button
              className="FormSubmit"
              type="submit"
              onClick={() => handleforgotnext()}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
