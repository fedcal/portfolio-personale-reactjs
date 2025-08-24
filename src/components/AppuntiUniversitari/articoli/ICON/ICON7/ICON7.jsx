import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON7() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 7. Prime strategie di ricerca non informate</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, strategia di ricerca, strategie di ricerca non informate, ricerca in ampiezza,ricerca in profondità,backtracking,ordinamento statico,ordinamento dinamico,approfondimento iterativo,depth-bounded searcher,limite di profondità,
            fallisce naturalmente,soluzione ottimale,minor numero di archi,costo minimo,ricerca lowest-cost-first'/>
            <meta name='description' content='A differenza del precedente articolo nel quale abbiamo analizzato un algoritmo di ricerca generico, in questo articolo affrontiamo alcune strategie di ricerca non informate. Ma cos&#39;è una strategia di ricerca?'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 7. Prime strategie di ricerca non informate'/>
            <meta name='og:description' content='A differenza del precedente articolo nel quale abbiamo analizzato un algoritmo di ricerca generico, in questo articolo affrontiamo alcune strategie di ricerca non informate. Ma cos&#39;è una strategia di ricerca?'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 7. Prime strategie di ricerca non informate"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Strategie-di-ricerca-non-informate" />
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
                    <Link to="/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">7. Strategie di ricerca non informate</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-04" className='data' itemProp="datePublished" content="2023-02-04T07:30:00+08:00">04/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    A differenza del precedente articolo nel quale abbiamo analizzato un algoritmo di ricerca generico, in questo articolo affrontiamo alcune strategie di ricerca non informate. Ma cos'è una <strong>strategia di ricerca</strong>? Essa riguarda la procedura di selezione di un percorso dalla frontiera per raggiungere l'obiettivo 
                    partendo dal nodo iniziale all'interno di un grafo. Viene definito l'ordine in cui i percorsi vengono selezionati dalla frontiera. La maggior parte delle strategie si ottengono modificando il modo in cui viene implementata la selezione dei percorsi all'interno della frontiera. Analizziamo in questa fase le <strong>strategie di ricerca non informate</strong>.
                </p>

                <p className='post-text'>
                    La prima strategia che andiamo ad analizzare è la <strong>ricerca in ampiezza</strong>, nella quale la frontiera è implementata come una coda FIFO (firs-in first-out). Il percorso selezionato sarà quel percorso che inserito per primo nella frontiera. In questo approccio i percorsi vengono generati dal nodo iniziale in ordine 
                    di numero di archi nel percorso. Ad ogni iterazione viene selezionato uno dei percorsi con il minor numero di archi.
                </p>

                <p className='post-text'>
                    Questo algoritmo ha una complessità spaziale e una complessità temporale esponenziale nel numero di archi del percorso verso un obiettivo con il minor numero di archi. Infatti se assumessimo che b è il fattore di ramificazione della ricerca, il prossimo percorso da selezionare sulla frontiera contiene n archi e ci sono almeno un 
                    numero di elementi pari a <InlineMath math='b^{n-1}'/>. Tutti questi percorsi contengono n o n+1 archi. Però questo tipo di ricerca garantisce di trovare una soluzione se ne esiste una e se esiste, riuscirà a trovare quella con il minor numero di archi.
                </p>

                <p className='post-text'>
                    La ricerca in ampiezza è utile quando il problema è abbastanza piccolo in modo che lo spazio non sia un problema oppure se si desidera una soluzione contenente il minor numero di archi. Però questo algoritmo presenta dei problemi quando tutte le soluzioni hanno molti archi o sono disponibili alcune conoscenze euristiche. Inoltre 
                    non è performante su problemi di grandi dimensioni in cui il grafico viene generato dinamicamente a causa della sua complessità spaziale esponenziale.
                </p>

                <p className='post-text'>
                    Un altro tipo di strategia di ricerca non informata è la <strong>ricerca in profondità</strong>, all'interno della quale la frontiera si comporta come una <i>pila</i> di tipo <i>LIFO</i> (last-in first-out). Gli elementi vengono aggiunti e rimossi dalla parte superiore della pila, l'ultimo percorso selezionato e rimosso dalla frontiera 
                    in qualsiasi momento è l'ultimo percorso che è stato aggiunto. 
                </p>
                
                <p className='post-text'>
                    In questo algoritmo i percorsi vengono seguiti in modo approfondito, cercando un percorso fino al suo completamento prima di trovare un percorso alternativo. Viene utilizzato il metodo del <strong>backtracking</strong>: l'algoritmo seleziona una prima alternativa in ogni nodo e torna all'alternativa successiva quando ha seguito tutti 
                    i percorsi dalla prima selezione. Possono capitare cicli o nodi infiniti che comportano la mancata interruzione dell'algoritmo di ricerca.
                </p>

                <p className='post-text'>
                    Nell'algoritmo di ricerca in profondità non viene specificato l'ordine in cui i percorsi verso i neighboor vengono aggiunti alla frontiera. Questo ordinamento influenza l'efficienza dell'algoritmo. Supponendo che <InlineMath math='< n_0,\dots,n_k>'/> sia il percorso selezionato, nella ricerca in profondità ogni frontiera è nella 
                    forma <InlineMath math='<n_0, \dots, n_i, m>'/> per ogni indice i {"<"} k e qualche nodo m che è un neighbor di <InlineMath math='n_i'/>. La frontiera contiene il percorso corrente e i percorsi relativi ai nodi neighbors su questo percorso. Se il fattore di ramificazione è b e il percorso sulla frontiera ha k archi, ci possono essere al 
                    massimo k*(b-1) altri sentieri di frontiera. Ci sono quindi fino a b-1 percorsi alternativi per ciascun nodo. Questo tipo di ricerca, lo spazio utilizzato in ogni fase è lineare nel numero di archi dall'inizio al nodo corrente.
                </p>

                <p className='post-text'>
                    Se c'è una soluzione sul primo ramo cercato, la complessità temporale è lineare nel numero di archi del percorso. Invece nel peggiore dei casi, la ricerca in profondità può rimanere intrappolata su rami infiniti e non trovare mai una soluzione, anche se ne esiste una, in quanto viene effettuata una ricerca su grafi infiniti o per grafi 
                    con cicli. Se il grafo è un albero finito, il fattore di ramificazione in avanti è minore o uguale a b e con tutti i percorsi composti da k o meno archi, in questo caso il caso peggiore ha una complessità temporale pari a  <InlineMath math='O ( b^k )'/>.
                </p>

                <p className='post-text'>
                    Ricordiamo che la ricerca in profondità è sensibile rispetto all'ordine in cui vengono aggiunti i neighbors sulla frontiera, quindi quando viene implementato un algoritmo di questo tipo bisogna prestare attenzione a questa sua caratteristica. Possono essere implementati due tipi di ordinamento:
                </p>

                <ul>
                    <li><i>ordinamento statico</i>, il quale viene fissato a priori</li>
                    <li><i>ordinamento dinamico</i>, il quale cambia in base all'obiettivo</li>
                </ul>

                <p className='post-text'>
                    La ricerca in profondità è appropriata quando:
                </p>

                <ul>
                    <li>lo spazio di ricerca è ristretto</li>
                    <li>esistono molteplici soluzioni, anche con lunghi percorsi e più di un percorso porta a una soluzione</li>
                    <li>l'ordine in cui i vicini di un nodo vengono aggiunti allo stack può essere regolato in modo che le soluzioni vengano trovate al primo tentativo.</li>
                </ul>

                <p className='post-text'>
                    Non risulta conveniente utilizzare la ricerca in profondità quando:
                </p>

                <ul>
                    <li>è possibile rimanere intrappolati in percorsi infiniti</li>
                    <li>le soluzioni esistono a una profondità ridotta</li>
                    <li>ci sono più percorsi per un nodo</li>
                </ul>

                <p className='post-text'>
                    Un algoritmo di ricerca che si basa su quello della ricerca in profondità, è l'<strong>approfondimento iterativo</strong>. A differenza della ricerca in ampiezza che garantisce che 
                    verrà trovato un percorso in uno spazio esponenziale, e a differenza della ricerca in profondità che potrebbe non fermarsi, quest'ultimo metodo combina l'efficienza spaziale della ricerca in profondità 
                    con l'ottimalità della ricerca in ampiezza.
                </p>

                <p className='post-text'>
                    Questo nuovo algoritmo si basa sull'idea di ricalcolare gli elementi della frontiera in ampiezza piuttosto che memorizzarli. Ogni ricalcolo può essere una ricerca in profondità che quindi utilizza meno spazio. 
                    Viene richiamato iterativamente un <strong>depth-bounded searcher</strong> che prende in input un intero che rappresenta il <i>limite di profondità</i> e non esplora mai percorsi che hanno una lunghezza maggiore.
                </p>

                <p className='post-text'>
                    La ricerca iterativa in un primo step costruisce percorsi di lunghezza 1 e successivamente, se non trova un percorso valido, aumenta la profondità. Quando un depth-bounded searcher n fallisce nel trovare 
                    una soluzione, può eliminare tutte le computazioni precedenti e inizia nuovamente la computazione con una profondità pari a n+1. Alla fine troverà una soluzione, se questa esiste, e sarà sempre quella con il 
                    minimo numero di archi.
                </p>

                <p className='post-text'>
                    La ricerca iterativa distingue due casi principali: il fallimento dovuto al raggiungimento del limite di profondità e il fallimento dovuto all'esaurimento dello spazio di ricerca. Questo è molto utile per garantire 
                    lo stop della sua elaborazione in caso di grafi finiti. Nel primo caso, la ricerca deve essere ripetuta con un limite di profondità maggiore. Nel secondo caso, è una perdita di tempo riprovare con un limite di 
                    profondità maggiore, perché non esiste alcun percorso a prescindere dalla profondità, e quindi l'intera ricerca dovrebbe fallire.
                </p>

                <p className='post-text'>
                    Descriviamo ora lo pseudocodice della ricerca iterativa che ha come input un grafo G con N nodi e A archi, un nodo iniziale S e una funzione booleana sui nodi chiamata goal. Come output genera un percorso da S a un nodo obiettivo 
                    oppure <InlineMath math='\bot'/> se tale percorso non esiste. Come variabili locali ha una variabile booleana definita come  hit_depth_bound, una variabile numerica che rappresenta il limite e una procedura Depth_bounded_search.
                </p>

                <p className='post-text'>
                    Prima di definire nello pseudocodice 2.2 la ricerca iterativa, mostriamo nello pseudocodice 2.1 la funzione Depth_bounded_search che prende in <i>input</i> un sentiero <InlineMath math='< N_0, \dots, N_k >'/> e un numero intero b maggiore o 
                    uguale di 0 e genera in <i>output</i> un percorso di lunghezza k + b se esiste.
                </p>

                <div className='pre'>
                    <div className='code'>
                        <h3>Pseudocodice 2.1  </h3>
                        <h3>Depth_bounded_search</h3>
                        <h3>(<InlineMath math='< N_0, \dots, N_k >'/> , b)</h3>
                        <p>
                            <span className='number-row'>1.</span> Se b {">"}0 allora:<br/>
                            <span className='number-row'>2.</span> &emsp;per ogni arco <InlineMath math='< n_k, n > \in A'/> esegui:<br/>
                            <span className='number-row'>3.</span> &emsp;&emsp;res = Depth_bounded_search <br/>&emsp;&emsp;&emsp;( <InlineMath math='< n_0, \dots, n_k >'/> b - 1 )<br/>
                            <span className='number-row'>4.</span> &emsp;&emsp;Se res è un percorso, allora:<br/>
                            <span className='number-row'>5.</span> &emsp;&emsp;&emsp;return res<br/> 
                            <span className='number-row'>6.</span> Altrimenti se <InlineMath math='goal \; ( \; n_k \; )'/> allora:<br/>
                            <span className='number-row'>7.</span> &emsp;return <InlineMath math='< n_0, \dots, n_k >'/><br/>
                            <span className='number-row'>8.</span> Altrimenti se <InlineMath math='n_k'/> non ha figli allora:<br/> 
                            <span className='number-row'>9.</span> &emsp;hit_depth_bound = true<br/>   
                        </p>
                    </div>
                </div>

                <div className='pre'>
                    <div className='code'>
                        <h3>Pseudocodice 2.2 - ID_search (G, s, goal)</h3>
                        <p>
                            <span className='number-row'>1.</span> bound = 0<br/>
                            <span className='number-row'>2.</span> ripeti:<br/>
                            <span className='number-row'>3.</span> &emsp;hit_depth_bound = true<br/>
                            <span className='number-row'>4.</span> &emsp;res = Depth_bounded_serach ( {"<"} s {">"}, bound )<br/>
                            <span className='number-row'>5.</span> &emsp;se res è un percorso allora:<br/> 
                            <span className='number-row'>6.</span> &emsp;&emsp;return res<br/>
                            <span className='number-row'>7.</span> &emsp;bound = bound + 1<br/>
                            <span className='number-row'>8.</span> fino a quando (not hit_depth_bound)<br/>  
                        </p>
                    </div>
                </div>


                <p className='post-text'>
                    Come si evince dallo pseudocodice, per garantire che la ricerca di approfondimento iterativo fallisca ogni volta che la ricerca in ampiezza fallirebbe, è necessario tenere traccia di quando 
                    l'aumento del limite potrebbe aiutare a trovare una risposta. Infatti una ricerca con limite di profondità <strong> fallisce naturalmente</strong> se la ricerca non ha eliminato alcun percorso 
                    a causa del limite di profondità. In questo caso il programma può arrestarsi e non segnalare alcun percorso.
                </p>

                <p className='post-text'>
                    L'ovvio problema con l'approfondimento iterativo è il calcolo sprecato che si verifica a ogni passaggio nel caso in cui il fattore di ramificazione è elevato e il percorso non porta ad un nodo obiettivo.
                </p>

                <p className='post-text'>
                    Vi sono molti domini nei quali gli archi hanno costi non unitari e l'obiettivo è trovare una <strong>soluzione ottimale</strong>, per la quale tutte le altre soluzioni risultino avere un costo maggiore. 
                    Gli algoritmi che abbiamo descritto sopra, non sono in grado di trovare percorsi di costo minimo, in quanto non utilizzano le informazioni degli archi.
                </p>

                <p className='post-text'>
                    Ad esempio la ricerca in ampiezza trova una prima soluzione con il <i>minor numero di archi</i>, ma la distribuzione dei costi dell'arco può essere tale che un percorso con il minor numero di archi non sia 
                    un <i>costo minimo</i>. Per risolvere questo problema si utilizza la <strong>ricerca lowest-cost-first</strong>, la quale lavora come la ricerca in ampiezza, ma tiene conto del costo degli archi.
                </p>

                <p className='post-text'>
                    Se i costi degli archi sono tutti maggiori di una costante positiva (costi dell'arco limitato) e il fattore di ramificazione è finito, è garantito che la prima ricerca con il costo più basso trovi una soluzione ottimale 
                    se questa esiste.  Inoltre, il primo percorso verso un obiettivo che si espande è un percorso con il minor costo. Tale soluzione è ottimale, perché l'algoritmo espande i percorsi dal nodo iniziale in ordine di costo del 
                    percorso. Se esistesse un percorso migliore verso un obiettivo rispetto alla prima soluzione trovata, sarebbe stato ampliato dalla frontiera prima.
                </p>

                <p className='post-text'>
                    Il costo dell'arco limitato viene utilizzato per garantire che la ricerca con il costo più basso trovi una soluzione, quando ne esiste una, in grafi con fattore di ramificazione finito. Senza un tale limite ci possono essere infiniti percorsi con un costo finito.
                    Come la ricerca in ampiezza, la ricerca a basso costo è in genere esponenziale sia nello spazio che nel tempo. Genera dall'inizio tutti i percorsi che hanno un costo inferiore al costo di una soluzione.
                </p>

                <div className="succ-post">
                    <Link to="/La-ricerca-euristica">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON7