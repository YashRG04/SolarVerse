import React from "react";
import "./ServiceContainer.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

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
        <BsFillArrowRightCircleFill color="#39b54a" size={30} />
      ) : (
        <BsFillArrowLeftCircleFill color="#39b54a" size={30} />
      )}
    </button>
  );
}
