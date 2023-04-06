import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill, BsFillSunFill, BsWhatsapp } from "react-icons/bs";
import "./MobileFooter.css";

const MobileFooter = () => {
  return (
    <Fragment>
      <div className="MobileFooter">
        <div className="MobileFootContainer">
          <a className="MobileFootLink" href="tel:1-800-123-4567">
            <BsFillTelephoneFill width={30} className="MobileFootIcon" />
          </a>
          <Link className="MobileFootLink" to="/">
            <BsFillSunFill width={30} className="MobileFootIcon" />
          </Link>
          <a className="MobileFootLink" href="tel:1-800-123-4567">
            <BsWhatsapp width={30} className="MobileFootIcon" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileFooter;
