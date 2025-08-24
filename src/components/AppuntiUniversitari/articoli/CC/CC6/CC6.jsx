import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC6() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 6. Le macchine di Turing</title>
            <meta name='keywords' content='una macchina di Turing,Definizione formale di una macchina di Turing,configurazione,configurazione iniziale,configurazione di accettazione,configurazione di rifiuto,Definizione formale di un linguaggio Turing-riconoscibile,Definizione formale di un linguaggio Turing-dedicibile,linguaggio Turing-riconoscibile,linguaggio Turing-riconoscibile, linguaggio Turing-riconoscibile,Definizione di linguaggio Turing-riconoscibile,macchina di Turing non deterministica'/>
            <meta name='description' content=' In questo articolo ci concentreremo sulle macchine di Turing, il cui potenziale viene sfruttato nella teoria della computabilità, a differenza degli automi e delle grammatiche viste negli articoli precedenti.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 6. Le macchine di Turing'/>
            <meta name='og:description' content=' In questo articolo ci concentreremo sulle macchine di Turing, il cui potenziale viene sfruttato nella teoria della computabilità, a differenza degli automi e delle grammatiche viste negli articoli precedenti.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 6. Le macchine di Turing"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Le-macchine-di-Turing" />
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
                    <Link to="/Linguaggi-non-context-free-e-linguaggi-context-free-deterministici"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">6. Le macchine di Turing</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-19" className='data' itemProp="datePublished" content="2023-01-19T07:30:00+08:00">19/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                   A differenza degli automi <strong>una macchina di Turing</strong> elabora attraverso un nastro sul quale legge e scrive dati, con una memoria illimitata e senza restrizioni. La macchina per leggere e scrivere i dati sul nastro utilizza una testina e continuerà ad effettuare delle operazioni fino a quando non decide di produrre un output. Prima di 
                   dare una definizione formale di una macchina di Turing, elenchiamo le principali differenze tra questa e gli automi finiti:
                </p>

                <ul>
                    <li>Una Macchina di Turing può sia scrivere che leggere sul nastro</li>
                    <li>La testina di lettura-scrittura può muoversi sia verso sinistra che verso destra</li>
                    <li>Il nastro è infinito</li>
                    <li>Gli stati speciali di accettazione e rifiuto hanno effetto immediato</li>
                </ul>

                <dl className='definizione'>
                    <dt><strong>Definizione formale di una macchina di Turing</strong></dt>
                    <dd>Una macchina di Turing è una 7-tupla, <InlineMath math='(Q,\sum,\Gamma,\delta,q_0,q_{accept},q_{reject}'/> dove
                        <ul>
                            <li>Q è l'insieme degli stati</li>
                            <li><InlineMath math="\sum"/> è l'alfabeto di input non contenente il simbolo <i>blank</i> <InlineMath math="\sqcup"/></li>
                            <li><InlineMath math='\Gamma'/> rappresenta l'alfabeto del nastro con <InlineMath math="\sqcup \in \Gamma"/> e <InlineMath math="\sum \subseteq \Gamma"/></li>
                            <li><InlineMath math='\delta : Q \times \Gamma \longrightarrow Q \times \Gamma \times'/>{"{"}L,R{"}"}</li>
                            <li><InlineMath math='q_0 \in Q'/> è  lo stato iniziale</li>
                            <li><InlineMath math='q_{accept} \in Q'/> è lo stato di accettazione</li>
                            <li><InlineMath math='q_{reject} \in Q'/> è lo stato di rifiuto, con <InlineMath math='q_{reject} \ne q_{accept}'/></li>
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    Una macchina di Turing quando riceve in input la stringa w = <InlineMath math='w_1w_2\dots w_n \in \sum *'/> sulle n celle più a sinistra del suo nastro, mentre il restante è vuoto. La testina viene posizionata nella parte più a sinistra del 
                    nastro e quando inizia la sua computazione, la testina segue le regole descritte nella  funzione di transizione. Se M tenta di spostare la testina a sinistra quando si trova all'estremità sinistra del nastro, allora la testina rimane nello stesso 
                    posto per quella mossa. La computazione prosegue fino a quando la macchina raggiunge lo stato di accettazione oppure di rifiuto, a quel punto si ferma.
                </p>

                <p className='post-text'>
                    Durante la computazione di una macchina di Turing si verificano cambiamenti dello stato corrente, del contenuto del nastro e della posizione della testina. Queste impostazioni prendono il nome di <strong>configurazione</strong>, rappresentate in determinati 
                    modi. Nel gergo tecnico si dice che una configurazione <InlineMath math='C_1'/> <strong>produce</strong> la configurazione <InlineMath math='C_2'/> se la macchina di Turing può passare dalla prima alla seconda in un unico passo. Formalmente supponiamo di avere 
                    a, b e c in <InlineMath math='\Gamma'/>, così come u e v in <InlineMath math='\Gamma'/>* e gli stati <InlineMath math='q_i'/> e <InlineMath math='q_j'/>. In questo caso <InlineMath math='ua q_i bv'/> e <InlineMath math='u q_j acv'/> sono due configurazioni, e 
                    diciamo che la prima produce la seconda se nella funzione di transizione <InlineMath math='\delta (q_i,b) = (q_j,c,L)'/>.
                </p>

                <p className='post-text'>
                    La <strong>configurazione iniziale</strong> di M consiste nella testina posizionata nel lato più a sinistra del nastro e nello stato iniziale <InlineMath math='q_0'/>, formalmente possiamo scriverla come <InlineMath math='q_0 w'/>. Mentre quando la macchina si 
                    trova nella sua <strong>configurazione di accettazione</strong>, lo stato della configurazione si riferisce allo stato <InlineMath math='q_{accept}'/>. Infine si ha la <strong>configurazione di rifiuto</strong>, rappresentata dallo stato di rifiuto 
                    <InlineMath math='q_{reject}'/>. L'insieme di stringhe che M accetta rappresenta il linguaggio di M, denotato conL(M).
                </p>

                <p className='post-text'>
                    Diamo adesso la definizione di linguaggio Turing riconoscibile e di linguaggio Turing decidibile.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione formale di un linguaggio Turing-riconoscibile</strong></dt>
                    <dd>
                        Un linguaggio si dice <strong>Turing-riconoscibile</strong> se esiste una macchina di Turing che lo riconosce.
                    </dd>
                </dl>

                <dl className='definizione'>
                    <dt><strong>Definizione formale di un linguaggio Turing-dedicibile</strong></dt>
                    <dd>
                        Un linguaggio si dice <strong>Turing-dedicibile</strong> se esiste una macchina di Turing che lo decide.
                    </dd>
                </dl>

                <p className='post-text'>
                    Esistono diverse varianti della macchina di Turing, una di queste è la <strong>macchina di Turing multinastro</strong> la quale ha due o più nastri ognuno dei quali ha una propria testina. La funzione di transizione di questa particolare macchina è 
                    definita come <InlineMath math='\delta : Q \times \Gamma^k \longrightarrow Q \times \Gamma^k \times'/> {"{"} L,R,S <InlineMath math='\}^k'/> dove k è il numero di nastri. Inoltre per ogni macchina di Turing multinastro esiste una macchina di Turing a nastro 
                    singolo equivalente.
                </p>

                <p className='post-text'>
                    Un altro tipo di macchina di Turing consiste nella <strong>macchina di Turing non deterministica</strong>, la quale in qualsiasi punto della computazione può procedere effettuando diverse scelte. La funzione di transizione di questo tipo di macchina è la seguente: <InlineMath math='\delta :  Q \times \Gamma \longrightarrow P ( Q \times \Gamma \times \{ L,R \} )'/>. La computazione di una 
                    macchina di Turing non deterministica è un albero i cui rami corrispondono alle diverse scelte possibili previste per la macchina. Se qualche ramo della computazione porta allo stato di accettazione, allora la macchina accetta l'input. Inoltre per ogni macchina di Turing non deterministica esiste una macchina di Turing deterministica equivalente.
                    
                </p>

                
                <div className="succ-post">
                    <Link to="/Dedicibilità-e-indecidibilità">Post successivo &#8594;</Link>
                </div>
                        
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC6