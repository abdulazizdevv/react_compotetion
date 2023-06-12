import { Best } from '../ProductCard/ProductCard';
import './bestSelling.scss';
import { products } from '../../../db/products.json';
import { useEffect, useRef, useState } from 'react';

export const BestSelling = () => {
    const [noOfElements, setnoOfElements] = useState(4);
	const [view, setView] = useState(false);
	const viewAllRef = useRef();

    const filtred =products.sort((a,b)=>{
        console.log(a);
        return b.rating - a.rating

    })
	const newarr = filtred.slice(0, noOfElements);

    useEffect(() => {
	
	
	}, [view]);
    const hendleView = (evt) => {
		evt.preventDefault();
		setView(true);
		setnoOfElements(noOfElements + 4);
	};
    
	return (
		<div className='container  '>
        <div className="best_box">

			<div className='best_top'>
			<div>
            <button className='btn'>
					<h3 className='btn-text'>This Month</h3>
				</button>
				<h3 className='main_title'>Best Selling Products</h3>
            </div>

                <button className='view_all' ref={viewAllRef} onClick={hendleView}>View All</button>
			</div>
<div className="view_cards">
<Best data={newarr}/>
</div>
        </div>
           
		</div>
	);
};
