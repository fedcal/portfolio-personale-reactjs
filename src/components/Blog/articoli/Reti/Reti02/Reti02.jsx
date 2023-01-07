import React from 'react';
import {Helmet} from "react-helmet";
import HomeReti from '../../../../assets/rdc_1900.webp';
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import Figura1 from './Figura1.webp';
import '../../Articoli.css';
import '../Reti.css'
import { Link } from 'react-router-dom';
import Latex from 'react-latex-next'

function Reti02() {
    const frazione1=`$ \\frac{L}{R} $`
  return (
    <div>
        <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
     crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 2. I due tipi di commutazione</title>
            <meta name='keywords' content='Internet, host, sistemi periferici, rete di collegamenti, commutatori di pacchetti, internet service provider, ISP, TCP, transmission control protocol, IP, internet protocol, accesso aziendale, LAN, accesso via cavo, commutazione di pacchetto, commutazione di circuito, pacchetti, trasmissione store-and-forward, buffer, buffer di output, tabelle di inoltro, protocolli di instradamento, perdita di pacchetti, multiplexing a divisione di frequenza, FDM, multiplexing a divisione di tempo, TDM'/>
            <meta name='description' content='In questo articolo introduciamo i due tipi di commutazione di dati presenti in internete: la commutazione di pacchetto e la commutazione di circuito. Andremo a descriverle e a confrontare le lor caratteristiche.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 2. I due tipi di commutazione'/>
            <meta name='og:description' content='In questo articolo introduciamo i due tipi di commutazione di dati presenti in internete: la commutazione di pacchetto e la commutazione di circuito. Andremo a descriverle e a confrontare le lor caratteristiche.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 2. I due tipi di commutazione"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/rdc_1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/Figura1.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeReti} alt="Logo della pagina riferita alla materia reti di calcolatori" className='header-img' title='reti di calcolatori'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Reti-di-Calcolatori-Introduzione"> &#8592; Post precendente</Link>
                </div>
                
                <h1 className='header-title' itemprop="headline">2. I due tipi di commutazione</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-11-20"className='data' itemprop="datePublished" content="2022-11-20T07:30:00+08:00">20/11/2022</time>
                
                <h2 className='sub-heading'>Commutazione di pacchetto</h2>
                
                <p className='post-text'>Le applicazioni distribuite in rete scambiano dei messaggi, strutturati secondo le regole stabilite dallo sviluppatore, per poter comunicare tra loro. A prescindere dalle informazioni che il messaggio può contenere
                la sorgente suddivide quest'ultimo in parti più piccole note come <strong>pacchetti</strong>. Tra la sorgente e la destinazione, i pacchetti viaggiano attraverso collegamenti e <strong>commutatori di pacchetto</strong>, i quali sono costituiti da
                 <strong>router</strong> e <strong>commutatori a livello di collegamento</strong>. I pacchetti vengono trasmessi su ciascun collegamento a una velocità pari alla velocità totale di trasmissione del collegamento stesso. Indicando con L la
                dimensione del pacchetto in <i>bit</i> e con R la velocità del canale di trasmissione in <i>bps</i>, il tempo di trasmissione sarà pari a <Latex>{frazione1}</Latex> TEST secondi. La metodologia di trasmissione nella commutazione
                di pacchetti è la <strong>trasmissione store-and-forward</strong>, in base alla quale il commutatore di pacchetto deve ricevere l'intero pacchetto prima di poterne cominciare a trasmettere sul collegamento in uscita. La funzione di un router è
                quella di instradare i pacchetti in entrata verso il collegamento in uscita. </p>    
                
                <div className='box-image'>
                    <img loading="lazy" decoding="async" src={Figura1} alt="Commutazione di pacchetto store-and-forward" className='post-img2' title='Figura 1: Commutazione di pacchetto store-and-forward.'/>
                    <p className='image-capture'>Figura 1: Commutazione di pacchetto store-and-forward.</p>
                </div>

                <p className='post-text'>Un piccolo esempio può essere quello raffigurato nella <i>Figura 1</i>, in cui si ha un pc Sorgente, un pc Destinatario e un router che gestisce la comunicazione tra i due. All'istante T1 il oc sorgente ha inviato il primo pacchetto
                di dati, arrivato correttamente al router, il quale non può trasmetterlo al pc destinatario, in quanto deve attendere l'arrivo degli altri pacchetti rimanenti. Calcoliamo i tempi di percorrenza. All'istante 0, la sorgente inizia la sua trasmissione e all'istante
                <Latex>{frazione1}</Latex> secondi avrà trasmesso il primo pacchetto che verrà memorizzato all'interno del router (escludiamo i ritardi di propagazione). Il router a sua volta comincerà a trasmettere il pacchetto al destinatario solo quando riceverà tutti i bit
                relativi ad esso. All'istante 2<Latex>{frazione1}</Latex> il pacchetto sarà arrivato al destinatario. Quindi il <i>ritardo</i> di un pacchetto durante la trasmissione store-and-forward è di 2<Latex>{frazione1}</Latex>, mentre se il router riuscisse a inoltrare il 
                pacchetti appena lo riceve, il ritardo sarebbe pari a <Latex>{frazione1}</Latex>.</p>

                <p className='post-text'>Nella realtà, ogni commutatore di pacchetto può connettere più collegamenti, per ciascuno dei quali mantiene un <strong>buffer di output</strong>, anche detto comunamente coda di output, per mantenere i pacchetti da inoltrare. Questi buffer ricoprono un 
                importante ruolo nell'instradamento dei pacchetti, in quanto bisogna gestire una coda nel caso in cui un pacchetto in arrivo debba essere inoltrato su un canale già occupato. Si crea, quindi, un <i>ritardo di accodamento</i> nei buffer di output. Questo ritardo può accumularsi
                e il buffer prima o poi si saturerà, comportando la <strong>perdita dei pacchetti</strong> che verranno ricevuti successivamente.</p>

                <p className='post-text'>Per inoltrare un pacchetto, i router fanno utilizzo di particolari <i>tabelle di inoltro</i> e di <i>protocolli di instradamento</i>. Nella rete ogni sistema periferico ha un indirizzo chiamato indirizzo IP, ogni pacchetto che percorre la rete contiene nella propria
                intestazione l'indirizzo della sua destinazione con una particolare struttura. Nel momento in cui un pacchetto arriva in un router, quest'ultimo legge l'intestazione del pacchetto e lo indirizza nella giusta direzione. Ogni router ha una propria tabella di inoltro che mette 
                in relazione gli indirizzi di destinazione con i collegamenti in uscita. Le tabelle di inoltro vengono aggiornate attraverso diversi protocolli di instradamento, ognuno dei quali con caratteristiche diverse.</p>
                
                <h2 className='sub-heading'>Commutazione di circuito</h2>

                <p className='post-text'>Nelle reti a commutazione di circuito le risorse richieste lungo un percorso per consentire la communicazione tra sistemi periferici sono riservate per l'intera durata di sessione di communicazione. Prima di iniziare l'inoltro dei pacchetti, la rete deve stabilire
                una connessione tra mittente e destinatario, la quale verrà mantenuta per tutta la durata della comunicazione. Questa connessione prende il nome di <strong>circuito</strong>, nella quale la rete riserva una velocità costante mediante la quale il mittente può inviare dei messaggi al destinatario
                con una velocità di banda costante  e garantita. Un circuito all'interno della rete viene implementato tramite due tipologie di strategie: <strong>multiplexing a divisione di frequenza</strong> (FDM) o <strong>multiplexing a divisione di tempo</strong> (TDM). Nel' FDM, lo spettro di frequenza
                di un collegamento viene suddiviso tra le connessioni stabilite, dedicando a ciascuna di essa una banda di frequenza. Mentre nel TDM il tempo viene suddiviso in frame di durata fissa, a loro volta ripartiti in un numero fisso di slot temporali. In questo caso quando viene effettuato un collegamento, 
                la rete dedica uno slot temporale in ogni frame, i quali verranno dedicati esclusivamente a quella connessione. Un problema della commutazione di circuito è il <strong>periodo di silenzio</strong>, nel quale le risorse sono occupate ma inutilizzate.</p>

                <p className='post-text'>La commutazione di pacchetto non è adatta ai servizi in tempo reale a causa dei suoi ritardi end-to-end variabili e non determinabili a priori, ma allo stesso tempo viene offerta una migliore condivisione della larghezza di banda rispetto alla commutazione di circuito, infine 
                la commutazione di pacchetto risulta più semplice, più efficiente e meno costosa da implementare. Un difetto della commutazione a circuito è il fatto di pre-allocare l'uso del mezzo trasmissivo indipendentemente dalla richiesta attraverso collegamenti garantiti, ma non utilizzati, con una conseguente perdita
                di tempo.</p>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default Reti02