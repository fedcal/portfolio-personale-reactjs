import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/Hero/HeroImg2';
function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Ciao,"text="mi presento."/>
      <Footer/>
    </div>
  )
}

export default About;