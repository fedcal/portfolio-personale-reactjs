import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON8() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 8. La ricerca euristica</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, strategia di ricerca, La ricerca euristica, algoritmo di ricerca generico, funzione euristica,euristica ammissibile,ricerca euristica in profondità,heuristic depth-first search,greedy best-first search,La ricerca A*,algoritmo di ricerca generico,Definizione di ammissibilità relativa ad A*,approfondimento iterativo A*,Progettare una funzione euristica'/>
            <meta name='description' content='A differenza del precedente articolo in cui abbiamo visto diversi tipi di ricerca non informata, in questo articolo vedremo come alcuni algoritmi elaborano i percorsi in base alle informazioni sui nodi e sugli archi in loro possesso.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 8. La ricerca euristica'/>
            <meta name='og:description' content='A differenza del precedente articolo in cui abbiamo visto diversi tipi di ricerca non informata, in questo articolo vedremo come alcuni algoritmi elaborano i percorsi in base alle informazioni sui nodi e sugli archi in loro possesso.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 8. La ricerca euristica"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/La-ricerca-euristica" />
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
                    <Link to="/Strategie-di-ricerca-non-informate"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">8. La ricerca euristica</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-05" className='data' itemProp="datePublished" content="2023-02-05T07:30:00+08:00">05/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    A differenza del precedente articolo in cui abbiamo visto diversi tipi di ricerca non informata, in questo articolo vedremo come alcuni algoritmi elaborano i percorsi in base alle informazioni sui nodi e sugli archi in loro possesso. Le informazioni euristiche su quali nodi sono più promettenti possono guidare la ricerca 
                    modificando il nodo selezionato alla riga 11 dell'<strong><Link to='/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico' className='link'>algoritmo di ricerca generico</Link></strong>.
                </p>

                <p className='post-text'>
                    Questi tipi di algoritmo si basano su una <strong>funzione euristica</strong> h ( n ), prende in input un nodo n e restituisce un valore reale positivo che è la stima del costo del percorso meno costoso dal nodo n al nodo obiettivo. La funzione h ( n ) è un'<strong>euristica ammissibile</strong> se h ( n ) è sempre minore o uguale 
                    all'attuale costo del percorso meno costoso dal nodo n al nodo obiettivo.  
                </p>

                <p className='post-text'>
                    La funzione euristica utilizza le informazioni che possono essere facilmente ottenibili sui nodi. C'è sempre un compromesso tra il costo per determinare il valore euristico e l'accuratezza del valore stesso. Un metodo standard per derivare questo tipo di funzione è risolvere un problema più semplice e utilizzare il costo per l'obiettivo 
                    nel problema semplificato come funzione euristica del problema originale.
                </p>

                <p className='post-text'>
                    Un'applicazione della funzione euristica consiste nella ricerca in profondità per ordinare i neighbors che vengono aggiunti allo stack della frontiera. Così facendo si aggiunge alla frontiera quel nodo che rappresenta il miglior vicino. Questo metodo prende il nome di <strong>ricerca euristica in profondità</strong> (<i>heuristic depth-first search</i>).
                    Questa ricerca seleziona il percorso locale migliore, anche se ha lo svantaggio di esplorare tutti i percorsi dal percorso selezionato prima di selezionarne un'altro. E' evidente che condivide gli stessi problemi della ricerca in profondità e non è garantito che trovi una soluzione, e anche se la trovasse, non è detto che sia quella ottimale.
                </p>

                <p className='post-text'>
                    Un altro modo per utilizzare una funzione euristica consiste nel selezionare sempre un percorso sulla frontiera con il valore euristico più basso. Questo algoritmo prende il nome di <strong>greedy best-first search</strong>. Questa ricerca svolge bene le sue attività, anche se a volte segue dei percorsi che sembrano promettenti perchè appaiono vicini 
                    all'obiettivo, ma il percorso esplorato può allungarsi.
                </p>

                <h2>La ricerca A*</h2>

                <p className='post-text'>
                    La <strong>ricerca A*</strong> è un tipo di ricerca che utilizza sia il costo del percorso sia le informazioni euristiche nella selezione dell'estensione del percorso. Per ogni percorso sulla frontiera, A* utilizza una stima del costo totale del costo relativo al percorso dal nodo iniziale al nodo obiettivo. Viene utilizzata la funzione cost ( p ) 
                    come funzione euristica del costo stimato del percorso dalla fine di p all'obiettivo. Per ogni p sulla frontiera viene definita la funzione f ( p ) = cost ( p ) + h ( p ). Questa è la stima del costo totale del percorso. Graficamente si può visualizzare come: 
                </p>

                <p className='post-text'>
                    <InlineMath math='\underbrace { \underbrace { start \xrightarrow { \text { actual } } }_{\text{cost ( p ) } }\underbrace { n \xrightarrow { \text { estimate } } goal }_{\text{h ( p ) } }}_{\text {f ( p )}}'/>
                </p>

                <p className='post-text'>
                    In questa formula se h ( n ) è una euristica ammissibile e non sovrastima il costo dal nodo n al nodo obiettivo, allora f ( p ) non sovrastima il costo del percorso dal nodo iniziale al'obiettivo. L'algoritmo A* viene implementato usando <strong><Link to='/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico' className='link'>l'algoritmo di ricerca generico</Link></strong>, 
                    con l'unica differenza che la frontiera viene trattata come una coda di priorità ordinata secondo f ( p ).
                </p>

                <p className='post-text'>
                    Un algoritmo è <strong>ammissibile</strong> se, se, ogni volta che esiste una soluzione, restituisce una soluzione ottima. Per garantire l'ammissibilità, devono valere alcune condizioni sul grafico e sull'euristica. Definiamo quelle relative a un algoritmo di ricerca A*.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di ammissibilità relativa ad A*</strong></dt>
                    <dd>
                        A* è un algoritmo di ricerca ammissibile se:
                        <ul>
                            <li>il fattore di ramificazione è infinito</li>
                            <li>tutti i costi dell'arco sono maggiori di <InlineMath math='\epsilon > 0'/></li>
                            <li>h è una funzione euristica ammissibile</li>
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    L'ammissibilità dell'algoritmo A* non garantisce che ogni nodo intermedio selezionato dalla frontiera si trovi su un percorso ottimale dal nodo iniziale a un nodo finale. L'ammissibilità garantisce che la prima soluzione trovata sarà ottimale anche in grafi con cicli. 
                </p>

                <h4>Approfondimento iterativo A* (IDA*)</h4>

                <p className='post-text'>
                    Un particolare algoritmo che si basa sulla ricerca A* è l'<strong>approfondimento iterativo A*</strong>, o IDA*, il quale esegue iterativamente ricerche di profondità con un limite di ricerca. Invece del limite sugli archi, il limite si trasforma in un limite sul valore di f ( n ). 
                    Inizialmente questa soglia è il valore di f ( s ), dove s è il nodo iniziale. Successivamente l'algoritmo espande il percorso con una ricerca in profondità senza mai andare oltre il valore del limite di f. 
                </p>

                <p className='post-text'>
                    Se la ricerca fallisce e il limite è stato raggiunto, il limite successivo è il valore minimo di f rispetto al limite corrente. Invece se la ricerca fallisce e il limite è stato raggiunto, il limite successivo è il minimo valore di f che ha superato il valore precedente. Quindi 
                    l'algoritmo IDA*, a differenza del'algoritmo A*, ricalcola una ricerca approfondita invece di memorizzarne il valore.
                </p>

                <h2>Progettare una funzione euristica</h2>

                <p className='post-text'>
                    E' arrivato ora il momento di discutere di come progettare una funzione euristica. Il modo standard per costruire una funzione euristica è trovare una soluzione a un problema più semplice, con meno vincoli rispetto al precedente e quindi di facile risoluzione. Una soluzione 
                    ottima al problema più semplice non può avere un costo maggiore di una soluzione ottima al problema completo perché qualsiasi soluzione al problema completo è una soluzione al problema più semplice. 
                </p>

                <p className='post-text'>
                    In molti problemi spaziali in cui il costo è la distanza e la soluzione è vincolata a percorrere archi predefiniti (ad esempio segmenti stradali), la distanza euclidea in linea retta tra due nodi è un'euristica ammissibile perché è la soluzione del problema più semplice in cui il 
                    l'agente non è vincolato a percorrere gli archi. Una volta semplificato il problema, potrebbe essere risolto utilizzando la ricerca, che dovrebbe essere più semplice del problema originale.
                </p>

                <p className='post-text'>
                    È spesso utile memorizzare nella cache questi risultati in un <strong>database pattern</strong> che mappa i nodi del problema più semplice nel valore euristico. Nel problema più semplice, spesso ci sono meno nodi, quindi più nodi originali sono mappati in un singolo nodo più semplice, 
                    quindi questo potrebbe essere fattibile.
                </p>

                <div className="succ-post">
                    <Link to="/Eliminare-lo-spazio-di-ricerca">Post successivo &#8594;</Link>
                </div>

            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON8