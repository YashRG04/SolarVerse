import React, { Fragment, useEffect } from "react";
import "./Subscription.css";
import CheckoutSteps from "./CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAlert } from "react-alert";

const Subscription = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const alert = useAlert();

  const PlanName = localStorage.getItem("PlanName");

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
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Features</th>
                    <th>Frequency</th>
                    <th>Select Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="plan-basic">
                    <td>Basic</td>
                    <td>₹ 4999</td>
                    <td>
                      <ul>
                        <li>One time service</li>
                        <li>Email support</li>
                        <li>Basic analytics</li>
                        <li>10GB storage</li>
                        <li>50GB bandwidth</li>
                      </ul>
                    </td>
                    <td>One Time</td>
                    <td>
                      <button className="btn-sign-up">Continue</button>
                    </td>
                  </tr>
                  <tr className="plan-premium">
                    <td>Premium</td>
                    <td>₹ 9999</td>
                    <td>
                      <ul>
                        <li>One Year Service</li>
                        <li>Email and phone support</li>
                        <li>Advanced analytics</li>
                        <li>50GB storage</li>
                        <li>Unlimited bandwidth</li>
                      </ul>
                    </td>
                    <td>Three Months</td>
                    <td>
                      <button className="btn-sign-up">Continue</button>
                    </td>
                  </tr>
                  <tr className="plan-enterprise">
                    <td>Enterprise</td>
                    <td>₹ 19999</td>
                    <td>
                      <ul>
                        <li>Three Year Service</li>
                        <li>Dedicated manager</li>
                        <li>Enterprise-level analytics</li>
                        <li>Custom storage and bandwidth</li>
                        <li>Priority support</li>
                      </ul>
                    </td>
                    <td>Three Months</td>
                    <td>
                      <button className="btn-sign-up">Continue</button>
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
