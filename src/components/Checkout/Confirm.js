import React, { Fragment, useEffect } from "react";
import "./Confirm.css";
import CheckoutSteps from "./CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const ShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  console.log(ShippingInfo);

  const Name = localStorage.getItem("Name");
  console.log(Name);

  const PhoneNo = JSON.parse(localStorage.getItem("PhoneNo"));
  console.log(PhoneNo);

  const address = `${ShippingInfo.address1}, ${ShippingInfo.address2}, ${ShippingInfo.landmark}, ${ShippingInfo.city}, ${ShippingInfo.state}, ${ShippingInfo.pinCode}`;

  const PlanName = localStorage.getItem("PlanName");
  // console.log(PlanName);

  const PlanSelected = localStorage.getItem("PlanSelected");
  // console.log(PlanSelected);

  const PlanPrice = localStorage.getItem("PlanCost");
  // console.log(PlanPrice);

  const PlanFeatures = localStorage.getItem("PlanFeatures");
  console.log(PlanFeatures);
  //   make the list of items from planfeatures

  const PlanFeaturesList = PlanFeatures.split(",");
  // console.log(PlanFeaturesList);

  const PlanFrequency = localStorage.getItem("PlanFrequency");
  // console.log(PlanFrequency);

  const Area = localStorage.getItem("Area");
  // console.log(Area);

  const BookingDate = localStorage.getItem("Date");
  // console.log(BookingDate);

  const proceedToPayment = () => {
    navigate("/payment");
  };

  //   convert string to int

  const subtotal = parseInt(PlanPrice);

  const shippingCharges = subtotal > 10000 ? 0 : 500;
  var tax = subtotal * 0.18;
  //   turncate to 2 decimal places
  tax = Math.trunc(tax * 100) / 100;

  const totalPrice = subtotal + tax + shippingCharges;

  return (
    <Fragment>
      <div id="top">
        <CheckoutSteps activeStep={3} />
        <div className="ConfirmContainer">
          <div className="TitleContainer">
            <h1 data-aos="slide-left" className="ConfirmTitle Title">
              CONFIRM ORDER
            </h1>
            <hr data-aos="slide-left" className="Underline" />
          </div>
          <div className="confirmOrderPage">
            <div>
              <div className="confirmshippingArea">
                <Typography data-aos="slide-right" className="ShippingHead">
                  SHIPPING INFO
                </Typography>
                <div data-aos="zoom-out-up" className="confirmshippingAreaBox">
                  <div>
                    <p>Name:</p>
                    <span>{Name}</span>
                  </div>
                  <div>
                    <p>Phone No:</p>
                    <span>{PhoneNo}</span>
                  </div>
                  <div>
                    <p>Address:</p>
                    <span>{address}</span>
                  </div>
                </div>
              </div>
              <div className="confirmCartItems">
                <Typography data-aos="slide-right" className="PlanHead">
                  PLAN INFO
                </Typography>
                <div data-aos="zoom-out-up" className="confirmshippingAreaBox">
                  <div>
                    <p>Plan Name:</p>
                    <span>{PlanName}</span>
                  </div>
                  <div>
                    <p>Subscription:</p>
                    <span>{PlanSelected}</span>
                  </div>
                  <div>
                    <p>Service Frequency:</p>
                    <span>{PlanFrequency}</span>
                  </div>
                  <div>
                    <p>Area of Plant:</p>
                    <span>{Area}&nbsp;Kilowatt</span>
                  </div>
                  <div>
                    <p>Booking Date</p>
                    <span>{BookingDate}</span>
                  </div>
                  <div className="PlanFeatures">
                    <p>Plan Features:</p>
                    <ul>
                      {PlanFeaturesList.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderSummary">
              <Typography data-aos="slide-left">ORDER SUMMARY</Typography>
              <div data-aos="zoom-out-up">
                <div>
                  <p>Subtotal:</p>
                  <span>₹{subtotal}</span>
                </div>
                <div>
                  <p>Service Charges:</p>
                  <span>₹{shippingCharges}</span>
                </div>
                <div>
                  <p>GST:</p>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div data-aos="zoom-out-up" className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>₹{totalPrice}</span>
              </div>

              <button onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirm;
