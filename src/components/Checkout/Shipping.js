import React, { Fragment, useEffect, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";

const Shipping = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  return (
    <Fragment>
      <CheckoutSteps activeStep={1} />
      <div className="ShippingDetails">
        <div className="TitleContainer">
          <h1 data-aos="slide-left" className="ShippingTitle Title">
            SHIPPING INFORMATION
          </h1>
          <hr data-aos="slide-left" className="Underline" />
        </div>
        <div className="ShippingContainer Container">
          <div className="ShippingBox Box">
            <form className="ShippingForm Form" encType="multipart/form-data">
              <div data-aos="zoom-out-up">
                <HomeIcon />
                <input type="text" placeholder="Address" required />
              </div>
              <div data-aos="zoom-out-up">
                <LocationCityIcon />
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div data-aos="zoom-out-up">
                <PinDropIcon />
                <input
                  type="number"
                  placeholder="Pin Code"
                  required
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div data-aos="zoom-out-up">
                <PhoneIcon />
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  size="10"
                />
              </div>

              <div data-aos="zoom-out-up">
                <PublicIcon />

                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              {country && (
                <div>
                  <TransferWithinAStationIcon />

                  <select
                    required
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
              <input
                type="submit"
                value="Continue"
                className="shippingBtn Button"
                disabled={state ? false : true}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
