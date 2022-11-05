import React, { Fragment } from "react";
import "./StepCard.css";
import { motion } from "framer-motion";

const StepCard = (props) => {
  const animateFrom = { opacity: 0, Y: 100 };
  const animateTo = { opacity: 1, Y: 0 };

  return (
    <Fragment>
      <motion.div
        initial={animateFrom}
        animate={animateTo}
        transition={{ duration: 0.5 }}
        className="StepCard"
      >
        <div className="StepCardImage">
          <img src={props.image} alt="Step card image" />
        </div>
        <div className="StepCardHeading">
          <h1>{props.heading}</h1>
        </div>
        <div className="StepCardContent">
          <p className="StepCardContent">{props.content}</p>
        </div>
      </motion.div>
      
    </Fragment>
  );
};

export default StepCard;
