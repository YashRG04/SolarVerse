import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "./CheckoutSteps";
import "./Shipping.css";
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
import AddressCard from "./AddressCard";
import { Address } from "../../assets/data/Address";
import AddLocationIcon from "@mui/icons-material/AddLocation";

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

    // make an object shippingInfo
    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        address1,
        address2,
        landmark,
        city,
        state,
        pinCode,
      })
    );

    alert.success("Address Saved");

    navigate("/confirm");
  };

  const address = { address1, address2, landmark, city, state, pinCode };

  // Retrieve the data from local storage
  useEffect(() => {
    address1 === "" && setAddress1(localStorage.getItem("address1"));
    address2 === "" && setAddress2(localStorage.getItem("address2"));
    landmark === "" && setLandmark(localStorage.getItem("landmark"));
    city === "" && setCity(localStorage.getItem("city"));
    state === "" && setState(localStorage.getItem("state"));
    pinCode === "" && setPinCode(localStorage.getItem("pinCode"));
  }, []);

  function handleSelect(address) {
    console.log("Select was pressed");

    setAddress1(address.address1);
    setAddress2(address.address2);
    setLandmark(address.landmark);
    setCity(address.city);
    setState(address.state);
    setPinCode(address.pinCode);

    // save the data in local storage
    localStorage.setItem("address1", address1);
    localStorage.setItem("address2", address2);
    localStorage.setItem("landmark", landmark);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("pinCode", pinCode);

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        address1,
        address2,
        landmark,
        city,
        state,
        pinCode,
      })
    );

    alert.success("Address Selected Press Contniue to Checkout");

    // navigate("/confirm");
  }

  console.log(localStorage.getItem("shippingInfo"));

  function handleEdit(address) {
    console.log("Edit was pressed");

    setAddress1(address.address1);
    setAddress2(address.address2);
    setLandmark(address.landmark);
    setCity(address.city);
    setState(address.state);
    setPinCode(address.pinCode);

    alert.success("Edit address and Press Contniue to Checkout");
  }

  function handleAdd() {
    console.log("Add was pressed");
    setAddress1("");
    setAddress2("");
    setLandmark("");
    setCity("");
    setState("");
    setPinCode("");
    alert.success("Add address and Press Contniue to Checkout");
  }

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

          <div className="SavedAddressContainer">
            <div className="AddressContainer">
              {Address.map((item) => (
                <AddressCard
                  key={item.id}
                  address={item}
                  onSelect={handleSelect}
                  onEdit={handleEdit}
                />
              ))}
              <div data-aos="zoom-out-down" className="AddAddress">
                <div className="AddAddressIcon">
                  <AddLocationIcon className="Icon" fontSize="large" />
                  <button onClick={handleAdd}>Add New Address</button>
                </div>
              </div>
            </div>
          </div>
          <div className="ShippingContainer Container">
            <div className="ShippingBox Box">
              <form
                data-aos="zoom-out-up"
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
                <div>
                  <HomeIcon />
                  <input
                    type="text"
                    placeholder="Flat, House No."
                    value={address1}
                    autoComplete="street-address"
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div>
                  <NearMeIcon />
                  <input
                    type="text"
                    placeholder="Area, Locality."
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    autoComplete="address-level2"
                  />
                </div>
                <div>
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
                  <input
                    type="submit"
                    value="Continue"
                    className="ShippingBtn Button "
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
