import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/Hero/HeroImg';
import Navbar from '../components/Navbar/Navbar';
import AboutContent from '../components/About/AboutContent';
import WorkCardPreview from '../components/Progetti/WorkCardPreview';

function Home() {
  return (
    <>
      <Navbar/> 
      <HeroImg/> 
      <AboutContent/>
      <WorkCardPreview/>
      <Footer/>
    </>
  )
}

export default Home;