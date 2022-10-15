import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import ServiziCard from '../components/Servizi/ServiziCard';

function Servizi() {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="SERVIZI"text="Ecco in cosa posso esserti d'aiuto"/>
        <ServiziCard/>
        <Footer/>
    </div>
  )
}

export default Servizi