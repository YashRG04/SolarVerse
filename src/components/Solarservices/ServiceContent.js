import React, { Fragment, useEffect, useState } from "react";
import "./ServiceContent.css";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ServiceContent = (props) => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription =
    props.content.split(" ").slice(0, 100).join(" ") + " ...";

  const toggleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  return (
    <Fragment>
      <div className="ServiceContentContainer">
        <div className="ServiceContentHeading WhatContainerHeading">
          <h1>{props.heading}</h1>
          <hr className="Underline2 u3" />
        </div>
        <div className="ServiceContentText">
          <p>
           {/* {props.content} */}
           {showFullDescription ? props.content+" " : truncatedDescription}
          {props.content.split(" ").length > 100 && (
            <button
              onClick={toggleShowFullDescription}
              className="readmore"
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          )}
          </p>
        </div>
        {/* <div className="ServiceContentPoint">
          <div className="ListContainer">
            <ul className="List1">
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>{props.points.first}</h4>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>{props.points.second}</h4>
              </motion.li>
            </ul>
            <ul className="List2">
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>{props.points.third}</h4>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>{props.points.fourth}</h4>
              </motion.li>
            </ul>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default ServiceContent;
