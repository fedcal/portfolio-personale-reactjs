import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import * as Latex from 'react-latex'
import 'katex/dist/katex.min.css'

function CC1() {
  const inSimbolo = `$$\\in$$`;
  const outSimbolo = `$$\\not \\in$$`;
  const sottoinsiemeSimnolo = `$$A \\subset B$$`;
  const insiemeVuoto = `$$\\emptyset$$`;
  const prodottoCartesiano = `$$A \\times B$$`;
  const simboloSommatoria = `$$\\sum$$`;
  const cardinalitaParola = `$$\\mid w \\mid$$`;
  const lambda1 = `$$\\varepsilon$$`;
  const lambda2 = `$$\\lambda$$`;

  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 1. Introduzione alla calcolabilità e alla complessità</title>
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
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeCC} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                
                <h1 className='header-title' itemprop="headline">1. Introduzione alla compessità e alla computabilità</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2023-01-07" className='data' itemprop="datePublished" content="2023-01-10T07:30:00+08:00">10/01/2023</time>
                                
                <p className='post-text first-text'>
                   La materia della <i>Calcolabilità e Complessità</i> basa il suo studio su tre aree princinpali: gli automi, la computabilità e la complessità. La <strong>teoria della complessità</strong> concentra i suoi studi nella comprensione di cosa rende alcuni problemi più difficili a livello computazionale rispetto ad altri. Per affrontare 
                   un problema computazionalmente difficile, possono essere seguite diverse strade. In alcuni casi si cerca di comprendere la natura della difficoltà e si cerca di modificare il problema in modo da renderlo risolvibile in maniera più semplice. Altre volte, invece, ci si accontenta di una soluzione non esatta. Altre volte ancora un 
                   problema può risultare di difficile risoluzione solo nel caso peggiore, mentre risulta di facile risoluzione negli altri casi. La complessità computazionale è interessata specialmente nel campo della crittografia, all'interno del quale si preferisce un problema di complessità difficile a uno facile.
                </p>

                <p className='post-text'>
                    La <strong>teoria della computabilità</strong> coinvolge lo studio di problemi che non possono essere risolti con i computer. Questa teoria è strettamente correlata alla teoria della complessità. La prima introduce concetti utilizzati nella teoria della complessità, la quale ha l'obiettivo di classificare problemi come facili o 
                    difficili. A supporto di queste due teoria vi è la <strong>teoria degli automi</strong>, la quale si occupa delle definizione dei modelli di calcolo matematici. Alcuni di questi modelli prendono il nome di <i>automa finiti</i>, utilizzati nel trattamento automatico dei testi, e <i>grammatiche context-free</i>, utilizzati nei linguaggi 
                    di programmazione.
                </p>

                <p className='post-text'>
                    Lo studio di queste teoria comporta conoscere alcune notazioni e terminologie a livello matematico. Iniziamo così dando una definizione di <strong>insieme</strong>, definito come un gruppo di oggetti rappresentati in maniera unitaria. Gli oggetti possono essere di qualsiasi tipo, inclusi numeri e simboli, e prendono il nome di 
                    <strong> elementi</strong>. Per descrivere un insieme si può procedere in diversi modi, il più semplice è quello di <i>elencare</i> i vari elementi. Per indicare <i>l'appartenenza</i> o <i>la non appartenenza</i> di un elemento all'interno di un insieme si utilizzano rispettivamente i simboli <Latex>{inSimbolo}</Latex> e <Latex>{outSimbolo}</Latex>. 
                    Gli insiemi vengono indicati con delle lettere maiuscole, inoltre quando ogni elemento di un insieme A appartiene anche ad un altro insieme B, si dice che l'insieme A è un <strong>sottoinsieme</strong> dell'insieme B, indicandolo con la seguente annotazione <Latex>{sottoinsiemeSimnolo}</Latex>. Un insieme privo di elementi si indica con 
                    <Latex>{insiemeVuoto}</Latex>.
                </p>

                <p className='post-text'>
                    Un concetto simile a quello di un insieme è il concetto di <strong>tupla</strong>, la quale rappresenta una lista ordinata di oggetti. Una sequenza finita prende il nome di <i>tupla</i>. Generalmente si pospone il numero di elementi della tupla difronte al nome, definendo la notazione <i>k-tupla</i>. Definiamo inoltre il <strong>prodotto cartesiano </strong>
                    come il prodotto di due insiemi, costituito da tutte le coppie il cui primo elemento appartiene all'insieme A e il secondo elemento all'insieme B. Un prodotto cartesiano, o <i>prodotto vettoriale</i>, viene denotato con la seguente terminologia <Latex>{prodottoCartesiano}</Latex>.    
                </p>

                <p className='post-text'>
                    Tra due o più insiemi vengono definite delle relazioni che prendono il nome di <strong>funzioni</strong>, attraverso le quali si definiscono relazioni di input e output. Una funzione ha il compito di prendere in input e di produrre un output. Una proprietà fondamentale è che a fronte dello stesso input, la funzione deve produrre lo stesso 
                    output. L'insieme degli input prende il nome di <strong>dominio</strong>, mentre l'insieme degli output prende il nome di <strong>codominio</strong>. Una rappresentazione di una funzione attraverso una tabella prende il nome di <strong>mappa</strong>. 
                </p>

                <p className='post-text'>
                    Un altro elemento importante, che merita quindi di essere trattato, sono i grafi. Un <strong>grafo non orientato</strong>, è un insieme di punti e di linee che connettono dei punti, definiti come <strong>nodi</strong> o vertici. I nodi sono collegati tra di loro da <strong>archi</strong>. Inoltre si definisce <strong>il grado</strong> di un nodo come 
                    il numero di archi di un particolare nodo. Per comodità i nodi e gli archi vengono etichettati, il grafo risultante viene definito <strong>grafo etichettato</strong>. All'interno dello studio della complessità e calcolabilità, i grafi di maggiore rilevanza sono i <strong>grafi orientati</strong>, nei quali gli archi posseggono una direzione dettata da una 
                    freccia. Ogni nodo quindi avrà degli <i>archi in entrata</i> e degli <i>archi in uscita</i>.
                </p>

                <p className='post-text'>
                    Gli elementi più utilizzati all'interno delle varie teorie sono le <strong>stringhe</strong>, i <strong>linguaggi</strong> e la <strong>logica booleana</strong>. Le stringhe sono composte da sequenze di caratteri appartenenti ad un alfabeto. Un <strong>alfabeto</strong> viene definito come un insieme non vuoto di <strong>simboli</strong>. Una <strong>stringa su di 
                    alfabeto</strong> è una sequenza finita di simboli dell'alfabeto, senza nessuna separazione. Se definiamo con <i>w</i> una stringa su un alfabeto <Latex>{simboloSommatoria}</Latex>, definiamo lunghezza di w il numero di simboli che contiene, indicando questo valore con il simbolo <Latex>{cardinalitaParola}</Latex>. Una stringa con cardinalità pari a 0 prende il nome 
                    di <strong>stringa vuota</strong> e viene rappresentata con il simbolo di <Latex>{lambda1}</Latex> o <Latex>{lambda2}</Latex>. Inoltre un insieme di stringhe prende il nome di <strong>linguaggio</strong>.
                </p>

                <p className='post-text'>
                    La <strong>logica booleana</strong> è un sistema matematico costituito da operazioni che agiscono principalmente su due valori: <i>vero</i> o <i>falso</i>, i quali prendono il nome di <strong>valori booleani</strong>. Le operazioni all'interno di questo linguaggio vengono definite <strong>operazioni booleane</strong> e sono: la <i>negazione</i>, la <i>disgiunzione</i> e 
                    la <i>congiunzione</i>. Attraverso questi elementi possiamo intraprendere lo studio della calcolabilità e della complessità nei prossimi articoli.
                </p>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC1