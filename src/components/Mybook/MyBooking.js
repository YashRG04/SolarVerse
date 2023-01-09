import React from "react";
import "./MyBooking.css";
import MyBookingCard from "./MyBookingCard";
import { MyBookingData } from "../../assets/data/MyBookingData";

const MyBook2 = () => {
  return (
    <div className="bookcontainer">
      <div className="TitleContainer">
        <h1 className="BookingsTitle Title">MY BOOKINGS</h1>
        <hr className="Underline" />
      </div>

      <div className="Bookings">
        {MyBookingData.map((item, index) => (
          <MyBookingCard props={item} />
        ))}
      </div>
    </div>
  );
};

export default MyBook2;
