import React, { Fragment } from "react";
import "./InfForm.css";
import { useState } from "react";

const InfForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");

  // prevent form from refreshing the page
  const submithandle = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(name, phone, email, pincode);
  };

  return (
    <Fragment>
      <div
        className="padding"
        style={{ backgroundColor: "#f5f3f3", height: "5rem" }}
      ></div>

      <div className="form-container">
        <div className="form-header">
          <h1>Get a Free Quote</h1>
          <p>
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="form-body">
          <form>
            <label>
              Name
              <input
                className="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Phone
              <input
                className="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email
              <input
                className="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Pincode
              <input
                className="pincode"
                type="text"
                name="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" onClick={submithandle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default InfForm;
