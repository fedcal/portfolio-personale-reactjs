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
            <meta name='keywords' content='riducibilità, riduzione, problema della fermata, Teorma HALT indecidibile, metodo mediante storie di computazione, Definizione di storia di computazione accettante,storia di computazione accettante,storia di computazione di rifiuto,automa linearmente limitato, Definizione di automa linearmente limitato, Teorema dedicibilità'/>
            <meta name='description' content=' In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato riducibilità.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 9. Riducibilità Pt. 2'/>
            <meta name='og:description' content=' In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato riducibilità.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 9. Riducibilità Pt. 2"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Riducibilità-Pt-1" />
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
                  <Link to="/Le-macchine-di-Turing"> &#8592; Post precendente</Link>
              </div>

              <h1 className='header-title' itemProp="headline">8. Riducibilità Pt. 1</h1>
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
                Questo problema chiede di determinare se un insieme di tessere ammette un match, problema che però non può essere risolto mediante algoritmo. Prima di enunciare il relativo teorema e dimostrarlo, formalizziamolo ed esprimialo attraverso un linguaggio. Un'istanza di PCP è un insieme P di tessere <InlineMath math='\bigl\{ \bigl[ \frac{t_1}{b_1} \bigr], \bigl[ \frac{t_2}{b_2} \bigr],\dots, \bigl[ \frac{t_k}{b_k} \bigr] \bigr\}'/>, ed un match è una sequenza 
                <InlineMath math='i_1, i_2, \dots, i_l,'/> dove <InlineMath math='t_{i_1},t_{i_2}, \dots, t_{i_l} = b_{i_1},b_{i_2}, \dots, b_{i_l}'/>. Quindi, fatte queste premesse possiamo definere formalmente PCP come: PCP = {"{"}{"<"} P {">"} | P è un'istanza del Problema della corrispondenza di Post che ammette un match {"}"}. A questo punto possiamo enunciare il seguente teorema:
              </p>

              <dl className='definizione'>
                    <dt><strong>Teorema PCP indicibile</strong></dt>
                    <dd>
                        PCP è indecidibile.
                    </dd>
              </dl>
              
              <p className='post-text'>
                L'idea alla base della dimostrazione di questo teorema consiste nel creare una riduzione da <InlineMath math='A_{TM}'/> mediante storie di computazione accettanti. Mostriamo che per ogni TM M ed input w, possiamo costruire un'istanza P dove un match è una storia di computazione accettante per M su w.
              </p>

            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC9