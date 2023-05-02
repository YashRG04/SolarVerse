import React, { Fragment, useState } from "react";
import { CgCloseO, CgMenuRound } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import "./MobileHeader.css";
import NavLinks from "./NavLinks";

const MobileHeader = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const HamBurgerIcon = (
    <CgMenuRound
      size="2.5rem"
      color="#fdbd59"
      className="Hamburger"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  const CloseIcon = (
    <CgCloseO
      size="2.5rem"
      color="#fdbd59"
      className="Hamburger"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => {
    setOpen(false);
  };
  

  return (
    <Fragment>
      {open ? CloseIcon : HamBurgerIcon}
      <nav className="MobileNavbar">
        <div className="LeftContainer1">
          <img
            className="Logo1"
            src={logo}
            alt="Thriible Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          {/* <Link to="/" className="LogoText">
            SolarVerse
          </Link> */}
        </div>

        <div className="RightContainer1">
          {open && (
            <NavLinks
              className="ShowNav"
              data={props.data}
              isMobile={true}
              closeMobile={closeMobileMenu}
            />
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default MobileHeader;
