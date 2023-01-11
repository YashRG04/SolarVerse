import "./App.css";
import { BrowserRouter as Router, Form, Route, Routes } from "react-router-dom";
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

function App() {
  const user = "Yash";
  const login = false;

  const scrollToTop = "top";

  return (
    <Router>
      <ScrollToTop />
      <Header className="Navbar" data={{ User: { user }, Login: { login } }} />
      <MobileHeader
        className="MobileNavbar"
        data={{ User: { user }, Login: { login } }}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />

        <Route path="/services/d1" element={<DomesticService />} />
        <Route path="/services/d2" element={<DomesticService />} />
        <Route path="/services/d3" element={<DomesticService />} />
        <Route path="/services/d4" element={<DomesticService />} />
        <Route path="/form" element={<InfForm />} />
        <Route path="/login" element={<AccountBox />} />

        <Route path="/mybookings" element={<MyBooking />} />
        <Route path="/booking" element={<Details />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm" element={<Confirm />} />

        {/* <Route path="/services/c1" element={<CommercialService />} />
        <Route path="/services/c2" element={<CommercialService />} />
        <Route path="/services/c3" element={<CommercialService />} />
        <Route path="/services/c4" element={<CommercialService />} /> */}
      </Routes>

      <Footer data={{ User: { user }, Login: { login } }} />
      <Top className="ScrollTop" scrollToTop={scrollToTop} />
    </Router>
  );
}

export default App;
