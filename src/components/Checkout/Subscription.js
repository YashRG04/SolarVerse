import React, { Fragment, useEffect } from "react";
import "./Subscription.css";
import CheckoutSteps from "./CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const alert = useAlert();

  const PlanName = localStorage.getItem("PlanName");

  //   prohibit from going to shipping page without selecting a plan

  const planSelect1 = () => {
    localStorage.setItem("PlanSelected", "Basic");
    localStorage.setItem("PlanFeatures", BasicPlanFeatures);
    localStorage.setItem("PlanCost", BasicPlanCost);
    localStorage.setItem("PlanFrequency", BasicPlanFrequency);
    alert.success("Basic Plan Selected");
    navigate("/shipping")
  };

  const planSelect2 = () => {
    localStorage.setItem("PlanSelected", "Standard");
    localStorage.setItem("PlanFeatures", StandardPlanFeatures);
    localStorage.setItem("PlanCost", StandardPlanCost);
    localStorage.setItem("PlanFrequency", StandardPlanFrequency);
    alert.success("Standard Plan Selected");
    navigate("/shipping")
  };

  const planSelect3 = () => {
    localStorage.setItem("PlanSelected", "Premium");
    localStorage.setItem("PlanFeatures", PremiumPlanFeatures);
    localStorage.setItem("PlanCost", PremiumPlanCost);
    localStorage.setItem("PlanFrequency", PremiumPlanFrequency);
    alert.success("Premium Plan Selected");
    navigate("/shipping")
  };

  console.log(localStorage.getItem("PlanFeatures"));

  const BasicPlanFeatures = [
    "One time service",
    "Email support",
    "Basic analytics",
    "10GB storage",
    "50GB bandwidth",
  ];

  const BasicPlanCost = 4999;

  const BasicPlanFrequency = "One Time";

  const StandardPlanFeatures = [
    "One Year Service",
    "Email and Phone support",
    "Standard analytics",
    "20GB storage",
    "100GB bandwidth",
  ];

  const StandardPlanCost = 9999;

  const StandardPlanFrequency = "Three Months";

  const PremiumPlanFeatures = [
    "Three Year Service",
    "Dedicated Manager",
    "Enterprise analytics",
    "100GB storage",
    "500GB bandwidth",
  ];

  const PremiumPlanCost = 19999;

  const PremiumPlanFrequency = "Three Months";

  return (
    <Fragment>
      <div id="top">
        <CheckoutSteps activeStep={1} />
        <div className="Subscription">
          <div className="TitleContainer">
            <h1 data-aos="slide-left" className="SubscriptionTitle Title">
              SUBSCRIPTION PLANS
            </h1>
            <hr data-aos="slide-left" className="Underline" />
          </div>

          <h1 data-aos="slide-left" className="SelectedPlan">
            {PlanName}
          </h1>

          <div className="SubscriptionContainer">
            <div className="subscription-plans-container">
              <table className="subscription-plans">
                <thead data-aos="zoom-out-down">
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Features</th>
                    <th>Frequency</th>
                    <th>Select Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="plan-basic" data-aos="zoom-out-right">
                    <td>Basic</td>
                    <td>
                      <b>₹&nbsp;{BasicPlanCost}</b>
                    </td>
                    <td>
                      <ul>
                        {BasicPlanFeatures.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{BasicPlanFrequency}</td>
                    <td>
                      <button className="btn-sign-up" onClick={planSelect1}>
                        Continue
                      </button>
                    </td>
                  </tr>
                  <tr className="plan-premium" data-aos="zoom-out-right">
                    <td>Standard</td>
                    <td>
                      <b>₹&nbsp;{StandardPlanCost}</b>
                    </td>
                    <td>
                      <ul>
                        {StandardPlanFeatures.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{StandardPlanFrequency}</td>
                    <td>
                      <button className="btn-sign-up" onClick={planSelect2}>
                        Continue
                      </button>
                    </td>
                  </tr>
                  <tr className="plan-enterprise">
                    <td>Premium</td>
                    <td>
                      <b>₹&nbsp;{PremiumPlanCost}</b>
                    </td>
                    <td>
                      <ul>
                        {PremiumPlanFeatures.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{PremiumPlanFrequency}</td>
                    <td>
                      <button className="btn-sign-up" onClick={planSelect3}>
                        Continue
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Subscription;
