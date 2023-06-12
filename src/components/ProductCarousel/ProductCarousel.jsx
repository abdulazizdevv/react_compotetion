
import  { Component } from "react";
import Slider from "react-slick";
import { products } from '../../../db/products.json';
import {  ProductCardOne } from "../ProductCard/ProductCard";
import './prCarusel.scss'
import prev from '../../assets/images/prev.svg'
import next from '../../assets/images/next.svg'
export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
  
    };
 
    
    return (
      <div>
      <div className="my_arrows">
          <button className="c_btn slider_btn prev_btn" onClick={this.previous}>
            <img src={prev} alt="prev" />
          </button>
          <button className="c_btn slider_btn next_btn" onClick={this.next}>
          <img src={next} alt="next" />
           
          </button>
        </div>
        <Slider {...settings } ref={c => (this.slider = c)} >

       {
        products.slice(0,8).map(el =><ProductCardOne el={el}/>)
       }

 
        </Slider>
      </div>
    );
  }
}