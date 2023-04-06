import React, { useEffect, useState } from "react";
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === OfferedServiceData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? OfferedServiceData.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="offerserviceContainer">
      <h1 className="offerTitle">Services Being Offered</h1>
      <hr className="Underline" />
      <h1 className="offerSubTitle">Maintenance</h1>

      <div className="sliderContainer">
        {OfferedServiceData.map(({ name, image, desc }, index) => {
          return (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <OfferCard
                data-aos="fade-up"
                name={name}
                desc={desc}
                image={image}
              />
            </div>
          );
        })}
        <button className="prevButton" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="nextButton" onClick={handleNextSlide}>
          Next
        </button>
      </div>

      <div className="ButtonContainer">
        <Link className="OfferedButton" to="/contactus">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default OfferedService;
