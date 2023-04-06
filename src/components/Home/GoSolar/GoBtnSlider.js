import React from "react";
import "./GoBtnSLider.css"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

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
        <BsFillArrowRightCircleFill size={30} />
      ) : (
        <BsFillArrowLeftCircleFill size={30} />
      )}
    </button>
  );
}
