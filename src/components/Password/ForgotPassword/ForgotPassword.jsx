import React, { Fragment, useState,useEffect} from "react";
import "./ForgotPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { useAlert } from "react-alert";
// import forgotPasswordA from '../../service/actions/useActions'
import {forgotPasswordA} from '../../../service/actions/userAction'

function ForgotPassword() {
  const [forgotEmail, setForgotEmail] = useState("");
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch=useDispatch();
   const{err,user}=useSelector((state)=>state.registerComplete);

  



  const forgotSubmit = (e) => {
    e.preventDefault();
    console.log(forgotEmail);
    dispatch(forgotPasswordA(forgotEmail,navigate));

   
    // alert.success("Reset Password OTP Sent to your Email");
  };

  const handleforgotnext = (e) => {
    
    
   
  };
  useEffect(()=>{
     if (err) {
      alert.error(err.statusText);
      setTimeout(() => {
        dispatch({ type: "REGISTER_COMPLETE_USER_CLEAR" });
      }, 2000);
    }
    if(user === "OTP Sent,Ensure email or phone number is registered")
    {
       alert.success("Reset Password OTP Sent to your Email and phone number");
        setTimeout(() => {
        dispatch({ type: "REGISTER_COMPLETE_USER_CLEAR" });
      }, 2000);
    }

  },[err,alert,dispatch,user])



  return (
    <Fragment>
      <div className="Cushion"></div>
      <div className="NewFormContainer">
        <div className="ForgotPasswordForm FormCard">
        <Link to="/">
            <div className="FormLogoContainer">
              <img className="FormLogo" src={logo} alt="Thriible" />
              {/* <h3 className="FormLogoText">Thriible</h3> */}
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
            Enter your Thribble email address so we can reset your
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
