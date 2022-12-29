import React from 'react'
import './offerCard.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const OfferCard = ({name,image,id}) => {

  const idLink=`/services/d${id+1}`

  return (
    <Link to={idLink}>
      <div className="Offercard">
        <div className="offerimagecontainer">
          <img className="ServiceImages" src={image} alt={name} />
        </div>
        <h1 className="OfferServiceName">{name}</h1>
      </div>
    </Link>
  );
}

export default OfferCard