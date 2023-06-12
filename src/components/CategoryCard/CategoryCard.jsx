import './categoryCard.scss';
import category1 from '../../assets/images/Category1.svg';
import category2 from '../../assets/images/Category2.svg';
import category3 from '../../assets/images/Category3.svg';
import category4 from '../../assets/images/Category4.svg';
import category5 from '../../assets/images/Category5.svg';
import category6 from '../../assets/images/Category6.svg';

import { Component } from 'react';
import Slider from 'react-slick';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';
export default class CategoryCard extends Component {
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
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 10000,
		};

		return (
			<div className='container'>
				<div className='category_cards'>
					<button className='btn'>
						<h3 className='btn-text'>Categories</h3>
					</button>
					<h3>Browse By Category</h3>
				</div>
				<div className='my_arrows'>
					<button className='c_btn slider_btn prev_btn' onClick={this.previous}>
						<img src={prev} alt='prev' />
					</button>
					<button className='c_btn slider_btn next_btn' onClick={this.next}>
						<img src={next} alt='next' />
					</button>
				</div>
				<Slider {...settings} ref={c => (this.slider = c)} >
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category1} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category2} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category3} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category4} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category5} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
					
                    
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category6} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
                    <div className="wrapper">
                    <div className='category_card'>
						<img src={category3} alt='category' />
						<p>Phones</p>
					</div>

                    </div>
				</Slider>
                <div className="line"></div>
			</div>
		);
	}
}


