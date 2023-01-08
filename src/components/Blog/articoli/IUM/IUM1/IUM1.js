import React from 'react';
import '../../Articoli.css';
import HomeIum from '../../../../assets/ium_1900.webp';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import Norman1 from '../../../../assets/ModelloNormanSod.webp';
import { Link } from 'react-router-dom';


function IUM1() {

  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 1. Introduzione all'interazione uomo macchina</title>
            <meta name='keywords' content='interazione uomo macchina, ium, appunti universitari, divario digitale, punto di pareggio, HCI, Human Interaction Design, iperfunzionalismo, complessità interna, complessità esterna, interfaccia d uso, sistema interattivo, punto funzione'/>
            <meta name='description' content='Articolo che introduce alla materia interazione uomo macchina.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 1. Introduzione all interazione uomo macchina'/>
            <meta name='og:description' content='Articolo che introduce alla materia interazione uomo macchina.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 1. Introduzione all interazione uomo macchina"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Interazione-uomo-macchina-Introduzione" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/rdc 1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/SchemaReti.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoViaCavo.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoAziendale.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIum} alt="Logo della pagina riferita alla materia reti di calcolatori" className='header-img' title='interazione uomo macchina'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <h1 className='header-title' itemprop="headline">1 - Introduzione all' Interazione Uomo Macchina</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-11-12" className='data' itemprop="datePublished" content="2022-11-01T07:30:00+08:00">12/11/2022</time>
                                
                <p className='post-text first-text'> Prima di entrare nel vivo della materia occorre definire alcuni concetti chiave sulla base dei quali si basa l'interazione uomo macchina. Con l'evoluzione tecnologica sono aumentati i prodotti che supportano le attività quotidiane dell'uomo e per migliorare l'interazione con essi sono
                state create delle interfacce d'uso tramite le quali si instaura una sorta di dialogo tra l'utente e il sistema. Per <strong>sistema interattivo</strong> intendiamo, in maniera generale, qualsiasi combinazione di componenti hardware e software che ricevono input da un utente umano e gli forniscono un output, allo scopo di supportare
                un compito. Questa definizione è molto ampia, in quanto vengono esclusi tutti quei sistemi che interagiscono con altri sistemi. Per <strong>interfaccia d'uso</strong> intendiamo l'insieme di tutti i componenti di un sistema interattivo (software o hardware) che forniscono all'utente informazioni e comandi per permettergli di effettuare specifici
                compiti attraverso il sistema. Mentre attraverso il termine <strong>compito</strong> si riferisce all'insieme di attività richieste per raggiungere un risultato.</p>
                
                <p className='post-text'>Un sistema interattivo possiede una caratteristica che lo caratterizza particolarmente: <strong>la complessità</strong>. Un sistema può essere complesso per diversi aspetti, in quanto può essere costituito da componenti che interagiscono fra loro in modo complicato, oppure supporta numerose attività. Si parla quindi
                di <strong>complessità interna</strong> (o strutturale), nel caso in cui il sistema abbia molte componenti, e di <strong>complessità esterna</strong> (o funzionale), se supporta numerose attività. Queste due dimensioni di complessità non sono correlate tra di loro, esistono sistemi con meccanismi semplici ma funzionalmente complessi e sistemi internamente complessi
                ma funzionalmente semplici. Per misurare la complessità funzionale di un sistema è stata definita l'unità di misura del <strong>punto funzione</strong> (function point) per misurare le funzionalità a disposizione dell'utente, in maniera indipendente dalla tecnologia utilizzata per realizzarla. Dal punto funzione si deduce la <i>complessità d'uso</i> di un
                sistema, indicando la maggiore o minore facilità con cui un utente è in grado di utilizzarlo. I concetti complessità d'uso e complessità funzionale sono concetti diversi e indipendenti. Un sistema può essere facile da usare nonostante le numerose funzioni possedute oppure possono avere funzioni semplici ma poco usabili.</p>
                
                <p className='post-text'>Inoltre tutti gli utenti sono diversi sia nelle loro caratteristiche individuali, sia nelle interazioni con il sistema. Questo pone alcuni problemi di complessità d'uso che non sono intrinseche allo strumento, ma che derivano dall'interazione fra lo strumento e il suo utente. L'interazione tra utente e sistema avviene attraverso
                diverse modalità a seconda delle necessità e delle caratteristiche di chi le utilizza. I prodotti tecnologici cambiano in continuazione, aggiungendo sempre nuove funzionalità e creando dispositivi con hardware e software che devono soddisfare le continue esigenze dei clienti che evolvono nel corso del tempo. In questo modo si crea un fenomeno che prende 
                il nome di <i>iperfunzionalismo</i>, dovuto anche al continuo sistema di cicli di feedback. I prodotti tecnologici tendono a fornire prestazioni in eccesso rispetto alle esigenze degli utenti.</p>

                <p className='post-text'>Donald Norman presentò un modello dell'evoluzione tipica dei prodotti ad alta tecnologia, mettendo a confronto le prestazioni del prodotto durante la sua evoluzione e le necessità degli utenti che il prodotto è in grado di soddisfare.</p>
                
                <div className='box-image'>
                    <img src={Norman1} alt="Schema di rete ad accesso in forma ibrida" className='post-img2'title='Figura 1: Evoluzione dei prodotti tecnologici secondo Norman'/>
                    <p className='image-capture'>Figura 1: Evoluzione dei prodotti tecnologici secondo Norman</p>
                </div>
                
                <p className='post-text'>Nella prima fase di vita di ogni prodotto le sue prestazioni sono inadeguate rispetto ai bisogni degli utenti. Il prodotto è ancora immaturo. In seguito all'evoluzione del prodotto, raggiunge il <i>punto di pareggio</i> in cui le prestazioni eguagliano i bisogni del suo utente tipico. Attraverso le future evoluzioni il prodotto possederà delle
                prestazioni maggiori rispetto a quelle richieste per soddisfare i bisogni degli utenti. Da un lato l'utente potrà trovare soluzioni adeguate per le esigenze più varie, dall'altra parte invece, il ciclo di vita di un prodotto sarà breve e il prodotto risulterà instabile, in quanto la sua complessità sempre più elevata aumenta la probabilità di trovare errori
                nel software.</p>

                <p className='post-text'>Un tema legato all'iperfunzionalismo è il tema del <strong>divario digitale</strong>, ovvero la distanza che esiste tra chi può accedere alle tecnologie e chi, purtroppo, no. Esistono diverse cause di questo problema, non solo economiche. Non possono accedervi anche che per motivi di lingua, formazione, cultura o per questioni geografiche.
                Il <i>gap generazionale</i> non è destinato a risolversi attraverso la scomparsa delle generazioni più anziane. Si possono mettere in campo diverse soluzioni, quali una maggiore divulgazione digitale, maggiori iniziative di E-learning e di alfabetizzazione informatica.</p>

                <p className='post-text'>La disciplina che si occupa della progettazione, valutazione e realizzazione di sistemi interattivi basati su computer destinati all'uso umano e dello studio dei principali fenomeni che li circondano, prende il nome di <strong>HCI</strong> (Human Computer Interaction). Questa disciplina ne coinvolge altre, quali l'ingegneria, la psicologia, la sociologia,
                l'antropologia e l'industrial design.</p>
                <div className="succ-post">
                    <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione">Post successivo &#8594;</Link>
                </div>
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default IUM1