import React from 'react'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner'; 
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
// import styled constants



export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious rooms" subtitle="delux rooms starting at $299">
          <Link className="btn-primary" to="/">Back to home </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      
    </>
  )
}


Hero.defaultProps ={
  hero:'defaultHero'
}
