import React, { useState, useEffect } from "react";
import "./GoSolarW.css";
import GoSolarCard from "./GoSolarCard";
// import {family} from '../../../assets/images/family.svg'
import { GoSolarWData } from "../../../assets/data/GoSolarW";
import GoBtnSlider from "./GoBtnSlider.js";
import Aos from "aos";
import "aos/dist/aos.css";
import BarChart from "./BarChart";
import BarChart2 from "./BarChart2";

const GoSolar = () => {
  const [serviceIndex, setServiceIndex] = useState(1);
  const nextSlide = () => {
    if (serviceIndex !== GoSolarWData.length) {
      setServiceIndex(serviceIndex + 1);
    } else if (serviceIndex === GoSolarWData.length) {
      setServiceIndex(1);
    }
  };

  const prevSlide = () => {
    if (serviceIndex !== 1) {
      setServiceIndex(serviceIndex - 1);
    } else if (serviceIndex === 1) {
      setServiceIndex(GoSolarWData.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevCounter) =>
        prevCounter == GoSolarWData.length ? 1 : prevCounter + 1
      );
    }, [10000]);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const Point = [
    {
      image:
        "https://res.cloudinary.com/yashrg04/image/upload/v1680357374/Solarverse_money_hiutt5.svg",
      head: "Make Money From Sun",
      para: "Zunroof helps you save 100% on electricity bills, and also make money by selling excess solar units back to the grid",
    },
    {
      image:
        "https://res.cloudinary.com/yashrg04/image/upload/v1680357374/Solarverse_subsidy_fxmnlh.svg",
      head: "Attractive Subsidy",
      para: "Avail upto 40% solar subsidy on total installation cost as per Government guidelines*",
    },
    {
      image:
        "https://res.cloudinary.com/yashrg04/image/upload/v1680357374/Solarverse_graphics_m7ru8i.svg",
      head: "Green Energy",
      para: "1kW solar saves 154+ trees and prevents 20+ tons of CO2 emission",
    },
    {
      image:
        "https://res.cloudinary.com/yashrg04/image/upload/v1680357374/Solarverse_return_a6cz1f.svg",
      head: "Return on Investment",
      para: "Quick payback period of 3-4 years guaranteed, with pure profit following thereafter",
    },
  ];

  return (
    <div className="GoSolarContainer" data-aos="slide-left">
      <h1 className="offerTitle">
        Why Go Solar?
      </h1>
      <hr className="GoUnderline" />

      <div className="GoSolarSubContainer">
        <div className="GoSolarLeft">
          <BarChart width={450} />
        </div>
        <div className="GoSolarRight">
          <ul className="RightList">
            {Point.map((point) => {
              return (
                <li className="RightPoint">
                  <img
                    src={point.image}
                    alt="solarverse"
                    className="PointImage"
                  />
                  <div className="PointDesc">
                    <h5 className="PointHead">{point.head}</h5>
                    <p className="PointPara">{point.para}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <div className="GoSolarFirst">
        <div data-aos="flip-right" className="GoFirstComp">
          <BarChart width={450} />
        </div>

        <div data-aos="flip-left" className="GoSecondComp">
          <h2>Safest investments promising higher ROI</h2>
          <p>
            Within<b> 3-4 year payback on investment</b> and the being the
            safest investment of the era, solar solutions in India is your
            ultimate companion. These investments, once made, will pay you off
            for the next 25 years.
          </p>
        </div>
      </div>
      <div className="GoSolarFirst">
        <div data-aos="flip-right" className="GoSecondComp">
          <h2>Subsidy</h2>
          <p>
            Solar investments would never leave you wanting perks. Get almost
            <b>40% as per the Governmental guidelines.</b>
          </p>
        </div>
        <div data-aos="flip-left" className="GoFirstComp">
          <img
            src="https://www.shutterstock.com/image-photo/money-bag-word-subsidy-wooden-260nw-1279322677.jpg"
            alt="image"
          />
        </div>
      </div>

      <div className="GoSolarFirst">
        <div data-aos="flip-right" className="GoFirstComp">
          <img
            src="https://www.civilengineeringweb.com/wp-content/uploads/2019/10/what-is-net-zzero-energy-building.jpg"
            alt="image"
          />
        </div>
        <div data-aos="flip-left" className="GoSecondComp">
          <h2>Green Energy</h2>
          <p>
            Being the earth's most abundant energy source, solar power
            guarantees you the running of your entire home. It is a wholesome,
            greener way of preventing emissions. India's
            <b> CO2 emission is increasing by 2.7% every year</b>, which is a
            huge amount considering our booming population, hence Solar power is
            our most desired solution to this as it is capable of producing
            energy with zero-emission.
          </p>
        </div>
      </div>

      <div className="GoSolarFirst">
        <div data-aos="flip-right" className="GoSecondComp">
          <h2>Power for better future</h2>
          <p>
            Data collected by green think-tank Centre for Science and
            Environment (CSE) represents deaths attributable to ambient PM2.5 in
            India has increased by
            <b>
              2.5 times in last 20 yea data-aos="flip-left"rs -- from 2,79,500
              in 1990 to 9,79,900 in 2019
            </b>
            .
          </p>
        </div>
        <div data-aos="flip-left" className="GoFirstComp">
          <img
            src="https://img.freepik.com/free-vector/active-people-bikes-windmills-house-with-solar-panel-rooftop-flat-illustration_74855-10477.jpg"
            alt="image"
          />
        </div>
      </div>
      <div className="ServiceCrousalOut">
        <div className="ServiceCardCrousalContainer">
          <div
            key={GoSolarWData[0].id}
            className={
              serviceIndex === GoSolarWData[0].id ? "slideactive-anim" : "slide"
            }
          >
            <div className="Servicentainer">
              <div className="Offcard">
                <div className="erimagecontainer">
                  <BarChart2 width={750} />
                </div>
                <h1 className="OfferServiceName">{GoSolarWData[0].name}</h1>
              </div>
            </div>
          </div>

          <div
            key={GoSolarWData[1].id}
            className={
              serviceIndex === GoSolarWData[1].id ? "slideactive-anim" : "slide"
            }
          >
            <div className="Servicecontainer">
              <GoSolarCard
                name={GoSolarWData[1].name}
                image={GoSolarWData[1].image}
              />
            </div>
          </div>

          <div
            key={GoSolarWData[2].id}
            className={
              serviceIndex === GoSolarWData[2].id ? "slideactive-anim" : "slide"
            }
          >
            <div className="Servicecontainer">
              <GoSolarCard
                name={GoSolarWData[2].name}
                image={GoSolarWData[2].image}
              />
            </div>
          </div>

          <div
            key={GoSolarWData[3].id}
            className={
              serviceIndex === GoSolarWData[3].id ? "slideactive-anim" : "slide"
            }
          >
            <div className="Servicecontainer">
              <GoSolarCard
                name={GoSolarWData[3].name}
                image={GoSolarWData[3].image}
              />
            </div>
          </div>
        </div>

        <GoBtnSlider moveSlide={nextSlide} direction={"nextService"} />

        <GoBtnSlider moveSlide={prevSlide} direction={"prevService"} />
      </div> */}
    </div>
  );
};

export default GoSolar;
