import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import img1 from './agente-ambiente.webp';
import tsk from './task.webp';
import {Link} from "react-router-dom";

function ICON1() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 1 - Introduzione all' ingegneria della conoscenza</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale, sistemi empirici, applicazioni, conoscenza preliminare, cronologia delle interazioni, obiettivi, abilità, belief state, stato interno delle credenze, agenti intenzionali, purposive agents, linguaggio di rappresentazione, knowledge base
            , soluzione ottimale, soluzione soddisfacente, soluzione approssimativamente ottimale, soluzione probabile, sistema di simboli, livello di astrazione, livello di conoscenza, livello del simbolo, spazio di progettazione'/>
            <meta name='description' content='Introduzione all&#39;ingegneria della conoscenza, andando a definire che cos&#39;è l&#39;intelligenza artificiale, gli agenti e l&#39;ambiente in cui essi operano. Vedremo i vari algoritmi che vengono applicati in questo settore, in quali casi e le varie metodologie di ricerca della soluzione.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 1 - Introduzione all&#39;ingegneria della conoscenza'/>
            <meta name='og:description' content='Introduzione all&#39;ingegneria della conoscenza, andando a definire che cos&#39;è l&#39;intelligenza artificiale, gli agenti e l&#39;ambiente in cui essi operano. Vedremo i vari algoritmi che vengono applicati in questo settore, in quali casi e le varie metodologie di ricerca della soluzione.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 1 - Introduzione all&#39;ingegneria della conoscenza"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Introduzione-ingegneria-della-conoscenza" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/rdc 1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/SchemaReti.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoViaCavo.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/AccessoAziendale.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img src={HomeIcon} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img' loading="lazy" decoding="async"title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <h1 className='header-title' itemprop="headline">1 - Introduzione all' ingegneria della conoscenza</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-12-30"className='data' itemprop="datePublished" content="2022-12-30T07:30:00+08:00">30/12/2022</time>
                                
                <p className='post-text first-text'> Questa serie di articoli riprende i miei appunti relativi al corso di ingegneria della conoscenza, della facoltà di informatica presso l'università Aldo Moro di Bari. Racchiudo in questi articoli non solo gli appunti derivanti dalle slide del corso condivise dal professore
                 Fanizzi, ma anche gli appunti relativi al libro <a href='https://artint.info/2e/index.html'target='_blank'rel="noopener noreferrer" aria-label="Libro">"Artificial Intelligence, founbdations of computational agents"</a>, scritto da Poole e Mackworth. Entrerei subito nel merito della materia dando una prima definizione
                 di <strong>intelligenza artificiale</strong>, ovvero il campo che studia la sintesi e l'analisi di agenti computazionali che agiscono in modo intelligente. Ma co'è un <strong>agente</strong>? Esso può essere definito come qualsiasi oggetto presente in un ambiente e che interagisce con esso. Spesso ci si chiede come 
                 esso <strong>agisce</strong>, giudicandolo quindi per le sue azioni. Definiamo un agente <i>intelligente</i> quando:</p>

                <ul>
                    <li>ciò che fa è appropriato alle circostanze e ai suoi obiettivi, tenendo in considerazione le conseguenze a breve e a lungo termine delle sue azioni</li>
                    <li>è flessibile agli ambienti mutevoli e agli obiettivi mutevoli</li>
                    <li>impara dall'esperienza</li>
                    <li>fa scelte appropriate date le sue limitazioni computazionali</li>
                </ul>
                <p className='post-text'>Mentre si definisce <strong>agente computazionale</strong>, quell'agente le cui decisioni possono essere spiegate in termini di calcolo, attraverso anche operazioni che possono essere implementate in un dispositivo fisico. Vi sono degli aspetti comuni tra le varie tipologie di agenti, ovvero che nessuno è onnisciente o onnipotente,
                 tutti gli agenti sono limitati, hanno una memoria finita, non hanno un tempo illimitato per agire, e possono osservare tutto ciò che riguarda il mondo solo in domini molto specializzati.</p>
                
                <p className='post-text'>L'obiettivo scientifico dell'AI è la comprensione dei principi che rendono intelligenti i sistemi artificiali e naturali, attraverso: </p>
                
                <ul>
                    <li>l'<i>analisi</i> degli agenti naturali e artificiali</li>
                    <li>formulando e testando ipotesi utili alla realizzazione di agenti intelligenti</li>
                    <li>progettando, costruendo e sperimentando i sistemi computazionali che svolgono azioni o che comunemente richiedono un certo livello di intelligenza</li>
                </ul>

                <p className='post-text'>In questo ambito i ricercatori sviluppano <strong>sistemi empirici</strong> per testare le ipotesi o esplorare lo spazio dei possibili progetti, da non confondere con le diverse <strong>applicazioni</strong> che sono costruite per uno specifico dominio applicativo. L'obiettivo dell'AI è la <i>progettazione</i> e la <i>sintesi</i> di artefatti
                 utili e intelligenti, in modo da produrre agenti che agiscano in modo intelligente da poter utilizzare in diverse applicazioni. Come detto in precedenza, l'AI  lavora nel ragionamento pratico, infatti un agente è costituito da tre fattori principali: <i>la percezione</i>, il ragionamento e l'azione. Inoltre un agente deve muoversi all'interno di un ambiente, che può includere
                 anche altri agenti. Gli agenti insieme all'ambiente circostante in cui operano costituiscono il <strong>mondo</strong></p>
                
                <div className='box-image'>
                    <img src={img1} alt="Interazione di un agente con l'ambiente esterno" className='post-img2' loading="lazy" decoding="async" title='Figura 1: interazione agente-ambiente'/>
                    <p className='image-capture'>Figura 1: interazione agente-ambiente</p>
                </div>

                <p className='post-text'>Un <i>agente</i> può essere visto come una scatola nera che riceve degli inputs e restituisce degli output. Le azioni di un agente sono influenzate da: </p>

                <ul>
                    <li><strong>conoscenza preliminare</strong> posseduta dall'agente e dall'ambiente</li>
                    <li><strong>cronologia delle interazioni</strong> con l'ambiente, composte da <i>stimoli</i> e <i>osservazioni</i> ottenute dall'ambiente, e le <i>esperienze passate</i> dettate da stimoli e azioni precedenti</li>
                    <li><strong>obiettivi</strong> che l'agente deve cercare di raggiungere e <strong>preferenze</strong> connesse agli stati del mondo</li>
                    <li><strong>abilità</strong>, costituite dalle operazioni che l'agente è in grado di fare</li>
                </ul>

                <p className='post-text'>All'interno di ogni agente possiamo trovare uno <i> stato interno delle credenze</i>, definito come <strong>belief state</strong>, composto dalla rappresentazione delle cose che si ritengono vere riferite all'ambiente e da ciò che si è appreso durante l'esecuzione dei vari compiti. Questo aiuta l'agente a raggiungere gli obiettivi e viene costantemente
                 aggiornato in base agli stimoli. Una particolare tipologia di agenti è costituita dagli <i>agenti intenzionali</i>, <strong>purposive agents</strong>, i quali hanno delle preferenze sugli obiettivi, preferendo alcuni stati del mondo rispetto ad altri e agiscono di conseguenza. Mentre gli agenti non intenzionali prendono il nome di <strong>natura</strong>. Questa distinzione è molto importante in fase di 
                  progettazione. Inoltre se un agente non ha preferenze, non ha importanza in quale stato del mondo finisce.
                </p>
                
                <p className='post-text'>
                    Gli agenti artificiali sono progettati per compiti particolari, seguendo tre aspetti della computazione distinti: la computazione che entra nella progettazione dell'agente, la computazione che l'agente può fare prima che osservi il mondo 
                    e abbia bisogno di agire e il calcolo eseguito dall'agente mentre agisce. Inoltre è fondamentale considerare <strong>il calcolo del tempo di progettazione</strong> dell'agente, il <strong>calcolo offline</strong> ovvero il calcolo che 
                    l'agente deve fare in prima che esso agisce e il <strong>calcolo on line</strong> ovvero il calco eseguito dall'agente tra l'osservazione dell'agente e l'azione dell'ambiente. Un agente in genere deve utilizzare la sua base di conoscenza, le sue convinzioni e le sue osservazioni per determinare cosa fare dopo.
                </p>

                <p className='post-text'>
                    E' importante distinguere tra la conoscenza nella mente del progettista e la conoscenza all'interno dell'agente. L'agente è altamente specializzato che funziona bene nell'ambiente per il quale è stato progettato, ma non funziona al di fuori di esso. Potrebbe essere stato progettato in maniera eccezionale, ma 
                    l'agente potrebbe non fare molto per funzionare bene. Potrebbe anche esistere un agente molto flessibile che può sopravvivere in ambienti arbitrari e accettare nuove attività in fase di esecuzione, la cui implementazione però rappresenta una vera e propria sfida. Per sviluppare un agente possono essere seguite due strategie: la prima consiste nel semplificare gli ambienti e costruire sistemi di ragionamento complessi per questi ambienti semplici, la seconda consiste nel costruire agenti semplici in ambienti naturali. Uno dei 
                    vantaggi della semplificazione degli ambienti consente di ottimizzare agenti per situazione particolari. Un agente può ragionare poco o molto, ma il suo progettista può ragionare sia sull'ambiente sia sull'agente.
                </p>

                <p className='post-text'>
                    Le rappresentazioni AI differiscono dai programmi per computer nei linguaggi tradizionali è che la rappresentazione AI tipicamente specifica <i>cosa</i> deve essere calcolato e non <i>come</i>. Gran parte del ragionamento basato sull'intelligenza artificiale implica la ricerca nello spazio 
                    delle possibilità per determinare come completare un'attività. 
                </p>

                <div className='box-image'>
                    <img loading="lazy" decoding="async" src={tsk} alt="Il ruolo delle rappresentazioni nella risoluzione dei compiti" className='post-img2' title='Figura 2: rappresentazione risoluzione compiti'/>
                    <p className='image-capture'>Figura 2: rappresentazione risoluzione compiti</p>
                </div>

                <p className='post-text'>
                    Per risolvere un compito, il progettista deve in primo luogo determinare cosa costituisce una soluzione, per poi rappresentare l'attività in un modo su cui un computer può ragionare, eseguire le azioni su un elaboratore per calcolare l'output 
                    e infine interpretare l'output. Definiamo il concetto di <strong>conoscenza</strong> come l'informazione su un dominio che può essere utilizzata per risolvere compiti in quel dominio. Questa conoscenza è rappresentata attraverso un <strong>linguaggio di rappresentazione </strong> 
                    all'interno dell'agente. In generale vengono utilizzate delle strutture dati per codificare la conoscenza in modo da poter eseguire delle operazioni su di essa. Con il termine <strong>knowledge base</strong> si indica la rappresentazione di tutta la conoscenza memorizzata da un agente. 
                    Un linguaggi di rappresentazione per poter rappresentare correttamente una base di conoscenza deve possedere determinate caratteristiche:
                </p>

                <ul>
                    <li>abbastanza ricco da esprimere le conoscenze necessarie per risolvere il compito</li>
                    <li>il più vicino possibile a una specificazione naturale del compito</li>
                    <li>trattabile, ovvero l'agente può agire abbastanza rapidamente</li>
                    <li>in grado di essere acquisiti da persone, dati ed esperienze passate</li>
                </ul>

                <p className='post-text'>
                    Data una descrizione informale di un'attività, il progettista dovrebbe determinare cosa costituirebbe una soluzione. Esistono quattro classi comuni di soluzioni. Si definisce <strong>soluzione ottimale</strong> se per un'attività, la soluzione è quella migliore in base 
                    a una determinata misura riferita alla qualità della soluzione (generalmente la misura utilizzata è <strong>l'utilità</strong>). Alcune volte un agente non ha bisogno della soluzione migliore per un'attività, si parla quindi di <strong>soluzione soddisfacente</strong>, ovvero 
                    quella soluzione che è abbastanza buona secondo una descrizione di quali soluzioni sono adeguate. Si parla di <strong>soluzione approssimativamente ottimale</strong> quando si cerca una soluzione la cui misura di qualità è vicina alla soluzione ottimale. Infine abbiamo la  
                    <strong> soluzione probabile</strong>, ovvero quella che potrebbe esser una soluzione probabile, come anche non potrebbe esserlo.
                </p>

                <p className='post-text'>
                    Una volta ottenuta la soluzione si pensa a come rappresentarla. Per poterlo fare si definisce un <strong>sistema di simboli fisici</strong>, costituito da <strong>simboli</strong> ovvero un modello singolo che può essere manipolato. Un sistema di simboli crea, copia, modifica e distrugge 
                    simboli. Essenzialmente un simbolo è uno dei modelli manipolati come unità da un sistema di simboli. Questo sistema è alla base dell'intelligenza artificiale in quanto rappresenta tutto ciò che è necessario per un'azione intelligente. Un agente quindi manipola il sistema di simboli per 
                    produrre azioni, tramite il quale si riferisce a cose esistenti nel mondo. In questo modo l'agente crea un <strong>modello</strong> del mondo, costituito da una rappresentazione delle convinzioni che l'agente ha sul mondo. Il mondo non deve essere modellato al livello più dettagliato per essere 
                    utile. Tutti i modelli sono <strong>astrazioni</strong>, in quanto rappresentano una parte del mondo e tralasciano molti dettagli. Il <strong>livello di astrazione</strong> fornisce un ordinamento parziale dell'astrazione. Scegliere un determinato livello rispetto ad un altro è molto difficile 
                    e dipende da diversi fattori:
                </p>

                <ul>
                    <li>Una descrizione di alto livello è più facile da specificare e comprendere per un essere umano;</li>
                    <li>Una descrizione di basso livello può essere più accurata e predittiva;</li>
                    <li>Più basso è il livello, più difficile è ragionare;</li>
                    <li>Un agente potrebbe non conoscere le informazioni necessarie per una descrizione di basso livello</li>
                </ul>

                <p className='post-text'>Concludo il post descrivendo due tipi di livelli: il <strong>livello di conoscenza</strong>, costituito dal livello di astrazione che considera ciò che un agente sa e crede e quali sono i suoi obiettivi, e il <strong>livello del simbolo</strong>, costituito dalla descrizione di un agente in termini di ragionamento che fa.
                <br/><br/> Nel prossimo articolo continueremo con lo <strong>spazio di progettazione </strong> di un'agente.
                </p>

                <div className="succ-post">
                    <Link to="/All-interno-di-un-agente:-architettura-e-controllo-gerarchico">Post successivo &#8594;</Link>
                 </div>
                
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON1