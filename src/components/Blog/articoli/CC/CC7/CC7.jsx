import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC7() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 7. Decidibilità e indecibilità</title>
            <meta name='keywords' content='Decidibilità, indecibilità, problema dell&#39;accettazione, Teorma DFA decidibile, Teorma NFA decidibile, Teorema di indecidibilità di una macchina di Turing,funzione iniettiva, funzione suriettiva, di funzione biettiva,tecnica della diagonalizzazione, Teoremma linguaggi non Turing-riconoscibili, sequenza binaria infinita, sequenza caratteristica'/>
            <meta name='description' content=' In questo articolo ci concentreremo sulle macchine di Turing, il cui potenziale viene sfruttato nella teoria della computabilità, a differenza degli automi e delle grammatiche viste negli articoli precedenti.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 7. Dedicibilità'/>
            <meta name='og:description' content=' In questo articolo ci concentreremo sulle macchine di Turing, il cui potenziale viene sfruttato nella teoria della computabilità, a differenza degli automi e delle grammatiche viste negli articoli precedenti.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 7. Dedicibilità"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Dedicibilità-e-indecidibilità" />
        </Helmet>
        <Navbar/>
        <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_1900.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img itemProp='contentUrl' loading="lazy" decoding="async" src={HomeCC} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='calcolabilità e complessità'/>
                </div>
            </section>
            <section className='post-content post-container'>

                <div className="prec-post">
                    <Link to="/Le-macchine-di-Turing"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">7. Decidibilità e indecibilità</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-21" className='data' itemProp="datePublished" content="2023-01-21T07:30:00+08:00">21/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                   Una volta esaminati gli automi, le grammatiche e le macchine di Turing, adesso ci concentreremo sulla potenza degli algoritmi nella risoluzione dei problemi. Vedremo che alcuni problemi non possono essere risolti in forma algoritmica e vedremo come dimostrarlo. Iniziamo a trattare i linguaggi decidibili mediante algoritmi e il primo problema 
                   che affrontiamo è il <strong>problema dell'accettazione</strong> per DFA, il quale consiste nel testare se un particolare automa finito deterministico accetta una data stringa può essere espresso come un linguaggio <InlineMath math='A_{DFA}'/>. Questo linguaggio contiene le codifiche di tutti i DFA con le stringhe che essi accettano. Quindi definiamo 
                   <InlineMath math='A_{DFA} = \{ < B, w > |'/> B è un DFA che accetta la stringa di input w {"}"}.
                </p>

                <p className='post-text'>
                    Il problema di verificare se un DFA B accetta l'input w coincide con il problema di verificare se <InlineMath math='< B, w >'/> è un elemento del linguaggio <InlineMath math='A_{DFA}'/>. Enunciamo il seguente teorema:
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorma DFA decidibile</strong></dt>
                    <dd>
                        <InlineMath math='A_{DFA}'/> è un linguaggio decidibile.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema esaminiamo in primo luogo l'input <InlineMath math='< B, w >'/> che rappresenta un DFA B insieme ad una stringa w. B può essere rappresentato attraverso la sua lista di componenti. Quando M riceve il suo input viene verificata se viene rappresentato correttamente il DFA e la stringa. In caso negativo, viene rifiutato. 
                    In caso affermativo invece, viene effettuato la simulazione, tenendo traccia dello stato corrente di B e della posizione corrente di B nell'input w attraverso la scrittura sul nastro. Inizialmente lo stato correnti di B è <InlineMath math='q_0'/> e la posizione corrente dell'input di B è il simbolo più a sinistra di w. Gli stati e le posizioni vengono aggiornati in base alla 
                    funzione di transizione specificata da <InlineMath math='\delta'/>. Quando M termina l'elaborazione dell'ultimo simbolo di w, M accetta l'input se B è in uno stato di accettazione, mentre lo rifiuta in caso contrario.
                </p>

                <p className='post-text'>
                    In maniera molto simile possiamo dimostrare un teorema per gli automi a stati finiti non deterministici. Quindi dato <InlineMath math='A_{NFA} = \{ < B,w > | '/> B è un NFA che accetta la stringa di input w {"}"}, possiamo definire il seguente teorema:
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorma NFA decidibile</strong></dt>
                    <dd>
                        <InlineMath math='A_{NFA}'/> è un linguaggio decidibile.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema esaminiamo in primo luogo una TM N che decide <InlineMath math='A_{NFA}'/>. Potremmo progettare N in modo che operi come M, simulando un NFA inviece di un DFA. Potremmo anche seguire un'altra strada, ovvero quella nella quale N usa M come una sottoprocedura.  Poichè M è 
                    progettata per funzionare con un DFA, N prima converte l'NFA che riceve come input in un DFA e poi lo passa ad M. Quindi possiamo definire N  = "Su un input <InlineMath math='< B, w >'/> dove B è un NFA e w è una stringa:
                </p>

                <ul>
                    <li>Converte l'NFA B in un DFA C equivalente, usando la procedura di conversione</li>
                    <li>Esegue la TM M sull'input <InlineMath math='< C, w >'/></li>
                    <li>Se M accetta, accetta altrimenti rifiuta."</li>
                </ul>

                <p className='post-text'>
                    L'esecuzione della TM M nella fase 2 significa incorporare M nella progettazione di N come sottoprocedura.
                </p>

                <p className='post-text'>
                    Anche i linguaggi context-free, le espressioni regolari e i DFA sono dedicibili e la dimostrazione dei singoli teoremi è simile a quelle viste in precedenza.
                </p>

                <p className='post-text'>
                    Dopo aver visto alcuni teoremi della decidibilità, approfondiamo l'indecidibilità. Un primo teorema stabilisce che l'indecidibilità di uno specifico linguaggio: il problema di 
                    determinare se una macchina di Turing accetta una determinata stringa in input. Definiamo tale linguaggio <InlineMath math='A_{TM}'/> e per analogia <InlineMath math='A_{DFA}'/> e 
                    <InlineMath math='A_{CFG}'/>. Mentre <InlineMath math='A_{DFA}'/> e <InlineMath math='A_{CFG}'/> sono decidibili, <InlineMath math='A_{TM}'/> non lo è. Sia 
                    <InlineMath math='A_{TM} = \{ < M, w > |'/> M è una TM e M accetta w {"}"}, possiamo definire il seguente teorema: 
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema di indecidibilità di una macchina di Turing</strong></dt>
                    <dd>
                        <InlineMath math='A_{TM}'/> è indecidibile.
                    </dd>
                </dl>

                <p className='post-text'>
                    Prima di dimostrare questo teorema occorre definire una macchina di Turing U che riconosce <InlineMath math='A_{TM}'/>. U = 
                    "Su inpu {"<"} M, w {">"}, dove M è una TM e w è una stringa: 
                </p>

                <ul>
                    <li>Simula M su input w</li>
                    <li>Se durante la computazione M entra nello stato di accettazione, accetta altrimenti rifiuta."</li>
                </ul>

                <p className='post-text'>
                    Se l'algoritmo avesse modo di determinare che M non si ferma su w, sarebbe in tal caso in grado di rifiutare w. Però nessun algoritmo è in grado di determinarlo.
                    Per dimostrare dell'indecidibilità di <InlineMath math='A_{ATM}'/> si utilizza la <strong>tecnica della diagonalizzazione</strong>. Questo teorema si basa sullo stabilire 
                    se due insiemi infiniti hanno la stessa cardinalità o se uno è più grande dell'altro. Per risolvere questo problema si cerca di contare gli elementi. 
                </p>

                <p className='post-text'>
                    Due insiemi finiti hanno la stessa dimensione se gli elementi di un insieme possono essere accoppiati agli elementi dell'altro gruppo. Così facendo si confrontano le dimensioni senza ricorrere 
                    al conteggio. Utilizziamo questo principio anche per gli insiemi infiniti e per poterlo fare, diamo una definizione di <strong>funzione iniettiva</strong>, <strong>funzione suriettiva</strong> e 
                    di <strong>funzione biettiva</strong>.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di funzione iniettiva, funzione suriettiva e di funzione biettiva</strong></dt>
                    <dd>
                        Supponiamo di avere due insiemi A e B e una funzione f da A in B. Si definisce <i>funzione iniettiva</i>, quella funzione f che non mappa mai due elementi diversi nello stesso punto, 
                        ovvero per la quale si ha <InlineMath math='f(a) \ne f(b)'/> ogniqualvolta che <InlineMath math='a \ne b'/>. Invece diciamo che la funzione f è una <i>funzione suriettiva</i> se tocca ogni elemento 
                        di B, ovvero se per ogni <InlineMath math= 'b \in B'/> esiste un <InlineMath math= 'a \in A'/> tale che <InlineMath math='f(a)=b'/>. Possiamo affermare che A e B hanno la <strong>stessa cardinalità </strong>
                        se esiste una funzione iniettiva e suriettiva. Una funzione che è contemporaneamente suriettiva e iniettiva, prende il nome di <i>funzione biettiva</i>. In questa funzione ogni elemento di A viene mappato in un 
                        unico elemento di B e per ogni elemento di B esiste un unico elemento di A che viene mappato in esso.
                    </dd>
                </dl>

                <p className='post-text'>
                    Consideriamo l'insieme dei numeri naturali N e l'insieme Q definito come: <InlineMath math='Q =\{ \frac{m}{n} | m , n \in N'/>. Per ottenere la lista degli elementi dei due insiemi creiamo una matrice infinita contenente tutti 
                    i numeri razionali positivi. La riga i-esima contiene tutti i numeri con numeratore i e la colonna j-esima ha tutti i numeri con denominatore j. in tal modo il numero <InlineMath math='\frac{i}{j}'/> occupa la i-esima riga e la 
                    j-esima colonna. Adesso abbiamo la necessita di trasformare questa matrice in una lista. Un modo errato di farlo è quello di cominciare con una lista di tutti gli elementi della prima riga. Essendo infinita, non raggiungeremo mai 
                    la seconda. 
                </p>

                <p className='post-text'>
                    Un modo corretto di farlo consiste nell'elencare gli elementi sulle diagonali sovrapposte al diagramma a partire da un angolo. In questo modo avremo quindi una lista di tutti gli elementi di Q. Dopo aver visto la biezioni di questi due 
                    insiemi, potremmo pensare di dimostrare che presa qualsiasi coppia di insiemi infiniti, questi hanno la stessa dimensione. 
                </p>

                <p className='post-text'>
                    A questo punto possiamo dire che abbiamo capito che alcuni linguaggi non sono decidibili e neppure Turing riconoscibili, per il semplice fatto che l'insieme dei linguaggi è non numerabile, mentre l'insieme di tutte le macchine di Turing è 
                    numerabile. Poichè ogni macchina di Turing è in grado di riconoscere un solo linguaggio e ci sono più linguaggi che macchine di Turing, quindi alcuni linguaggi non sono Turing-riconoscibili.
                </p>

                <dl className='definizione'>
                    <dt><strong>Teoremma linguaggi non Turing-riconoscibili</strong></dt>
                    <dd>
                        Alcuni linguaggi non sono Turing-riconoscibili.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare che l'insieme di tutte le macchine di Turing è numerabile dobbiamo prima osservare che l'insieme di tutte le stringhe <InlineMath math='\sum *'/> è numerabile per ogni alfabeto <InlineMath math='\sum'/>. Avendo un numero finito 
                    di stringhe di ogni lunghezza, possiamo formare una lista di <InlineMath math='\sum *'/> scrivendo tutte le stringhe di lunghezza 0, 1, 2 e così via. L'insieme di tutte le macchine di Turing M; può essere codificata con una stringa {"<"}MM{">"}. 
                    Se ci limitiamo a tralasciare quelle stringhe che non sono la codifica di una macchina di Turing, possiamo ottenere una lista di tutte le macchine di Turing. Per mostrare che l'insieme di tutti i linguaggi è non numerabile, dobbiamo prima osservare 
                    che l'insieme delle sequenze binarie infinite è non-numerabile.
                </p>

                <p className='post-text'>
                    Una <i>sequenza binaria infinita</i> è una sequenza senza fine di 0 e 1. Sia B l'insieme di tutte le sequenze binarie infinite, possiamo dimostrare che B è non numerabile. Per farlo si può utilizzare una dimostrazione mediante diagonalizzazione. Inoltre 
                    L è non-numerabile e lo mostriamo dando una corrispondenza con B, dimostrando così che i due insiemi hanno la stessa cardinalità. Sia <InlineMath math='\sum * = \{s_1,s_2,s_3, ... \}'/>. Ogni linguaggio <InlineMath math='A \in L'/> ha un'unica sequenza 
                    in B. Il bit i-esimo della sequenza è 1 se <InlineMath math='s_i \in A'/> ed è uno 0 se <InlineMath math='s_i \not \in A'/>; questa è definita quindi <strong>sequenza caratteristica</strong> di A. La funzione <InlineMath math='f : L \longrightarrow B'/>, 
                    dove f(A) è uguale alla squenza caratteristica di A è una funzione biettiva. Pertanto essendo B non numerabile, anche L è non numerabile.
                </p>

                <p className='post-text'>
                    Questa è la dimostrazione che l'insieme di tutti i linguaggio non può essere messo in corrispondenza biunivoca con l'insieme di tutte le macchine di Turing.
                </p>

                <div className="succ-post">
                    <Link to="/Riducibilità-Pt-1">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC7