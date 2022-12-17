import React from 'react'
import './GoSolarW.css'
// import {family} from '../../../assets/images/family.svg' 
const GoSolar = () => {
  return (
    <div className="GoSolarContainer">
      <h1 className="offerTitle">Why Go Solar?</h1>
      <hr className="GoUnderline" />

      <div className="GoSolarFirst">
        <div className="GoFirstComp">
          <img
            src="https://www.computerhope.com/jargon/c/chart.gif"
            alt="image"
          />
        </div>
        <div className="GoSecondComp">
          <h2>Safest investments promising higher ROI</h2>
          <p>
            Within 3-4 year payback on investment and the being the safest
            investment of the era, solar solutions in India is your ultimate
            companion. These investments, once made, will pay you off for the
            next 25 years.
          </p>
        </div>
      </div>
      <div className="GoSolarFirst">
        <div className="GoSecondComp">
          <h2>Subsidy</h2>
          <p>
            Solar investments would never leave you wanting perks. Get almost
            40% as per the Governmental guidelines.
          </p>
        </div>
        <div className="GoFirstComp">
          <img
            src="https://www.shutterstock.com/image-photo/money-bag-word-subsidy-wooden-260nw-1279322677.jpg"
            alt="image"
          />
        </div>
      </div>

      <div className="GoSolarFirst">
        <div className="GoFirstComp">
          <img
            src="https://www.civilengineeringweb.com/wp-content/uploads/2019/10/what-is-net-zzero-energy-building.jpg"
            alt="image"
          />
        </div>
        <div className="GoSecondComp">
          <h2>Green Energy</h2>
          <p>
            Being the earth's most abundant energy source, solar power
            guarantees you the running of your entire home. It is a wholesome,
            greener way of preventing emissions. India's CO2 emission is
            increasing by 2.7% every year, which is a huge amount considering
            our booming population, hence Solar power is our most desired
            solution to this as it is capable of producing energy with
            zero-emission.
          </p>
        </div>
      </div>

      <div className="GoSolarFirst">
        <div className="GoSecondComp">
          <h2>Power for better future</h2>
          <p>
            Data collected by green think-tank Centre for Science and
            Environment (CSE) represents deaths attributable to ambient PM2.5 in
            India has increased by 2.5 times in last 20 years -- from 2,79,500
            in 1990 to 9,79,900 in 2019.
          </p>
        </div>
        <div className="GoFirstComp">
          <img
            src="https://img.freepik.com/free-vector/active-people-bikes-windmills-house-with-solar-panel-rooftop-flat-illustration_74855-10477.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default GoSolar