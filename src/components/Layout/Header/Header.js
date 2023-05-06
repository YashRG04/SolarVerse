import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
  const location=useLocation();
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

  const isLoginPage = location.pathname === "/login";

  return (
    <Fragment>
      <div
        className={`NavContainer${
          isLoginPage || location.pathname === "/forgot" || location.pathname === "/reset" 
            ? " loginbg"
            : scrolled
            ? " scrolled"
            : ""
        }${showNavbar ? " fade-in" : ""}`}
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
          {/* <Link
            to="/"
            className="LogoText"
            style={{
              textDecoration: "none",
              color:
                scrolled ||
                isLoginPage ||
                location.pathname === "/forgot"
                || location.pathname === "/reset"
                  ? "black"
                  : "white",
            }}
          >
            SolarVerse
          </Link> */}
        </div>
        <div className="RightContainer">
          <NavLinks data={props.data} />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
