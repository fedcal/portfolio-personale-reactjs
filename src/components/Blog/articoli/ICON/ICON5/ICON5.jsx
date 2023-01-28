import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON5() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 5. Ricerca di soluzioni</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale, orizzonte progettuale, funzione di transizione dello stato di credenza, a funzione di commando, funzione di percezione,
            sistema ibrido, ragionamento quantitativo, ragionamento qualitativo, punti di riferimento,termini sfocati,ragionamento per ordini di grandezza, derivati qualitativi, modello, resa dei conti,dead reckoning, sistema puramente reattivo,knowledge base '/>
            <meta name='description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 5. Ricerca di soluzioni'/>
            <meta name='og:description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 5. Ricerca di soluzioni"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Controlli-e-azioni-di-un-agente" />
        </Helmet>
        <Navbar/>
        <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_1900.webp" />
            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIcon} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/All-interno-di-un-agente:-architettura-e-le-funzioni-agente"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">5. Ricerca di soluzioni</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-07" className='data' itemProp="datePublished" content="2023-01-07T07:30:00+08:00">07/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                   Come definito nel precedente articolo, il corpo di un agente è suddiviso in attuatori sensori, i quali sono collegati a un sistema di percezione che crea una descrizione del mondo in un motore di ragionamento che implementa un controller, il quale a sua volta emette comandi agli attuatori. Questo tipo 
                   di architettura non è adatta per un agente, che potrebbe risultare lento, soprattutto per obiettivi complessi di alto livello. Un'architettura alternativa è costituita da una gerarchia  di controller, nella quale ogni strato vede il sottostante come un corpo virtuale dal quale riceve delle percezioni e 
                   verso il quale invia dei comandi. <strong> L'orizzonte progettuale </strong> al livello inferiore è molto più breve dell'orizzonte di pianificazione ai livelli superiori. Gli strati di livello inferiore funzionano molto più velocemente, reagiscono a quegli aspetti del mondo a cui è necessario reagire 
                   rapidamente e forniscono una visione più semplice del mondo agli strati superiori, nascondendo dettagli che non sono essenziali per gli strati superiori. Le persone devono reagire al mondo, al livello più basso, in frazioni di secondo, ma pianificare al livello più alto anche per decenni nel futuro.
                </p>
                
                
                
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON5