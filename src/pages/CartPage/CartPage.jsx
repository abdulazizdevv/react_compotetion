import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Cart.scss";
import monitor from "../../assets/images/monitor.png";
import deleteIcon from "../../assets/images/delete.svg";
import upIcon from "../../assets/images/up.svg";
import downIcon from "../../assets/images/down.svg";
import React, { useState } from "react";

export const CartPage = () => {
  const [count, setCount] = useState(1);
  const [allPrice, setAllPrice] = useState(650);
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
    setAllPrice(function (prevPrice) {
      return (prevPrice += 650);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
    setAllPrice(function (prevPrice) {
      if (count > 1) {
        return (prevPrice -= 650);
      } else {
        return (prevPrice = 650);
      }
    });
  }

  return (
    <>
      <Header />
      <section className="container cart_section">
        <div className="navigators">
          <Link className="homeNavigate" to="/">
            Home
          </Link>
          <span>/</span>
          <Link to="/cartPage">Cart</Link>
        </div>
        <div className="tableTop">
          <p className="tableTopItem">Product</p>
          <p className="tableTopItem">Price</p>
          <p className="tableTopItem">Quantity</p>
          <p className="tableTopItem">Subtotal</p>
        </div>
        <div className="tableItems">
          <ul>
            <li className="productList">
              <div className="singProd">
                <span>
                  <img src={deleteIcon} />
                </span>
                <img src={monitor} />
                LCD Monitor
              </div>
              <p className="price">$650</p>
              <div className="inc__dec">
                <span>{count}</span>
                <div className="inc_dec_control">
                  <button onClick={increment}>
                    <img src={upIcon} />
                  </button>
                  <button onClick={decrement}>
                    <img src={downIcon} />
                  </button>
                </div>
              </div>
              <p className="allPrice">${allPrice}</p>
            </li>
          </ul>
        </div>
        <div className="ChangeCart">
          <Link className="changeBtn" to="/">
            Return To Shop
          </Link>
          <Link className="changeBtn" to="/">
            Update Card
          </Link>
        </div>
        <div className="SubmitCart">
          <div className="Coupon">
            <input
              className="couponINPUT"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="applyCoupon">Apply Coupon</button>
          </div>
          <div className="Checkout">
            <h4 className="check_title">Cart Total</h4>
            <div className="check_sub check_sum">
              <p>Subtotal:</p>
              <p>${allPrice}</p>
            </div>
            <div className="check_sub check_ship">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="check_sub ">
              <p>Total:</p>
              <p>${allPrice}</p>
            </div>
            <div className="chBrtn">
              <Link className="applyCoupon checkOutBtn" to="/checkout">
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
