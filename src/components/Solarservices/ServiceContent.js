import React, { Fragment } from "react";
import "./ServiceContent.css";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ServiceContent = (props) => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <div className="ServiceContentContainer">
        <div className="ServiceContentHeading">
          <h1>{props.heading}</h1>
        </div>
        <div className="ServiceContentText">
          <p>
           {props.content}
          </p>
        </div>
        <div className="ServiceContentPoint">
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
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceContent;
