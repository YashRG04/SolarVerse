import React, { useEffect } from "react";
import "./offeredService.css";
import { OfferedServiceData } from "../../../assets/data/OfferedService";
import OfferCard from "./OfferCard";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const OfferedService = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="offerserviceContainer">
      <h1 className="offerTitle">Services Being Offered</h1>
      <hr className="Underline" />
      <h1 className="offerSubTitle">Maintainance</h1>

      <div className="OfferedS">
        {OfferedServiceData.map(({ name, image, desc }) => {
          return (
            <OfferCard
              data-aos="fade-up"
              name={name}
              desc={desc}
              image={image}
            />
          );
        })}
      </div>
      <div className="ButtonContainer">
        <Link className="OfferedButton" to="/constactus">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default OfferedService;
