import React from 'react';
import BlogBoxes from '../components/BlogBoxes/BlogBoxes';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import {Helmet} from "react-helmet";

function Blog() {
  return (
    <div>

      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
        crossorigin="anonymous"></script>
        <script src="./script.js" crossorigin="anonymous"/>
        <title>Federico Calò - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Mondo informatico, blog personale, libri settoriali, libri informatica, hard skills, soft skills,blog informatica, appunti università, appunti universitari, reti di calcolatori, Libri, interazione uomo macchina, calcolabilità e complessità, ingegneria della conoscenza, study case, reti, commutazione, due tipi di commutazione,
        gestionale associativo, sviluppo, utente, agente, spazio di progettazione, progettazione, applicazioni, applicazioni prototipiche, architettura, funzioni agenti, controlli, azioni, appunti univeristari, università informatica'/>
        <meta name='description' content='Bog di Federico Calò, un posto dove condividere le proprie passioni.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Blog'/>
        <meta name='og:description' content='Bog di Federico Calò, un posto dove condividere le proprie passioni'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Blog"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <link rel="canonical" href="https://www.federicocalo.dev/appunti-universitari" />
      </Helmet>
      <Navbar/>
      <HeroImg2 heading="Blog,"text="il mio piccolo universo"/>
      <BlogBoxes/>
      <Footer/>
     
    </div>

  )
}

export default Blog