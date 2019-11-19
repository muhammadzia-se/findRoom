import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';



export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="delux rooms starting at $299">
          <Link className="btn-primary" to="/">Back to home </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )
}

