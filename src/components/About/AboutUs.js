import React, { useState } from "react";
import "./AboutUs.css";
import "./ATeamCard.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { TeamInfo } from "../../assets/data/TeamInfo";
import ATeamCard from "./ATeamCard";
const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="AboutUs">
      <div
        className="hero-image AboutBanner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://greenhouse.solar/wp-content/uploads/2020/09/AdobeStock_325585649-min-scaled.jpeg")`,
        }}
      >
        <div className="hero-text">
          <h1>WE ARE SOLARVERSE</h1>
        </div>
      </div>

      <div className="AboutUsabout">
        <h1>ABOUT US</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>

      <div className="figures">
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={329} duration={1.5} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <span className="span2">Trained Professionals</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={50} duration={1.5} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <span className="span2">Happy Customers</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={65} duration={1.5} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <span className="span2">Cities</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={2} duration={1.5} delay={0} />
              )}
            </span>
          </ScrollTrigger>
          <span className="span2">Country</span>
        </div>
      </div>

      <div className="AboutUsabout">
        <h1>HOW WE DO IT</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>
      <div className="AboutUsabout">
        <h1>OUR STORY SO FAR</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>
      <div className="AOurTeam">
        <h1 className="Teamoh1">OUR TEAM</h1>
        <div className="Teamline"></div>

        <div className="ATeamCardContainer">
          {TeamInfo.map(({ name, id, description, image, designation }) => {
            return (
              <ATeamCard
                name={name}
                id={id}
                description={description}
                image={image}
                designation={designation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
