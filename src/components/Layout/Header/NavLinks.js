import React, { Fragment, useState, useEffect } from "react";
import "./NavLinks.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const NavLinks = (props) => {
  const { user } = useSelector((state) => state.getUser);
  const userl = JSON.parse(localStorage.getItem("user"));
  console.log(userl);
  const [isScrolled, setIsScrolled] = useState(false);
  // const {}
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/d1" },
    // { name: "My Bookings", url: "/mybookings" },
    { name: "About Us", url: "/about" },
    {
      name: user ? `Hello ${(user.first_name)}` : "Login",
      url: user ? "/profile" : "/login",
    },
  ];

  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <motion.ul className={`NavLinks ${location.pathname === "/login" ? " loginlink" : isScrolled ? "scrolled1" : ""}`}>
        {links.map(({ name, url }) => {
          return (
            <motion.li 
              className="li2"
              initial={animateFrom}
              animate={animateTo}
              key={name}
              onClick={() => props.isMobile && props.closeMobile()}
            >
              <Link to={url}>{name}</Link>
            </motion.li>
          );
        })}

        <motion.li initial={animateFrom} animate={animateTo} className="li">
          <Link to={props.data.Login.login ? "/profile" : "/login"}>
            {<FaUserAlt className="ProfileLogo" />}
          </Link>
        </motion.li>
      </motion.ul>
    </Fragment>
  );
};

export default NavLinks;
