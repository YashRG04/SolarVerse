import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header.js";
import MobileHeader from "./components/Layout/Header/MobileHeader";
import Footer from "./components/Layout/Footer/Footer";
import Top from "./components/Home/Top";

import DomesticService from "./components/Solarservices/DomesticService/DomesticService";
import ScrollToTop from "./components/Layout/ScrollToTop";
import CommercialService from "./components/Solarservices/CommercialService/CommercialService";
import AboutUs from "./components/About/AboutUs";
import InfForm from "./components/Form/InfForm";

import { AccountBox } from "./components/Login/accountbox";
import Details from "./components/Checkout/Details";

import Mybook from "./components/Mybook/Mybook";
import MyBooking from "./components/Mybook/MyBooking";

import Shipping from "./components/Checkout/Shipping";
import Subscription from "./components/Checkout/Subscription";
import Confirm from "./components/Checkout/Confirm";
import MobileFooter from "./components/Layout/Footer/MobileFooter";
import { getUser } from "./service/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ForgotPassword from "./components/Password/ForgotPassword/ForgotPassword";
import SignUp from "./components/Login/accountbox/SignUp";
import Login from "./components/Login/accountbox/Login";
import ResetPassword from "./components/Password/ResetPassword/ResetPassword";
import { TokenService } from "./service/TokenService";
import Profile from "./components/Profile/Profile";

function App() {
  // const { isAuthenticated } = useSelector((state) => state.loginUser);
  const valid = TokenService.getAccessToken();
  // console.log("Validity: " + valid);
  const dispatch = useDispatch();

  const login = valid;

  const scrollToTop = "top";

  const location = window.location;

  useEffect(() => {
    if (valid) {
      dispatch(getUser());
    }
  }, [valid, dispatch]);

  // getting first name of user from local storage
  const User = useSelector((state) => state.getUser);

  console.log("Valid: " + valid);


  const user = User.user.first_name;
  // prevent from showing null in console

  console.log(user);

  return (
    <Router>
      <ScrollToTop />

      <Header className="Navbar" data={{ User: { user }, Login: { login } }} />

      <MobileHeader
        className="MobileNavbar"
        data={{ User: { user }, Login: { login } }}
      />

      <MobileFooter />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />

        <Route path="/services/d1" element={<DomesticService />} />
        <Route path="/services/d2" element={<DomesticService />} />
        <Route path="/services/d3" element={<DomesticService />} />
        <Route path="/services/d4" element={<DomesticService />} />
        <Route path="/form" element={<InfForm />} />
        {/* <Route path="/login" element={<AccountBox />} /> */}
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/mybookings" element={<MyBooking />} />
        <Route path="/booking" element={<Details />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile data={{User:{User}}} />} />
      </Routes>

      <Footer data={{ User: { user }, Login: { login } }} />

      <Top className="ScrollTop" scrollToTop={scrollToTop} />
    </Router>
  );
}

export default App;
