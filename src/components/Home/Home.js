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

const Home = () => {
  const user = "Yash";
  const login = true;
  return (
    <Fragment>
      <div className="Container" id="top">
        <div className="MainContainer">
          <div className="BannerContainer">
            <Slider />
            <hr />
          </div>
          <ContentContainer />
          <ServiceContainer />
          <GoSolarW />
          <OfferedService />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
