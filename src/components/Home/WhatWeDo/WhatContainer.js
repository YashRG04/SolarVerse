import React, { Fragment } from "react";
import WhatCard from "./WhatCard";
import "./WhatWeDo.css";
import { WhatWeDoData1 } from "../../../assets/data/WhatWeDoData1";
import { WhatWeDoData2 } from "../../../assets/data/WhatWeDoData2";

const WhatContainer = () => {
  return (
    <Fragment>
      <div className="WhatContainer">
        <div className="WhatContainerHeading">
          <h1>WHAT WE DO</h1>
          <hr className="Underline2" />
        </div>
        <div className="WhatContainerSection">
          <div className="WhatContainerCard">
            {WhatWeDoData1.map(({ name, id, description, image }) => {
              return (
                <WhatCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
          
        </div>
        <div className="WhatContainerSection">
          <div className="WhatContainerCard">
            {WhatWeDoData2.map(({ name, id, description, image }) => {
              return (
                <WhatCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default WhatContainer;
