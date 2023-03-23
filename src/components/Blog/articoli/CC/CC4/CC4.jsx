import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC4() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 4. Linguaggi context-free</title>
            <meta name='keywords' content='grammatiche context-free, linguaggi context-free, automi a pila, regole di sostituzione, produzioni, terminali, variabili, derivazioni, albero sintattico, derivata ambiguamente, grammatica ambigua, derivazione a sinistra, forma normale di Chomsky, pushdown automa, pila, stack, push,pop'/>
            <meta name='description' content='Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi. '/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 4. Linguaggi context-free'/>
            <meta name='og:description' content='Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 4. Linguaggi context-free"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Linguaggi-context-free-e-automi-a-pila" />
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
                    <Link to="/Espressioni-regolari-e-linguaggi-non-regolari"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">4. Linguaggi context-free e automi a pila</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-18" className='data' itemProp="datePublished" content="2023-01-18T07:30:00+08:00">18/01/2023</time>
                                
                <p itemProp="description" className='post-text first-text'>
                   Come abbiamo visto in precedenza, ci sono diversi metodi per descrivere un linguaggio, in questo articolo ci concentreremo su un'altra tipologia, le <strong>grammatiche context-free</strong>, le quali riconoscono i relativi <strong>linguaggi context-free</strong>,  attraverso una struttura ricorsiva. I linguaggi context-free vengono riconosciuti 
                   anche da un'altra particolare struttura denominata <strong>automi a pila</strong>, i quali computano diversamente rispetto alle grammatiche context-free. Una grammatica consiste in un insieme di <strong>regole di sostituzione</strong>, denominate comunemente <strong>produzioni</strong>. Il simbolo è chiamato <strong>variabile</strong>, 
                   mentre i caratteri facenti parte dell'alfabeto prendono il nome di <strong>terminali</strong>. Un esempio di grammatica context-free può essere:
                </p>

                <ul>
                    <li><InlineMath math="A \rightarrow 0 A 1"/></li>
                    <li><InlineMath math="A \rightarrow B"/></li>
                    <li><InlineMath math="A \rightarrow \sharp"/></li>
                </ul>

                <p className='post-text'>
                    Come si può evincere dall'esempio le variabili sono spesso rappresentate da lettere maiuscole, i terminali invece sono i simboli dell'alfabeto di input. Fondamentale è la variabile da cui bisogna partire la computazione che prende il nome di <strong>variabile iniziale</strong>. Inoltre una grammatica genera una sequenza di sostituzioni per ottenere una stringa 
                    denominata <strong>derivazione</strong>, la quale può essere rappresentata graficamente mediante un <strong>albero sintattico</strong>. Una <i>definizione formale</i> di grammatica context-free (CFG) è una quadrupla <InlineMath math='(V, \sum,R,S)'/> dove V è l'insieme finito delle <strong>variabili</strong>, <InlineMath math='\sum'/> è un insieme finito disgiunto da V 
                    di <strong>terminali</strong>, R invece è un insieme finito di <strong>regole</strong> e S <InlineMath math="\in"/> è la variabile iniziale.
                </p>

                <p className='post-text'>
                    Alcune volte una grammatica può generare una stessa stringa in più modi possibili, per ciascuno dei quali avrà un albero sintattico diverso e quindi un significato diverso. In questo caso diciamo che una stringa è <strong>derivata ambiguamente</strong> in più modi diversi all'interno della grammatica, e la grammatica viene definita come <strong>grammatica ambigua</strong>. 
                    Inoltre se una stringa w in una grammatica G viene derivata sostituendo a ogni passo la variabile sempre quella più a sinistra, la derivazione viene definita come <strong>derivazione a sinistra</strong>.
                </p>

                <p className='post-text'>
                    E' auspicabile che le grammatiche context-free siano nella <strong>forma normale di Chomsky</strong>, secondo la quale ogni regola deve essere nella forma:
                </p>

                <ul>
                    <li><InlineMath math='A \rightarrow BC'/></li>
                    <li><InlineMath math='A \rightarrow a'/></li>
                </ul>

                <p className='post-text'>
                    dove a è un terminale e A, B e C sono delle variabili. Inoltre è permessa la regola <InlineMath math='S \rightarrow \epsilon'/>, dove S è la variabile iniziale.
                </p>

                <p className='post-text'>
                    Come accennato all'inizio di questo articolo, un altro tipo di automa è l'<strong>automa a pila</strong> o <i>pushdown automa</i>, la cui particolarità consiste nel possedere una componente in più denominata <strong>pila</strong> o <i>stack</i>. Quest'ultima fornisce una memoria aggiuntiva oltre alla quantità finita posseduta dall'automa, tramite la quale consente di riconoscere 
                    alcuni linguaggi non regolari. A livello di computazione, gli automi a pila hanno lo stesso potere computazionale delle grammatiche context-free. Quindi per verificare che un linguaggio è context-free possiamo dimostrare l'esistenza di una grammatica context-free o di un automa a pila che lo riconosce.
                </p>

                <p className='post-text'>
                    Un PDA può scrivere simboli nella pila e rileggerli in seguito. L'automa può leggere e rimuovere in qualsiasi momento il simbolo dalla cima della pila (<i>top</i>). Inoltre l'operazione di scrittura di un simbolo sulla pila è denominata <strong>push</strong>, mentre l'operazione di eliminazione di un simbolo dalla pila è denominata <strong>pop</strong>. Se volessimo dare una 
                    <i> definizione</i> di automa a pila, esso può essere definito come una sestupla <InlineMath math='(Q, \sum, \Gamma, \delta, q_0, F)'/>. Ogni simbolo rappresenta:
                </p>

                <ul>
                    <li><InlineMath math='Q'/> è l'insieme degli stati</li>
                    <li><InlineMath math='\sum'/> è l'alfabeto degli input</li>
                    <li><InlineMath math='\Gamma'/> è l'alfabeto della pila</li>
                    <li><InlineMath math='\delta : Q \times \sum_{\epsilon} \times \Gamma_{\epsilon} \rightarrow P ( Q \times \Gamma_{\epsilon}'/> definisce la funzione di transizione</li>
                    <li><InlineMath math='q_0 \in Q'/> è lo stato iniziale</li>
                    <li><InlineMath math='F \subseteq Q'/> costituisce l'insieme degli stati accettanti</li>
                </ul>

                <p className='post-text'>
                    Quando un automa a pila M = <InlineMath math='(Q, \sum, \Gamma, \delta, q_0, F)'/> riceve una stringa w in input, essa viene accetta se può essere scritta nella forma w = <InlineMath math='w_1w_2w_3 \dots w_m' /> dove ciascun <InlineMath math='w_i \in \sum_{\epsilon}'/> ed esistono sequenze di stati <InlineMath math='r_0,r_1,\dots,r_m \in Q'/> e di stringhe 
                    <InlineMath math='s_0,s_1,\dots,s_m \in \Gamma*'/> che soddisfano le seguenti condizioni:
                </p>

                <ul>
                    <li><InlineMath math='r_0 = q_0'/> e <InlineMath math='s_0 = \epsilon '/></li>
                    <li>Per <InlineMath math='i=0, \dots, m-1'/>, si ha <InlineMath math='(r_{i+1},b) \in \delta(r_i,w_{i+1},a)'/></li>
                    <li><InlineMath math='r_m \in F'/></li>
                </ul>

                <p className='post-text'>
                    La prima condizione indica che l'automa M inizia correttamente nello stato iniziale e la sua pila è vuota, la seconda condizione definisce il comportamento dell'automa che si muove correttamente in base allo stato, al simbolo della pila e al prossimo simbolo in input, infine la terza condizione afferma che alla fine della computazione l'automa si trova in uno stato accettante.
                </p>

                <p className='post-text'>
                   Nel precedente articolo abbiamo definito le grammatiche contex-free e gli automi a pila che riconoscono i linguaggi contex free. In questo articolo mostriamo l'equivalenza contex-free e gli automi a pila, enunciamo quindi il relativo <i>teorema di equivalenza</i> secondo il quale "un linguaggio è context free se e solo se esiste un automa a pila 
                   che lo riconosce". Questo teorema si dimostra suddividebdilo in due lemmi, il primo afferma che "Se un linguaggio è context-free, allora esiste un automa a pila che lo riconosce", il secondo afferma che "Se un linguaggio è riconosciuto da un automa a pila, allora esso è context-free". Dimostrando questi due lemmi in maniera separata, si dimostra il 
                   teorema dell'equivalenza tra grammatiche contex-free e automi a pila.
                </p>
               
                <div className="succ-post">
                    <Link to="/Linguaggi-non-context-free-e-linguaggi-context-free-deterministici">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC4