import React from 'react'
import Homeslide from './hs/hs'
import Nav from '../Nav/Nav'
import Goal from './goal/Goal'
import N_u from './News and update/N_u'
import Testinonial from './reviews/rewies'
import Footer  from './footer/footer'
const Home = () => {
  return (
    <div className='relative hero'>
      <Nav/>
      <Homeslide/>
      <Goal/>
      <N_u/>
      <Testinonial/>
      <Footer/>
      </div>
  )
}

export default Home