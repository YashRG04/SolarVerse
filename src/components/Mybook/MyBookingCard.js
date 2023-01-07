import React from 'react'
import './MyBookingCard.css'

const MyBookingCard = ({props}) => {
  return (
    <div className="bookingcard">
      <div className="bookingcardcontainer">

      <div className="leftbooking">
        <h4>Service ID</h4>
        <h4>Service Name</h4>
        <h4>Date</h4>
        <h4>Location</h4>
        <h4>Area</h4>
        <h4>Status</h4>
      </div>

      <div className="rightbooking">
        <h4>{props.id}</h4>
        <h4>{props.name}</h4>
        <h4>{props.date}</h4>
        <h4>{props.location}</h4>
        <h4>{props.area}</h4>
        <h4>{props.status}</h4>
      </div>
    </div>
      </div>
  );
}

export default MyBookingCard