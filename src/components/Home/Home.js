import React from 'react'

import Jumbo from './Jumbotron'
import HowItWorks from './HowItWorks'
import Services from './Services'
import Profiles from './Profiles'
import USP from './USP'
// import Footer from './Footer'
import './home.css'


const Home = () => {
  return (
    <main>
      <Jumbo/>
      <Services/>
      <HowItWorks/>
      <Profiles/>
      
      <USP/>
      {/* <Footer/> */}
    </main>
  )
}

export default Home;
