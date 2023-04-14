import React, { Fragment, useState } from "react";
import "./ForgotPassword.css";
import { useSelector } from "react-redux";

function ForgotPassword() {
  const { user } = useSelector((state) => state.getUser);
  console.log(user);

  return (
    <Fragment>
      <div className="ForgotPassword">
        <div className="Cushion" style={{ height: "100px" }}></div>
        <div className="ForgotPasswordContainer">
          <div className="ForgotHeader">
            <h1>Forgot Password</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
