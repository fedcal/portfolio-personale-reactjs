import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";


function ICON2() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 2. Spazio di progettazione di un agente</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale, modularità, spazio di progettazione, struttura piatta, struttura modulare, agente non pianificatore, orizzonte di pianificazione, pianificatore a orizzonte finito, pianifgicatore a orizzonte indefinito, pianificatore a orizzonte infinito, dimensione della conoscenza,
            dimensione dell&#39;incertezza dell&#39;effetto, dimensione delle preferenze, preferenze ordinali, preferenze carinali, obiettivi di mantenimento, ragionamento online, ragionamento offline'/>
            <meta name='description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 2. Spazio di progettazione di un agente'/>
            <meta name='og:description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 2. Spazio di progettazione di un agente"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Spazio-di-progettazione-di-un-agente" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIcon} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img' title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Introduzione-ingegneria-della-conoscenza"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">2. Spazio di progettazione di un agente</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2023-01-01" className='data' itemprop="datePublished" content="2023-01-01T07:30:00+08:00">01/01/2023</time>
                                
                <p className='post-text first-text'>
                    Gli agenti che agiscono in ambienti variano in complessità, ognuno dei quali richiederà un certo livello di complessità nella sua progettazione. Occorre definire uno <strong>spazio di progettazione</strong> in cui operare per lo sviluppo di un agente, ogni spazio avrà diverse <i>dimensioni</i> in cui operare. 
                    La prima dimensione è la <strong>modularità</strong>, ovvero la misura in cui un sistema può essere scomposto in moduli che possono essere studiati e sviluppati separatamente, ma che collaborano tra di loro per garantire il perfetto funzionamento dell'agente. Tramite la modularità si riduce la <i>complessità</i>,
                    scomponendo in maniera gerarchica i vari moduli. In questa dimensione, la struttura di un agente può essere <strong>piatta</strong>, se non vi è alcuna organizzazione, <strong>modulare</strong>, il sistema è decomposto in moduli che interagiscono tra di loro, oppure <strong>gerarchica</strong>, nella quale i moduli 
                    sono scomposti in moduli più semplici.
                </p>

                <p className='post-text'>
                    In una struttura piatta o modulare l'agente tipicamente ragione a un singolo livello di astrazione, mentre in una struttura gerarchica l'agente ragiona a più livelli di astrazione in cui i livelli inferiori ragionano a un livello di astrazione più basso. Una scomposizione gerarchica è importante per ridurre la complessità 
                    della costruzione di un agente intelligente che agisce in un ambiente complesso. L'organizzazione gerarchica fa si che i moduli a livello più alto non debbano curarsi di dettagli e operazioni che vengono delegate ai livelli inferiori. Quando si progetta per attività di piccole o medie dimensioni, si potrebbe anche ignorare 
                    la scomposizione gerarchica, anche se è una buona pratica attuarla in ogni caso.
                </p>

                <p className='post-text'>
                    Un'altra dimensione fondamentale nella progettazione di un agente è l'<strong>orizzonte di pianificazione</strong>, nella quale si considera se l'agente può pianificare le proprie azioni nel tempo, ovvero la sua capacità di "guardare al futuro". Le fasce temporali in cui l'agente andrà a programmare le proprie attività e 
                    azioni prendono il nome di <strong>fasi</strong>. Secondo questa dimensione un agente si può distinguere in:
                </p>

                <ul>
                    <li><strong>agente non pianificatore</strong>, quando non considera il futuro e valuta cosa fare al momento del suo coinvolgimento</li>
                    <li>un <strong>pianificatore a orizzonte finito</strong>, quando l'agente possiede un numero finito di stadi, o solo uno (in questo caso prende il nome di <strong>greedy</strong> o <strong>myopic</strong>);</li>
                    <li>un <strong>pianificatore a orizzonte indefinito</strong>, ovvero quando l'agente dovrà prevedere un numero di stadi finito ma non predeterminato;</li>
                    <li>un <strong>pianificatore a orizzonte infinito</strong>, costituito da un agente che pianifica le azioni future in maniera continua. Questo tipo di agente viene chiamato <strong>processo</strong>.</li>
                </ul>

                <p className='post-text'>
                   Analizziamo adesso la <strong>dimensione della rappresentazione</strong> riguardante il modo in cui viene descritto il mondo all'interno dell'agente. Le diverse rappresentazioni del mondo prendono il nome di <strong>stati</strong>, ognuno del quale specifica lo stato del mondo all'interno dell'agente e lo stato dell'ambiente. 
                   Questo è necessario in quanto è dettato dal fatto che ogni agente può ragionare esplicitamente in termini di stati individuali. Uno stato è identificato in termini di caratteristiche o proposizioni che possono prendere il valore di <i>vero</i> o <i>falso</i>. Risulterebbe di difficile comprensione rappresentare gli stati 
                   mediante un'enumerazione, quindi si fa uso di <strong>caratteristiche</strong>, ciascuna delle quali ha un valore in ogni stato. E' importante definire anche il concetto di <strong>proposizione</strong>, ovvero una caratteristica booleana il cui valore può essere true o false. In un mondo complesso vi sono vari <strong>individui</strong>, 
                   come le <i>cose</i>, gli <i>oggetti</i> e le <i>entità</i>, e le <strong>relazioni</strong> tra di essi.
                </p>

                <p className='post-text'>
                    Quando si progetta un agente, bisogna sempre tener conto dei limiti delle risorse computazionali che impediscono di eseguire le azioni migliori. La dimensione riguardante i <strong>limiti computazionali</strong> determina se un agente ha una <strong>perfetta razionalità</strong>, attraverso la quale l'agente migliora senza tener 
                    conto delle sue limitate risorse computazionali, oppure se possiede una <strong>razionalità limitata</strong>, mediante la quale riesce a decidere l'azione migliore che può trovare date le sue limitazioni computazionali. I limiti computazionali includono il <i>tempo di calcolo</i>, <i>la memoria</i> e <i>l'accuratezza numerica</i>. 
                    Un'altra dimensione da tenere in considerazione all'interno della progettazione di un agente è la <strong>dimensione della conoscenza</strong>, distinta in <strong>conoscenza data</strong> e <strong>conoscenza appresa</strong>. Apprendere significa trovare il miglior modello che si adatti ai dati. In alcuni casi, questo processo è semplice, 
                    altre volte no. Ci si potrebbe trovare in alcuni casi in cui non vi sia incertezza oppure bisogna presumere che essa ci sia all'interno dell'apprendimento.
                </p>

                <p className='post-text'>
                    In alcuni casi un agente può osservare direttamente lo stato del mondo, in altri casi invece si deve basare sulla distribuzione di probabilità sull'insieme dei possibili stati basata su ciò che percepisce. In questo caso si agisce nella <strong>dimensione dell'incertezza di rilevamento</strong>, nella quale 
                    si determina se l'agente può determinare lo stato degli stimoli. Si definisce quindi un'agente <strong>completamente osservabile</strong>, se esso è in grado di conoscere lo stato del mondo dagli stimoli, mentre viene definito <strong>parzialmente osservabile</strong> un agente che non osserva direttamente lo stato del mondo. Nell'ambito di incertezza 
                    si definisce un <strong>modello dinamico</strong> quel modello che cambia al cambiare del mondo oppure che cambia anche se il mondo rimane fermo. Una dimensione collegata a quella dell'incertezza di rilevamento è la <strong>dimensione  dell'incertezza dell'effetto</strong>, nella quale un agente è <i>deterministico</i> quando lo stato risultante da un'azione 
                    è determinato da un'azione e dallo stato precedente, oppure può essere <i>stocastico</i> quando esiste solo una distribuzione di probabilità sugli stati risultanti. Questi tipi di agenti possono essere utilizzati solo se il mondo è completamente osservabile. Mentre se il mondo è parzialmente osservabile, un sistema stocastico può essere modellato come un sistema 
                    deterministico in cui l'effetto di un'azione dipende da qualche caratteristica non osservata.
                </p>

                <p className='post-text'>
                    Come detto nel precedente articolo, vi sono diversi tipi di soluzioni che si possono ottenere. In generale un agente agisce per ottenere i risultati migliori, però l'unico motivo per scegliere un'azione piuttosto che un'altra è dettato dal fatto che l'azione preferita conduca a risultati più desiderabili. In questo caso si agisce nella <strong>dimensione delle preferenze</strong>, 
                    la quale è costituita da <i>obiettivi</i> e <i>preferenze</i>. Gli obiettivi si dividono in genere in <strong>obiettivi di mantenimento</strong>, in base ai quali una proposizione deve essere vera in tutti gli stati visitati, o in <strong>obiettivi di realizzazione</strong>, nei quali una proposizione deve essere vera in uno stato finale. Per quanto riguarda le preferenze, queste 
                    si dividono in <strong>preferenze ordinali</strong>, nelle quali è importante l'ordine, e in <strong>preferenze cardinali</strong> nelle quali conta invece la grandezza dei valori.
                </p>

                <p className='post-text'>
                    Esiste una dimensione che prende il nome di <strong>dimensione del numero di agenti</strong>, nella quale si studia se l'agente prende in considerazione in maniera esplicita gli altri agenti. Si definiscono quindi <i>ragionamenti per singolo agente</i>, nei quali l'agente presuppone che non ci siano altri agenti nell'ambiente o che tutti gli altri agenti facciano parte della natura 
                    e quindi non siano intenzionali, oppure si definiscono <i>ragionamenti di multi agenti</i>, mediante i quali l'agente prende in considerazione il ragionamento di altri agenti. Il primo tipo di ragionamento si può utilizzare quando non ci sono altri agenti all'interno dell'ambiente oppure vi sono agenti che non cambiano le proprie azioni in relazione all'operato dell'agente. Mentre 
                    il secondo tipo di ragionamento si attua quando diversi agenti intelligenti condividono diversi obiettivi o preferenze che dipendono quindi dalle azioni di altri agenti.
                </p>

                <p className='post-text'>
                    L'ultima dimensione che ci resta da analizzare è la <strong>dimensione dell'interazione</strong>, nella quale si considera se l'agente ragiona online o offline. La differenza consiste nel fatto che se l'agente agisce secondo un <strong>ragionamento offline</strong>, esso determina cosa fare prima di interagire con l'ambiente, mentre nel <strong>ragionamento online</strong>, l'agente determina 
                    cosa fare mentre interagisce con l'ambiente, prendendo delle decisioni tempestive.
                </p>

                <p className='post-text'>
                    Queste dimensioni finora analizzate non possono essere studiate in maniera indipendente, per il semplice motivo che interagiscono tra di loro in modi complessi. Alcuni esempi possono essere che la <i>dimensione della rappresentazione</i> interagisce con la <i>dimensione della modularità</i>, in quanto alcuni moduli possono essere abbastanza elementari da ragionare mediante un insiemi finito 
                    di stati, mentre altri livelli di astrazione possono richiedere ragionamenti su individui e relazioni. La dimensione della modularità può relazionarsi con la <i>dimensione dell'orizzonte progettuale</i>.
                </p>
                <div className="succ-post">
                    <Link to="/All-interno-di-un-agente:-architettura-e-le-funzioni-agente">Post successivo &#8594;</Link>
                 </div>
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON2