import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeCC from '../../../../assets/cc_1900.webp';
import '../../Articoli.css';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {Link} from "react-router-dom";

function CC8() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 8. Riducibilità Pt. 1</title>
            <meta name='keywords' content='riducibilità, riduzione, problema della fermata, Teorma HALT indecidibile, metodo mediante storie di computazione, Definizione di storia di computazione accettante,storia di computazione accettante,storia di computazione di rifiuto,automa linearmente limitato, Definizione di automa linearmente limitato, Teorema dedicibilità'/>
            <meta name='description' content=' In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato riducibilità.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog -8. Riducibilità Pt. 1'/>
            <meta name='og:description' content=' In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato riducibilità.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 8. Riducibilità Pt. 1"/> 
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
                   In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato <strong>riducibilità</strong>. Alla base vi è la <strong>riduzione</strong>, mediante la quale un problema viene convertito in un altro problema, in modo tale che una soluzione 
                   al secondo può essere usata per risolvere il primo. Quindi la riducibilità coinvolge sempre due problemi che comunemente vengono denominati A e B. Se A si riduce a B, possiamo utilizzare una soluzione di B per risolvere A. Una proprietà della riducibilità è che essa non dice niente sulla soluzione dei problemi A o B in maniera individuale, 
                   ma soltanto sulla risolubilità del problema A quando abbiamo una soluzione anche per B.
                </p>

                <p className='post-text'>
                    La riducibilità svolge un ruolo importante nella classificazione dei problemi in base alla decidibilità e alla teoria della complessità. Quando A è riducibile a B, trovare la soluzione di A non può essere più difficile di risolvere B perchè una soluzione per B offre una soluzione ad A. Secondo la teoria della computabilità, se A è riducibile 
                    a B e B è decidibile, allora anche A è decidibile. Vale anche il caso in cui A è indecidibile e riducibile a B, in questo caso anche B risulta indecidibile. Quindi per dimostrare che un problema è indecidibile, bisognerà dimostrare che qualche altro problema già noto per essere indecidibile si riduce ad esso.
                </p>

                <p className='post-text'>
                    Un esempio di problema è quello relativo all' <InlineMath math='HALT_{TM}'/>, il quale consiste nel determinare se una macchina di Turing si ferma su un dato input. Questo problema prende il nome di <strong>problema della fermata</strong>. Per dimostrare l'indecidibilità del problema della fermata riducendo <InlineMath math='A_{TM}'/> a <InlineMath math='HALT_{TM}'/>. 
                    Sia quindi <InlineMath math='HALT_{TM}= \{ < M, w > |'/> M è una TM e M si ferma su input w {"}"}. 
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema HALT indecidibile</strong></dt>
                    <dd>
                        <InlineMath math='HALT_{TM}'/> è indecidibile.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema, assumiamo al fine di ottenere una contraddizione che la TM R decide <InlineMath math='HALT_{TM}'/> Costruiamo la TM S per decidere <InlineMath math='HALT_{TM}'/>. Costruiamo la TM S per decidere <InlineMath math='A_{TM}'/>, che opera come segue. S = " {"<"} M, w {">"}, una codifica di una TM M ed una stringa w: 
                </p>

                <ul>
                    <li>Esegue la TM R su input {"<"} M, w {">"}</li>
                    <li>Se R rifiuta, rifiuta</li>
                    <li>Se R accetta, simula M su w finchè non si ferma</li>
                    <li>Se M ha accettato, accetta; se M ha rifiutato, rifiuta</li>
                </ul>
                
                <p className='post-text'>
                    Quindi se R decide <InlineMath math="HALT_{TM}"/>, allora S decide <InlineMath math="A_{TM}"/> Poichè <InlineMath math='A_{TM}'/> è indecidibile, allora anche <InlineMath math='HALT_{TM}'/> deve essere indecidibile. Questo metodo per dimostrare se un problema è indecidibile, viene utilizzato per molti altri 
                    problemi affini al teorema precedente. Prendiamo ad esempio questa TM: <InlineMath math='E_{TM} = '/> {"{"} {"<"} M {">"} | M è una TM e L(M) = <InlineMath math='\emptyset'/> {"}"} e definiamo il seguente teorema: 
                </p>
                
                <dl className='definizione'>
                    <dt><strong>Teorma <InlineMath math="E_{TM}"/> indecidibile</strong></dt>
                    <dd>
                        <InlineMath math='E_{TM}'/> è indecidibile.
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema denominiamo per convenzione la macchina del teorema <InlineMath math='M_1'/> e definiamola come segue: <InlineMath math='M_1'/> = "Su input x:
                </p>

                <ul>
                    <li>Se <InlineMath math='x \ne w'/> rifiuta</li>
                    <li>Se x = w, esegue M su input w e accetta se M accetta"</li>
                </ul>

                <p className='post-text'>
                    Questa macchina ha la stringa w come parte della sua descrizione, Essa verifica se x = w scansionando l'input e confrontandolo carattere per carattere. Assumiamo che la TM R decide <InlineMath math='A_{TM}'/> nel seguente modo: 
                    S = " Su input {"<"} M, w {">"} una codifica di una TM M e una stringa w: 
                </p>

                <ul>
                    <li>Usa la descrizione di M e w per costruire la TM <InlineMath math='M_1'/> descritta sopra</li>
                    <li>Esegue R su input {"<"} <InlineMath math='M_1'/>{">"}</li>
                    <li>Se R accetta, rifiuta; se R rifiuta, accetta"</li>
                </ul>

                <p className='post-text'>
                    S deve essere effettivamente in grado di calcolare una descrizione di <InlineMath math ='M_1'/> da una descrizione di M e w. Può farlo perchè ha bisogno solo di aggiungere ad M alcuni stati in più che svolgono il test x = w.
                    Se R fosse stato un decisore per <InlineMath math='E_{TM}'/>, S sarebbe un decisore per <InlineMath math='A_{TM}'/>. Un decisore per <InlineMath math='A_{TM}'/> non può esistere, quindi sappiamo che <InlineMath math='E_{TM}'/> deve 
                    essere indecidibile
                </p>

                <p className='post-text'>
                    Il <strong>metodo mediante storie di computazione</strong> è una tecnica per dimostrare che <InlineMath math ='A_{TM}'/> è riducibile a certi linguaggi. Questo metodo è spesso utile quando il problema da mostrare indecidibile comporta la dimostrazione 
                    dell'esistenza di qualcosa. Diamo una definizione formale di storia di computazione.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di storia di computazione accettante</strong></dt>
                    <dd>
                        Sia M una macchina di Turing e w una stringa di input, definiamo una <strong>storia di computazione accettante</strong> per M su w è una sequenza di configurazioni <InlineMath math='C_1, C_2, \dots, C_l'/> dove <InlineMath math='C_1'/> è la configurazione iniziale 
                        di M su w, <InlineMath math='C_l'/> è una configurazione di accettazione per M, e ogni <InlineMath math='C_i'/> segue da <InlineMath math='C_{i-1}'/> in accordo alle regole di M. Una <strong>storia di computazione di rifiuto</strong> per M su w 
                        è definita in modo analogo, tranne per il fatto che <InlineMath math='C_l'/> è una configurazione di rifiuto.
                    </dd>
                </dl>

                <p className='post-text'>
                    Le storie di computazione sono sequenze finite. Se M non si ferma su w, non esiste una storia di computazione accettante o di rifiuto per M su w. Le macchine deterministiche hanno al massimo una storia di computazione su ogni input. Le macchine non deterministiche possono avere 
                    molte storie di computazione su un singolo input, corrispondenti ai diversi rami di computazione. Diamo ora una definizione di <strong> automa linearmente limitato</strong> e dimostriamo se esso è decidibile.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione di automa linearmente limitato</strong></dt>
                    <dd>
                        Un <i>automa linearmente limitato</i> è un tipo ristretto di macchina di Turing in cui alla testina del nastro non è permesso di spostarsi fuori dalla parte del nastro che contiene l'input. Se la macchina tenta di spostare la testina al di fuori dell'input, la testina 
                        rimane dove si trova.
                    </dd>
                </dl>

                <p className='post-text'>
                    Un automa linearmente limitato è una macchina di Turing con una quantità limitata di memoria, la quale può risolvere solo problemi che richiedono una quantità di memoria al più pari alla dimensione dell'input. L'uso di un alfabeto di nastro più grande dell'alfabeto degli input 
                    consente alla memoria disponibile di essere aumentata di un fattore costante. Nonostante questo vincolo sulla memoria, un automa LBA risulta abbastanza potente.
                </p>
                <p className='post-text'>
                    Il problema che ci poniamo si riferisce al determinare se un LBA accetta il suo input. Questo problema coincide con quello relativo all'indecidibilità di <InlineMath math='A_{TM}'/>, quando quest'ultima è un LBA, possiamo quindi dimostrare che <InlineMath math='A_{LBA}'/> è 
                    decidibile. Denotiamo quindi: <InlineMath math='A_{LBA}'/> = {"{"}{"<"}M,w{">"} | M è un LBA che accetta la stringa w {"}"}. Denotando con q il numero degli stati e con g il numero dei simboli nell'alfabeto di nastro, esistono esattamente <InlineMath math='qng^n'/> configurazioni 
                    distinte di M per un nastro di lunghezza n. Quindi enunciamo il teorema della decidibilità per <InlineMath math='A_{LBA}'/> e diamone una dimostrazione.
                </p>

                <dl className='definizione'>
                    <dt><strong>Teorema dedicibilità di <InlineMath math='A_{LBA}'/></strong></dt>
                    <dd>
                        <InlineMath math='A_{LBA}'/> è dedicibile
                    </dd>
                </dl>

                <p className='post-text'>
                    Per dimostrare questo teorema ricordiamo che una configurazione di M è come un'istantanea durante il suo calcolo. La configurazione comprende lo stato del controllo, la posizione della testina e il contenuto del nastro. M ha q stati e il suo nastro è lungo n, per cui la testina può essere in una 
                    delle n posizioni, e <InlineMath math='g^n'/> possibili stringhe di simboli del nastro compaiono su esso. Il prodotto di questi valori rappresenta il numero totale di configurazioni differenti di M con un nastro di lunghezza n. L'algoritmo che decide <InlineMath math='A_{LBA}'/> computa in questo 
                    modo. L = "Su input {"<"} M, w {">"}, dove M è un LBA e w è una stringa:
                </p>

                <ul>
                    <li>Simula M su w poer <InlineMath math='qng^n'/> passi o finchè non si ferma</li>
                    <li>Se M si è fermata, accetta se ha accettato e rifiuta se ha rifiutato. Inoltre se non si è fermata, rifiuta."</li>
                </ul>

                <p className='post-text'>
                    Se M su w non si è fermata entro <InlineMath math='qng^n'/> passi, deve ripetere una configurazione, quindi entra in un ciclo e allora rifiuta. Non tutti i problemi che coinvolgono gli LBA sono dedicibili, esistono alcuni che in realtà non lo sono, ad esempio il problema del vuoto che enuncia come segue <InlineMath math='E_{LBA}'/> = {"{"} {"<"} M {">"} | M è un LBA dove L(M) = <InlineMath math='\emptyset'/>{"}"}. 
                </p>

                <div className="succ-post">
                    <Link to="/Riducibilità-Pt-2">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default CC8