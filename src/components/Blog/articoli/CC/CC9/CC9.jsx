import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC9() {
  return (
    <div>
      <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 9. Riducibilità Pt. 2</title>
            <meta name='keywords' content='Riducibilità, problema della corrispondenza di Post, riducibilità mediante funzione, terema PCP indecidibile,riducibilità mediante funzione, funzione calcolabile, Definizione di funzione calcolabile, Definizione di riducibilità mediante funzione, riducibile mediante funzione, riduzione, Teorema Riduzione '/>
            <meta name='description' content=' In questa seconda parte dedicata alla riducibilità parliamo del problema della corrispondenza di Post e della riducibilità mediante funzione.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 9. Riducibilità Pt. 2'/>
            <meta name='og:description' content=' In questa seconda parte dedicata alla riducibilità parliamo del problema della corrispondenza di Post e della riducibilità mediante funzione.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 9. Riducibilità Pt. 2"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Riducibilità-Pt-2" />
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
                  <Link to="/Riducibilità-Pt-1"> &#8592; Post precendente</Link>
              </div>

              <h1 className='header-title' itemProp="headline">9. Riducibilità Pt. 2</h1>
              <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-24" className='data' itemProp="datePublished" content="2023-01-24T07:30:00+08:00">24/01/2023</time>
                              
              <p className='post-text first-text' itemProp='description'>
                In questa seconda parte dedicata alla riducibilità parliamo del <strong>problema della corrispondenza di Post</strong> e della <strong>riducibilità mediante funzione</strong>. Il primo problema mostra come il fenomeno dell'indicibilità non è limitato a problemi connessi con gli automi, ma è relativo anche a problemi sulla manipolazione 
                delle stringhe.
              </p>

              <p className='post-text'>
                Possiamo descrivere il <i>problema della corrispondenza di Post</i>, o PCP, come una sorta di puzzle composto da tessere del domino, ognuna delle quali contenente due stringhe, una su ogni lato. Quindi possiamo rappresentare una tessera come <InlineMath math='\bigl[ \frac{a}{bb} \bigr]'/> e un insieme di tessere è definito come: <InlineMath math='\bigl\{ \bigl[ \frac{b}{ca} \bigr], \bigl[ \frac{a}{ab} \bigr], \bigl[ \frac{ca}{a} \bigr] \bigr\}'/>. 
                Lo scopo è quello di creare una lista di tessere, con eventuali ripetizioni, in modo tale che la stringa che otteniamo leggendo i simboli sulla metà superiore delle tessere è la stessa che si ottiene leggendo i simboli sulle metà inferiori. Definiamo una tale combinazione <strong>match</strong>. Possiamo rappresentare un match attraverso una deformazione delle tessere in modo tale da far risultare allineati i simboli di sopra e di sotto corrispondenti. 
                Alcuni insiemi di tessere non ammettono un match.
              </p>

              <p className='post-text'>
                Questo problema chiede di determinare se un insieme di tessere ammette un match, problema che però non può essere risolto mediante algoritmo. Prima di enunciare il relativo teorema e dimostrarlo, formalizziamolo ed esprimiamolo attraverso un linguaggio. Un'istanza di PCP è un insieme P di tessere <InlineMath math='\bigl\{ \bigl[ \frac{t_1}{b_1} \bigr], \bigl[ \frac{t_2}{b_2} \bigr],\dots, \bigl[ \frac{t_k}{b_k} \bigr] \bigr\}'/>, ed un match è una sequenza <InlineMath math='i_1, i_2, \dots, i_l,'/> dove <InlineMath math='t_{i_1},t_{i_2}, \dots, t_{i_l} = b_{i_1},b_{i_2}, \dots, b_{i_l}'/>. 
                Quindi, fatte queste premesse possiamo definire formalmente PCP come: PCP = {"{"}{"<"} P {">"} | P è un'istanza del Problema della corrispondenza di Post che ammette un match {"}"}. A questo punto possiamo enunciare il seguente teorema:
              </p>

              <dl className='definizione'>
                    <dt><strong>Teorema PCP indecidibile</strong></dt>
                    <dd>
                        PCP è indecidibile.
                    </dd>
              </dl>
              
              <p className='post-text'>
                L'idea alla base della dimostrazione di questo teorema consiste nel creare una riduzione da <InlineMath math='A_{TM}'/> mediante storie di computazione accettanti. Mostriamo che per ogni TM M ed input w, possiamo costruire un'istanza P dove un match è una storia di computazione accettante per M su w. Se potessimo determinare se un'istanza ammette un match, saremmo in grado di determinare se M accetta w o meno. Per determinare P in modo tale che un match 
                sia una storia di computazione accettante per M su w, Scegliamo le tessere in P in modo tale che un match forza l'esecuzione di una simulazione di M. Nel match, ogni tessera collega una o più posizioni in una configurazione con la corrispondente o le corrispondenti nella configurazione successiva. Inoltre bisogna considerare alcuni dettagli tecnici. Si assume che M su w non tenta mai di muovere la testina oltre l'estremità sinistra del nastro. Per ottenere ciò, 
                si modifica M e imponiamo <InlineMath math='\bigl[ \frac{t_1}{b_1} \bigr]'/> come prima tessera. Infine si sostituisce il termine <InlineMath math='\epsilon'/> con il termine <InlineMath math='\sqcup'/>
              </p>

              <p className='post-text'>
                Per determinare la serie di articoli dedicati alla riducibilità, formalizziamo il concetto per applicare la dimostrazione anche in diversi campi, come quello della complessità. Diamo quindi la definizione di riducibilità come <strong>riducibilità mediante funzione</strong>. Questa definizione, che andremo ad enunciare tra poco, si basa sul fatto di ridurre un problema A a un problema B utilizzando una funzione calcolabile che trasforma istanza del problema A in istanze 
                del problema B. Tale funzione prende il nome di <i>riduzione</i> e permette quindi di risolvere A mediante la risoluzione di istanze di B. Questo fatto si spiega banalmente per via che una qualsiasi istanza di A, per essere risolta, viene trasformata attraverso questa funzione in un'istanza di B e per poi risolvere l'istanza convertita. Diamo una prima definizione di <strong>funzione calcolabile</strong>.
              </p>

              <dl className='definizione'>
                    <dt><strong>Definizione di funzione calcolabile</strong></dt>
                    <dd>
                      Una funzion f : <InlineMath math='\sum* \longrightarrow \sum*'/> è una <strong>funzione calcolabile</strong> se esiste una macchina di Turing M che, su qualsiasi input w, si ferma avendo solo f(w) sul nastro.
                    </dd>
              </dl>

              <dl className='definizione'>
                    <dt><strong>Definizione di riducibilità mediante funzione</strong></dt>
                    <dd>
                      Un linguaggio A si dice <strong>riducibile mediante funzione</strong> al linguaggio B e si denota con A <InlineMath math='\leq'/> B, se esiste una funzione calcolabile f: <InlineMath math='\sum* \longrightarrow \sum*'/>, dove per ogni w: <InlineMath math='w \in A \iff f(w) \in B'/>. La 
                      funzione f è chiamata <strong>riduzione</strong> da A a B.
                    </dd>
              </dl>

              <p className='post-text'>
                Una riduzione mediante funzione da A a B fornisce un modo per convertire problemi di appartenenza ad A in problemi di appartenenza a B. Per verificare se w <InlineMath math='\in'/> A, usiamo la riduzione f per mappare w in f(w) e verifichiamo se f(w) <InlineMath math='\in'/> B o meno. Se un problema è riducibile mediante funzione ad un secondo problema, già precedentemente risolto, possiamo ottenere da questo una soluzione al problema originale.
              </p>

              <dl className='definizione'>
                    <dt><strong>Teorema Riduzione</strong></dt>
                    <dd>
                      Se A <InlineMath math='\leq'/> B e B è decidibile, allora A è decidibile.
                    </dd>
              </dl>

              <p className='post-text'>
                Per dimostrare questo teorema definiamo M come decisore per B e f la funzione di riduzione da A a B. Descriviamo un decisore N per A come segue: N = " Su input w:
              </p>

              <ul>
                <li>Computa f(w)</li>
                <li>Esegue M su input f(w) e restituisce lo stesso output di M."</li>
              </ul>

              <p className='post-text'>
                Ovviamente, se <InlineMath math='w \in A'/>, allora <InlineMath math='f(w) \in B'/> perchè f è una riduzione da A a B. Quindi, MJ accetta f(w) ogni volta che <InlineMath math='w \in A'/>. Quindi, N svolge il compito desiderato. <br/> Inoltre questo teorema, richiama un corollario che enuncia che se <InlineMath math='A \leq B'/> e A è indecidibile, allora B è indecidibile.
              </p>
              <div className="succ-post">
                  <Link to="/Complessità-temporale">Post successivo &#8594;</Link>
              </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC9