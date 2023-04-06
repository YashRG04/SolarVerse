import "./BannerForm.css";
import React, { useState } from "react";

const BannerForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [electricityBill, setElectricityBill] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleElectricityBillChange = (event) => {
    setElectricityBill(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // your form submission logic goes here
  };

  return (
    <form className="banner-form" onSubmit={handleSubmit}>
      <h2 className="banner-form-heading">See if you qualify for solar?</h2>
      <div className="banner-form-field">
        <label htmlFor="phone-number">Enter 10-digit phone number:</label>
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          pattern="[0-9]{10}"
          required
        />
      </div>
      <div className="banner-form-field">
        <label htmlFor="pincode">Enter 6-digit pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={pincode}
          onChange={handlePincodeChange}
          pattern="[0-9]{6}"
          required
        />
      </div>
      <div className="banner-form-field">
        <label htmlFor="electricity-bill">
          Select highest electricity bill for last year:
        </label>
        <select
          id="electricity-bill"
          name="electricity-bill"
          value={electricityBill}
          onChange={handleElectricityBillChange}
          required
        >
          <option value="">Select an option</option>
          <option value="500">Less than $500</option>
          <option value="1000">$500-$1000</option>
          <option value="2000">$1000-$2000</option>
          <option value="2000+">More than $2000</option>
        </select>
      </div>
      <button type="submit" className="banner-form-submit-button">
        Submit
      </button>
    </form>
  );
};

export default BannerForm;
