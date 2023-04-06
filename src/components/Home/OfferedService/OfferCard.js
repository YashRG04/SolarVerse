import React from 'react'
import './offerCard.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const OfferCard = ({name,image,id,desc}) => {

  const idLink=`/services/d${id+1}`

  return (
    <Link to={idLink}>
      <div className="Offercard">
        <div className="offerimagecontainer">
          <img className="ServiceImages" src={image} alt={name} />
        </div>
        <h1 className="OfferServiceName">{name}</h1>
        <p>Quick payback period of 3-4 years guaranteed, with pure profit following thereafter</p>
      </div>
    </Link>
  );
}

export default OfferCard