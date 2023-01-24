import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC5() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 5. Linguaggi non context-free e linguaggi context-free deterministici</title>
            <meta name='keywords' content='teorema del pumping lemma per i linguaggi context-free, linguaggi non context-free, linguaggi context-free deterministici,lunghezza del pumping,automi a pila deterministici,DPDA, linguaggi context-free determinisitici,DCFL,Definizione di automa a pila deterministico,linguaggio context-free deterministico'/>
            <meta name='description' content=' In questo articolo ci concentreremo su un&#39;altra tipologia, le grammatiche context-free, le quali riconoscono i relativi linguaggi context-free,  attraverso una struttura ricorsiva. Successivamente tratteremo anche degli automi a pila, i quali hanno la stessa potenza delle CFG'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 5. Linguaggi non context-free e linguaggi context-free deterministici'/>
            <meta name='og:description' content=' In questo articolo ci concentreremo su un&#39;altra tipologia, le grammatiche context-free, le quali riconoscono i relativi linguaggi context-free,  attraverso una struttura ricorsiva. Successivamente tratteremo anche degli automi a pila, i quali hanno la stessa potenza delle CFG'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 5. Linguaggi non context-free e linguaggi context-free deterministici"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Linguaggi-non-context-free-e-linguaggi-context-free-deterministici" />
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
                    <Link to="/Linguaggi-context-free-e-automi-a-pila"> &#8592; Post precendente</Link>
                </div>

                <h1 className='header-title' itemProp="headline">5. Linguaggi non context-free e linguaggi context-free deterministici</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-19" className='data' itemProp="datePublished" content="2023-01-19T07:30:00+08:00">19/01/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                   Nel precedente articolo abbiamo parlato dei linguaggi context-free riconosciuti dalle relative grammatiche e dagli automi a pila. Come fatto in precedenza ora trattiamo i linguaggi non context-free e dei linguaggi contex-free deterministici. Per verificare se un linguaggio è o non è context-free ci si avvale del 
                   <strong> teorema del pumping lemma per i linguaggi context-free</strong>. Questo teorema si basa sulla <i>lunghezza del pumping</i> definito come particolare valore tale che tutt le stringhe più lunghe presenti nel linguaggio possono essere iterate. Diamo una definizione formale del teorema.
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema del pumping lemma per i linguaggi context-free</strong></dt>
                    <dd>Se A è un linguaggio context-free, allora esiste un numero p. definito lunghezza del pumping, tale che se s è una qualsiasi stringa in A di lunghezza almeno p, allora s può essere divisa in cinque parti s=uvwxyz che soddisfano le seguenti condizioni:
                        <ul>
                            <li>per ogni <InlineMath math="i \geq 0"/>, <InlineMath math='uv^ixy^iz \in A'/></li>
                            <li>| <InlineMath math="vy > 0"/> |</li>
                            <li>| vxy | <InlineMath math='\leq'/> p</li>
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    Quando s è divisa in uvwxyz, nella seconda affermazione viene affermato che v o y non possono essere la stringa vuota, mentre la terza condizione afferma invece che le parti v, x e y insieme hanno lunghezza al più p. Per dimostrare questo teorema constriumo una grammatica context-free G per il linguaggio context-free A. 
                    Definiamo inoltre b il massimo numero di simboli nel lato destro di una regola. Sappiamo che in ogni albero sintattico costruito usando questa grammatica, un nodo non può avere più di b figli. Ci sono quindi al più b foglie in un passo dalla variabile iniziale, <InlineMath math='b^2'/> foglie in un due passi e così via. 
                    Quindi al passo h avremo <InlineMath math='b^h'/> foglie dalla variabile iniziale. Se l'altezza dell'albero sintattico è al più h, la lunghezza della stringa generata è <InlineMath math='b^h'/>. Se invece ogni stringa generata avrà una lunghezza maggiore o uguale a <InlineMath math='b^h+1'/>, ciascuno dei suoi alberi sintattici deve avere 
                    un'altezza maggiore o uguale a h+1.
                </p>

                <p className='post-text'>
                    Sia | V | il numero delle variabili in G. Poniamo p, la lunghezza del pumping uguale a <InlineMath math='b^{|V|+1}'/>. Se s è una stringa in A e la sua lunghezza è maggiore o uguale a p, il suo albero sintattico deve avere altezza maggiore o uguale a | V | + 1, poichè <InlineMath math='b^{|V|+1} \geq b^{|V|}+1'/>. Per iterare una 
                    stringa così definita, prendiamo in considerazione un suo albero sintattico <InlineMath math='\tau'/>. Sappiamo che questo albero deve avere altezza maggiore o uguale a | V | + 1, quindi il suo cammino più lungo dalla radice a una foglia ha una lunghezza almeno | V | + 1. Questo cammino ha almeno | V | + 2 nodi, uno etichettato da un terminale, 
                    gli altri etichettati da variabili. Poichè G ha solo |V| variabili, qualche variabile R è presente più di una volta su questo cammino. 
                </p>

                <p className='post-text'>
                    Dividiamo s in uvxyz, ogni occorrenza di R ha un sottoalbero sotto essa che genera una parte di questa stringa. L'occorrenza più in alto di R ha un sottoalbero più grande che genera vxy, mentre l'occorrenza più in basso genera solo x con un sottoalbero più piccolo. Entrambi questi sottoalberi sono generati dalla stessa variabile, 
                    Quindi possiamo sostituire l'uno con l'altro e ottenere ancora un albero sintattico corretto. Sostituire ripetutamente il più piccolo con il più grande fornisce gli alberi sintattici per le stringhe <InlineMath math='uv^ixy^iz'/> per ogni i {">"} 1. Sostituire il più grande con il più piccolo genera la stringa uxz. Quindi la prima condizione 
                    del teorema è stata dimostrata.
                </p>

                <p className='post-text'>
                    Per dimostrare la condizione 2, dobbiamo verificare che v e y non sono entrambe <InlineMath math='\epsilon'/>. Se lo fossero, l'albero sintattico ottenuto sostituendo il più piccolo sottoalbero al più grande avrebbe meno nodi di <InlineMath math='\tau'/> e genererebbe ancora s. Questo non è possibile perchè abbiamo scelto <InlineMath math='\tau'/> in 
                    modo che sia un albero sintattico per s con il più piccolo numero di nodi.
                </p>

                <p className='post-text'>
                    Per dimostrare la condizione 3, bisogna verificare che la lunghezza di uxy è al più p. Nell'albero sintattico per s l'occorrenza più in alto di R genera vxy. Abbiamo scelto R in modo che entrambe le occorrenze di essa cadano nelle | V | + 1 variabili più in basso del cammino e abbiamo scelto il più  lungo cammino nell'albero sintattico, in 
                    modo che il sottoalbero in cui R genera vxy sia alto al più | V | + 1. Un albero con questa altezza può generare una stringa di lunghezza al più <InlineMath math='b^{|V|+1}'/> = p.
                </p>

                <p className='post-text'>
                    Ricapitolando quanto detto nei precedenti articoli, gli automi finiti deterministici e gli automi finiti non deterministici sono equivalenti dal punto di vista del potere riconoscitivi dei linguaggi. Gi automi a pila non deterministici invece risultano più potenti rispetto a quelli deterministici. I linguaggi che sono riconosciuti da 
                    <strong> automi a pila deterministici (DPDA)</strong> sono chiamati <strong>linguaggi context-free determiniistici (DCFL)</strong>. Definire un DPDA non è semplice in quanto bisogna considerare anche le azioni che esso può compiere sulla pila.  Queste <InlineMath math='\epsilon'/>-mosse assumono due forme: <strong>mosse <InlineMath math='\epsilon'/>-input </strong>
                    che corrispondono a <InlineMath math='\delta (q, \epsilon,x)'/> e <strong>mosse <InlineMath math='\epsilon'/>-pila</strong> che corrispondono a <InlineMath math='\delta ( q, \epsilon, \epsilon)'/>. Formalmente possiamo definirlo come segue.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di automa a pila deterministico</strong></dt>
                    <dd>Un automa a pila deterministico è una sestupla <InlineMath math='(Q, \sum, \Gamma, \delta, q_0, F)'/>, dove:
                        <ul>
                            <li>Q è l'insieme degli stati</li>
                            <li><InlineMath math="\sum"/> è l'alfabeto dell'input</li>
                            <li><InlineMath math='\Gamma'/> è l'alfabeto della pila</li>
                            <li><InlineMath math='\delta : Q \times \sum_{\epsilon} \times \Gamma_{\epsilon} \longrightarrow (Q \times \Gamma_{\epsilon}) \cup'/> {"{"} <InlineMath math='\emptyset'/> {"}"} è la funzione di transizione</li>
                            <li><InlineMath math='q_0 \in Q'/> è lo stato iniziale</li>
                            <li><InlineMath math='F \subseteq Q'/> è l'insieme degli stati accettanti</li>
                        </ul>
                        Inoltre la funzione di transizione <InlineMath math='\delta'/>deve soddisfare la condizione tale che per ogni <InlineMath math='q \in Q'/>, <InlineMath math='a \in \sum'/> e <InlineMath math='x \in \Gamma'/>, uno di questi valori: 
                        <InlineMath math='\delta (q,a,x)'/>, <InlineMath math='\delta (q,a,\epsilon)'/>, <InlineMath math='\delta q, \epsilon,x)'/> e <InlineMath math='\delta (q,\epsilon, \epsilon)'/> è diverso da <InlineMath math='\emptyset'/>.
                    </dd>
                </dl>

                <p className='post-text'>
                    Il linguaggio di un DPDA è chiamato <strong>linguaggio context-free deterministico</strong>
                </p>

                <div className="succ-post">
                    <Link to="/Le-macchine-di-Turing">Post successivo &#8594;</Link>
                </div>
                               
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC5