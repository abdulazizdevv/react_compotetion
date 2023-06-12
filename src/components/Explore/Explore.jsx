import { ExploreCard, ExploreCardOne } from '../ProductCard/ProductCard';
import './explore.scss';
import { products } from '../../../db/products.json';
import { useEffect, useRef, useState } from 'react';
import { Component } from 'react';
import Slider from 'react-slick';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';

export default class ExploreCarousel extends Component {
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
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
		};

		return (
			<div>
				<div className='my_arrows'>
					<button className='c_btn slider_btn prev_btn' onClick={this.previous}>
						<img src={prev} alt='prev' />
					</button>
					<button className='c_btn slider_btn next_btn' onClick={this.next}>
						<img src={next} alt='next' />
					</button>
				</div>
				<Slider {...settings} ref={(c) => (this.slider = c)}>
					{products.slice(0, 8).map((el) => (
						<ExploreCardOne el={el} />
					))}
				</Slider>
			</div>
		);
	}
}

export const Explore = () => {
	const [noOfElements, setnoOfElements] = useState(4);
	const [view, setView] = useState(false);
	const viewAllRef = useRef();

	const filtred = products.sort((a, b) => {
		console.log(a);
		return b.id - a.id;
	});
	const newarr = filtred.slice(0, noOfElements);

	useEffect(() => {}, [view]);
	const hendleView = (evt) => {
		evt.preventDefault();
		setView(true);
		setnoOfElements(noOfElements + 4);
	};

	return (
		<div className='container  '>
			<div className='best_box'>
				<div className='best_top'>
					<div>
						<button className='btn'>
							<h3 className='btn-text'>Our Products</h3>
						</button>
						<h3 className='main_title'>Explore Our Products</h3>
					</div>
				</div>

				<ExploreCarousel />
				<div className='view_cards'>
					<ExploreCard data={newarr} />
				</div>

                <button className='view_last' ref={viewAllRef} onClick={hendleView}>View All Products</button>

			</div>
		</div>
	);
};
