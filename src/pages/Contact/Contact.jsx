import React from 'react';
import { Link } from 'react-router-dom';

import call from '../../assets/images/call.svg';
import email from '../../assets/images/email.svg';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import './contact.scss';

export const Contact = () => {
	return (
		<>
			<Header />

			<div className='container '>
				<div className='links_contact'>
					<Link className='noActive_link' to='/'>
						Home
					</Link>
					<span>/</span>
					<Link className='Active_link' to='/about'>
						Contanct
					</Link>
				</div>
				<div className='all_contact'>
					<div className='left'>
						<p className='left_p'>
							<img src={call} alt='icon' />
							Call To Us
						</p>
						<p className='left_txt'>We are available 24/7, 7 days a week.</p>
						<p className='left_txt end_txt'>Phone: +8801611112222</p>

						<hr />
						<p className='left_p email'>
							<img src={email} alt='icon' />
							Write To US
						</p>
						<p className='left_txt'>
							Fill out our form and we will contact <br /> you within 24 hours.
						</p>
						<p className='left_txt '>Emails: customer@exclusive.com</p>
						<p className='left_txt end_txt'>Emails: customer@exclusive.com</p>
					</div>
					<div className='rightContact right'>
						<form action='https://echo.htmlacademy.ru/'>
							<div className='all_input'>
								<input
									className='right_ctc'
									type='text'
									placeholder='Your Name '
									name='name'
									id=''
									required
								/>
								<input
									className='right_ctc'
									type='email'
									placeholder='Your Email '
									name='email'
									id=''
									required
								/>
								<input
									className='right_ctc'
									type='tel'
									placeholder='Your Phone '
									name='phone'
									id=''
									required
								/>
							</div>
							<textarea
								name='description'
								id=''
								placeholder='Your Massage'
								cols='30'
								rows='10'
								required
							></textarea>

							<button className='btn_ctc' type='submit'>
								Send Massage
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
