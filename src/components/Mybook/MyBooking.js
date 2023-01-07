import React from 'react'
import './MyBooking.css'
import MyBookingCard from './MyBookingCard';
import { MyBookingData } from '../../assets/data/MyBookingData';


const MyBook2 = () => {
  return (
    <div className="bookcontainer">
      {/* <h1>My Bookings</h1> */}
      
      {MyBookingData.map((item, index) => (
           <MyBookingCard props={item}/>
          ))}

      

    </div>
  );
}

export default MyBook2