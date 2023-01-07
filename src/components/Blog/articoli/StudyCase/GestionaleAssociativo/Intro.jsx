import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Navbar/Navbar';
import '../../Articoli.css';
import { Link } from 'react-router-dom';
import HomeStdy from '../caseStudy_1900.webp';


function Intro() {
  const schemaData={
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id":"https://www.federicocalo.dev/Gestionale-associazione-intro",
    "mainEntityOfPage":"https://www.federicocalo.dev/Gestionale-associazione-intro",
    "headline": "1. Introduzione allo sviluppo del gestionale associativo",
    "name": "1. Introduzione allo sviluppo del gestionale associativo",
    "description": "Analisi dei requisiti per lo sviluppo di un applicativo desktop per la gestione di un&#39;associazione. Vengono iillustrati i requisiti, lo stack tecnologico e il modello ER.",
    "datePublished": "2022-12-08",
    "dateModified": "2022-12-08",
    "author": {
      "@type": "Person",
      "@id": "https://www.federicocalo.dev/",
      "name": "Federico Calò",
      "url": "https://www.federicocalo.dev/",
      "image": {
          "@type": "ImageObject",
          "@id": "	https://www.federicocalo.dev/static/media/profilo.webp",
          "url": "	https://www.federicocalo.dev/static/media/profilo.webp",
          "height": "96",
          "width": "96"
      }
      },
      "url": "https://www.federicocalo.dev/Gestionale-associazione-intro",
      "isPartOf": {
        "@type" : "Blog",
        "@id": "https://www.federicocalo.dev/blog/",
        "name": "Federico Calo Blog",
        "publisher": {
          "@type": "Person",
          name: "Federico Calò",
          birthDate: "07/051998",
          email:"fedcal01@gmail.com",
          jobTitle: "Software Developre",
          knowsAbout: ["Developer", "Computer Science"],
          telephone: "+39 3332673965",
          url: "http://www.federicocalo.dev",
          hasOccupation:[ {
            "@type": "Occupation",
            "name": "Software Developer",
            "educationRequirements": "PhD in computer science"
          },
          {
            "@type": "Software Developer",
            "hasOccupation": {
            "@type": "Occupation",
            "name": "WebScience",
            },
            "startDate": "02022021",
            "endDate": "29102021"
          },
          {
            "@type": "Software Developer",
            "hasOccupation": {
            "@type": "Occupation",
            "name": "Links Management and Tecnology",
            },
            "startDate": "14062022",
          }
        ]
       },
       "keywords": [
        "gestionale",
        "gestionale associativo",
        "java",
        "javafx","sql", "modello er", "modello entità relazione", "requisiti",
        "fase implementativa", "stack tecnologico","integrità"
    ],
   },
  }
  return (
    <div>
        <Helmet>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 1. Introduzione allo sviluppo del gestionale associativo</title>
            <meta name='keywords' content='gestionale, gestionale associativo, java, javafx, sql, modello er, modello entità relazione, requisiti, fase implementativa, stack tecnologico, integrità '/>
            <meta name='description' content='Analisi dei requisiti per lo sviluppo di un applicativo desktop per la gestione di un&#39;associazione. Vengono iillustrati i requisiti, lo stack tecnologico e il modello ER.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 1. Introduzione allo sviluppo del gestionale associativo'/>
            <meta name='og:description' content='Analisi dei requisiti per lo sviluppo di un applicativo desktop per la gestione di un&#39;associazione. Vengono iillustrati i requisiti, lo stack tecnologico e il modello ER.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 1. Introduzione allo sviluppo del gestionale associativo"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Gestionale-associazione-intro" />
        
        </Helmet>
        <Navbar/>
        <article itemscope itemType="https://schema.org/NewsArticle">

            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/caseStudy_1900.webp" />
          

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeStdy} alt="Logo della pagina riferita allo study case" className='header-img' title='study case'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <h1 className='header-title' itemProp="headline">1. Introduzione allo sviluppo del gestionale associativo</h1>
                <span  itemProp="author" itemscope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time datetime="2022-12-08" className='data' itemProp="datePublished" content="2022-12-08T07:30:00+08:00">08/12/2022</time>
                                
                <p className='post-text first-text'>Faccio parte dell'associazione <a href='https://www.instagram.com/onstageaps/' target='_blank' rel="noopener noreferrer" aria-label="Onstage"className='link'>ONstage</a> e recentemente è sorta l'esigenza di organizzare le varie attività dell'associazione attraverso un gestionale 
                per poterle automatizzare. Così ho preso l'iniziativa e ho deciso di iniziare lo sviluppo. Prima di iniziare la <strong>fase implementativa</strong>,  ho chiesto quali fossero le reali necessità che dovevano essere poi trasformate in funzionalità del programma, chi doveva effettivamente utilizzare il gestionale e dove doveva essere
                installato l'applicativo. Dopo una lunga conversazione, in cui si è discusso anche del tema del trattamento dei dati, si è deciso di installare il programma in locale su un computer portatile dell'associazione, con dati gestiti in locale. L'utilizzo del gestionale sarà riservato al direttivo o solo da alcuni membri in 
                determinate circostanze, nonostante ciò si è deciso di non creare degli account per ciascuno degli amministratori. Questa prima fase è stata molto utile per definire quindi uno <strong>stack tecnologico</strong>: </p>

                <ul>
                  <li><i>Java</i> come linguaggio per implementare la logica all'interno del programma;</li>
                  <li><i>JavaFX</i>, per implementare l'interfaccia grafica</li>
                  <li><i>SQL</i> per la modellazione del database in cui verranno rappresentati i dati</li>
                </ul>

                <p className='post-text'>La base di dati in cui memorizzare i dati sarà in locale, in quanto il sistema verrà installato solo sul pc associativo. In futuro, se nascerà l'esigenza verranno spostati in un piccolo server associativo con il quale l'applicativo si interfaccerà. Questa soluzione è stata presa per garantire
                <i> l'integrità</i> e <i>la sicurezza</i> dei dati, nel rispetto delle leggi sulla tutela di essi. Successivamente sono state individuate diverse aree da implementare, ognuna delle quali corrisponde a una corrispettiva area associativa:</p>
                <ul>
                  <li>Area soci: area relativa alla gestione dei dati degli associati;</li>
                  <li>Area eventi: area dedita alla gestione degli eventi;</li>
                  <li>Area contabile: nella quale si rendicontano le spese, i ricavi e l'inventario</li>
                  <li>Area dev: contenente diverse funzionalità importanti per l'esportazione dei dati dal database o per il supporto di operazioni quali il ripristino di dati a causa di errori</li>
                </ul>
                
                <p className='post-text'>Si è anche espresso la volontà di avere delle statistiche sui dati raccolti, funzionalità che verrà implementata attraverso opportune integrazioni di opportune librerie sviluppate in Python o in Java. Entrando maggiormente nei dettagli delle varie aree.
                 <i>l'area soci</i> racchiuderà operazioni quali:</p>
                 <ul>
                    <li>L'aggiunta di nuovi soci</li>
                    <li>la visualizzazione delle informazioni relative a un socio</li>
                    <li>la modifica delle informazioni relative a un socio</li>
                    <li>l'eliminazione dei dati di un socio</li>
                    <li>l'esportazione in foglio excel dei dati relativi ai soci</li>
                 </ul>

                 <p className='post-text'><i>La sezione eventi</i> dovrà possedere le seguenti funzionalità:</p>
                 <ul>
                  <li>Aggiunta degli eventi con le relative informazioni</li>
                  <li>Visualizzazione degli eventi in corso e passati</li>
                  <li>Rendicontazione dei costi e ricavi di ciascuno degli eventi</li>
                  <li>Storico degli eventi</li>
                 </ul>
                 <p className='post-text'><i>La sezione contabile</i>, dovrà implementare:</p>
                 <ul>
                  <li>Aggiunta dei costi e ricavi ordinari e straordinari</li>
                  <li>Creazione e visualizzazione inventario</li>
                  <li>Visualizzazione di dati aggregati relativa ai costi e ricavi</li>
                 </ul>
                
                <p className='post-text'>La definizione dell'area dev è ancora in fase di definizione. Nel frattempo ho iniziato l'analisi e il setup dei dati all'interno del database. Inizialmente
                 ho creato <strong>uno schema ER</strong>, consultabile al <a className='link'  href='https://github.com/fedcal/GestionaleAssociazione/blob/master/schema/Entity%20Relationship%20db-ER%20-%20view%201.drawio.png' target='_blank' rel="noopener noreferrer" aria-label="modello ER">seguente link</a>,
                 andando a definire le varie entità che modellano le informazioni riguardanti i soci, gli eventi, l'inventario, la contabilità e le relative associazioni. Oltre alla forma dei contenitori, ho definito anche dei colori per distinguere le entità dalle relazioni e i relativi attributi. Questo è una 
                 prima bozza della struttura implementativa, in quanto i requisiti funzionali di un sistema sono volatili e quindi potranno cambiare con il tempo.</p>
                 
                 <div className="succ-post">
                    <Link to="/Gestionale-associazione-diagramma-entita-relazione">Post successivo &#8594;</Link>
                 </div>
               </section>
        </article>
        <Footer/>
    </div>
  )
}

export default Intro