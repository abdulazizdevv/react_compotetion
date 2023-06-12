import { Link, useParams } from "react-router-dom";
import { products } from "../../../db/products.json";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Component, useState } from "react";
import Slider from "react-slick";
import "./single.scss";
import starGold from "../../assets/images/star_gold.png";
import service from "../../assets/images/delivery.svg";
import starGrey from "../../assets/images/star_grey.png";
import { Best } from "../../components/ProductCard/ProductCard";
export default class VerticalCarusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export const SingleProduct = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const filtred = products.sort((a, b) => {
    console.log(a);
    return b.rating - a.rating;
  });
  const newarr = filtred.slice(0, 4);
  const filtredArr = products.filter((el) => el.id == id);
  console.log(filtredArr);
  const { images, title, description, stock, price, discountPercentage } =
    filtredArr[0];
  return (
    <>
      <Header />
      <div className="container">
        <div className="links_contact">
          <Link className="noActive_link" to="/account">
            Account
          </Link>
          <span>/</span>
          <Link className="noActive_link" to="/gaming">
            Gaming
          </Link>
          <span>/</span>
          <Link className="Active_link" to="/about">
            {filtredArr[0]?.title}
          </Link>
        </div>
        <div className="data_render_box">
          <div className="data_left">
            <div className="small_img">
              <img src={images[0]} alt="" />
            </div>
            <div className="small_img">
              <img src={images[1]} alt="" />
            </div>
            <div className="small_img">
              <img src={images[2]} alt="" />
            </div>
            <div className="small_img">
              <img src={images[3]} alt="" />
            </div>
          </div>
          <div className="data_center">
            <img src={images[0]} alt="" />
          </div>
          <div className="data_right">
            <h3>{title}</h3>
            <div className="rating">
              <div className="stars">
                <img src={starGold} alt="star" />
                <img src={starGold} alt="star" />
                <img src={starGold} alt="star" />
                <img src={starGold} alt="star" />
                <img src={starGrey} alt="star" />
              </div>
              <span>({stock})</span>
            </div>
            <span className="active_price">
              ${Math.floor((price / discountPercentage) * 10)}
            </span>
            <p className="desc_pr">{description}</p>
            <hr />
            <div className="colors">
              <p>Colours:</p>
              <div className="input_box">
                <div className="sircle1"></div>
                <div className="sircle2"></div>
              </div>
            </div>
            <div className="colors">
              <p>Size::</p>
              <div className="sizes">
                <div className="size">XS</div>
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
              </div>
            </div>
            <div className="conter_box">
              <div className="count_btns">
                <button
                  className="counter_bt"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <button className="count_ctx">{count}</button>
                <button
                  className="counter_bt inc"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <button className="view_all"><Link to="/cartPage">Buy Now</Link></button>
            </div>

            <img className="delivery" src={service} alt="pic" />
          </div>
        </div>
      </div>
      <div className="container  single_bottom ">
        <div className="best_box">
          <div className="best_top">
            <div>
              <button className="btn">
                <h3 className="btn-text">Related Item</h3>
              </button>
            </div>
          </div>
          <div className="view_cards">
            <Best data={newarr} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
