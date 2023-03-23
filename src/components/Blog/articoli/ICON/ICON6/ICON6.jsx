import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON6() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 6. Introduzione alla ricerca: un algoritmo di ricerca generico</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, algoritmo di ricerca generico, frontiera, frangia espansione, bottom, non determinismo don&#39;t-care, non determinismo do&#39;t-know, oracolo, ricerca non informata, ricerca euristica'/>
            <meta name='description' content='Nell&#39;articolo precedente abbiamo parlato del problema di ricerca sfruttando la struttura del grafo, e in particolare quella dell&#39;albero, tramite il quale possiamo trovare il percorso da un nodo di partenza a uno finale. In questo articolo ci concentriamo sull&#39;algoritmo di ricerca generica.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 6. Introduzione alla ricerca: un algoritmo di ricerca generico'/>
            <meta name='og:description' content='Nell&#39;articolo precedente abbiamo parlato del problema di ricerca sfruttando la struttura del grafo, e in particolare quella dell&#39;albero, tramite il quale possiamo trovare il percorso da un nodo di partenza a uno finale. In questo articolo ci concentriamo sull&#39;algoritmo di ricerca generica.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 6. Introduzione alla ricerca: un algoritmo di ricerca generico"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico" />
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
                    <Link to="/Ricerca-di-soluzioni"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">6. Introduzione alla ricerca: un algoritmo di ricerca generico</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-31" className='data' itemProp="datePublished" content="2023-01-31T07:30:00+08:00">31/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Nell'articolo precedente abbiamo parlato del problema di ricerca sfruttando la struttura del grafo, e in particolare quella dell'albero, tramite il quale possiamo trovare il percorso da un nodo di partenza a uno finale. In questo articolo ci concentriamo sui vari tipi di algoritmi di ricerca. Un primo algoritmo che andremo ad analizzare 
                    è un <i>algoritmo di ricerca generico</i>, tramite il quale si ottiene un percorso di soluzione in un grafico.
                </p>

                <p className='post-text'>
                    Avendo a disposizione un grafo, un nodo iniziale un obiettivo, l'algoritmo di ricerca generico esplora i percorsi in maniera incrementale dal nodo iniziale. Si memorizzano i vari percorsi in una struttura chiamata <strong>frontiera</strong> o <i>frangia</i>. Inizialmente la frontiera contiene solo il nodo iniziale e nessun arco, man mano che 
                    la ricerca procede la frontiera si espande fino ad incontrare il nodo obiettivo. Vengono definite diverse strategie di ricerca che implementano in maniera diversa la frontiera. Vediamo un esempio.
                </p>


                <div className='pre'>
                    <div className='code'>
                        <h3>Pseudocodice 1 - Ricerca Generica</h3>
                        <p>
                            <span className='number-row'>1.</span> procedura <strong>search ( G, S, obiettivo )</strong><br/>
                            <span className='number-row'>2.</span> &emsp;<i>Input</i> <br/>
                            <span className='number-row'>3.</span> &emsp;&emsp;G: grafo con N nodi e A archi <br/>
                            <span className='number-row'>4.</span> &emsp;&emsp;S: nodo iniziale <br/>
                            <span className='number-row'>5.</span> &emsp;&emsp;obiettivo: funzione booleana sui nodi <br/>
                            <span className='number-row'>6.</span> &emsp;<i>Output</i> <br/>
                            <span className='number-row'>7.</span> &emsp;&emsp;percorso da S a un nodo per il quale  <br/>
                                                                   &emsp;&emsp;l'obiettivo è vero o <InlineMath math='\bot'/> se non esiste<br/>
                            <span className='number-row'>8.</span> &emsp;<i>Variabili Locali</i> <br/>
                            <span className='number-row'>9.</span> &emsp;&emsp; Frontiera = <InlineMath math='\{ \;< S > \;\}'/> <br/>
                            <span className='number-row'>10.</span> &emsp;&emsp; while Frontiera <InlineMath math='\ne \{\;\}'/> <br/>
                            <span className='number-row'>11.</span> &emsp;&emsp;&emsp; seleziona e rimuovi <InlineMath math='< n_0, \dots, n_k >'/>&emsp;&emsp;&emsp;&emsp;&emsp; dalla frontiera <br/>
                            <span className='number-row'>12.</span> &emsp;&emsp;&emsp; if <InlineMath math='goal( \; n_k \; )'/> allora <br/>
                            <span className='number-row'>13.</span> &emsp;&emsp;&emsp;&emsp; return <InlineMath math='< n_0, \dots, n_k >'/> <br/>
                            <span className='number-row'>14.</span>  Frontiera =  <InlineMath math='Frontiera \cup \{ < n_0, \dots, n_k, n > : < n_k, n > \in A \}'/> <br/>
                            <span className='number-row'>14.</span> &emsp;&emsp; return <InlineMath math='\bot'/> <br/>
                        </p>
                    </div>
                </div>

                <p className='post-text'>
                    La frontiera è un insieme di percorsi e il suo costo iniziale è pari a zero in quanto costituita solo dal nodo iniziale. Ad ogni ciclo l'algoritmo rimuove un percorso dalla frontiera. Se la funzione goal restituisce vero, 
                    significa che si è raggiunto un nodo obiettivo e che quindi l'algoritmo ha trovato <i>una soluzione</i> e restituisce il percorso trovato. Altrimenti il percorso viene esteso di un altro arco attraverso l'ispezione dei vicini. 
                    Ogni neighboor viene aggiunto alla frontiera, e questo processo viene definito <strong>espansione</strong>.
                </p>

                <p className='post-text'>
                    Esaminiamo alcune caratteristiche dell'algoritmo appena visto:
                </p>

                <ul>
                    <li>Alla riga 11, la selezione del percorso stabilisce la strategia di ricerca, influenzandone l'efficienza;</li>
                    <li>Il ritorno presente alla riga 13, è utile in quanto il chiamante può ritentare la ricerca per ottenere un'altra risposta;</li>
                    <li>Se la procedura ritorna <InlineMath math='\bot'/> (<strong>bottom</strong>), significa che non ci sono soluzioni rimanenti;</li>
                    <li>L'algoritmo verifica solo se un percorso termina in un nodo obiettivo dopo che il percorso è stato selezionato dalla frontiera, non quando viene aggiunto alla frontiera.</li>
                </ul>

                <p className='post-text'>
                    Per quanto riguarda l'ultimo punto vi sono due ragioni fondamentali per le quali l'algoritmo computa in questo modo. La ricerca non dovrebbe restituire un percorso all'interno del quale ci potrebbe essere un arco costoso, in quanto ci 
                    potrebbe essere un percorso con un costo minore. In secondo luogo, ci si potrebbe trovare nel caso in cui la funzione per determinare il costo di un nodo obiettivo richiede un costo eccessivo, quindi nel caso in cui questo calcolo non sia 
                    necessario, deve essere ritardato. 
                </p>

                <p className='post-text'>
                    Introduciamo due concetti fondamentali riguardanti gli algoritmi di ricerca, il <strong> non determinismo don't-care</strong> e il <strong> non determinismo don't-know</strong>. <i>Nel primo caso</i>, se una selezione non porta a una soluzione, 
                    non verrà considerata insieme alle altre. Questo tipo di non determinismo viene utilizzano nell'allocazione delle risorse, in cui un numero di richieste per un numero limitato di risorse e un algoritmo di pianificazione deve selezionare chi ottiene 
                    quale risorsa in ogni momento.
                </p>

                <p className='post-text'>
                    La correttezza non dovrebbe essere influenzata dalla selezione, ma l'efficienza e la cessazione potrebbero esserlo. Quando c'è una sequenza infinita di selezioni, un meccanismo di selezione è <strong>giusto</strong> se una richiesta che è ripetutamente 
                    disponibile per essere selezionata alla fine sarà selezionata. Il problema di un elemento ripetutamente non selezionato si chiama <strong>starvation</strong>. In questo contesto, un'euristica è una regola empirica che può essere utilizzata per selezionare 
                    un valore.
                </p>

                <p className='post-text'>
                    Nel <i>non determinismo don't-know</i>, solo perché una scelta non ha portato a una soluzione non significa che altre scelte non lo faranno. Spesso si parla di un oracolo che potrebbe specificare, in ogni punto, quale scelta porterà a una soluzione. Poiché 
                    il nostro agente non ha un tale <strong>oracolo</strong>, deve cercare nello spazio delle scelte alternative. Questo tipo di non determinismo è fondamentale nella teoria della complessità computazionale di cui parliamo in questa <Link to='/Introduzione-alla-Calcolabilita-e-Complessita' className='link'>serie di articoli</Link>.
                </p>

                <p className='post-text'>
                    In una procedura non deterministica, fingiamo che un oracolo faccia ogni volta una scelta appropriata. Pertanto, un'affermazione di scelta si tradurrà in una scelta che porterà al successo o fallirà se non ci sono tali scelte. Una procedura non deterministica 
                    può avere più risposte, dove ci sono più scelte che hanno successo, e fallirà se non ci sono scelte applicabili. Un errore esplicito nel codice indica una scelta che non dovrebbe riuscire.
                </p>

                <p className='post-text'>
                    Continueremo nel prossimo articolo a trattare di altre due tipologie di ricerca: la <strong>ricerca non informata</strong> e la <strong>ricerca euristica</strong>.
                </p>
                <div className="succ-post">
                    <Link to="/Strategie-di-ricerca-non-informate">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON6