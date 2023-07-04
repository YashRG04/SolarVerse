// import React, { Fragment, useEffect } from "react";
// import "./AddressCard.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const AddressCard = ({ address, onSelect, onEdit }) => {
//   //   const handleSelect = () => onSelect(address);
//   //   const handleEdit = () => onEdit(address);
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   return (
//     <Fragment>
//       <div data-aos="zoom-out-down" className="AddressCard">
//         <div className="AddressDetails">
//           <p className="AddressName">{address.address1}</p>
//           <p className="AddressName">{address.address2}</p>
//           <p className="AddressLine3">
//             {address.city},&nbsp;{address.state} &nbsp;{address.pinCode}
//           </p>
//         </div>
//         <div>
//           <button className="AddressButton" onClick={() => onSelect(address)}>
//             Select
//           </button>
//           <button className="AddressButton" onClick={() => onEdit(address)}>
//             Edit
//           </button>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default AddressCard;
