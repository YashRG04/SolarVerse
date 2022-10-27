import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";

const Header = (props) => {
  const navigate = useNavigate();

  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "My Bookings", url: "/bookings" },
    {
      name: props.data.Login.login ? `Hello ${props.data.User.user}` : "Login",
      url: props.data.Login.login ? "/profile" : "/login",
    },
  ];

  return (
    <Fragment>
      <div className="NavContainer">
        <div className="LeftContainer">
          <img
            className="Logo"
            src={logo}
            alt="SolarVerse Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="LogoText">SolarVerse</h1>
        </div>
        <div className="RightContainer">
          <ul className="NavLinks">
            {links.map(({ name, url }) => {
              return (
                <li key={name}>
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
            <li>
              <Link to={props.data.Login.login ? "/profile" : "/login"}>
                {<FaUserAlt />}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
