import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(true);
  }, []);

  return (
    <Fragment>
      <div
        className={`NavContainer${scrolled ? " scrolled" : ""}${
          showNavbar ? " fade-in" : ""
        }`}
      >
        <div className="LeftContainer">
          <img
            className="Logo"
            src={logo}
            alt="SolarVerse Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <Link to="/" className="LogoText">
            SolarVerse
          </Link>
        </div>
        <div className="RightContainer">
          <NavLinks data={props.data} />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
