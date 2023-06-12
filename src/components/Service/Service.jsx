import React from "react";
import "./service.scss";
import trunc from "../../assets/images/trunc.svg";
import headPhone from "../../assets/images/headPhone.svg";
import check from "../../assets/images/check.svg";


export const Service = () => {
  return (
  <div className="service_box">
      <div className="all_icons container">
      <div className="icon">
        <img src={trunc} alt="icon" />
        <p className="icon_big">FREE AND FAST DELIVERY</p>
        <p className="icon_small">Free delivery for all orders over $140</p>
      </div>
      <div className="icon">
        <img src={headPhone} alt="icon" />
        <p className="icon_big">24/7 CUSTOMER SERVICE</p>
        <p className="icon_small">Friendly 24/7 customer support</p>
      </div>
      <div className="icon">
        <img src={check} alt="icon" />
        <p className="icon_big">MONEY BACK GUARANTEE</p>
        <p className="icon_small">We reurn money within 30 days</p>
      </div>
    </div>
  </div>
  );
};
