import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/Hero/HeroImg';
import Navbar from '../components/Navbar/Navbar';
import AboutContent from '../components/About/AboutContent';
import WorkCardPreview from '../components/Progetti/WorkCardPreview';
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Federico Calò - Progetti sviluppati</title>
        <meta name='keywords' content='HTML, ReactJs, sito web, website, Java, Spring Boot, Css, Javascript, Helmet, JavaScript, MySQL, Portfolio, Università di Bari, Università Aldo Moro di Bari, Università Aldo Moro, JavaFX, Python, sito web, website, MySQL, MVC, Protocollo TCP, Protocollo UDP,Portfolio'/>
        <meta name='description' content='Federico Calò, sviluppatore e analista software. Laureato presso la facoltà di Informatica a Bari, si dedica allo sviluppo di siti web e software in Reactjs, Java, SpringBoot e Python.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Progetti sviluppati'/>
        <meta name='og:description' content='Raccolta di progetti sviluppati in diverse tecnologie, le principali sono: Java, ReactJs, SpringBoot, HTML, CSS, Helmet.'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Progetti sviluppati"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <link rel="canonical" href="https://www.federicocalo.it/presentazioni" />
      </Helmet>
      <Navbar/> 
      <HeroImg/> 
      <AboutContent/>
      <WorkCardPreview/>
      <Footer/>
    </>
  )
}

export default Home;