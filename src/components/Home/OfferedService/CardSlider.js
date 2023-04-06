import React, { useState, useRef } from "react";
import "./CardSlider.css";
import OfferCard from "./OfferCard";
import { OfferedServiceData } from "../../../assets/data/OfferedService";

const Slider = () => {
  const [startX, setStartX] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;
    const newTranslateX = -activeIndex * sliderRef.current.offsetWidth - difference;
    setTranslateX(newTranslateX);

    const newIndex = difference < 0 ? activeIndex + 1 : activeIndex - 1;
    if (newIndex >= 0 && newIndex < OfferedServiceData.length) {
      setActiveIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    const cardWidth = sliderRef.current.offsetWidth / OfferedServiceData.length;
    const difference = translateX % cardWidth;
    let newTranslateX;
    if (Math.abs(difference) > cardWidth / 2) {
      newTranslateX =
        difference < 0
          ? translateX + difference + cardWidth
          : translateX + difference - cardWidth;
      const newIndex = difference < 0 ? activeIndex - 1 : activeIndex + 1;
      if (newIndex >= 0 && newIndex < OfferedServiceData.length) {
        setActiveIndex(newIndex);
      }
    } else {
      newTranslateX = translateX - difference;
    }
    setTranslateX(newTranslateX);
  };

  return (
    <div className="slider-container">
      <div
        className="card-slider"
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${OfferedServiceData.length * 100}%`,
        }}
        ref={sliderRef}
      >
        {OfferedServiceData.map((service, index) => (
          <div
            key={service.id}
            className={`card ${index === activeIndex ? "active" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ width: `${100 / OfferedServiceData.length}%` }}
          >
            <OfferCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
