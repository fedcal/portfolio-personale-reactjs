import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC11() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 11. Complessità di spazio</title>
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
            <meta name='og:title' content='Federico Calò Blog - 11. Complessità di spazio'/>
            <meta name='og:description' content=' In questo parleremo della complessità temporale partendo dalle sue basi. Anche se un problema risulta decidibile, questo può anche non essere risolvibile a causa di una quantità di tempo o di memoria impiegati nella sua risoluzione.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 11. Complessità di spazio"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Complessità-di-spazio" />
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
                    <Link to="/Complessità-temporale"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">11. Complessità di spazio</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-26" className='data' itemProp="datePublished" content="2023-01-26T07:30:00+08:00">26/01/2023</time>
                                
                <p className='post-text first-text' itemProp='description'>
                    Nel precedente articolo abbiamo valutato la complessità dei problemi computazionali in termini temporali, in questo articolo ne valutiamo la complessità in termini di spazio e di memoria. Tempo e spazio sono due fattori importanti quando bisogna cercare la soluzione ai problemi computazionali. La complessità di spazio 
                    condivide molti aspetti della complessità temporale. Per discutere della complessità spaziale utilizzeremo una macchina di Turing. Iniziamo quindi con una prima definizione.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di complessità di spazio</strong></dt>
                    <dd>
                        Denotiamo con M una macchina di Turing deterministica che si arresta su tutti gli input. La <strong>complessità di spazio</strong> di M è la funzione <InlineMath math='f: N \longrightarrow N'/>, dove f(n) è il numero massimo di celle del nastro che M scandisce su ogni input di lunghezza n. Se la complessità di spazio di M 
                        è f(n), allora possiamo dire che M computa in uno spazio f(n). <br/> Se M è una macchina di Turing non deterministica dove tutte le diramazioni si arrestano su tutti gli input, definiamo la sua complessità di spazio f(n) come il massimo numero di celle del nastro che M scandisce su qualsiasi diramazione della sua computazione 
                        per ogni input di lunghezza n.
                    </dd>
                </dl>

                <p className='post-text'>
                    Come per la complessità temporale, anche la complessità di spazio viene stimata attraverso la <i>notazione asintotica</i>. Diamone una definizione:
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di classi di complessità di spazio</strong></dt>
                    <dd>
                        Sia <InlineMath math='f: N \longrightarrow R^+'/> una funzione, le <strong>classi di complessità di spazio</strong>, <strong>SPACE ( f ( n ) )</strong> e <strong>NSPACE ( f ( n )  )</strong>, sono definite come: <br/><br/> SPACE ( f ( n ) ) = {"{"} L | L è un linguaggio deciso da una macchina di Turing deterministica con spazio O( f ( n ) ){"}"}. <br/><br/>
                        NSPACE( f ( n ) ) = {"{"} L | L è un linguaggio deciso da una macchina di Turing non deterministaca con spazio O ( f ( n ) ) {"}"}. 
                    </dd>
                </dl>

                <p className='post-text'>
                    Il teorema di Savitch è uno dei teoremi più importanti nell'ambito della complessità di spazio, in quanto dimostra come le macchine deterministiche possono simulare le macchine non deterministiche attraverso l'uso di una quantità di spazio ridotta. Questo caso viene visto dalla complessità di tempo e dalla complessità di spazio in maniera differente. La prima afferma che tale simulazione 
                    richiede un incremento esponenziale in tempo, mentre la seconda mostra come ogni TM non deterministica che usa uno spazio f ( n ) può essere convertita in una TM deterministica che usa soltanto spazio <InlineMath math='f^2(n)'/>. Eunciamo a questo punto il teorema di Savitch.
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema di Savitch</strong></dt>
                    <dd>
                        Per ogni funzione <InlineMath math='f: N \longrightarrow R^+'/>, dove <InlineMath math='f ( n ) \geq n'/>, <InlineMath math='NSPACE ( f ( n ) ) \subseteq SPACE f^2 ( n ) )'/>.
                    </dd>
                </dl>

                <p className='post-text'>
                    L'idea alla base della dimostrazione è quella di considerare due configurazioni della NTM <InlineMath math='c_1'/> e <InlineMath math='c_2'/> e un numero t. Bisogna verificare se la NTM può transitare da  <InlineMath math='c_1'/> a <InlineMath math='c_2'/> in al più t passi, usando soltanto lo spazio f(n). Questo problema prende il nome di <strong>problema della resa</strong>. Risolvere 
                    questo problema significa poter stabilire se la macchina accetta il proprio input.  
                </p>

                <p className='post-text'>
                    In analogia con la classe P, definiamo la classe PSPACE per la complessità di spazio.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione della classe PSPACE</strong></dt>
                    <dd>
                        <strong>PSPACE</strong> è la classe di linguaggi che sono decidibili in spazio polinomiale con una macchina di Turing deterministica: PSPACE = <InlineMath math='\cup_k SPACE ( n^k )'/>
                    </dd>
                </dl>

                <p className='post-text'>
                    Definiamo NSPACE come la controparte non deterministica di PSPACE. Inoltre per la classe PSPACE, definiamo la nozione di <i>PSPACE-completezza</i>.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione del concetto di PSPACE-completezza</strong></dt>
                    <dd>
                        Un linguaggio B è <strong>PSPACE-completo</strong> se soddisfa due condizioni:
                        <ul>
                            <li>B appartiene a PSPACE</li>
                            <li>Qualsiasi A appartenente a PSPACE è riducibile in tempo polinomiale a B</li>
                        </ul>
                        
                        Se B soddisfa solo la condizione numero 2, diciamo che è <strong>PSPACE-hard</strong>.
                    </dd>
                </dl>

                <p className='post-text'>
                    Nel definire la PSPACE-completezza, usiamo la riducibilità polinomiale. Se riuscissimo a trovare un modo facile per risolvere un problema completo, possiamo risolvere facilmente tutti gli altri problemi nella classe. 
                    In questo caso la riduzione deve essere facile, altrimenti se fosse difficile da calcolare, una soluzione facile al problema completo non darebbe necessariamente una soluzione facile ai problemi che ad esso si riducono. 
                    Quindi se il modello di riduzione deve essere più limitato del modello usato per definire la classe stessa.
                </p>

                <p className='post-text'>

                </p>
              
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC11