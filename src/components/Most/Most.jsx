import { ProductCard } from '../../components/ProductCard/ProductCard';
import { products } from '../../../db/products.json';
import { useEffect, useRef, useState } from 'react';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Countdown from 'react-countdown';
import './most.scss';
export const Most = () => {
	const [noOfElements, setnoOfElements] = useState(4);
	const [view, setView] = useState(false);

	// const [viewCarousel, setViewCarousel] = useState(false);
	const sales = products.slice(0, noOfElements);
	// console.log("slice" , sales);
	const viewSalesref = useRef();
	const mostCarousel = useRef();
	const vievButtonRef = useRef();
	const probaRef = useRef();

	useEffect(() => {
		viewSalesref.current.style.display = 'none';
		console.log(mostCarousel.current.style.display, 'nm');
		console.log(viewSalesref.current.style.display, 'sales');
		if (!view) {
			viewSalesref.current.style.display = 'none';
			mostCarousel.current.style.display = 'block';
		}
		if (view) {
			viewSalesref.current.style.display = 'flex';
			mostCarousel.current.style.display = 'none';
		}
	}, [view]);
	const hendleView = (evt) => {
		evt.preventDefault();
		setView(true);
		setnoOfElements(noOfElements + 4);
	};

	return (
		
	<div className="container">
			<div className='mostSales'>
			<button className='btn'>
				<h3 className='btn-text'>Today’s</h3>
			</button>
			<div className='flexer'>
				<div className='day'>
					<p>day</p>
					<p>Hours</p>
					<p>Minutes</p>
					<p>Seconds</p>
				</div>
				<Countdown ref={probaRef} date={Date.now() + 500000000} />
				<h3 className='most_title'>Most Sales </h3>
			</div>

			<div className='most_carousel' ref={mostCarousel}>
				<ProductCarousel />
			</div>
			<div className='view_cards' ref={viewSalesref}>
				<ProductCard data={sales} />
			</div>
			<button className='view' ref={vievButtonRef} onClick={hendleView}>
				View All Products
			</button>

			<div className='line_div'></div>
		</div>
	</div>
	);
};
