import React from "react";
import "./GoBtnSLider.css"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function ServiceBtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "nextService"
          ? "btnService-slide nextGo SlideArrow"
          : "btnService-slide prevGo SlideArrow"
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
