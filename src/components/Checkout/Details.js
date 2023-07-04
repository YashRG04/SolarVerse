// import React, { Fragment, useEffect, useRef, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import CheckoutSteps from "./CheckoutSteps";
// import "./Details.css";
// import { DomesticServices } from "../../assets/data/DomesticServices";
// import SolarPowerIcon from "@mui/icons-material/SolarPower";
// import { FaBuilding, FaSolarPanel } from "react-icons/fa";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PhoneIcon from "@material-ui/icons/Phone";
// import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";

// const Details = () => {
//   const inputRef = useRef(null);
//   const alert = useAlert();

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.setAttribute("placeholder", "Visitig Date");
//     }
//   }, []);

//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [PlanName, setPlanName] = useState("");
//   const [Area, setArea] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   //   date is not a constructor
//   const [date, setDate] = useState(null);

//   const detailSubmit = (e) => {
//     e.preventDefault();

//     if (name === "") {
//       alert.error("Name is Required");
//       return;
//     }

//     if (phoneNo.length < 10 || phoneNo.length > 10) {
//       alert.error("Phone Number should be 10 digits Long");
//       return;
//     }

//     if (PlanName === "") {
//       alert.error("Please Select Plan");
//       return;
//     }

//     if (Area < 1) {
//       alert.error("Plant Size should be greater than 1");
//       return;
//     }

//     if (date === null) {
//       alert.error("Please Select Date");
//       return;
//     }

//     localStorage.setItem("PhoneNo", phoneNo);
//     localStorage.setItem("Name", name);
//     localStorage.setItem("PlanName", PlanName);
//     localStorage.setItem("Area", Area);
//     localStorage.setItem("Date", date);

//     navigate("/subscription");
//   };

//   // useEffect(() => {
//   //   const storedName = localStorage.getItem("Name");
//   //   if (name === "" && storedName) {
//   //     setName(storedName);
//   //   }
//   //   const storedPhoneNo = localStorage.getItem("PhoneNo");
//   //   if (phoneNo === "" && storedPhoneNo) {
//   //     setPhoneNo(storedPhoneNo);
//   //   }
//   // }, [name, phoneNo]);

//   return (
//     <Fragment>
//       <div id="top">
//         <CheckoutSteps activeStep={0} />
//         <div className="CheckoutDetails" id="top">
//           <div className="TitleContainer">
//             <h1 data-aos="slide-left" className="BookingTitle Title">
//               BOOKING INFORMATION
//             </h1>
//             <hr data-aos="slide-left" className="Underline" />
//           </div>

//           <div className="DetailsContainer Container">
//             <div className="DetailsBox Box">
//               <form
//                 className="DetailsForm Form"
//                 encType="multipart/form-data"
//                 onSubmit={detailSubmit}
//               >
//                 <div data-aos="zoom-out-up">
//                   <AccountCircleIcon />
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     onChange={(e) => setName(e.target.value)}
//                     autoComplete="Name"
//                   />
//                 </div>

//                 <div data-aos="zoom-out-up">
//                   <PhoneIcon />
//                   <input
//                     type="number"
//                     placeholder="Phone Number"
//                     value={phoneNo}
//                     onChange={(e) => setPhoneNo(e.target.value)}
//                     size="10"
//                     autoComplete="tel"
//                   />
//                 </div>

//                 <div data-aos="zoom-out-up">
//                   <SolarPowerIcon />
//                   <select
//                     value={PlanName}
//                     onChange={(e) => setPlanName(e.target.value)}
//                   >
//                     <option value="">Select Plan</option>
//                     {DomesticServices.map((item) => (
//                       <option value={item.name}>{item.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div data-aos="zoom-out-up">
//                   <FaSolarPanel />
//                   <input
//                     type="number"
//                     // non negative integer
//                     min={1}
//                     placeholder="Plant Size in Kilowatt"
//                     onChange={(e) => setArea(e.target.value)}
//                   />
//                 </div>

//                 <div data-aos="zoom-out-up">
//                   <DateRangeIcon />
//                   <input
//                     type="date"
//                     ref={inputRef}
//                     min={new Date().toISOString().split("T")[0]}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </div>
//                 <input type="submit" value="Continue" className="Button" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Details;
