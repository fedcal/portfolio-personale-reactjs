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
        <meta name="description" content="Sviluppo applicazioni web, sistemi gestionali, siti web per la propria attività. Linguaggi e Framework utilizzati: Java, Python, C, C++, Spring Boot, MERN."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Federico Calò: Federico Calò - Full Stack Developer, Software e Data analyst "/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Sviluppatore software con la passione dell'informatica sin dalle superiori. Mi piace divulgare contenuti scientifici a tema informatico e sviluppare software." />
        <meta name="description" content="Sviluppo applicazioni web, sistemi gestionali, siti web per la propria attività. Linguaggi e Framework utilizzati: Java, Python, C, C++, Spring Boot, MERN."/>
        <meta name="keywords" content="siti web, Java, C, C++, MongoDB, MySQL, MERN, JavaFX, Data Analysis, HTML, CSS, JavaScript, Spring Boot, React, Python, intelligienza artificiale, sistemi gestionali, applicazioni web, applicazioni cloud, Software Architecture, Software Developer. "/>
        <meta name="author" content="Federico Calò"/>
        <link rel="canonical" href="https://www.federicocalo.dev/" />
        <meta property="og:image" content="https://www.federicocalo.dev/public/profilo.jpg"/>

        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Full Stack Developer, Software e Data analyst "/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <title>Federico Calò - Full Stack Developer, Software e Data analyst</title>

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