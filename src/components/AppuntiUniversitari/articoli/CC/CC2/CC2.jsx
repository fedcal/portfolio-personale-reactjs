import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC2() {
    const quintuplaAutoma = ` (Q, \\sum, \\delta. q_0, F)`;
    const sommaVariabile = `\\sum`;
    const deltaVariabile = `\\delta`;
    const funzioneDelta = '\\delta : Q \\times \\sum \\rightarrow Q';
    const statoIniziale = `q_0 \\in Q`;
    const statiAccettati = `F \\subseteq Q`;
    const parolaAutoma = `w = w_1w_2w_3\\dots w_n`;
    const letteraStringa = `w_i`;
    const sequenzaStati = `r_0,r_1,\\dots , r_n`;
    const primaCondizione = `r_0 = q_0`;
    const secondaCondizione = `\\delta (r_i,w_{i+1}) = r_{i+1}`;
    const terzaCondizione = `r_n \\in F`;
    const linguaggioA = ` \{ w | M accetta w \}`;
    const unioneRegoalre1 = `A \\cup B: `;
    const unioneRegoalre2 = `x|x \\in A \\circ x \\in B`;
    const concatenazioneRegolare = ` A \\circ B = \{ xy | x \\in A  e  y \\in B \} `;
    const starRegolare = `A^* = \{ x_1x_2...x_k | k \\geq \}  `;
    const epsilonSimbolo = ` \\epsilon `;

    const NFA = ` NFA = (Q,\\sum,\\delta, q_0, F) `;
    const funzioneNFA = ` \\delta : Q \\times \\sum_{\\epsilon} \\rightarrow P(Q)`;

    const NFA1 = ` N = (Q,\\sum,\\delta,q_0,F) `;
    const DFA1 = ` M = (Q',\\sum,\\delta ',q_0',F') `;
    const dimSecondo = ` R \\in Q' `;
    const dimSecondo1 = `a \\in \\sum`;
    const dimSecondo2 = `\\delta  (R,a) =`;

    const dimSecondo21 = ` q \\in Q | q \\in \\delta (r,a)`;
    const dimSecondo3 = `r \\in R`;
    
    const dimTransizione = ` \\delta ' (R,a) = \\coprod_{r\\in R}\\delta(r,a) `;

    const dimTre1 = `q_0`;
    const dimQuattro = ` R \\in  `;
    
    const inclusioneR = `R \\subseteq Q`;
    const deltaSimbolo = `\\delta`;
    const inSimbolo = `\\in`;
    
    return (
        <div>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
                crossorigin="anonymous"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Federico Calò Blog - 2. Automi e linguaggi regolari</title>
                <meta name='keywords' content='calcolabilità, complessità, computabilità, teoria della computazione, modelli di computazione, automa finito, stati, alfabeto, funzione di transizione, stato iniziale, insieme degli stati accettati, diagramma di stato, stato iniziale, stato di accettazione, transizione, linguaggio regolare, operazioni regolari, operazione unaria, operazioni binarie, non determinismo, DFA, 
                NFA, automa finito non deterministico, automa finito deterministico, teorema di equivalenza tra NFA e DFA'/>
                <meta name='description' content='Introduciamo gli elementi alla base della teoria della computazione quali ad esempio gli automi finiti e i linguaggi regolari. '/>
                <meta name="robots" content="index, follow, max-snippet:[100]" />
                <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
                <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
                
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò Blog - 2. Automi e linguaggi regolari'/>
                <meta name='og:description' content='Introduciamo gli elementi alla base della teoria della computazione quali ad esempio gli automi finiti e i linguaggi regolari.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 2. Automi e linguaggi regolari"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <link rel="canonical" href="https://www.federicocalo.dev/Automi-e-linguaggi-regolari" />
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
                        <Link to="/Introduzione-alla-Calcolabilita-e-Complessita"> &#8592; Post precendente</Link>
                    </div>

                    <h1 className='header-title' itemProp="headline">2. Automi e linguaggi regolari</h1>
                    <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-14" className='data' itemProp="datePublished" content="2023-01-14T07:30:00+08:00">14/01/2023</time>
                                    
                    <p itemProp='description' className='post-text first-text'>
                        La <strong>teoria della computazione</strong> studia la creazione di <i>modelli di computazione</i> sotto diversi aspetti, ognuno dei quali ha caratteristiche diverse in base a quello che necessitiamo. Il più semplice è l'<strong>automa finito</strong> rappresentato da una quintupla <InlineMath math={quintuplaAutoma} /> dove Q rappresenta un insieme finito che contiene tutti gli <strong>stati </strong> dell'automa, 
                        mentre <InlineMath math={sommaVariabile} /> è l'insieme finito chiamato <strong>alfabeto</strong>, mentre <InlineMath math={deltaVariabile} /> rappresenta la <strong>funzione di transizione</strong>: <InlineMath math={funzioneDelta} />, mentre <InlineMath math={statoIniziale} /> rappresenta lo <strong>stato iniziale</strong>, infine <InlineMath math={statiAccettati} /> rappresenta <strong>l'insieme degli stati accettati</strong>. In generale 
                        un automa può essere visto come un grafo la cui rappresentazione grafica prende il nome di <strong>diagramma di stato</strong>, i nodi invece rappresentano gli <i>stati</i>, lo stato da cui parte l'elaborazione prende il nome di <i>stato iniziale</i>, mentre quello in cui termina l'elaborazione viene  definito <i>stato di accettazione</i>. I vari link di collegamento tra i nodi prendono il nome di <i>transazione</i>.
                    </p>

                    <p className='post-text'>
                        Definendo M come automa finito e <InlineMath math={parolaAutoma} /> una stringa dove ogni <InlineMath math={letteraStringa} /> è un elemento dell'alfabeto <InlineMath math={sommaVariabile} />. L'automa M <strong>accetta</strong> w se  esiste una sequenza di stati <InlineMath math={sequenzaStati} /> in Q che rispetta le seguenti condizioni:
                    </p>

                    <ul>
                        <li><InlineMath math={primaCondizione} /></li>
                        <li><InlineMath math={secondaCondizione} />, per i=0,...,n-1</li>
                        <li><InlineMath math={terzaCondizione} /></li>
                    </ul>

                    <p className='post-text'>
                        Ciò significa che la macchina inizia dallo stato iniziale per poi passare da uno stato all'altro in base alla funzione di transizione e infine accetta la stringa in input se l'automa termina la sua elaborazione in uno stato accettante. Affermiamo che l'automa M <i>riconosce</i> il linguaggio A se A = <InlineMath math={linguaggioA} />. Inoltre possiamo dare 
                        la definizione di <strong>linguaggio regolare</strong> come quel linguaggio per il quale esiste un automa finito che lo riconosce. Progettare un automa per un linguaggio regolare è un processo non sempre facile, il quale richiede molta logica.
                    </p>

                    <p className='post-text'>
                        Tra i linguaggi possono essere implementate delle operazioni che prendono il nome di <strong>operazioni regolari</strong>, le quali sono: l'<i>unione</i>, la <i>concatenazione</i> e la <i>star</i>. Definiti due linguaggi A e B, si definisce l'unione come segue: <InlineMath math={unioneRegoalre1} /> {"{"} <InlineMath math={unioneRegoalre2} /> {"}"}. L'operazione di concatenazione può essere enunciata come: 
                        <InlineMath math={concatenazioneRegolare} />, mentre l'operazione di star è indicata come: <InlineMath math={starRegolare} />. L'operazione star è un'<strong>operazione unaria</strong>, a differenza delle altre che sono delle operazioni che sono delle <strong>operazioni binarie</strong>.
                    </p>

                    <p className='post-text'> 
                        Nella teoria della computazione è presente il concetto di <strong>non determinismo</strong>, il quale ha un grande impatto. In una macchina non deterministica, in un dato stato possono essere seguite diverse strade. Il non determinismo è una generalizzazione del determinismo, quindi ogni automa finito deterministico può essere visto 
                        come un automa finito non deterministico. Possiamo indicare un automa deterministico con l'acronimo di <strong>DFA</strong>, mentre un automa non deterministico possiamo indicarlo con l'acronimo <strong>NFA</strong>. La differenza sostanziale tra questi due tipi di automi consiste nel fatto che ogni stato di un DFA ha sempre un arco in 
                        entrata e un arco di transizione uscente per ogni simbolo dell'alfabeto, a differenza del NFA nel quale uno stato può avere zero, uno o più archi uscenti per ogni simbolo dell'alfabeto. All'interno di un NFA può essere trovato un arco la cui transizione è etichettata con <InlineMath math={epsilonSimbolo} />.
                    </p>

                    <p className='post-text'>
                        Un NFA ha un modo differente di computare rispetto a un DFA. Quando viene ricevuta una stringa in input, la macchina si divide in più copie di essa per ogni lettera letta e le esegue tutte in parallelo, questo specialmente quando da uno stato si diramano due o più diramazioni. Quando in una o più copie della macchina, 
                        la computazione termina in uno stato finale la stringa viene accettata. Quindi il non determinismo viene visto come una specie di computazione parallela dove più processi multipli indipendenti possono essere visti in maniera indipendente.
                    </p>

                    <p className='post-text'>
                        Se volessimo dare una definizione formale di <strong>automa finito non deterministico</strong>, esso può essere visto come una quintupla <InlineMath math={NFA} /> nella quale Q rappresenta un insieme finito di stati, <InlineMath math={sommaVariabile} /> è l'alfabeto finito di simboli, <InlineMath math={funzioneNFA} /> rappresenta la funzione di transizione, 
                        lo stato iniziale è rappresentato da <InlineMath math={statoIniziale} />, infine l'insieme degli stati di accettazione è rappresentato da <InlineMath math={statiAccettati} />. Si può notare come questa definizione risulti simile a quella del DFA, a eccezione del fatto della funzione di transizione che accetta anche il simbolo <InlineMath math={epsilonSimbolo} />.
                    </p>

                    <p className='post-text'>
                        Gli automi finiti deterministici e gli automi finiti non deterministici riconoscono la stessa classe di linguaggi. Si può dedurre che due macchine sono <strong>equivalenti</strong> quando riconoscono lo stesso linguaggio. Enunciamo il <i>teorema di equivalenza tra NFA e DFA</i>: "Per ogni automa finito non deterministico esiste un automa finito deterministico equivalente". Questo teorema si può dimostrare 
                        costruendo un NFA <InlineMath math={NFA1} /> e un DFA <InlineMath math={DFA1} />, entrambi devono riconoscere il linguaggio A. Consideriamo le seguenti proprietà: 
                    </p>

                    <dl>
                        <dt>Q' = P(Q)</dt>
                        <dd>Ogni stato di M è un insieme di stati di N, dato che P(Q) è l'insieme dei sottoinsiemi di Q.</dd>

                        <dt>Per <InlineMath math={dimSecondo} /> e <InlineMath math={dimSecondo1} />, sia <InlineMath math={dimSecondo2} /> {"{"}<InlineMath math={dimSecondo21} /> per qualche <InlineMath math={dimSecondo3} />{"}"}.</dt>
                        <dd>Se R è uno stato di M, esso è anche un insieme di stati di N. Quando M legge un simbolo a nello stato R, mostra dove a porta  ogni stato in R . Poichè da ogni stato si può andare in un insieme di stati, 
                            prendiamo l'unione di tutti questi insiemi e può essere rappresentata come: <InlineMath math={dimTransizione} />
                        </dd>

                        <dt><InlineMath math={dimTre1}/>' = {"{"}<InlineMath math={dimTre1}/>  {"}"}</dt>
                        <dd>M inizia nello stato corrispondente alla collezione che contiene solo stato iniziale di N</dd>

                        <dt>F'=<InlineMath math={dimQuattro}/> Q' | R contiene uno stato accettante di N</dt>
                        <dd>La macchina M accetta se uno dei possibili stati in cui N potrebbe essere a quel punto è uno stato accettante.</dd>
                    </dl>

                    <p className='post-text'>
                        Ora dobbiamo prendere in considerazione gli archi <InlineMath math={epsilonSimbolo}/>. Per ogni stato R di M, definiamo E(R) come la collezione di stati che possono essere raggiunti dagli elementi di R proseguendo solo con archi <InlineMath math={epsilonSimbolo}/>, 
                        includendo gli stessi elementi di R. Formalmente, per <InlineMath math={inclusioneR}/> sia: E(R) = {"{"} q | q può essere raggiunto da R attraverso 0 o più archi <InlineMath math={epsilonSimbolo}/> {"}"}. Successivamente trasformiamo la funzione di transizione di M, 
                        nella quale sostituiamo <InlineMath math={deltaSimbolo}/>(r,a) con E(<InlineMath math={deltaSimbolo}/>(r,a)). Quindi la funzione di transizione diventa <InlineMath math={deltaSimbolo}/>'(R,a) ={"{"} q <InlineMath math={inSimbolo}/> Q | q <InlineMath math={inSimbolo}/>
                        E(<InlineMath math={deltaSimbolo}/>(r,a)) per qualche r <InlineMath math={inSimbolo}/> R {"}"}.
                    </p>

                    <p className='post-text'>
                        Inoltre bisogna modificare lo stato iniziale di M, cambiando quindi <InlineMath math={dimTre1}/> in E({"{"}<InlineMath math={dimTre1}/>{"}"}). E con questo ultimo passo abbiamo completato la trasformazione del DFA M che simula l'NFA N.
                    </p>

                    <div className="succ-post">
                        <Link to="/Espressioni-regolari-e-linguaggi-non-regolari">Post successivo &#8594;</Link>
                    </div>
                    
                </section>
            </article>
            <Footer/>
        </div>
    )
}

export default CC2