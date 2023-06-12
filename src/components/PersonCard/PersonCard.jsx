import { Component } from 'react';
import Slider from 'react-slick';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';
import media1 from '../../assets/images/media1.svg';
import media2 from '../../assets/images/media2.svg';
import media3 from '../../assets/images/media3.svg';
import './person.scss';

export default class PersonCarusel extends Component {
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
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 10000,
		};

		return (
			<div className='container add_person'>

				<Slider {...settings} ref={(c) => (this.slider = c)}>
					<div className='wrapper'>
						<div className='person_card'>
							<div className='person_top per_bg1'></div>
							<div className='person_body'>
								<h4>Tom Cruise</h4>
								<p>Founder & Chairman</p>
								<div className='media_person'>
									<img src={media1} alt='media1' />
									<img src={media2} alt='media2' />
									<img src={media3} alt='media3' />
								</div>
							</div>
						</div>
					</div>
                    <div className='wrapper'>
						<div className='person_card'>
							<div className='person_top per_bg2'></div>
							<div className='person_body'>
								<h4>Emma Watson</h4>
								<p>Managing Director</p>
								<div className='media_person'>
									<img src={media1} alt='media1' />
									<img src={media2} alt='media2' />
									<img src={media3} alt='media3' />
								</div>
							</div>
						</div>
					</div>
                    <div className='wrapper'>
						<div className='person_card'>
							<div className='person_top per_bg3'></div>
							<div className='person_body'>
								<h4>Tom Cruise</h4>
								<p>Founder & Chairman</p>
								<div className='media_person'>
									<img src={media1} alt='media1' />
									<img src={media2} alt='media2' />
									<img src={media3} alt='media3' />
								</div>
							</div>
						</div>
					</div>
                    <div className='wrapper'>
						<div className='person_card'>
							<div className='person_top per_bg2'></div>
							<div className='person_body'>
								<h4>Tom Cruise</h4>
								<p>Founder & Chairman</p>
								<div className='media_person'>
									<img src={media1} alt='media1' />
									<img src={media2} alt='media2' />
									<img src={media3} alt='media3' />
								</div>
							</div>
						</div>
					</div>
                    <div className='wrapper'>
						<div className='person_card'>
							<div className='person_top per_bg3'></div>
							<div className='person_body'>
								<h4>Tom Cruise</h4>
								<p>Founder & Chairman</p>
								<div className='media_person'>
									<img src={media1} alt='media1' />
									<img src={media2} alt='media2' />
									<img src={media3} alt='media3' />
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
