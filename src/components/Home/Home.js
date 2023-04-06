import React, { Fragment } from "react";
import Header from "../Layout/Header/Header";
import Banner from "../../assets/images/banner.png";

import "./Home.css";

import ContentContainer from "./Content/ContentContainer";
import ServiceContainer from "./ServiceHome/ServiceContainer";
import MobileHeader from "../Layout/Header/MobileHeader";
import Top from "./Top";

import Slider from "../Layout/Carousel/Slider";
import Footer from "../Layout/Footer/Footer";
import OfferedService from "./OfferedService/OfferedService";
import GoSolarW from "./GoSolar/GoSolarW";
import WhatContainer from "./WhatWeDo/WhatContainer";
import BannerForm2 from "../Layout/Carousel/Banner/BannerForm2";
import CardSlider from "./OfferedService/CardSlider";

const Home = () => {
  return (
    <Fragment>
      <div className="Container" id="top">
        <div className="MainContainer">
          <div className="BannerContainer">
            <Slider />
            <hr />
          </div>

          <WhatContainer />
          <div className="BannerFormHomeContaier">
            <BannerForm2 />
          </div>

          {/* <ContentContainer /> */}

          <GoSolarW />
          <ServiceContainer />
          {/* <OfferedService /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
