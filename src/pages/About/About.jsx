import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import PersonCarusel from '../../components/PersonCard/PersonCard'
import { SellCard } from '../../components/SellCard/SellCard'
import { Service } from '../../components/Service/Service'
import './about.scss'


export const About = () => {
  return (
    <>
<Header/>
<div className="container">

<div className='links_contact'>
					<Link className='noActive_link' to='/'>
						Home
					</Link>
					<span>/</span>
					<Link className='Active_link' to='/about'>
						About
					</Link>
				</div>
</div>
<div className="our_story container">
  <div className="story_left">
<h4>Our Story</h4>
<p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
<p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
  </div>
  <div className="story_right">


  </div>

</div>
<SellCard/>
<PersonCarusel/>
<Service/>


<Footer/>

    </>
  )
}
