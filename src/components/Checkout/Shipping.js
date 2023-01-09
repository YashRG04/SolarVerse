import React, { Fragment, useEffect, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";

import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import NearMeIcon from "@mui/icons-material/NearMe";
import { FaLandmark } from "react-icons/fa";
import { useAlert } from "react-alert";

import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const alert = useAlert();

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [pinCode, setPinCode] = useState("");

  const country = "IN";
  console.log(country);

  const navigate = useNavigate();

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (!state) {
      alert.error("Please Select State");
      return;
    }

    if (address1 === "" || address2 === "") {
      alert.error("Address is Required");
      return;
    }

    if (city === "") {
      alert.error("City is Required");
      return;
    }

    if (pinCode.length < 6 || pinCode.length > 6) {
      alert.error("Pin Code should be 6 digits Long");
      return;
    }

    // save the data in local storage
    localStorage.setItem("address1", address1);
    localStorage.setItem("address2", address2);
    localStorage.setItem("landmark", landmark);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("pinCode", pinCode);

    navigate("/confirm");
  };

  // Retrieve the data from local storage
  useEffect(() => {
    address1 === "" && setAddress1(localStorage.getItem("address1"));
    address2 === "" && setAddress2(localStorage.getItem("address2"));
    landmark === "" && setLandmark(localStorage.getItem("landmark"));
    city === "" && setCity(localStorage.getItem("city"));
    state === "" && setState(localStorage.getItem("state"));
    pinCode === "" && setPinCode(localStorage.getItem("pinCode"));
  }, []);

  console.log(state);

  return (
    <Fragment>
      <div id="top">
        <CheckoutSteps activeStep={2} />
        <div className="ShippingDetails">
          <div className="TitleContainer">
            <h1 data-aos="slide-left" className="ShippingTitle Title">
              SHIPPING INFORMATION
            </h1>
            <hr data-aos="slide-left" className="Underline" />
          </div>
          <div className="ShippingContainer Container">
            <div className="ShippingBox Box">
              <form
                className="ShippingForm Form"
                encType="multipart/form-data"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    shippingSubmit();
                  }
                }}
                onSubmit={shippingSubmit}
              >
                <div>
                  <PublicIcon />
                  <select required>
                    <option value={country}>INDIA</option>
                  </select>
                </div>
                {country && (
                  <div>
                    <TransferWithinAStationIcon />

                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">State</option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
                <div data-aos="zoom-out-up">
                  <HomeIcon />
                  <input
                    type="text"
                    placeholder="Flat, House No."
                    value={address1}
                    autoComplete="street-address"
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div data-aos="zoom-out-up">
                  <NearMeIcon />
                  <input
                    type="text"
                    placeholder="Area, Locality."
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    autoComplete="address-level2"
                  />
                </div>
                <div data-aos="zoom-out-up">
                  <FaLandmark />
                  <input
                    type="text"
                    placeholder="Landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    autoComplete="address-level3"
                  />
                </div>
                <div>
                  <LocationCityIcon />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete="City"
                  />
                </div>
                <div>
                  <PinDropIcon />
                  <input
                    type="number"
                    placeholder="Pin Code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>

                <div className="BtnContainer">
                  <input
                    type="submit"
                    value="Continue"
                    className="ShippingBtn Button "
                  />

                  <input
                    type="button"
                    value="Clear"
                    className="ClearBtn Button "
                    onClick={() => {
                      setAddress1("");
                      setAddress2("");
                      setLandmark("");
                      setCity("");
                      setState("");
                      setPinCode("");
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
