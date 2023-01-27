import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import '../../Articoli.css';
import {Link} from "react-router-dom";

function Corso1() {


  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - Corso 1</title>
            <meta name='keywords' content='calcolabilità, complessità, computabilità, teoria della computabilità, teoria della complessità, teoria degli automi, automi, insime, elementi, prodotto cartesiano, stringhe, grafo non orientato, grafo orientato, mappa, grado, alfabeto, stringa vuota, linguaggio'/>
            <meta name='description' content='In questo articolo introdurremo la materia della Calcolabilità e Complessità, dando una prima definizione delle teorie principali e definendo la terminologia e la notazione matematica che utilizzeremo per trattare questa materia. '/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 1. Introduzione alla calcolabilità e alla complessità'/>
            <meta name='og:description' content='In questo articolo introdurremo la materia della Calcolabilità e Complessità, dando una prima definizione delle teorie principali e definendo la terminologia e la notazione matematica che utilizzeremo per trattare questa materia. '/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 1. Introduzione alla calcolabilità e alla complessità"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Introduzione-alla-Calcolabilita-e-Complessita" />
        </Helmet>
        <Navbar/>
    
        <Footer/>
    </div>
  )
}

export default Corso1