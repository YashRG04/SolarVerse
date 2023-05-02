import React, { Fragment } from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail, GrTwitter } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  const navigate = useNavigate();
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    // { name: "My Bookings", url: "/bookings" },
    {
      name: props.data.Login.login ? `Hello ${props.data.User.user}` : "Login",
      url: props.data.Login.login ? "/profile" : "/login",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <Fragment>
      <div className="FooterContainer">
        <div className="Footer">
          <div className="LeftFooter">
            <div className="LeftContainer1">
              <img
                className="FooterLogo"
                src={logo}
                alt="SolarVerse Logo"
                onClick={() => {
                  navigate("/");
                }}
              />
              {/* <h1 className="LogoTextTitle">SolarVerse</h1> */}
            </div>
            <hr className="FooterHr" />
            <p className="FooterDescription">
              <span>Power for better future!</span>
              <br></br>
              Thriible is a digital platform connecting solar equipment
              vendors and end consumers for the deployment of solar solutions &
              related maintenance services
            </p>
            <div className="SocialMedia">
              <a target="_blank" href="https://www.facebook.com/">
                <BsFacebook className="FacebookLogo" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <BsInstagram className="InstagramLogo" />
              </a>
              <a target="_blank" href="https://www.twitter.com/">
                <GrTwitter className="TwitterLogo" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <BsLinkedin className="LinkedinLogo" />
              </a>
            </div>
          </div>
          <div className="CenterFooter">
            <h1 className="CenterFooterTitle">Useful Links</h1>
            <hr className="CenterHr" />
            <ul className="CenterFooterList">
              {links.map(({ name, url }) => {
                return (
                  <li className="UsefulLinks" key={name}>
                    <Link to={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="RightFooter">
            <h1 className="RightFooterTitle">Get In Touch</h1>
            <hr className="RightHr" />
            <ul className="RightFooterList">
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <BsFillTelephoneFill className="RightFooterIcon" />
                  <a
                    target="_blank"
                    href="Tel:9999988888"
                    className="RightFooterDescription Telephone"
                  >
                    9990565994
                  </a>
                </div>
              </li>
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <GrMail className="RightFooterIcon" />
                  <a
                    target="_blank"
                    href="mailto:solarverse@gmail.com"
                    className="RightFooterDescription"
                  >
                    solarverse@gmail.com
                  </a>
                </div>
              </li>
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <IoLocationSharp className="RightFooterIcon LocationIcon" />
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/28%C2%B045'02.0%22N+77%C2%B006'58.8%22E/@28.7505781,77.1163666,19.92z/data=!4m4!3m3!8m2!3d28.750556!4d77.116338"
                    className="RightFooterDescription Location"
                  >
                    Thriible Technologies, Delhi Technological University, Shahbad
                    Rohini, Delhi - 110042
                  </a>
                </div>
              </li>
            </ul>
            <div className="SocialMedia MobileSocial">
              <a target="_blank" href="https://www.facebook.com/">
                <BsFacebook className="FacebookLogo" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <BsInstagram className="InstagramLogo" />
              </a>
              <a target="_blank" href="https://www.twitter.com/">
                <GrTwitter className="TwitterLogo" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <BsLinkedin className="LinkedinLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="FooterBottom">
          <hr className="FooterBottomHr" />
          <p className="FooterBottomText">
            CopyRight © {year} SolarVerse. All Rights Reserved.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
