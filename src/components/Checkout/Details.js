import React, { Fragment, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CheckoutSteps from "./CheckoutSteps";
import "./Details.css";
import { DomesticServices } from "../../assets/data/DomesticServices";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import { FaBuilding, FaSolarPanel } from "react-icons/fa";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [PlanName, setPlanName] = useState("");
  const [Area, setArea] = useState("");
  const [Floor, setFloor] = useState("");
  //   date is not a constructor
  const [date, setDate] = useState(null);

  const detailSubmit = (e) => {
    e.preventDefault();
    console.log("PlanName: ", PlanName);
    console.log("Area: ", Area);
    console.log("Floor: ", Floor);
    console.log("Date: ", date);
    navigate("/shipping");
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={0} />
      <div className="CheckoutDetails">
        <div className="TitleContainer">
          <h1 data-aos="slide-left" className="BookingTitle Title">
            BOOKING INFORMATION
          </h1>
          <hr data-aos="slide-left" className="Underline" />
        </div>
        <div className="DetailsContainer Container">
          <div className="DetailsBox Box">
            <form
              className="DetailsForm Form"
              encType="multipart/form-data"
              onSubmit={detailSubmit}
            >
              <div data-aos="zoom-out-up">
                <AccountCircleIcon />
                <input
                  type="text"
                  required
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div data-aos="zoom-out-up">
                <SolarPowerIcon />
                <select
                  required
                  value={PlanName}
                  onChange={(e) => setPlanName(e.target.value)}
                >
                  <option value="">Select Plan</option>
                  {DomesticServices.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div data-aos="zoom-out-up">
                <FaSolarPanel />
                <input
                  type="number"
                  // non negative integer
                  min={1}
                  required
                  placeholder="Area in sqft"
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div data-aos="zoom-out-up">
                <FaBuilding />
                <input
                  type="number"
                  min={1}
                  required
                  placeholder="Floor Number"
                  onChange={(e) => setFloor(e.target.value)}
                />
              </div>
              <div data-aos="zoom-out-up">
                <DateRangeIcon />
                <input
                  type="date"
                  required
                  placeholder="Date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Continue"
                className="Button"
                disabled={PlanName ? false : true}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
