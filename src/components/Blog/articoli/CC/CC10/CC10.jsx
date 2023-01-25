import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC10() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 10. Complessità temporale</title>
            <meta name='keywords' content='complessità temporale, tempo di esecuzione, complessità di tempo, analisi asintotica, notazione asintotica, notazione O-grande, limite superiore, limite superiore asintotico,limiti esponenziali,limiti polinomiali,asintoticamente non più grande, notazione o-piccolo, asintoticamente più piccola, Definizione notazione o-piccola, classe di complessità di tempo,funzione di esecuzione, classe polinomiale,classe non polinomiale,polinomialmente equivalenti,Definizione della classe polinomiale P,Definizione della classe polinomiale NP,
            verificatore, tempo polinomiale non deterministico,Definizione di verificatore,verificatore in tempo polinomiale,polinomialmente verificabile, Definizione di NTIME ( t ( n ) ), NTIME, NP-completi, problema della soddisfacibilità, riducibilità in tempo polinomiale, Definizione di funzione calcolabile in tempo polinomiale,  funzione calcolabile in tempo polinomiale,Definizione di riducibilità in tempo polinomiale,riducibile mediante funzione in tempo polinomiale, riducibile in tempo polinomiale, NP-completo, Definizione di NP-completo, forma normale congiuntiva,
            formula cnf, letterale,Teorema Cook-Levin'/>
            <meta name='description' content=' In questo parleremo della complessità temporale partendo dalle sue basi. Anche se un problema risulta decidibile, questo può anche non essere risolvibile a causa di una quantità di tempo o di memoria impiegati nella sua risoluzione.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 9. Riducibilità Pt. 2'/>
            <meta name='og:description' content=' In questo parleremo della complessità temporale partendo dalle sue basi. Anche se un problema risulta decidibile, questo può anche non essere risolvibile a causa di una quantità di tempo o di memoria impiegati nella sua risoluzione.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 9. Riducibilità Pt. 2"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Complessità-temporale" />
        </Helmet>
        <Navbar/>
        <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_1900.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" itemProp='contentUrl'decoding="async" src={HomeCC} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='calcolabilità e complessità'/>
                </div>
            </section>
            <section className='post-content post-container'>

                <div className="prec-post">
                    <Link to="/Riducibilità-Pt-2"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">10. Complessità temporale</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-25" className='data' itemProp="datePublished" content="2023-01-25T07:30:00+08:00">25/01/2023</time>
                                
                <p className='post-text first-text' itemProp='description'>
                    In questo parleremo della <strong>complessità temporale</strong> partendo dalle sue basi. Anche se un problema risulta decidibile, questo può anche non essere risolvibile a causa di una quantità di tempo o di memoria impiegati nella sua risoluzione. La prima misura fondamentale è il <strong>tempo di esecuzione</strong> o <strong>complessità di tempo</strong>, 
                    della quale diamo una definizione facendo riferimento a una macchina di Turing deterministica M che si ferma su tutti gli input. Questa misura può essere espressa come funzione f :  <InlineMath math="N \longrightarrow N"/>, dove f(n) è il numero massimo di passi che M utilizza su un qualsiasi input di lunghezza n. Se f(n) è il tempo di esecuzione di M, diciamo 
                    che M ha  tempo di esecuzione f(n) e che M è una macchina di Turing di tempo f(n).
                </p>

                <p className='post-text'>
                    Quindi possiamo dire che il tempo di esecuzione di un algoritmo è espresso tramite un'espressione complessa, di cui ci si limita ad una stima. Un metodo di stima comunemente utilizzato è l'<strong>analisi asintotica</strong>, mediante il quale si valuta il tempo di esecuzione dell'algoritmo quando viene eseguito su grandi input. In questa analisi si prende in considerazione 
                    solo il termine di ordine maggiore dell'espressione del tempo di esecuzione dell'algoritmo, trascurandone il suo coefficiente e tutti i termini di ordine inferiore, perchè il termine di ordine più alto domina gli altri termini quando l'input è grande. Questa notazione prende il nome di <strong>notazione asintotica</strong> o <strong>notazione O-grande</strong>. Prendendo in considerazione <InlineMath math='R^+'/> come 
                    insieme dei numeri reali non negativi, definiamo le funzioni f e g nel seguente modo: "f,g :  <InlineMath math='N \longrightarrow R^+'/>." Si dice che f(n)=O(g(n)) se esistono interi positivi c e <InlineMath math='n_0'/> tali che per ogni <InlineMath math='n \geq n_0'/>, <InlineMath math='f(n) \leq c g(n)'/>. Quando f(n) = O(g(n)), diciamo che g(n) è 
                    un <strong>limite superiore</strong> per f(n), o più precisamente g(n) è un <strong>limite superiore asintotico</strong> per f(n). Notiamo che in questa fase stiamo ignorando le costanti.
                </p>

                <p className='post-text'>
                    La notazione O-grande appare anche in espressioni aritmetiche, nelle quali ogni occorrenza del simbolo O rappresenta un diverso fattore costante nascosto. Vi sono alcune espressioni esponenziali, nelle quali si possono individuare dei <strong>limiti esponenziali</strong> o dei <strong>limiti polinomiali</strong>. Questa notazione esprime che una funzione è <i>asintoticamente non più grande</i> di 
                    un'altra. Vi è anche un'altra notazione definita <strong>notazione o-piccolo</strong>, che esprime il concetto di funzione <strong>asintoticamente più piccola</strong> rispetto ad un'altra. Per definire quest'ultima notazione, possiamo definirla come: 
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione notazione o-piccola</strong></dt>
                    <dd>
                        Siano f e g funzioni definite come "f,g : <InlineMath math='N \longrightarrow R^+'/>". diciamo che f(n)=o(g(n)) se <InlineMath math='\lim_{n \to \infty} {f(n) \over g(n)} = 0'/>.  In altri termini, f(n) = o(g(n)) significa che per ogni numero reale c {">"} 0, esiste un numero <InlineMath math= 'n_0'/>, tale che f(n) {"<"} c g(n) per ogni <InlineMath math='n \geq n_0'/>
                    </dd>
                </dl>

                <p className='post-text'>
                    Definiamo ora altri concetti fondamentali per comprendere meglio la complessità temporale. In genere si indica con il termine <strong>classe di complessità di tempo</strong>, <strong>TIME(t(n))</strong>, l'insieme di tutti i linguaggi che sono decisi da una macchina di Turing in tempo O(t(n)), mentre la funzione f(n) mediante la quale si indica il numero massimo di passi che N usa per ognuna delle computazioni su ogni input 
                    di lunghezza n, prende il nome di <strong>funzione di esecuzione di N</strong>. Esistono principalmente due classi all'interno della complessità temporale, la <strong>classe polinomiale</strong>, indicata con <i>P</i>, e la <strong>classe non polinomiale</strong>, indicata con <i>NP</i>. Nella programmazione differenze polinomiale nel tempo di esecuzione sono considerate piccole, mentre differenze esponenziali sono considerate 
                    grandi. Questo perchè vi è una differenza notevole tra il tasso di crescita di polinomi e il tasso di crescita di un esponenziale.
                </p>

                <p className='post-text'>
                    Infatti algoritmi aventi tempo polinomiale sono abbastanza veloci, a differenza di quelli esponenziali. Algoritmi aventi tempo esponenziale sono molto utili quando bisogna risolvere problemi mediante una ricerca esaustiva nello spazio delle soluzioni, la quale prende il nome di <strong>ricerca mediante forza bruta</strong>. Tutti i modelli computazionali deterministici ragionevoli sono invece <strong>polinomialmente equivalenti</strong>, 
                    ovvero uno di essi può simulare un altro con un aumento solo polinomiale del tempo di esecuzione. Dopo aver fatto queste premesse possiamo dare una definizione formale della classe polinomia P.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione della classe polinomiale P</strong></dt>
                    <dd>
                        <strong>P</strong> è la classe di linguaggi che sono decidibili in tempo polinomiale su una macchina di Turing deterministica a singolo nastro. Ovvero la classe P è la classe in cui vale la seguente formula: P = <InlineMath math='\cup_k TIME ( n^k )'/>
                    </dd>
                </dl>

                <p className='post-text'>
                    La classe P ha un ruolo fondamenta nella teoria della complessità temporale per due semplici motivi:
                </p>

                <ul>
                    <li>P è invariante per tutti i modelli di calcolo che sono polinomialmente equivalenti ad una macchina di Turing deterministica a nastro singolo</li>
                    <li>P corrisponde approssimativamente alla classe dei problemi che sono realisticamente risolvibili su un computer.</li>
                </ul>

                <p className='post-text'>
                    L'altra classe di problemi che abbiamo tralasciato è la classe <strong>NP</strong>, della quale ci apprestiamo ora a dare una definizione.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione della classe polinomiale NP</strong></dt>
                    <dd>
                        <strong>NP</strong> è la classe di linguaggi che ammettono un <i>verificatore</i> in tempo polinomiale.
                    </dd>
                </dl>

                <p className='post-text'>
                    Il termine NP deriva da <strong>tempo polinomiale non deterministico</strong> e deriva da una caratterizzazione alternativa che utilizza le macchine di Turing non deterministiche 
                    di tempo polinomiale. Nella definizione abbiamo parlato di verificatore, senza però darne una definizione, cosa che ci apprestiamo a fare ora.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di verificatore</strong></dt>
                    <dd>
                        Un <strong>verificatore</strong> per un linguaggio A è un algoritmo V, dove A = {"{"} w | V accetta {"<"} w, c {">"} per qualche stringa c {"}"}. Il tempo di un verificatore si misura 
                        solo in termini della lunghezza di w, quindi un <strong>verificatore in tempo polinomiale</strong> viene eseguito in tempo polinomiale nella lunghezza di w. Un linguaggio A 
                        è <strong>polinomialmente verificabile</strong> se ammette un verificatore in tempo polinomiale.
                    </dd>
                </dl>

                <p className='post-text'>
                    In modo analogo alla classe di tempo deterministico TIME ( t ( n ) ), definiamo la classe di complessità di tempo non deterministico NTIME ( t ( n ) ).
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di NTIME ( t ( n ) )</strong></dt>
                    <dd>
                        <strong> NTIME ( t ( n ) )</strong> = {"{"} L | L è un linguaggio deciso da una macchina di Turing non deterministica di tempo O ( t ( n ) ) {"}"}.
                    </dd>
                </dl>

                <p className='post-text'>
                    La classe NP è una classe indifferente alla scelta di un modello computazionale ragionevole non deterministico, in quanto tutti questi modelli sono polinominalmente equivalenti. Si utilizzano 
                    le stesse convenzioni per gli algoritmi di tempo polinomiale deterministici per descrivere e analizzare algoritmi non deterministici aventi tempo polinomiale. Ogni fase di un algoritmo non deterministico 
                    di tempo polinomiale deve avere una chiara implementazione in un tempo polinomiale non deterministico su un modello di calcolo non deterministico ragionevole. 
                </p>

                <p className='post-text'>
                    Esiste anche una terza classe denominata <strong>NP-completi</strong>, classe che è stata identificata da Cook e Levin, i quali scoprirono che vari problemi appartenenti a NP, la cui complessità individuale 
                    è correlata a quella dell'intera classe. Se un qualsiasi problema appartenente a NP richiede tempo più che polinomiale, lo stesso vale per un NP-completo. La classe NP-completa può prevenire la perdita di tempo 
                    relativa alla ricerca di algoritmi di tempo polinomiale inesistenti per risolvere un problema particolare.
                </p>

                <p className='post-text'>
                    Un esempio di problema NP-completo è il <strong>problema della soddisfacibilità</strong>, la cui descrizione viene tralasciata per definire altri aspetti più importanti, uno tra tanti la <strong>riducibilità in tempo polinomiale</strong>. 
                    Quando un problema A è riducibile efficientemente al problema B, una soluzione efficiente per B può essere usata per risolvere A eficientemente. Diamo due definizioni importanti:
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di funzione calcolabile in tempo polinomiale</strong></dt>
                    <dd>
                        Una <strong>funzione calcolabile in tempo polinomiale </strong> è una funzione f; <InlineMath math='\sum^* \longrightarrow \sum^*'/>, se esiste una macchina di Turing di tempo polinomiale M che arresta con f ( w ) soltanto sul suo nastro, quando ha iniziato con un qualsiasi input w.
                    </dd>
                </dl>

                <dl className='definizione'>
                    <dt><strong>Definizione di riducibilità in tempo polinomiale</strong></dt>
                    <dd>
                        Il linguaggio A è <strong>riducibile mediante funzione in tempo polinomiale</strong>, o semplicemente <strong>riducibile in tempo polinomiale</strong>, al linguaggio B, se esiste una funzione calcolabile in tempo polinomiale f: <InlineMath math='\sum^* \longrightarrow \sum^*'/> dove, per ogni w, 
                        <InlineMath math='w \in A \iff f(w) \in B'/>. Allora la funzione f è chiamata <strong>riduzione di tempo polinomiale di A a B</strong>.
                    </dd>
                </dl>

                <p className='post-text'>
                    La riducibilità in tempo polinomiale è l'analogo efficiente della riducibilità mediante funzione. Vi sono altre forme di riducibilità efficiente, ma la riducibilità in tempo polinomiale è una forma semplice. Dopo aver fatto questo piccolo preambolo diamo però la definizione di <strong>NP-completo</strong>.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di NP-completo</strong></dt>
                    <dd>
                        Un linguaggio B è <strong>NP-completo</strong> se soddisfa due condizioni:
                        <ul>
                            <li>B appartiene a NP</li>
                            <li>ogni A apaprtenente a NP è riducibile in tempo polinomiale a B</li>.
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    Prima di introdurre il teorema di Cook Levin, dobbiamo discutere di un caso speciale di problema di soddisfacibilità per cui tutte le formule sono una forma speciale, questo problema prende il nome di <i>3SAT</i>. Definiamo un <strong>letterale</strong> è una variabile booleana o una variabile boolean negata, 
                    una <strong>clausola</strong> consiste in diversi letterali connessi tramite operatori. Una formula booleana è in <strong>forma normale congiuntiva</strong>, definita anche <strong>formula cnf</strong>, se comprende diverse clausole connesse tramite operatori. Quindi possiamo definire 3SAT come {"{"} {"<"} <InlineMath math='\phi'/> | <InlineMath math='\phi'/> è 
                    una formula 3cnf soddisfacibile {"}"}. Il teorema di Cook-Levin enuncia:                   
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema Cook-Levin</strong></dt>
                    <dd>
                        SAT è un NP-completo.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema si deve dimostrare inizialmente che SAT appartiene a NP, per poi dimostrare che qualsiasi linguaggio che appartiene a NP è riducibile in tempo polinomiale a SAT. Quest'ultima dimostrazione può essere condotta attraverso una riduzione di tempo polinomiale per ciascun linguaggio A appartenente 
                    a NP a SAT.
                </p>

              
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC10