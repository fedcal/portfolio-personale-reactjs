import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROGETTI" text="Una panoramica sui progetti che ho sviluppato."/>
      <Footer/>
    </div>
   
  )
}

export default Project