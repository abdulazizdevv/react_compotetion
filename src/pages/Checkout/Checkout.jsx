import pult from "../../assets/images/pult.svg";
import cart from "../../assets/images/cards.svg";
import "./checkout.scss";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <>
      <Header />
      <div className="container all_checkOut">
        <h1 className="leftCheck_h1">Billing Details</h1>
        <div className="checked_all">
          <div className="leftCheck">
            <form action="">
              <div className="all_inputs">
                <label htmlFor="name">First name</label>
                <input
                  className="ipt"
                  type="text"
                  name="first_name"
                  id="name"
                />
              </div>
              <div className="all_inputs">
                <label htmlFor="company">Company Name</label>
                <input
                  className="ipt"
                  type="text"
                  name="company"
                  id="company"
                />
              </div>
              <div className="all_inputs">
                <label htmlFor="addres">Street Address*</label>
                <input className="ipt" type="text" name="address" id="name" />
              </div>
              <div className="all_inputs">
                <label htmlFor="apartment">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  className="ipt"
                  type="text"
                  name="apartment"
                  id="apartment"
                />
              </div>
              <div className="all_inputs">
                <label htmlFor="city">Town/City*</label>
                <input className="ipt" type="text" name="city" id="city" />
              </div>
              <div className="all_inputs">
                <label htmlFor="number">Phone Number</label>
                <input className="ipt" type="text" name="number" id="number" />
              </div>
              <div className="all_inputs">
                <label htmlFor="email">Email Address</label>
                <input className="ipt" type="text" name="email" id="email" />
              </div>
              <div className="checked">
                <input type="checkbox" name="check" id="check" />
                <p className="saveChecked">
                  Save this information for faster check-out next time
                </p>
              </div>
            </form>
          </div>
          <div className="rightCheck">
            <div className="product_check">
              <img src={pult} alt="pic" />
              <p className="product_check_p">LCD Monitor</p>
              <p className="product_check_p price">$650</p>
            </div>
            <div className="product_check">
              <img src={pult} alt="pic" />
              <p className="product_check_p">LCD Monitor</p>
              <p className="product_check_p price">$650</p>
            </div>
            <div className="sub">
              <p className="product_check_p">Subtotal:</p>
              <p className="product_check_p">$1750</p>
            </div>
            <hr />
            <div className="sub">
              <p className="product_check_p">Shipping:</p>
              <p className="product_check_p">Free</p>
            </div>
            <hr />
            <div className="sub">
              <p className="product_check_p">Total:</p>
              <p className="product_check_p">$1750</p>
            </div>
            <div className="payment">
              <div className="payment_check">
                <input type="radio" name="radio" id="kash2" />
                <p className="product_check_p" id="kash2">
                  Bank
                </p>
              </div>
              <img src={cart} alt="cart" />
            </div>
            <div className="payment">
              <div className="payment_check">
                <input type="radio" name="radio" id="kash1" />
                <p className="product_check_p" id="kash1">
                  Cash on delivery
                </p>
              </div>
            </div>
            <div className="with_btn">
              <input
                className="apply"
                placeholder="Coupon Code"
                type="text"
                name="code"
                id=""
              />
              <button className="apply_btn"><Link to="/login">Apply Coupon</Link></button>
            </div>
            <button className="place_btn">Place Order</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
