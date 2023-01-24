import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";


function CC3() {
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "3. Espressioni regolari e Linguaggi non regolari",
        abstract: "Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi.",
        description: "Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi.",
        datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
        author: {
          "@type": "Person",
          name: "Federico Calò",
          url: "https://www.federicocalo.dev/",
        },
        creator: {
            "@type": "Person",
            name: "Federico Calò",
            url: "https://www.federicocalo.dev/",
          },
        image: "https://www.federicocalo.dev/static/media/cc_500.webp",
        keywords:"espressioni regolari, linguaggi non regolari, NFA, DFA,automa finito non deterministico generalizzato,lteorema di equivalenza tra automi finiti ed espressioni regolari, teorema del pumping lemma,  lunghezza del pumping, principio della piccionaia",
      };


    const unioneSimbolo = `\\cup`;
    const sumSimbolo = `\\sum`;
    const epsilonSimbolo = ` \\epsilon `; 
    const insiemeVuoto = `\\emptyset`;

    const R1 = `R_1`;
    const R2 = `R_2`;
    const R3 = `R^+`;
    const diversoSimbolo = `\\ne`;
    const cerchioSimbolo = `\\circ`;


    return (
        <div>
            <script type="application/ld+json">
                {JSON.stringify(articleStructuredData)}
            </script>
            <Helmet>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
                    crossorigin="anonymous"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Federico Calò Blog - 3. Espressioni regolari e Linguaggi non regolari</title>
                    <meta name='keywords' content='espressioni regolari, linguaggi non regolari, NFA, DFA,automa finito non deterministico generalizzato,lteorema di equivalenza tra automi finiti ed espressioni regolari, teorema del pumping lemma,  lunghezza del pumping, principio della piccionaia'/>
                    <meta name='description' content='Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi. '/>
                    <meta name="robots" content="index, follow, max-snippet:[100]" />
                    <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
                    <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
                    
                    <meta name='language' content='IT'/>
                    <meta name='topic' content='Programmazione e Sviluppo'/>
                    <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                    <meta name='og:title' content='Federico Calò Blog - 3. Espressioni regolari e Linguaggi non regolari'/>
                    <meta name='og:description' content='Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi.'/>
                    <meta name='og:email' content='fedcal01@gmail.com'/>
                    <meta name='og:phone_number' content='+39 3332673965'/>
                    <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 3. Espressioni regolari e Linguaggi non regolari"/> 
                    <meta name='apple-mobile-web-app-capable' content='yes'/>
                    <meta name='apple-touch-fullscreen' content='yes'/>
                    <link rel="canonical" href="https://www.federicocalo.dev/Espressioni-regolari-e-linguaggi-non-regolari" />
                </Helmet>
                <Navbar/>
                <article itemScope itemType="https://schema.org/Article">
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_1900.webp" />
                    <section className='post-header'>
                        <div className='header-content post-container'>
                            
                            <img loading="lazy" decoding="async" src={HomeCC} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='calcolabilità e complessità'/>
                        </div>
                    </section>
                    <section className='post-content post-container'>

                        <div className="prec-post">
                            <Link to="/Automi-e-linguaggi-regolari"> &#8592; Post precendente</Link>
                        </div>

                        <h1 className='header-title' itemProp="headline">3. Espressioni regolari e Linguaggi non regolari</h1>
                        <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-16" className='data' itemProp="datePublished" content="2023-01-16T07:30:00+08:00">16/01/2023</time>
                                        
                        <p className='post-text first-text'>
                            Nella teoria della computazione vi sono alcune espressioni volte a descrivere in maniera più lineare gli automi. Queste prendono il nome di <strong>espressioni regolari</strong>, nelle quali si usano gli stessi operatori algebrici. Il risultato di un'espressione regoalare è un linguaggio. La domanda principale che ci poniamo è relativa alle loro applicazioni. 
                            Le espressioni regolari hanno un ruolo fondamentale nelle applicazioni dell'informatica, soprattutto nelle applicazioni che coinvolgono testi. Un esempio di espressione regolare consiste in: (0 <InlineMath math={unioneSimbolo}/> 1)*, la quale rappresenta il linguaggio contenente tutte le possibili stringhe di simboli 0 e 1.
                        </p>

                        <p className='post-text'>
                            Se volessimo dare una <i>definizione</i> formale di espressione regolare, possiamo definire R come espressione regolare se essa è:
                        </p>

                        <ul>
                            <li>a per qualche a nell'alfabeto <InlineMath math={sumSimbolo}/></li>
                            <li><InlineMath math={epsilonSimbolo}/></li>
                            <li><InlineMath math={insiemeVuoto}/></li>
                            <li>(<InlineMath math={R1}/> <InlineMath math={unioneSimbolo}/><InlineMath math={R2}/>), dove <InlineMath math={R1}/> ed <InlineMath math={R2}/> sono espressioni regolari</li>
                            <li>(<InlineMath math={R1}/> <InlineMath math={cerchioSimbolo}/><InlineMath math={R2}/>), dove <InlineMath math={R1}/> ed <InlineMath math={R2}/> sono espressioni regolari</li>
                            <li>(<InlineMath math={R1}/>*), dove <InlineMath math={R1}/> è un'espressione regolare</li>
                        </ul>

                        <p className='post-text'>
                            Nei primi 2 punti vengono rappresentate le espressioni regolari relative ai linguaggi {"{"}a{"}"} e {"{"}<InlineMath math={epsilonSimbolo}/>{"}"}, la terza espressione regolare rappresenta il linguaggio vuoto. Mentre nei restanti punti, le espressioni regolari indicano i linguaggi ottenuti attraverso l'unione o la concatenazione dei linguaggi <InlineMath math={R1}/> e <InlineMath math={R2}/> o 
                            tramite l'operazione star del linguaggio <InlineMath math={R1} />. Da non confondere le due espressioni <InlineMath math={epsilonSimbolo}/> con <InlineMath math={insiemeVuoto}/>, in quanto la prima rappresenta il linguaggio che contiene solo la lingua vuota, mentre la seconda rappresenta il linguaggio che non contiene alcuna stringa. Per comodità si indica con R* il linguaggio che contiene tutte le stringhe 
                            date dalla concatenazione di  o più stringhe di R, mentre con <InlineMath math={R3}/> si indica il linguaggio che contiene tutte le stringhe date dalla concatenazione di 1 o più stringhe di R.
                        </p>

                        <p className='post-text'>
                            Possiamo definire alcune proprietà:
                        </p>

                        <dl>
                            <dt><InlineMath math={R3}/> <InlineMath math={unioneSimbolo}/> <InlineMath math={epsilonSimbolo}/> = R*</dt>
                            <dd>L'unione del linguaggio che contiene tutte le stringhe con una lunghezza minima di 1, unito al linguaggio composto solo dalla stringa vuota genera R*</dd>
                            
                            <dt>R <InlineMath math={unioneSimbolo}/> <InlineMath math={insiemeVuoto}/> = R</dt>
                            <dd>Se si aggiunge il linguaggio vuoto a un qualsiasi linguaggio, si ottiene il linguaggio di partenza</dd>

                            <dt>R <InlineMath math="\circ"/> <InlineMath math={epsilonSimbolo}/> = R</dt>
                            <dd>Concatenare la stringa vuota a una qualsiasi stringa non ne altera il valore o significato</dd>

                            <dt>R <InlineMath math={unioneSimbolo}/> <InlineMath math={epsilonSimbolo}/> <InlineMath math={diversoSimbolo}/> R</dt>
                            <dd> 
                                Questa affermazione si può semplicemente dimostrare attraverso un esempio logico: se R = 0, allora L(R) = {"{"}0{"}"} ma L(R <InlineMath math={unioneSimbolo}/> <InlineMath math={epsilonSimbolo}/>) 
                                = {"{"}0, <InlineMath math={epsilonSimbolo}/>{"}"}
                            </dd>

                            <dt>R <InlineMath math={cerchioSimbolo}/> <InlineMath math={insiemeVuoto}/> <InlineMath math={diversoSimbolo}/> R</dt>
                            <dd> 
                                Questa affermazione si può semplicemente dimostrare attraverso un esempio logico: se R = 0, allora L(R) = {"{"}0{"}"} ma L(R <InlineMath math={cerchioSimbolo}/> <InlineMath math={insiemeVuoto}/>) 
                                = <InlineMath math={insiemeVuoto}/>
                            </dd>                            
                        </dl>
                    
                        <p className='post-text'>
                            Le espressioni regolari e gli automi finiti sono equivalenti rispetto alla loro potenza descrittiva, inoltre un automa può essere convertito in espressione regolare e viceversa. Possiamo enunciare il 
                            <i> teorema di equivalenza tra automi finiti ed espressioni regolari</i>: "Un linguaggio è regolare se e solo se qualche espressione regolare lo descrive".
                        </p>

                        <p className='post-text'>
                            Possiamo definire un <strong> automa finito non deterministico generalizzato</strong> come un automa che ha sugli archi delle espressioni regolari come funzioni di transizione. Possiamo definire formalmente 
                            questo tipo di automa attraverso una quintupla <InlineMath math="(Q, \sum, \delta, q_{start}, q_{accept})"/>, nella quale Q è l'insieme finito degli stati, <InlineMath math="\sum"/> è l'alfabeto di input, 
                            <InlineMath math="\delta: ( Q - "/> {"{"} <InlineMath math="q_{accept}"/>) <InlineMath math="\times"/> (Q - {"{"}<InlineMath math="q_{start}"/>{"}"}) <InlineMath math="\rightarrow"/> R è la funzione di transizione, 
                            <InlineMath math="q_{start}"/> rappresenta lo stato iniziale e <InlineMath math="q_{accept}"/> rappresenta lo stato accettante.
                        </p>

                        <p className='post-text'>
                            La computazione di questo automa è simile agli altri. Un GNFA accetta una stringa w in <InlineMath math="\sum*"/> se w = <InlineMath math="w_1w_2 \dots w_k"/> dove ogni <InlineMath math="w_i"/> è in <InlineMath math="\sum*"/> ed 
                            esiste una sequenza di stati <InlineMath math="q_1, q_2, \dots , q_k"/>, tale che <InlineMath math="q_0 = q_{start}"/>, ovvero lo stato iniziale, <InlineMath math="q_k = q_{accept}"/>, ovvero lo stato accettante, e per 
                            ogni i risulta che <InlineMath math="w_i \in L(R_i)"/>, dove <InlineMath math="R_i = \delta (q_{i-1},q_i)"/> ovvero <InlineMath math="R_i"/> è l'espressione presente sull'arco da <InlineMath math = "q_{i-1}"/> a <InlineMath math = "q_i"/>
                        </p>

                        <p className='post-text'>
                            Tutte le tipologie di automi finiti hanno dei limiti per i quali non riconoscono alcuni tipi di linguaggi definiti <strong>linguaggi non regolari</strong>. Per dimostrare che un linguaggio non è regolare si può seguire 
                            il <strong>teorema del pumping lemma</strong>. Questo teorema suggerisce che tutti i linguaggi regolari le stringhe possono essere replicate se la loro lunghezza raggiunge almeno uno specifico valore, definito <strong>lunghezza del pumping</strong>.
                            Quindi le parole dei linguaggi che rispettano questa regola contengono una parte che può essere ripetuta un numero qualsiasi di volte, ottenendo sempre un'altra stringa che appartiene al linguaggio. Enunciamo il teorema come:
                        </p>

                        <dl className='definizione'>
                            <dt><strong>Pumping Lemma</strong></dt>
                            <dd>Se A è un linguaggio regolare, allora esiste un numero p, denominato lunghezza del pumping, tale che se s è una qualsiasi stringa in A di lunghezza almeno p, allora s può essere divisa in tre parti: s=xyz, che soddisfano le seguenti condizioni:
                                <ul>
                                    <li>per ogni <InlineMath math="i \geq 0, xy^iz \in A"/></li>
                                    <li>|y|<InlineMath math="> 0"/></li>
                                    <li>|xy|<InlineMath math="\leq"/> p</li>
                                </ul>
                            </dd>
                        </dl>

                        <p className='post-text'>
                            Quando dividiamo la stringa s in tre parti xyz, x o z possono essere <InlineMath math="\epsilon"/>, mentre per la seconda condizione y deve essere diversa da <InlineMath math="\epsilon"/>. La terza condizione afferma che prendendo in considerazione 
                            x e y insieme hanno una lunghezza al più p. Per dimostrare questo teorema definiamo un DFA M = <InlineMath math="(Q,\sum,\delta,q_1,F)"/> che riconosce il linguaggio A, mentre con p indichiamo il numero di stati di M. Sia s = <InlineMath math="s_1s_2 \dots s_n "/> una 
                            stringa appartenete al linguaggio A di lunghezza n, con <InlineMath math="n \geq p"/>. Sia inoltre <InlineMath math="r_1, \dots , r_{n+1}"/> la sequenza di stati attraversati da M mentre viene elaborata la stringa s, si ha <InlineMath math="r_{i+1} = \delta (r_i,s_i)"/>
                            per 1 <InlineMath math="1 \leq i \leq n"/>. Questa sequenza ha una lunghezza pari a n + 1, ovvero di almeno p + 1. All'interno della sequenza vi è uno o più stati che vengono ripetuti più volte, secondo il <strong>principio della piccionaia</strong>.
                        </p>

                        <p className='post-text'>
                           Denominando il primo stato come <InlineMath math="r_j"/> e il secondo come <InlineMath math="r_l"/>. Notiamo come <InlineMath math="r_l"/> si presenta nelle prime p+1 posizioni in una sequenza che inizia in <InlineMath math="r_l"/>, abbiamo quindi <InlineMath math= "l \leq p+1"/>. 
                           Ora definiamo x, y, z come: x=<InlineMath math="s_1 \dots s_{j-1}"/>, y=<InlineMath math="s_j \dots s_{l-1}"/> e z=x=<InlineMath math="s_l \dots s_{n}"/>. Verifichiamo adesso che M accetti <InlineMath math="xy^iz"/> per ogni <InlineMath math="i \geq 0"/>. Sappiamo che <InlineMath math="j \ne l"/> e 
                           quindi |y| {">"} 0; e <InlineMath math="l \leq p + 1"/>, perciò |xy|<InlineMath math="\leq"/>p. Quindi tutte le condizioni sono rispettate.
                        </p>

                        <p className='post-text'>
                            Per usare il pumping lemma per provare che un linguaggio B non è regolare, in primo luogo si assume che B sia regolare per ottenere una contraddizione. Successivamente si usa il pumping lemma per assicurare l'esistenza di una lunghezza del pumping p tale che tutte le stringhe 
                            di lunghezza maggiore o uguale a p in B possano essere iterate. In seguito occorre trovare una stringa s in B che ha una lunghezza maggiore o uguale a p, ma che non può essere iterata. Infine bisogna dimostrare che s non può essere iterata considerando tutti i modi di dividerla e per ogni divisione 
                            trovando un valore di i tale che <InlineMath math="xy^iz \not \in B"/>.
                        </p>

                        <div className="succ-post">
                            <Link to="/Linguaggi-context-free-e-automi-a-pila">Post successivo &#8594;</Link>
                        </div>

                        
                    </section>
                </article>
                <Footer/>
        </div>
    )
}

export default CC3