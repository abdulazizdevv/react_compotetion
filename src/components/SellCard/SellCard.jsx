import React from "react";

import home from "../../assets/images/home.svg";
import bag from "../../assets/images/bag.svg";
import price from "../../assets/images/price.svg";

import "./sell.scss";
export const SellCard = () => {
  return (
    <div className="all container">
      <div className="box">
        <img src={home} alt="home" />
        <h1 className="box_h1">10.5k </h1>
        <p className="box_p">Sallers active our site</p>
      </div>
      <div className="box">
        <img src={home} alt="home" />
        <h1 className="box_h1">33k </h1>
        <p className="box_p">Mopnthly Produduct Sale</p>
      </div>
      <div className="box">
        <img src={bag} alt="home" />
        <h1 className="box_h1">45.5k</h1>
        <p className="box_p">Customer active in our site</p>
      </div>
      <div className="box">
        <img src={price} alt="home" />
        <h1 className="box_h1">25k </h1>
        <p className="box_p">Anual gross sale in our site</p>
      </div>
    </div>
  );
};
