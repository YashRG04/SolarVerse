import React, { Fragment, useState, useEffect } from "react";
import "./NavLinks.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const NavLinks = (props) => {
  const { user } = useSelector((state) => state.user);
  const userl = localStorage.getItem("user");
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "My Bookings", url: "/mybookings" },
    { name: "About Us", url: "/about" },
    {
      name: userl ? `Hello ${userl}` : "Login",
      url: userl ? "/profile" : "/login",
    },
  ];

  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <motion.ul className="NavLinks">
        {links.map(({ name, url }) => {
          return (
            <motion.li 
              className={`li2 ${isScrolled ? "scrolled1" : ""}`}
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
