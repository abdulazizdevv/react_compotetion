import './product.scss';
import starGold from '../../assets/images/star_gold.png';
import starGrey from '../../assets/images/star_grey.png';
import heard from '../../assets/images/heard.svg';
import eye from '../../assets/images/eye.svg';
import { Link } from 'react-router-dom';

export const ProductCard = ({ data }) => {
	return (
		<>
				{data.map((el) => (
					<Link to={`/product/` + el.id} className='pr_card' key={el.id}>
						<div className='card_top'>
							<div className='round heard'>
								<img src={heard} alt='heard' />
							</div>
							<div className='round eye'>
								<img src={eye} alt='eye' />
							</div>
							<span className='slidka'>
								-{Math.floor(el.discountPercentage)}%
							</span>
	
							<div className='top_img'>
								<img src={el.images[0]} alt='' />
							</div>
							<button className='add_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
							<div className='price'>
								<span className='active_price'>
									${Math.floor((el.price / el.discountPercentage) * 10)}
								</span>
								<span className='noactive_price'>${el.price}</span>
							</div>
							<div className='rating'>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						</div>
					</Link>
				))}

		</>
	)
};
export const ExploreCard = ({ data }) => {
	console.log(data);
	return (
		<>
				{data.map((el) => (
					<Link to={`/product/` + el.id} key={el.id} className='pr_card'>
						<div className='card_top'>
							<div className='round heard'>
								<img src={heard} alt='heard' />
							</div>
							<div className='round eye'>
								<img src={eye} alt='eye' />
							</div>
							<span className='slidka_new'>
								New
							</span>
	
							<div className='top_img'>
								<img src={el.thumbnail} alt='' />
							</div>
							<button className='add_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
						
							<div className='rating'>
							<p className='new_pr'>${Math.floor((el.price / el.discountPercentage) * 10)}</p>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						<div className="input_box">
						<div className="sircle1"></div>
						<div className="sircle2"></div>
						</div>
						</div>
					</Link>
			

				))}

		</>
	)
};
export const Best = ({ data }) => {
	
	return (
		<>
				{data.map((el) => (
					<Link to={`/product/` + el.id} className='pr_card' key={el.id}>
						<div className='card_top'>
							<div className='round heard'>
								<img src={heard} alt='heard' />
							</div>
							<div className='round eye'>
								<img src={eye} alt='eye' />
							</div>
						
	
							<div className='top_img'>
								<img src={el.images[0]} alt='' />
							</div>
							<button className='add_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
							<div className='price'>
								<span className='active_price'>
									${Math.floor((el.price / el.discountPercentage) * 10)}
								</span>
								<span className='noactive_price'>${el.price}</span>
							</div>
							<div className='rating'>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						</div>
					</Link>
				))}

		</>
		
	)
};
export const Best2 = ({ data }) => {
	
	return (
		<>
				{data.map((el) => (
					<Link to={`/product/` + el.id} className='pr_card' key={el.id}>
						<div className='card_top'>
							<div className='round heard'>
							<img src={eye} alt='eye' />
							</div>
							
						
	
							<div className='top_img'>
								<img src={el.images[0]} alt='' />
							</div>
							<button className='add_card ad_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
							<div className='price'>
								<span className='active_price'>
									${Math.floor((el.price / el.discountPercentage) * 10)}
								</span>
								<span className='noactive_price'>${el.price}</span>
							</div>
							<div className='rating'>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						</div>
					</Link>
				))}

		</>
		
	)
};
export const ProductCardOne = ({ el }) => {
	return (
		<>
					<Link to={`/product/` + el.id} key={el.id} className='pr_card'>
						<div className='card_top'>
							<div className='round heard'>
								<img src={heard} alt='heard' />
							</div>
							<div className='round eye'>
								<img src={eye} alt='eye' />
							</div>
							<span className='slidka'>
								-{Math.floor(el.discountPercentage)}%
							</span>
	
							<div className='top_img'>
								<img src={el.images[0]} alt='' />
							</div>
							<button className='add_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
							<div className='price'>
								<span className='active_price'>
									${Math.floor((el.price / el.discountPercentage) * 10)}
								</span>
								<span className='noactive_price'>${el.price}</span>
							</div>
							<div className='rating'>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						</div>
					</Link>
			

		</>
		
	)
};

export const ExploreCardOne = ({ el }) => {
	return (
		<>
					<Link to={`/product/` + el.id} key={el.id} className='pr_card'>
						<div className='card_top'>
							<div className='round heard'>
								<img src={heard} alt='heard' />
							</div>
							<div className='round eye'>
								<img src={eye} alt='eye' />
							</div>
						
	
							<div className='top_img'>
								<img src={el.images[0]} alt='' />
							</div>
							<button className='add_card' dataset-pr-id={el.id}>Add To Cart</button>
						</div>
						<div className='card_body'>
							<h4>{el.title}</h4>
						
							<div className='rating'>
							<p className='new_pr'>${Math.floor((el.price / el.discountPercentage) * 10)}</p>
								<div className='stars'>
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGold} alt='star' />
									<img src={starGrey} alt='star' />
								</div>
								<span>({el.stock})</span>
							</div>
						</div>
					</Link>
			

		</>
		
	)
};