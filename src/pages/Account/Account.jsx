import { Link } from "react-router-dom";
import "./account.scss";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export const Account = () => {
  return (
    <>
    <Header/>
      <div className="container">
        <div className="links_contact">
          <Link className="noActive_link" to="/">
            Home
          </Link>
          <span>/</span>
          <Link className="Active_link" to="/account">
            My Account
          </Link>
        </div>

        <div className="account">
          <div className="account_right">
            <h5 className="account_right_h5">Manage My Account</h5>
            <div className="link_p">
              <p className="account_right_p">My Profile</p>
              <p className="account_right_p">Address Book</p>
              <p className="account_right_p">My Payment Options</p>
            </div>
            <h5 className="account_right_h5">My Orders</h5>
            <div className="link_p">
              <p className="account_right_p">My Returns</p>
              <p className="account_right_p">My Cancellations</p>
            </div>
            <h5 className="account_right_h5">My WishList</h5>
          </div>
          <div className="account_left">
            <h5 className="account_left_h5">Edit Your Profile</h5>

            <form action="">
              <div className="top_ipt">
                <div className="account_left_inputs">
                  <label className="account_label" htmlFor="fn">
                    First Name
                  </label>
                  <input
                    className="account_input"
                    placeholder="Md"
                    type="text"
                    name="fn"
                    id="fn"
                  />
                </div>
                <div className="account_left_inputs">
                  <label className="account_label" htmlFor="fn">
                    Last Name
                  </label>
                  <input
                    className="account_input"
                    placeholder="Md"
                    type="text"
                    name="fn"
                    id="fn"
                  />
                </div>
                <div className="account_left_inputs">
                  <label className="account_label" htmlFor="fn">
                    Email
                  </label>
                  <input
                    className="account_input"
                    placeholder="rimel1111@gmail.com"
                    type="email"
                    name="fn"
                    id="fn"
                  />
                </div>

                <div className="account_left_inputs">
                  <label className="account_label" htmlFor="fn">
                    Address
                  </label>
                  <input
                    className="account_input"
                    placeholder="Kingston, 5236, United State"
                    type="text"
                    name="fn"
                    id="fn"
                  />
                </div>
              </div>
              <div>
                <div className="account_pass">
                  <label className="pass_label" htmlFor="pass">
                    Password Changes
                  </label>
                  <input
                    placeholder="Current Password"
                    className="pass_input"
                    type="password"
                    name="pass"
                    id="pass"
                  />
                  <input
                    placeholder="New Password"
                    className="pass_input"
                    type="password"
                    name="pass"
                    id="pass"
                  />
                  <input
                    placeholder="Confirm New Password"
                    className="pass_input"
                    type="password"
                    name="pass"
                    id="pass"
                  />
                </div>
              </div>

              <div className="bottom_btn">
                <p className="cancel">Cancel</p>
                <button className="btn_account">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  );
};
