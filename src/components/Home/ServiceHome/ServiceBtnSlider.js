import React from "react";
import "./ServiceContainer.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function ServiceBtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "nextService"
          ? "btnService-slide nextService SlideArrow"
          : "btnService-slide prevService SlideArrow"
      }
    >
      {direction === "nextService" ? (
        <AiOutlineRight size={30} />
      ) : (
        <AiOutlineLeft size={30} />
      )}
    </button>
  );
}
