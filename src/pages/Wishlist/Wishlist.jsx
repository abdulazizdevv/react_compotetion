import './wishlist.scss';
import { products } from '../../../db/products.json';
import { useEffect, useRef, useState } from 'react';
import { Best2 } from '../../components/ProductCard/ProductCard';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Wishlist = () => {
	const [noOfElements, setnoOfElements] = useState(4);
	const [view, setView] = useState(false);
	const viewAllRef = useRef();

	const filtred = products.sort((a, b) => {
		console.log(a);
		return b.rating - a.rating;
	});
	const newarr = filtred.slice(0, noOfElements);

	useEffect(() => {}, [view]);
	const hendleView = (evt) => {
		evt.preventDefault();
		setView(true);
		setnoOfElements(noOfElements + 4);
	};

	return (
		<>
			<Header />

			<div className='container  '>
      <div className="wish_titles">
        <p>Wishlist (4)</p>
        <button className='view_all'>Move All To Bag</button>
      </div>
      <div className='view_cards '>
							<Best2 data={filtred.slice(20 ,24)} />
					</div>
				<div className='best_box'>

					<div className='best_top'>
						<div>
							<button className='btn'>
								<h3 className='btn-text'>Just For You</h3>
							</button>
						</div>

						<button className='view_all' ref={viewAllRef} onClick={hendleView}>
							See All
						</button>
					</div>
					<div className='wishlist'>
						<div className='view_cards '>
							<Best2 data={newarr} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
