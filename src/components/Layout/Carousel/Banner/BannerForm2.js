import "./BannerForm2.css";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const BannerForm2 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [electricityBill, setElectricityBill] = useState("");
  const [open, setOpen] = useState("true");

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
  const handleCross = (e) => {
    setOpen("");
  };

  return (
    open && (
      <>
        <form className="banner-form2" onSubmit={handleSubmit}>
          <div className="BannerForm2-headingsContainer">
            <h2 className="banner-form2-heading">
              See if you qualify for solar?
            </h2>
            <span> {<ImCross onClick={handleCross} />}</span>
          </div>
          <div className="banner-form2-field">
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
          <div className="banner-form2-field">
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
          <div className="banner-form2-field">
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
          <div className="banner-form-checkbox">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"

                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span>
                By providing my phone number, I agree that zunroof can contact
                me via phone/email/whatsapp and/or prerecorded messages using
                the number provided
              </span>
            </label>
          </div>

          <button type="submit" className="banner-form2-submit-button">
            Submit
          </button>
        </form>
      </>
    )
  );
};

export default BannerForm2;
