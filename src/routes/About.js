import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/Hero/HeroImg2';
import AboutContent from '../components/About/AboutContent';
function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Eccomi,"text="mi presento."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;