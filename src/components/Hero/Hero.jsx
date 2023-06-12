import { Link } from 'react-router-dom';
import './Hero.scss';
import vector from '../../assets/images/Vector.png'



export const Hero = () => {
	return (
		<div className="container">

		<div className='hero'>
			<aside>
				<Link to='/'>Woman’s Fashion</Link>
				<Link to='/'>Men’s Fashion</Link>
				<Link to='/'>Electronics</Link>
				<Link to='/'>Home & Lifestyle</Link>
				<Link to='/'>Medicine</Link>
				<Link to='/'>Sports & Outdoor</Link>
				<Link to='/'>Baby’s & Toys</Link>
				<Link to='/'>Groceries & Pets</Link>
				<Link to='/'>Health & Beauty</Link>
			</aside>
			<div className='carousel'>
      <div className='carousel_left'>
                      <div className='name'>
                          <span></span>
                          <p>iPhone 14 Series</p>
                      </div>
                      <h2>Up to 10% off Voucher</h2>
                      <div className='shop'>
                          <Link to='/product'>Shop Now</Link>
                          <img src={vector} alt='' />
                      </div>
                  </div>
          <div className="carousel_right">
  
          </div>
	

			</div>
		</div>
		</div>
	);
};




