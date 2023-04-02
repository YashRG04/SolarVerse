import React, { Fragment } from "react";
import { BsFillTelephoneFill,BsFillSunFill,BsWhatsapp } from "react-icons/bs";
import "./MobileFooter.css"

const MobileFooter = () => {
  return (
    <Fragment>
      <div className="MobileFooter">
        <div className="MobileFootContainer">
          <a className="MobileFootLink" href="tel:1-800-123-4567">
            <BsFillTelephoneFill className="MobileFootIcon" />
          </a>
          <a className="MobileFootLink" href="tel:1-800-123-4567">
            <BsFillSunFill className="MobileFootIcon" />
          </a>
          <a className="MobileFootLink" href="tel:1-800-123-4567">
            <BsWhatsapp className="MobileFootIcon" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileFooter;
