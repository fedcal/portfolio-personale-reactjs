import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/Hero/HeroImg2';
import Form from '../components/Contact/Form';
import {Helmet} from "react-helmet";
function Contact() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='siti web, servizi, sviluppo software, analisi tecnica, Studio SEO, ottimizzazione, SEO, design, gestionali, Data mining, analisi dei dait, documentazione dettagliata, modelli di regressione, Data Visualitation'/>
        <meta name='description' content='Servizi offerti da Fedeirco Calò per la creazione di siti web, gestionali o software per la propria azienda. Analisi dei dati e documentazione tecnica funzionale.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Contatti'/>
        <meta name='og:description' content='Sezione in cui contattare Federico Calò tramite e-mail o su Whatsapp'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Contatti"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <title>Federico Calò - Contatti</title>
        <link rel="canonical" href="https://www.federicocalo.dev/contatti" />
      </Helmet>
     <Navbar/>
     <HeroImg2 heading="CONTATTAMI"text="Compila il forum per lasciarmi un messaggio."/>
     <Form/>
     <Footer/>
   </div>
  )
}

export default Contact