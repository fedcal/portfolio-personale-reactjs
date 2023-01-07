import React from 'react'
import Footer from '../../../../Footer/Footer'
import Navbar from '../../../../Navbar/Navbar'
import '../../Articoli.css'
import HomeLibri from '../../../../assets/libri_1900.webp';
import {Helmet} from "react-helmet";

function Libri01() {
  return (
    <div>
        <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
     crossorigin="anonymous"></script>
            <title>Federico Calò Blog - Consigli su libri settoriali - Pt. 1</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='libri, libri informatica, libri settoriali, libri settoriali informatica, pragmatic programmer, refactoring, arte del refactoring, clean architecture, Robert Martin, clean code, design pattern, codice pulito, principio SRP, principio OCP, principio LSP, best practice'/>
            <meta name='description' content='Raccolta di libri settoriali del campo informatico, utili a tutti coloro che si vogliono approcciare a questa disciplina con uno sguardo a 360 gradi.'/>
            <meta name='robots' content='index,follow'/>
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - Consigli su libri settoriali - Pt. 1'/>
            <meta name='og:description' content='Raccolta di libri settoriali del campo informatico, utili a tutti coloro che si vogliono approcciare a questa disciplina con uno sguardo a 360 gradi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - Consigli su libri settoriali - Pt. 1"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Libri-consigliati-01" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/libri_1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/SchemaReti.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoViaCavo.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoAziendale.webp" />

            <section className='post-header'>
                <div className='header-content post-container' itemscope itemtype="https://schema.org/ImageObject">
                    
                    <img loading="lazy" decoding="async" src={HomeLibri} alt="Logo della pagina riferita ai post sui libri" className='header-img' title='Consiglio su libri'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <h1 className='header-title' itemprop="headline">Consigli su libri settoriali - Pt. 1</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-11-05" className='data' itemprop="datePublished" content="2022-11-01T07:30:00+08:00">5/11/2022</time>
                
                <h2 className='sub-heading'>Introduzione</h2>
                
                <p className='post-text'>In questa serie di articoli vorrei portare alla vostra attenzione diverse letture tecniche che possono aiutarvi a migliorare la produzione del vostro codice o a prendere confidenza con una particolare tecnologia. Chi è del mestiere comprende quanto sia volatile il mondo della programmazione, ma occorre 
                avere una comprensione e una visione generale del mondo in cui ci si interfaccia e l'obiettivo consiste appunto nell'impostare delle pietre miliari consultabili in qualsiasi momento. <br/> Oggi vorrei proporvi delle letture abbastanza leggere, ma che sono sicuramente fondamentali per una buona scrittura del codice e come organizzare
                l'architettura del programma che state realizzando. Secondo il mio modesto parere, alcuni libri non devono mancare all'interno della libreria di un programmatore e sicuramente i seguenti sono alcuni di quelli. Comprendere i principi e le linee guida che sono alla base dello sviluppo professionale di software, devono andare di pari passo
                con le skills tecniche necessarie ad affrontarne lo sviluppo. </p>
                
                <h2 className='sub-heading'>Clean Code</h2>
                <p className='post-text'>Libro scritto da Robert Martin attraverso il quale vengono esposte le cosiddette best practice mediante le quali si scrive codice pulito, garantendo una corretta leggibilità del codice, non solo dai diversi sviluppatori che possono essere interessati al progetto, ma anche dallo stesso sviluppatore. Queste pratiche aiutano 
                il team di sviluppo a correggere più velocemente gli errori e semplificano il refactoring. Il volume è diviso in tre parti. La prima descrive i principi, i modelli e le pratiche per la scrittura di un codice pulito. La seconda presenta casi di studio di complessità crescente: ognuno è un esercizio che mira a trasformare del codice problematico in codice efficiente.
                La terza, racchiusa in un unico capitolo, raccoglie e sintetizza tutti gli insegnamenti della seconda parte. E' molto esaustivo e spiega in maniera progressiva, partendo dalla gestione dei commenti, delle funzioni e della formattazione, fino ad arrivare a concetti più avanzati quali la concorrenza, i casi di test, l'architettura client/server e molto altro.
                </p><br/>
                <a href="https://amzn.to/3NBrh9g"className='btn-shop' target="_blank" rel="noopener noreferrer">Link acquisto</a>
                
                <h2 className='sub-heading'>Clean Architecture</h2>
                <p className='post-text'>Dello stesso autore, Robert Martin, vi consiglio il libro Clean Architecture, nel quale vengono esplicati in maniera chiara i vari principi fondamentali per realizzare una buona architettura. Vengono spiegati il principio <strong>SRP</strong> (Single Responsibility Priciple), il principio <strong>OCP</strong> (Open-Closed Principle),
                il principio <strong>LSP</strong> (Liskov Substitution Principle) e altri altrettanto importanti. Viene definita l'architettura in se per se, andando a definire le principali caratteristiche, come interagiscono tra loro e le best practice su come creare delle architetture perfette. Infine vengono analizzate le componenti esterne che si devono interfacciare alla nostra
                architettura software quali il database, il web e i framework.</p><br/>
                <a href="https://amzn.to/3WCghNk"className='btn-shop' target="_blank" rel="noopener noreferrer">Link acquisto</a>
                
                <h2 className='sub-heading'>L'arte del refactoring</h2>
                <p className='post-text'>Questo libro, redatto da Martin Fowler, software developer per applicazioni enterprise, si concentra sulla capacità di riscrivere il codice per renderlo più leggibile ed efficiente. L'argomento viene affrontato passo passo, arricchendo la teoria di numerosi esempi pratici in diversi linguaggi. Indubbiamente vengono analizzati i principi del refactoring
                andando anche ad analizzare i vari test del codice. Si fa riferimento ai vari principi della programmazione ad oggetti (incapsulamento ed ereditarietà), per poi affrontare argomenti quali l'organizzazione dei dati e delle varie funzioni, la semplificazione della logica condizionale,
                la rifattorizzazione delle API. </p><br/>
                <a href="https://amzn.to/3U8TFSQ"className='btn-shop' target="_blank" rel="noopener noreferrer">Link acquisto</a>

                <h2 className='sub-heading'>Il Pragmatic Programmer</h2>
                <p className='post-text'>L'ultimo libro che mi sento di consigliarvi è "Il Pragmatic Programmer" di David Thomas e Andrew Hunt. Questo libro illustra un approccio strutturale alla pianificazione di un progetto software, andando ad analizzare i relativi componenti. Vengono fatti molti cenni teorici a teorie informatiche per 
                introdurre i concetti e analizzarli sotto i diversi aspetti (temporale, programmazione modulare, GUI). Analizza inoltre alcuni tools utili alla progettazione e individua le varie fasi del progetto.</p><br/>
                <a href="https://amzn.to/3UirIHU"className='btn-shop' target="_blank" rel="noopener noreferrer">Link acquisto</a>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default Libri01