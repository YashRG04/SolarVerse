import { useDispatch, useSelector } from "react-redux";
import "./BannerForm.css";
import React, { useState } from "react";
import { postEnquiry } from "../../../../service/actions/userAction";

const BannerForm = () => {

  const dispatch=useDispatch();
  const {message}=useSelector((state)=>state.enquiry);
 
  const initialState={
    phone_number:"",
    pin_code:"",
    bill_amount:""
  }
  const [bannerform,setBannerform]=useState(initialState);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bannerform);
    dispatch(postEnquiry(bannerform));

    setBannerform({
      phone_number:"",
      pin_code:"",
      bill_amount:""
    });
    setTimeout(() => {
      dispatch({ type: "CLEAR_ENQUIRY_MESSAGE" });
    }, 8000);
    

  };

  return (
    <form className="banner-form" onSubmit={handleSubmit}>
      <h2 className="banner-form-heading">See if you qualify for solar?</h2>
      <div className="banner-form-field">
        <label htmlFor="phone-number">Enter 10-digit phone number:</label>
        <input
          type="tel"
          id="phone-number"
          name="phone_number"
          value={bannerform.phone_number}
          onChange={(e) => setBannerform({ ...bannerform, phone_number : e.target.value})}
          pattern="[0-9]{10}"
          required
        />
      </div>
      <div className="banner-form-field">
        <label htmlFor="pincode">Enter 6-digit pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pin_code"
          value={bannerform.pin_code}
          onChange={(e) => setBannerform({ ...bannerform, pin_code: e.target.value })}
          pattern="[0-9]{6}"
          required
        />
      </div>
      <div className="banner-form-field">
        <label htmlFor="electricity-bill">
          Select highest monthly electricity bill for last year:
        </label>
        <select
          id="electricity-bill"
          name="bill_amount"
          value={bannerform.bill_amount}
          onChange={(e) => setBannerform({ ...bannerform, bill_amount: e.target.value })}
          required
        >
          <option value="">Select an option</option>
          <option value="2000">Less than ₹2000</option>
          <option value="4000">₹2000-₹4000</option>
          <option value="6000">₹4000-₹6000</option>
          <option value="8000+">More than ₹8000</option>
        </select>
      </div>
      <button type="submit" className="banner-form-submit-button">
        Submit
      </button>
      <span>{message}</span>
    </form>
  );
};

export default BannerForm;
