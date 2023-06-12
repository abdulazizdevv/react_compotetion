import { Hero } from '../../components/Hero/Hero';
import './Home.scss';
import { Service } from '../../components/Service/Service';
import { CountDown } from '../../components/CountDown/CountDown';
import { Most } from '../../components/Most/Most';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { BestSelling } from '../../components/BestSelling/BestSelling';
import { Explore } from '../../components/Explore/Explore';
import { ArrivalCard } from '../../components/ArrivalCard/ArrivalCard';
import { Account } from '../Account/Account';
export const HomePage = () => {
	return (
		<div className=''>
			<Header />
			<Hero />
			<Most />
			
			<CategoryCard />
			<BestSelling/>
			<div id='cound_down'>
				<CountDown />
			</div>
			<Explore/>
			<ArrivalCard/>

			
			<div id='servise'>
				<Service />
			</div>
			<Footer />
		</div>
	);
};
