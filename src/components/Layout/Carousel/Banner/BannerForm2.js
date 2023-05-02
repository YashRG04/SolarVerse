import "./BannerForm2.css";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useAlert } from "react-alert";
import { postEnquiry } from "../../../../service/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const BannerForm2 = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { message } = useSelector((state) => state.enquiry);

  const initialState = {
    phone_number: "",
    pin_code: "",
    bill_amount: "",
  };
  const [bannerform, setBannerform] = useState(initialState);
  const [open, setOpen] = useState("true");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bannerform);
    dispatch(postEnquiry(bannerform));

    setBannerform({
      phone_number: "",
      pin_code: "",
      bill_amount: "",
    });
    setOpen("");
    setTimeout(() => {
      dispatch({ type: "CLEAR_ENQUIRY_MESSAGE" });
    }, 8000);
  };

  const handleCross = (e) => {
    setOpen("");
  };
  useEffect(() => {
    if (message) {
      alert.success(message);
    }
  }, [dispatch, message]);

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
              value={bannerform.phone_number}
              onChange={(e) =>
                setBannerform({ ...bannerform, phone_number: e.target.value })
              }
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
              value={bannerform.pin_code}
              onChange={(e) =>
                setBannerform({ ...bannerform, pin_code: e.target.value })
              }
              pattern="[0-9]{6}"
              required
            />
          </div>
          <div className="banner-form2-field">
            <label htmlFor="electricity-bill">
              Select highest monthly electricity bill for last year:
            </label>
            <select
              id="electricity-bill"
              name="electricity-bill"
              value={bannerform.bill_amount}
              onChange={(e) =>
                setBannerform({ ...bannerform, bill_amount: e.target.value })
              }
              required
            >
              <option value="">Select an option</option>
              <option value="2000">Less than ₹2000</option>
              <option value="4000">₹2000-₹4000</option>
              <option value="6000">₹4000-₹6000</option>
              <option value="8000+">More than ₹8000</option>
            </select>
          </div>
          <div className="banner-form-checkbox">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                required

                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span>
                By providing my phone number, I agree that Thriible can contact
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
