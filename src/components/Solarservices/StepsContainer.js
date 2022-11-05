import React, { Fragment } from "react";
import StepCard from "./StepCard";
import "./StepsContainer.css";

const StepsContainer = (props) => {
  return (
    <Fragment>
      <div className="StepContainer">
        <div className="StepsHeading">
          <h1>How it works</h1>
        </div>
        <div className="Steps">
          {props.stepsData.map(({ title, description, image, id }) => {
            return (
              <StepCard
                id={id}
                heading={title}
                content={description}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default StepsContainer;
