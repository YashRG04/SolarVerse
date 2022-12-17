import React from 'react'
import './offeredService.css'
import { OfferedServiceData } from "../../../assets/data/OfferedService";
import OfferCard from './OfferCard';
import { Link } from 'react-router-dom';

const OfferedService = () => {
  return (
    <div className="offerserviceContainer">
      <h1 className="offerTitle">Services Being Offered</h1>
      <hr className="Underline" />
      <h1 className="offerSubTitle">Maintainance</h1>

      <div className="OfferedS">
        {OfferedServiceData.map(({ name, image }) => {
          return <OfferCard name={name} image={image} />;
        })}
      </div>
      <div className="ButtonContainer">
        <Link className="OfferedButton" to="/constactus">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default OfferedService