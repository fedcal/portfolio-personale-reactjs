import {React, lazy, Suspense} from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Latex from 'react-latex-next';

function ICON17() {
    const vincoloIntegrita = `false \\rightarrow a_1 \\land \\dots \\land a_k`;
    const a1 = `a_i`;
    const bi =`b_i`;
    const Ai = `A_i`;
    const coppiaBiAi = `<b_i,A_i> \\in C`;
    const conflitto = `C = {c_1,\\dots,c_r}`;
    const definizioneConflitto = `KB \\cup {c_1,\\dots,c_r} \\models false`;
    const rispostaConflitto = `KB \\models \\neg c_1 \\lor \\dots \\lor \\neg c_r`;
    const coppie = `<a,A>`;
    const insiemeConclusioni = `\\{ <a,\\{a\\} > : `;
    const chiusaGraffa =`\\}`;
    const clausola =`h \\leftarrow b_1\\wedge \\dots \\wedge b_m`;
    const conclusione = `<h,A_1\\cup \\dots \\cup A_m>`;
    const clausolaVuota = `<h,\\{\\}>`;

    return (
        
        <div>
            <Helmet>
                
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Federico Calò Blog - 17. Dimostrazione per contraddizione</title>
                <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, linguaggio delle clausole proposizionali definite, proposizione atomica, proposizione definita,testa (head),regola,corpo,clausola atomica,fatto, procedura di dimostrazione, procedura bottom-up,procedura top-down '/>
                <meta name='description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
                <meta name="robots" content="index, follow, max-snippet:[100]" />
                <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
                <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
                
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò Blog - 17. Dimostrazione per contraddizione'/>
                <meta name='og:description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 17. Dimostrazione per contraddizione"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <link rel="canonical" href="https://www.federicocalo.dev/Problemi-di-rappresentazione-della-conoscenza" />
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
                        <Link to="/Introduzione-alle-proposizioni"> &#8592; Post precendente</Link>
                    </div>
                    <h1 className='header-title' itemProp="headline">17. Dimostrazione per contraddizione</h1>
                    <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-07-21" className='data' itemProp="datePublished" content="2023-07-21T07:30:00+08:00">21/17/2023</time>
                                    
                    <p itemProp='description' className='post-text first-text'>
                        Le clausole definite all'interno della base di conoscenza possono essere utilizzate in una dimostrazione per assurdo consentendo regole che definiscono delle contraddizioni, utili all'interno del sistema. Approfondiamo questo concetto analizzando le clausole Horn, i presupposti e i coflitti, per poi affrontare una diagnosi 
                        basata sulla coerenza, terminando analizzando il ragionamento con le assunzioni e le clausole Horn.
                    </p>

                    <h2>Clausole Horn</h2>

                    <p className='post-text'>
                        Come abbiamo visto negli articoli precedenti, il linguaggio delle clausole non consente l'esistenza di contraddizioni. Però, attraverso una piccola espansione di questo linguaggio può consentire una dimostrazione per assurdo. Un <i>vincolo di integrità</i> consiste in una clausola nella forma: <InlineMath math={vincoloIntegrita} /> dove <InlineMath math={a1}/> sono 
                        gli atomi e false è un atomo speciale che è falso in ogni interpretazione. Quindi una <strong>clauso Horn</strong> è una clausola definita o un vincolo di integrità. In altre parole, una clausola Horn ha un atomo falso o normale nella sua testa.
                    </p>

                    <p className='post-text'>
                        I vincoli di integrità permettono al sistema che qualche congiunzione di atomi è falsa in tutti i modelli della knowledge base. La presenza di clausole Horn all'interno della base di conoscenza può implicare negazioni di atomi. Sebbene il linguaggio delle clausole Horn non permette di utilizzare negazioni o disgiunzioni come input, queste possono essere derivate.
                    </p>

                    <p className='post-text'>
                        Un insieme di clausole <strong>non è soddisfacente</strong> se non ha modelli. Mentre un insieme di clausole è <strong>dimostrabilmente inconsistennte</strong> rispetto a una procedura di prova se la clausola false può essere derivate da altre clausole usando una dimostrazione. Se unnnnna dimostrazione è corretta e completa, un insieme di clausole è dimostrabilmente inconsistennte 
                        se e solo se è insoddisfacente.
                    </p>

                    <p className='post-text'>
                        E' sempre possibile trovare un modello per un insieme di clausole definite. L'interpretazione con tutti gli atomi veri è un modello di qualsiasi insieme di clausole definite. Pertanto, una base di conoscenza a clausola definita è sempre soddisfacibile. Tuttavia, un insieme di clausole di Horn può essere insoddisfacente. Entrambe le procedure di dimostrazione top-down e bottom-up possono 
                        essere utilizzate per dimostrare l'incoerenza, utilizzando false come query.
                    </p>

                    <h3>Ipotesi e conflitti</h3>
                    
                    <p className='post-text'>
                        Il ragionamento per contraddizioni è uno strumento molto utile. Per qualche attività è utile conoscere le combinazioni di assunzioni è incompatibile. Questo si rende necessario quando pianifichiamo le combinazioni di azioni di un agente. Per fare ciò è utile creare delle ipotesi che possono essere false. Un <strong>ipotesi</strong> è un atomo che può essere assunto in una contraddizione, la quale deriva una 
                        disgiunzione di una negazione di ipotesi.
                    </p>

                    <p className='post-text'>
                        Con una base di conoscenza della clausola di Horn e ipotesi esplicite, se il sistema può dimostrare una contraddizione da alcune ipotesi, può estrarre quelle combinazioni di ipotesi che non possono essere tutte vere. Invece di dimostrare una query, il sistema cerca di dimostrare il falso e raccoglie le ipotesi che vengono utilizzate in una dimostrazione.
                    </p>

                    <p className='post-text'>
                        Se KB è un insieme di clausole di Horn, un <strong>conflitto</strong> di KB è un insieme di presumibili che, dato KB, implica false. Ciò significa che se <InlineMath math={conflitto}/> è un conflitto di KB se <InlineMath math={definizioneConflitto}/>, la cui relativa risposta è <InlineMath math={rispostaConflitto}/>. Un <strong>conflitto minimale</strong> è un conflitto tale che nessun sottoinsieme rigoroso è anche un conflitto.
                    </p>

                    <h2>Diagnosi basata sulla coerenza</h2>

                    <p className='post-text'>
                        Alla base della <strong>diagnosi basata sulla coerenza</strong>, vi è il concetto di assumere tutto ciò che funziona normalmente e derivare quali componenti potrebbero essere anormali. Supponiamo che un <strong>errore</strong> sia qualcosa di sbagliato all'interno del sistema. L'obiettivo della diagnosi basata sulla coerenza è di determinare le possibile colpe basate su un modello del sistema e sulle 
                        sue osservazioni. Rendendo presumibile l'assenza di difettim i conflitti possonno essere usati per provare cosa è sbagliato all'interno del sistema.
                    </p>

                    <p className='post-text'>
                        Dato l'insieme di tutti i conflitti, un utente può determinare cosa potrebbe esserci di sbagliato nel sistema che viene diagnosticato. Tuttavia, data una serie di conflitti, è spesso difficile determinare se tutti i conflitti possano essere spiegati da alcuni difetti. Alcune delle domande che un utente potrebbe voler sapere sono se tutti i conflitti potrebbero essere spiegati da un singolo errore o da una coppia di errori. 
                        Dato un insieme di conflitti, una diagnosi basata sulla coerenza è un insieme di presupposti che ha almeno un elemento in ogni conflitto. Una <strong>diagnosi minima</strong> è una diagnosi tale che nessun sottoinsieme è anche una diagnosi. Per una delle diagnosi, tutti i suoi elementi devono essere falsi nel mondo che viene modellato.
                    </p>

                    <h3>Ragionamento con assunzioni e clausole di Horn</h3>

                    <p className='post-text'>
                        Per trovare i conflitti delle varie clausole di Horn all'interno della base di conoscenza, possiamo utilizzare due implementazioni: un'<i>implementazione bottom up</i> e un'<i>implementazione top down</i>. L'<strong>implementazione bottom-up</strong> è una versione aumentata dell'algoritmo bottom-up per clausole. La modifica che viene apportata è che le conclusioni sono coppie <InlineMath math={coppie}/>, dove a è un atomo e A è un 
                        insieme di assunzioni che implica a nel contesto della clausola Horn della KB.
                    </p>

                    <p className='post-text'>
                        Inizialmente, l'insieme delle conclusioni C è <InlineMath math={insiemeConclusioni}/> è ammissibile <InlineMath math={chiusaGraffa}/>. Le clausole possono essere usate per guidare nuove conclusioni. Se c'è una clausola <InlineMath math={clausola}/> tale che per ogni <InlineMath math={bi}/> c'è qualche <InlineMath math={Ai}/> tale che <InlineMath math={coppiaBiAi}/>, allora <InlineMath math={conclusione}/> può essere aggiunta a C. 
                        Qusta condizione copre anche il caso di clausole automiche, con m = 0, <InlineMath math={clausolaVuota}/> è aggiunta a C.
                    </p>

                    <p className='post-text'>
                        Definiamo lo pseudocodice del ragionamento bottom-up, che riceve in <i>input</i> un insieme KB di clausole Horn e un insieme di atomi Assunzioni che possono essere presunte, e restituisce come <i>output</i> un insieme di conflitti. <i>Localmente</i> invece ha un insieme C di coppie di un atomo e un insieme di assunzioni.
                    </p>

                    <div className='pre'>
                        <div className='code'>
                            <h3>Pseudocodice</h3>
                            <h3>Ragionamento bottom-up</h3>
                            <h3>Prova_Conflitto_BU ( KB, Assunzioni )</h3>
                            <p>
                                <span className='number-row'>1.</span> C := {"{"}<InlineMath math='< a,'/>{"{"}a{"}"}<InlineMath math='>'/>: a è assumibile{"}"} <br/>
                                <span className='number-row'>2.</span> ripetere:<br/>
                                <span className='number-row'>3.</span> &emsp; seleziona la clausola <InlineMath math = '"h \leftarrow b_1 \land \dots \land b_m"'/> in KB tale che <br/>
                                <span className='number-row'>4.</span> &emsp; <InlineMath math = '<b_i, A_i> \in C'/> per ogni i<br/>
                                <span className='number-row'>5.</span> &emsp;<InlineMath math = '<h, A> \notin C'/> dove <br/> 
                                <span className='number-row'>6.</span> &emsp;T <InlineMath math='\in'/> Cs : T coinvolge X <br/>
                                <span className='number-row'>7.</span> &emsp;definiamo R come l'unione di tutti i vincoli in <InlineMath math='Cs_X'/><br/>
                                <span className='number-row'>8.</span> &emsp;definiamo R' come proiezione di R sulle variabili diverse da X<br/> 
                                <span className='number-row'>9.</span> &emsp;S = VE_CSP(Vs',(Cs\<InlineMath math='Cs_X) \cup'/>{"{"}R'{"}"})<br/>
                                <span className='number-row'>10.</span> &emsp;restituisci R<InlineMath math='\bowtie'/>S<br/>   
                            </p>
                        </div>
                    </div>

                    <p className='post-text'>
                        Questo algoritmo è talvolta chiamato sistema di mantenimento della verità basato sui presupposti ( ATMS ), in particolare quando è combinato con l'aggiunta incrementale di clausole e assunzioni.
                    </p>
                </section>
            </article>
            <Footer/>
        </div>
    )
}

export default ICON17