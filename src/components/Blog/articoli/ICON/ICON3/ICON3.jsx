import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import * as Latex from 'react-latex'
import 'katex/dist/katex.min.css'

function ICON3() {
    const appartiene=`$$ \\in $$`;

    const funzioneCredenza=`$$ remember: S \\times P \\rightarrow S $$`;
    const funzioneCredenza2=`$$ s_{t+1} = remember(s_t,p_t)$$`;
    const membro1=`$$s_{t+1}$$`;
    const membro2=`$$s_t$$`;
    const membro3=`$$p_t$$`;

    const funzioneComand=`$$ comand: S \\times P \\rightarrow C$$`;
    const funzioneComand2=`$$ c_t = comand(s_t,p_t)$$`;
    const membro4=`$$c_t$$`;

  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 3. All'interno di un agente: architettura e le funzioni agenti</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale,effettori,attuatori,sistema ad agenti, stimoli,body,percezioni ,body ,comandi,percept trace,percept stram,traccia di comando,trasduzione,funzione commando '/>
            <meta name='description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 3. All&#39;interno di un agente: architettura e le funzioni agenti'/>
            <meta name='og:description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 3. All&#39;interno di un agente: architettura e le funzioni agenti"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/All-interno-di-un-agente:-architettura-e-le-funzioni-agente" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIcon} alt="Logo della pagina riferita alla materia ingegneria della conoscenza" className='header-img' title='Ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Spazio-di-progettazione-di-un-agente"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">3. All'interno di un agente: architettura e le funzioni agenti</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2023-01-03"className='data' itemprop="datePublished" content="2023-01-03T07:30:00+08:00">03/01/2023</time>
                                
                <p className='post-text first-text'>
                    Gli agenti sono costituiti da un corpo che può essere costituito da diversi elementi, concreti o meno. Quando un agente ha un corpo fisico, esso prende il nome di <strong>agente incarnato</strong>, un esempio sono i robot. Gli agenti ricevono informazioni tramite i <i>sensori</i>, le quali verranno elaborate e 
                    condizioneranno le azioni che l'agente effettuerà. Vi sono diversi tipi di sensori e producono delle informazioni deboli, del tipo "il sensore S ha prodotto il valore v". In ultima analisi, un agente è costituito da <strong>attuatori</strong> o <strong>effettori</strong>, mediante i quali l'agente agisce nell'ambiente. 
                    Gli agenti inviano dei comandi agli attuatori ed eseguono azioni per trovare maggiori informazioni sul mondo.
                </p>

                <p className='post-text'>
                    L'insieme di uno o più agenti e l'ambiente in cui operano prende il nome di <strong>sistema ad agenti</strong>. L'agente riceve degli <strong>stimoli</strong> dall'ambiente ed esegue delle <strong>azioni</strong> in esso. Un agente è costituito da un <strong>body</strong> (corpo) e da un <strong>controller</strong>. Il 
                    controller riceve delle <strong>percezioni</strong> dal corpo e risponde con dei <strong>comandi</strong>. Vi sono diversi tipi di stimoli, dalla luce al suono, fino a considerare le informazioni ottenute da un database o da un sito. Queste informazioni vengono elaborate dal controller, il quale decide le azioni che l'agente deve 
                    compiere. Possiamo considerare il controller come il cervello dell'agente.
                </p>

                <p className='post-text'>
                    Un'azione di un agente può essere definita come una funzione dei suoi input. Definiamo <i>T</i> come l'insieme dei punti <strong>temporali</strong>, supponiamo che questo insieme è <i>totalmente ordinato</i> e ha una metrica per misurare la distanza temporale tra due punti. Inoltre l'insieme T è un insieme <i>discreto</i>, composto da un numero 
                    finito di punti temporali, in più deve essere <i>denso</i>, ovvero deve essere presente sempre un punto temporale tra due punti temporali qualsiasi. Supponendo un punto di partenza convenzionale pari a 0 e definendo l'insieme <i>P</i> come l'insieme di tutti i possibili precetti, si può definire una funzione denominata 
                    <strong> percept trace</strong> o <strong>percept stram</strong>, la quale opera da T in P e specifica ciò che viene osservato in ogni momento. Se vogliamo essere precisi, possiamo definire l'insieme <i>C</i> costituito da tutti i comandi e definire una funzione denominata <strong>traccia di comando</strong>, la quale parte 
                    da T e arriva in C. Questa funzione è utile per specificare ogni punto temporale. Una traccia di percezione è quindi una sequenza di tutte le percezioni passate, presenti e future ricevute dal controller. Una traccia di comando è la sequenza di tutti i comandi passati, presenti e futuri emessi dal controller. Per tradurre 
                    le tracce percettive in tracce comando viene utilizzata una funzione denominata <strong>trasduzione</strong>.
                </p>

                <p className='post-text'>
                    Gli agenti agiscono nel tempo, quindi non possono vedere tracce percettive complete. A un tempo <i>t <Latex className='latex'>{appartiene}</Latex> T</i>, un agente può osservare solo il valore della traccia fino al tempo t e i suoi comandi non possono dipendere da percezioni  di tempo dopo il tempo t. Definiamo una trasduzione 
                    <strong> causale</strong> quando per tutti i tempi t, il comando alla volta t dipende solo dalle percezioni fino al tempo compreso t. Possiamo affermare che un controller è quindi un'implementazione di una trasduzione causale. Si delinea così la <strong>storia</strong> di un agente al tempo t tramite la traccia percettiva, storia 
                    che viene mappata dalla trasduzione causale. Essendo che un agente non ha accesso alla sua intera storia, la funzione di trasduzione causale non può essere implementata direttamente. Occorre quindi creare una sorta di <strong>memoria</strong> o <strong>stato di credenza</strong>, in cui l'agente salva nel momento t tutte le informazioni 
                    che l'agente ha ricordato dalle volte precedenti. Lo stato di credenza può contenere qualsiasi tipo di informazione, però è soggettata alla memoria dell'agente e ai limiti di elaborazione. 
                </p>

                <p className='post-text'>
                    Uno stato di credenza codifica ciò che l'agente <i>desidera</i>, gli <i>obiettivi</i> che deve ancora raggiungere, le sue <i>convinzioni</i> sullo stato del mondo e le sue <i>intenzioni</i> o <i>passi</i> che intendere compiere. Un controllore mantiene lo stato di convinzione dell'agente e determina quale comando emettere in ogni momento. 
                    Le informazioni che ha a disposizione quando deve farlo sono il suo stato di credenze e le sue attuali percezioni. In questi casi si definisce una <strong> funzione di transizione dello stato di credenza</strong>: <Latex className='latex'>{funzioneCredenza}</Latex>, dove S è l'insieme degli stati di credenza e P è gli stati dei possibili percetti. Quindi 
                    la funzione <Latex className='latex'>{funzioneCredenza2}</Latex> indica che <Latex className='latex'>{membro1}</Latex> è lo stato di credenza che segue <Latex className='latex'>{membro2}</Latex> quando <Latex className='latex'>{membro3}</Latex> è osservato. 
                </p>

                <p className='post-text'>
                    E' utile definire anche la <strong>funzione commando</strong> come: <Latex className='latex'>{funzioneComand}</Latex>, dove S rappresenta l'insieme degli stati di credenza e P è l'insieme dei possibili percetti, mentre l'insieme C rappresenta l'insieme dei possibili comandi. Quindi la funzione <Latex>{funzioneComand2}</Latex> indica che il controller invia il comando 
                    <Latex className='latex'>{membro4}</Latex> quando lo stato di credenza è <Latex className='latex'>{membro2}</Latex> e quando <Latex className='latex'>{membro3}</Latex> è osservato. La funzione di transizione stato-credenza e la funzione di comando insieme specificano una trasduzione causale per l'agente. Se esiste un numero finito di possibili stati di credenza, il 
                    controllore è chiamato <strong>controllore a stati finiti</strong> o <strong>macchina a stati finiti</strong>.
                </p>
                
                <div className="succ-post">
                    <Link to="/Controlli-e-azioni-di-un-agente">Post successivo &#8594;</Link>
                 </div>
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON3