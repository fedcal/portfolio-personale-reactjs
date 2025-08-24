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
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 5. Ricerca di soluzioni</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale, Ricerca di soluzioni,rappresentazione piatta, singolo livello di gerarchia,problema di ricerca, percorso migliore,conoscenza euristica, spazio degli stati, stato, piena osservabilità, problema nello spazio degli stati, stato iniziale, funzione azione, obiettivo, stato obiettivo, Definizione di grafo orientato,grafo orientato,
            arco uscente, arco in entrata, percorso, una funzione di costo, soluzione ottimale, grafo diretto aciclico, nodo foglia, radice, grafo diretto aciclico, forward branching factor, forward branching factor,fattore di ramificazione al contrario,  fattore di ramificazione in avanti'/>
            <meta name='description' content='Dopo aver visto negli articoli precedenti come un agente percepisce e agisce nel mondo, adesso cerchiamo di comprendere come i suoi obiettivi influenzano le sue azioni. Infatti un agente, per essere definito intelligente, deve saper ragionare sulle sue capacità e sui suoi obiettivi per determinare cosa fare.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 5. Ricerca di soluzioni'/>
            <meta name='og:description' content='Dopo aver visto negli articoli precedenti come un agente percepisce e agisce nel mondo, adesso cerchiamo di comprendere come i suoi obiettivi influenzano le sue azioni. Infatti un agente, per essere definito intelligente, deve saper ragionare sulle sue capacità e sui suoi obiettivi per determinare cosa fare.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 5. Ricerca di soluzioni"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Ricerca-di-soluzioni" />
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
                    <Link to="/Controlli-e-azioni-di-un-agente"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">5. Ricerca di soluzioni</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-28" className='data' itemProp="datePublished" content="2023-01-28T07:30:00+08:00">28/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                   Dopo aver visto negli articoli precedenti come un agente percepisce e agisce nel mondo, adesso cerchiamo di comprendere come i suoi obiettivi influenzano le sue azioni. Infatti un agente, per essere definito intelligente, deve saper ragionare sulle sue capacità e sui suoi obiettivi per determinare cosa fare. Quindi, ponendoci 
                   ad esempio il problema della ricerca di un percorso in un grafo, vediamo come un agente risolve tale problema per raggiungere il suo obiettivo. 
                </p>

                <p className='post-text'>
                    Nel caso più semplice un agente ha un modello del mondo basato sullo stato, un obiettivo da raggiungere e nessuna incertezza. Questa rappresentazione viene definita <strong>rappresentazione piatta</strong> o <strong>singolo livello di gerarchia</strong>. L'agente determina come raggiungere il suo obiettivo cercando nella sua 
                    rappresentazione dello spazio degli stati un modo per passare dal suo stato attuale a uno stato che soddisfi il suo obiettivo. In un modello completo, l'agente cerca di trovare una sequenza di azioni tramite le quali può raggiungere il suo obiettivo. Possiamo quindi astrarre il problema facendolo coincidere con quello di trovare 
                    un percorso dal nodo iniziale a un nodo obiettivo in un grafo orientato.
                </p>
                
                <p className='post-text'>
                    Trovare il percorso migliore da una posizione corrente a una destinazione è considerato un <strong>problema di ricerca</strong>. Il <i>percorso migliore</i> potrebbe significare trovare:
                </p>
                
                <ul>
                    <li>il percorso più breve, quindi la distanza minima</li>
                    <li>il percorso più rapido</li>
                    <li>il percorso più adatto rispetto a determinate preferenze.</li>
                </ul>

                <p className='post-text'>
                    Trovare il percorso più breve è solitamente il più facile da implementare, in quanto effettuare un calcolo delle distanze è semplice. E' più difficile calcolare il tempo, in quanto un agente deve tener conto di diverse variabili. Mentre trovare il percorso migliore che tenga conto di altre preferenze è difficile a livello computazionale.
                    Per essere più specifici, questa operazione di ricerca è diversa dalla ricerca all'interno del mondo o alla ricerca web, in quanto è un'operazione che avviene all'interno dell'agente e produce una rappresentazione interna ad esso che indica il percorso verso l'obiettivo. 
                </p>

                <p className='post-text'>
                    La ricerca è alla base di gran parte dell'intelligenza artificiale. Quando a un agente viene assegnato un problema, di solito gli viene data solo una descrizione che gli consente di riconoscere una soluzione, non un algoritmo per risolverlo. Deve cercare una soluzione. L'esistenza di problemi NP-completi (di cui parleremo più avanti), con mezzi efficienti per riconoscere 
                    le soluzioni ma nessun metodo efficiente per trovarle, indica che la ricerca è una parte necessaria della risoluzione dei problemi. Per risolvere alcuni problemi, gli agenti fanno uso di una conoscenza extra rispetto a quella dello spazio di ricerca, denominata <strong>conoscenza euristica</strong>. La stima del costo da un nodo a un obiettivo rientra in questo obiettivo.
                </p>

                <p className='post-text'>
                    Ogni agente per poter agire in maniera intelligente agisce in termini di <strong>spazio degli stati</strong>, nel quale ogni <strong>stato</strong> contiene tutte le informazioni necessarie per prevedere gli effetti di un'azione e per determinare se uno stato soddisfa o meno l'obiettivo. Per effettuare una ricerca nello spazio degli stati, si presume che l'agente:
                </p>

                <ul>
                    <li>abbia una perfetta conoscenza dello spazio degli stati e pianifichi il caso in cui osserva in quale stato si trova; (<i>piena osservabilità</i>)</li>
                    <li>abbia una serie di azioni che hanno effetti deterministici noti;</li>
                    <li>è in grado di determinare se uno stato soddisfa l'obiettivo.</li>
                </ul>

                <p className='post-text'>
                    Detto ciò, possiamo definire una <strong>soluzione</strong> come una sequenza di azioni che porterà l'agente dal suo stato attuale a uno stato che soddisfa l'obiettivo. Adesso abbiamo tutti gli elementi per definire formalmente un <strong>problema nello spazio degli stati</strong>. Quest'ultimo è costituito da: 
                </p>

                <ul>
                    <li>Un insieme di stati</li>
                    <li>uno stato distinto chiamato <strong>stato iniziale</strong></li>
                    <li>per ogni stato, un insieme di azioni disponibili per l'agente in quello stato</li>
                    <li>una <strong>funzione azione</strong> che, ricevendo in input uno stato e un'azione, restituisce un nuovo stato</li>
                    <li>un <strong>obiettivo</strong> specificato come una funzione booleana, <i>goal(S)</i>, che risulta vera quando lo stato S soddisfa l'obiettivo e in tal caso S prende il nome di <strong>stato obiettivo</strong></li>
                    <li>un criterio che specifica la qualità di una soluzione accettabile. In questo caso una <i>soluzione ottima</i> è quella soluzione che risulta migliore in base a questo criterio.</li>
                </ul>

                <p className='post-text'>
                    Per trovare una sequenza di azioni per raggiungere un obiettivo viene astratto come ricerca di percorsi in grafi orientati, nel quale si definisce uno spazio di ricerca sottostante e si applica ricorsivamente un algoritmo di ricerca 
                    al relativo spazio. Molti problemi della vita reale si possono ricondurre al problema di ricerca di un percorso in un grafo, perchè viene fornito un modello astratto appropriato di problem solving indipendente per ogni particolare dominio.
                </p>

                <p className='post-text'>
                    Un grafo orientato è costituito da un insieme di nodi e da un insieme di archi orientati tra i nodi. Bisogna quindi trovare un percorso lungo questi archi dal nodo iniziale a quello finale. Per riallacciarci a quanto detto prima, lo spazio 
                    degli stati è rappresentato dai nodi e le azioni dagli archi. Questa astrazione è fondamentale, in quanto un problema può avere diverse rappresentazioni attraverso il modello del grafo.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di grafo orientato</strong></dt>
                    <dd>
                        Un <strong>grafo orientato</strong> è costituito da:
                        <ul>
                            <li>un set di N nodi</li>
                            <li>un set di A archi, dove un <i>arco</i> è una coppia ordinata di nodi</li>
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    Ovviamente un nodo potrebbe rappresentare qualsiasi cosa. All'interno di un grafo ci possono essere infiniti nodi e archi. Oltre alla definizione di grafo, abbiamo anche bisogno di definire sintatticamente l'arco, il quale può essere rappresentato 
                    attraverso la dicitura <InlineMath math='< n_1, n_2 >'/>, la quale sta indicare che l'arco preso in considerazione, è un <strong>arco uscente </strong> dal nodo <InlineMath math='n_1'/> e un <strong>arco in entrata</strong> nel nodo <InlineMath math= 'n_2'/>. 
                    Diciamo inoltre che un nodo <InlineMath math='n_2'/> è <strong>vicino</strong> di <InlineMath math='n_1'/> se c'è un arco che li collega, ovvero se  <InlineMath math='< n_1, n_2 > \in A'/>. Il concetto di vicinanza non è simmetrico. Inoltre gli archi 
                    possono essere <strong>etichettati</strong> in diversi modi. In generale si inserisce l'azione che porterà l'agente da un nodo all'altro, il costo di quella azione oppure entrambi.
                </p>

                <p className='post-text'>
                    Una volta acquisito il concetto di arco e di nodo, possiamo definire il concetto di <strong>percorso</strong> come una sequenza di nodi <InlineMath math='<n_0, n_1, \dots, n_k >'/> dal nodo s al nodo g, tale che <InlineMath math='s = n_0'/>, 
                    <InlineMath math='g = n_k'/> e <InlineMath math='< n_{i-1}, n_i > \in A'/>. Ciò significa che c'è un arco da  <InlineMath math='n_{i-1}'/> a <InlineMath math='n_i'/> per ogni i. Inoltre può essere utile vedere un percorso come una sequenza di archi o come 
                    una sequenza di etichette (o <i>labels</i>). Infine definiamo un percorso come <InlineMath math='< n_0, n_1, \dots, n_i >'/> come una <strong>parte iniziale</strong> di <InlineMath math='< n_0, n_1, \dots, n_k >'/>, con <InlineMath math='i \leq k'/>.
                </p>

                <p className='post-text'>
                    Quando gli archi di un grafo hanno un costo, può essere definita <strong>una funzione di costo</strong> denotata come <InlineMath math='cost( < n_i, n_j > )'/> che indica il costo dell'arco, che per inciso è un valore non negativo. Quindi dati un 
                    percorso <InlineMath math='p = < n_0, n_1, \dots, n_k >'/>,  il costo del percorso p è la somma dei costi degli archi che lo compongono. Quindi <InlineMath math='cost ( p ) = \sum_{i=1}^k cost( < n_{i-1}, n_i > ) = cost( < n_0, n_1 > ) + \dots + cost( < n_{k-1}, n_k > )'/>.
                </p>

                <p className='post-text'>
                    Una <strong>soluzione ottimale</strong> è una soluzione che ha il costo minore. Ciò signigica che all'interno di un grafo la soluzione ottimale è quel percorso p che da parte un nodo iniziale per arrivare al nodo obiettivo, tale che non vi è un percorso 
                    p{"'"} che per lo stesso nodo iniziale e per lo stesso nodo obiettivo abbia una funzione costo minore. Ovvero che <InlineMath math='cost( p ) < cost( p\prime )' />.
                </p>

                <p className='post-text'>
                    Vi sono altri concetti importanti da tenere in considerazione quando si effettua una ricerca di una soluzione attraverso la rappresentazione mediante grafi. Definiamo un <strong>ciclo</strong> come un percorso non vuoto dove il nodo finale coincide con quello iniziale, 
                    ovvero quel percorso <InlineMath math='< n_0, n_1, \dots, n_k >'/> in cui <InlineMath math='n_0 = n_k'/>. Un grafo diretto senza nessun ciclo è chiamato <strong>grafo diretto aciclico</strong> <i>(DAG)</i>.
                </p>

                <p className='post-text'>
                    Un'altra definizione è quella di <strong>albero</strong>, definito come DAG all'interno del quale esiste un nodo che non possiede nessun arco in entrata e tutti gli altri nodi hanno solo un arco in entrata. Il nodo con nessun arco in entrata prende il nome di <strong>radice</strong> o <i>root</i>, 
                    mentre un nodo con nessun arco in uscita è chiamato <strong>nodo foglia</strong> o <i>leaf</i>. I nodi vicini prendono il nome di <strong>figli</strong> o <i>children</i>.
                </p>

                <p className='post-text'>
                    In molti problemi il grafo di ricerca non è fornito esplicitamente, ma è costruito dinamicamente, secondo le diverse necessità. In questi casi viene definito il <strong>forward branching factor</strong> di un nod, oppure <i>fattore di ramificazione in avanti</i>, il numero di archi uscenti da quel 
                    nodo. Mentre il <strong>forward branching factor</strong> di un nodo, o <i>fattore di ramificazione al contrario</i>, è il numero di archi in entrata di quel nodo. Questi due fattori sono molto importanti per determinare la complessità di un algoritmo.
                </p>
                
                <div className="succ-post">
                    <Link to="/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico">Post successivo &#8594;</Link>
                </div>
                
                
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON5