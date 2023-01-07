import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import ServiziCard from '../components/Servizi/ServiziCard';
import {Helmet} from "react-helmet";

function Servizi() {
  return (
    <div>
      <Helmet>
        <meta name='keywords' content='siti web, servizi, sviluppo software, analisi tecnica, Studio SEO, ottimizzazione, SEO, design, gestionali, Data mining, analisi dei dait, documentazione dettagliata, modelli di regressione, Data Visualitation'/>
        <meta name='description' content='Servizi offerti da Fedeirco Calò per la creazione di siti web, gestionali o software per la propria azienda. Analisi dei dati e documentazione tecnica funzionale.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Servizi'/>
        <meta name='og:description' content='Raccolta di progetti sviluppati in diverse tecnologie, le principali sono: Java, ReactJs, SpringBoot, HTML, CSS, Helmet.'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Servizi"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <title>Federico Calò - Servizi</title>
        <link rel="canonical" href="https://www.federicocalo.dev/servizi" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
     crossorigin="anonymous"></script>
      </Helmet>
        <Navbar/>
        <HeroImg2 heading="SERVIZI"text="Ecco in cosa posso esserti d'aiuto"/>
        <ServiziCard/>
        <Footer/>
    </div>
  )
}

export default Servizi