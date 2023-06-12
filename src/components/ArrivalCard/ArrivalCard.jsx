import { Link } from "react-router-dom";
import "./Arrival.scss";

export const ArrivalCard = () => {
  return (
    <section className="feature_section">
      <div className="container">
        <button className="btn">
          <h3 className="btn-text">Featured</h3>
        </button>
        <h2 className="arrival_text">New Arrival</h2>
        <div className="arrivals">
  <div className="three">
  <div className="arrival_item">
    <h3 className="arrival_title">PlayStation 5</h3>
    <p className="arrival_desc">Black and White version of the PS5 coming out on sale.</p>
    <Link className="shopBtn" to="/product">Shop Now</Link>
  </div>
  </div>
  <div className="four">
  <div className="arrival_item">
    <h3 className="arrival_title">Women’s Collections</h3>
    <p className="arrival_desc">Featured woman collections that give you another vibe.</p>
    <Link className="shopBtn" to="/product">Shop Now</Link>
  </div>
  </div>
  <div className="five">
  <div className="arrival_item">
    <h3 className="arrival_title">Speakers</h3>
    <p className="arrival_desc">Amazon wireless speakers</p>
    <Link className="shopBtn" to="/product">Shop Now</Link>
  </div>
  </div>
  <div className="six">
  <div className="arrival_item">
    <h3 className="arrival_title">Perfume</h3>
    <p className="arrival_desc">GUCCI INTENSE OUD EDP</p>
    <Link className="shopBtn" to="/product">Shop Now</Link>
  </div>
  </div>
        </div>
      </div>
    </section>
  );
};
