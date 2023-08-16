import React from 'react';
import UniBoxes from '../components/AppuntiUniversitari/UniBoxes';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import {Helmet} from "react-helmet";

function AppuntiUniversitari() {
  return (
    <div>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
        crossorigin="anonymous"></script>
        <script src="./script.js" crossorigin="anonymous"/>
        <title>Federico Calò -  Appunti Universitari</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Mondo informatico, blog personale, libri settoriali, libri informatica, hard skills, soft skills,blog informatica, appunti università, appunti universitari, reti di calcolatori, Libri, interazione uomo macchina, calcolabilità e complessità, ingegneria della conoscenza, study case, reti, commutazione, due tipi di commutazione,
        gestionale associativo, sviluppo, utente, agente, spazio di progettazione, progettazione, applicazioni, applicazioni prototipiche, architettura, funzioni agenti, controlli, azioni, appunti univeristari, università informatica'/>
        <meta name='description' content='Appunti Universitari scritti da Federico Calò relativi al dipartimento di informatica dell università Aldo Moro di Bari. Nella speranza che siano utili a più persone possibili.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Appunti Universitari'/>
        <meta name='og:description' content='Appunti Universitari scritti da Federico Calò relativi al dipartimento di informatica dell università Aldo Moro di Bari. Nella speranza che siano utili a più persone possibili.'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Appunti Universitari"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <link rel="canonical" href="https://www.federicocalo.dev/appunti-universitari" />
      </Helmet>
      <Navbar/>
      <HeroImg2 heading="Appunti Universitari,"text="la codivisione come forma di open source."/>
      <UniBoxes/>
      <Footer/>
     
    </div>
  )
}

export default AppuntiUniversitari