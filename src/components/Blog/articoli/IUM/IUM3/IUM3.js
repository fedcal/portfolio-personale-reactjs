import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Navbar/Navbar';
import HomeIum from '../../../../assets/ium_1900.webp';
import { Link } from 'react-router-dom';
import '../IUM.css';
import '../../Articoli.css';
import Memorie from './Memorie.webp';
import Latex from 'react-latex';
function IUM3() {
    const piuomeno=`$$ \\pm $$`;
    const alfa=`$$ \\alpha $$`;
    const tUnnno=`$$ T_1 $$`;
    const tN=`$$ T_n $$`;
    const formula=`$$ T_n = T_1 \\times n^{- \\alpha}$$`;
    const formula2=`$$ T = a + b \\times log_2 \\bigl( \\frac{D}{S} + 1 \\bigr) $$`;
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog -  3. Interazione Uomo Macchina - Conoscere l&#39;utente</title>
            <meta name='keywords' content='interazione uomo macchina, ium, appunti universitari, usabilità, conoscere l&#39;utente, attenzione, task analysis, GOMS, goals, operators, Methods, Selection rules, attenzione selettiva, attenzione divisiva, fattori esogeni, fattori endogeni, memoria sensoriale, memoria a breve termine, memoria a lungo termine, short time memory, STM, legge di potenza della pratica, Power Law of Practice,  learning curve, curva di apprendimento media, Legge di Fitts'/>
            <meta name='description' content=' All&#39;interno dello sviluppo incentrato sull&#39;utente, possiamo visualizzare l&#39;utente da molteplici punti di vista. E&#39; fondamentale analizzare i processi cognitivi, le caratteristiche personali e il 
                    ruolo dei singoli utenti che interagiscono con il sistema. Il progettista di sistemi interattivi non deve perdere di vista questi obiettivi, vediamo come. '/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 3. Interazione Uomo Macchina - Conoscere l&#39;utente'/>
            <meta name='og:description' content='All&#39;interno dello sviluppo incentrato sull&#39;utente, possiamo visualizzare l&#39;utente da molteplici punti di vista. E&#39; fondamentale analizzare i processi cognitivi, le caratteristiche personali e il 
                    ruolo dei singoli utenti che interagiscono con il sistema. Il progettista di sistemi interattivi non deve perdere di vista questi obiettivi, vediamo come. '/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog -  3. Interazione Uomo Macchina - Conoscere l&#39;utente"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Interazione-uomo-macchina-Conoscere-l-utente" />
       
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/ium_1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/modelloDiNorman.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIum} alt="Logo della pagina riferita alla materia interazione uomo macchina" className='header-img'title='interazione uomo macchina'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">3. Interazione Uomo Macchina - Conoscere l'utente</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-12-17" className='data' itemprop="datePublished" content="2022-12-17T07:30:00+08:00">17/12/2022</time>
                                
                <p className='post-text first-text'>Come accennato nella descrizione del post, quando si sviluppa un sistema destinato all'uso da parte di diversi utenti, si deve studiare come questi si relazioneranno con esso in base a diversi fattori quali le caratteristiche individuali, il livello di apprendimento o il ruolo dell'utente. Possiamo racchiudere
                 gli utenti in quattro livelli in cui emergono le loro diversità: </p>
                
                <ul>
                    <li><i>livello cognitivo</i></li>
                    <li><i>livello personale</i></li>
                    <li><i>livello comportamentale</i></li>
                    <li><i>il ruolo in cui l'utente si trova</i></li>
                </ul>
                <p className='post-text'> Ogni livello deve essere studiato con metodi disciplinari diversi, quali ad esempio quelli relativi alla psicologia sperimentale e all'etnografia. A livello cognitivo, una pietra miliare è rappresentata dal libro <a href="https://amzn.to/3W1QA80" className='link'>"The Psychology of Human-Computer Interaction"</a>,
                 in cui gli autori specificano come i processi sensoriali, cognitivi e motori che caratterizzano l'utente, influenzano il modo in cui il progettista sviluppa il sistema in maniera consona rispetto ai compiti richiesti. Questo avviene generalmente attraverso l'analisi dei compiti, chiamata generalmente <strong>task analysis</strong>, attraverso la quale si valutano diverse soluzioni
                  progettuali prima della loro realizzazione, per poter scegliere quella più conveniente dal punto di vista prestazionale. Nel libro citato, si può riscontrare la descrizione di un metodo che prende il nome di <strong>GOMS</strong>, ovvero <i>goals</i>, <i>operators</i>, <i>Methods</i> and <i>Selection rules</i>, in base alle quali si decompone l'interazione con il sistema nelle sue azioni elementari. I <i>Goals</i>  definiscono 
                  gli obiettivi che l'utente intende raggiungere, le <i>Operators</i> costituiscono tutte quelle azioni necessarie a raggiungere gli obiettivi. Mentre, per quanto riguarda i <i> Methods</i>, vengono raggruppate tutte le seguenze di operazioni che il sistema offre per raggiungere ogni singolo goals. L'insieme di più methods possibili per uno stesso obiettivo, prende il nome
                  di <i>Selection rules</i>, correlato da una descrizione di criteri di selezione di un metodo rispetto ad un altro.</p>
                
                <p className='post-text'>Questa tecnica permette al progettista di individuare i limiti in termini di prestazione del sistema, tenendo conto dei limiti dell'utente e della possibilità che quest'ultimo sbagli. Entra in gioco anche <strong>l'attenzione</strong>, ovvero l'insieme di processi cognitivi che consentono all'utente di selezionare solo le informazioni più importanti da elaborare. E' come se 
                 vi fosse un filtro che ci permette di focalizzare l'attenzione in particolari dettagli rispetto ad altri. Questo ci permette di classificare l'attenzione in <strong>attenzione selettiva</strong>, quando ci si focalizza su un singolo evento, e in <strong>attenzione divisiva</strong>, quando vengono seguiti più eventi contemporaneamente. Questi due tipi di attenzione sono tra di loro
                  dipendenti, in quanto aspetti di uno stesso fenomeno. Vi sono diverse teorie sull'attenzione che analizzano di diversi fattori esterni, <i>esogeni</i>, e interni, <i>endogeni</i>. I primi fanno riferimento alle caratteristiche degli stimoli che arrivano ai nostri sensi, mentre nel secondo caso siamo noi a guidare l'attenzione. Inoltre si è dimostrato come riusciamo a concentrare 
                  maggiore attenzione in compiti sempre più difficili.</p>
                
                <p className='post-text'>Il progettista non deve certamente trascurare questi aspetti:</p>
                <ul>
                    <li>come mantenere costantemente l'attenzione dell'utente sugli elementi desiderati dell'interfaccia</li>
                    <li>come evitare interferenze indesiderate, che sottraggano l'attenzione dell'utente da tali elementi;</li>
                    <li>come ridurre al minimo le richieste di attenzione divisa poste dall'interfaccia.</li>
                </ul>

                <p className='post-text'>Un altro elemento da tenere in considerazione è la memoria dell'utente che può essere divisa in <i>memoria sensoriale</i>, <i>memoria a breve termine</i>, <i>memoria a lungo termine</i>. Questi tipi di memoria sono tra di loro collegate, e si può rappresentare in questo modo: </p>
                <div className='box-image'>
                    <img loading="lazy" decoding="async" src={Memorie} alt="Schema di rete ad accesso in forma ibrida" className='post-img3' title='Figura 1: vari tipi di memoria.'/>
                    <p className='image-capture'>Figura 1: Vari tipi di memorie</p>
                </div>
                <p className='post-text'>Come si può evincere, quando arriva un <i>input sensoriale</i>, i suoi dati vengono elaborati dapprima dalla memoria sensoriale, la quale li registra temporaneamente, li seleziona e li carica nella memoria a breve termine. Quest'ultima è la memoria dedicata alle elaborazioni mentali, anche se le informazioni vengono memorizzate per un periodo di tempo molto breve, in quanto 
                servono a supportare i processi cognitivi in atto, prima di trasferirli definitivamente nella memoria a lungo termine. Una unità di misura della memoria a breve termine è detta chunk, e ogni <i>STM</i>, ovvero <strong>short time memory</strong>, riesce a memorizzare 7<Latex>{piuomeno}</Latex>2. Questo è stato quantificato dallo studioso Miller, il quale ha definito un chunk come un raggruppamento di elementi che trattiamo 
                in modo unitario. Questo aspetto deve essere considerato dal progettista che dovrà facilitare il chunking, facendo memorizzare all'utente solo elementi che abbiano significato, e deve minimizzare le richieste di memorizzazione. Per quanto riguarda la memoria a lungo termine, il progetista deve riuscire a trovare il miglior modo possibile per poter codificare e recuperare le informazioni in essa.</p>

                <p className='post-text'> Un altro aspetto dell'utente che il progettista deve tenere in considerazione è la vista, il cui sguardo segue percorsi irregolari, dettati a volte dalla disposizione degli oggetti su cui cade l'attenzione. In questa situazione è sufficiente utilizzare alcune tecniche di eye-tracking, ovvero tecniche attraverso le quali si cerca di seguire la direzione dello sguardo, andando successivamente
                 ad analizzarla e a distribuire in maniera ottimale gli oggetti. Vi sono diverse componenti dell'occhio che entrano in gioco e che vanno esaminate, ad esempio l'asse visivo o banamelmente i fotorecettori. Quest'ultimi fanno in modo che noi distinguiamo meglio i dettagli e i colori degli oggetti quando vengono fissati direttamente. Si distingue tra <strong>visione foveale</strong>, quando il centro dell'asse visivo guarda un
                 determinato oggetto, o di <strong>visione periferica</strong>, quando lo vediamo con la "coda dell'occhio". Inoltre, un elemento da non sottovalutare, è <strong>l'acuità visiva</strong>, o <i>visual acuity</i>, ovvero la capacità dell'occhio di distinguere due punti vicini. Questa proprietà è diversa da individuo a individuo e diminuisce con l'età.</p>

                <p className='post-text'>Oltre all'acuità visiva, un individuo differisce dall'altro anche per la capacità di distinguere correttamente i colori, il cui compito è affidato alla retina dell'occhio. I tre coni principali che vengono captati sono il <i>Red</i> (R), il <i>Blue</i> (B)  e il <i>Green</i> (G). In alcuni soggetti la visione di uno di questi coni è difettosa, mancante o alterata. Questo fenomeno prende
                 il nome di <strong>cecità cromatica</strong>, detto comunemente <i>daltonismo</i>. Quindi il progettista deve considerare anche tutte quelle patologie che possono creare una bariera tra l'utente e il sistema, cercando di risolverle attraverso opportune tecnologie.</p>

                 <p className='post-text'>Un'altra caratteristica dell'utente è il suo sistema motorio interessato in alcuni schemi motori che l'utente deve apprendere per interagire con il sistema. Il primo schema motorio è il coordinamento dell'occhio e della mano che interessa l'utilizzo di alcuni sistemi di manipolazione tra cui il mouse. Quando il progettista inserisce uno schema motorio particolare, deve permettere ad ogni utente di poterlo 
                    imparare, anche attraverso particolari strumenti che aiutano ad abbattere tutte quelle bariere che si creano nel caso in cui ci sia un difetto. L'apprendimento motorio di un utente procede per gradi, eseguendo i movimenti iniziali in maniera incerta, approssimata e commettendo errori; mentre con il passare del tempo l'utente acquisisce esperienza e migliora la sua interazione motoria con il sistema. Si deduce 
                    che il tempo necessario per compiere un compito si riduce con la pratica, secondo una legge di potenza definita <strong>legge di potenza della pratica</strong> <i>(Power Law of Practice)</i>. Definendo <Latex>{tUnnno}</Latex> come tempo impiegato per eseguire la prima prova, <Latex>{tN}</Latex> come il tempo impiegato per effettuare l'n-esima prova e <Latex>{alfa}</Latex> una costante per dipendente dal tipo di 
                    compito il cui valore è tipicamente nell'intervallo 0.2-0.6, si ha la seguente formula: <Latex>{formula}</Latex>. La rappresentazione grafica di questa funzione rappresenta la <i>curva di apprendimento media</i>, o definita meglio come <strong>learning curve</strong>, relativa al compito che si sta studiando. Quanto più velocemente questa curva si avvicina alle ascisse, più facilmente l'utente imparerà il compito.
                 </p>

                 <p className='post-text'>
                    Un'altra legge molto importante è la <strong>Legge di Fitts</strong>, la quale mette in relazione il sistema con l'azione più frequente che l'utente possa fare, ovvero l'azione di spostare il dito sul bersaglio. Definendo <i>T</i> come il tempo medio per effettuare il movimento, <i>D</i> come la distanza tra il punto di partenza e il centro del bersaglio, <i>S</i> come la dimensione del bersaglio misurata lungo l'asse del 
                    movimento, <i>a</i> e <i>b</i> definiti come costanti dipendenti dallo strumento di puntamento utilizzato, a indica in particolare il tempo necessario per metter il movimento/fermare il dispositivo, si ha la seguente formula: <Latex>{formula2}</Latex> . Questa legge può essere applicata in svariate situazioni per modellare azioni point and click o di drag and drop con differenti dispositivi di puntamento. La si può applicare 
                    solo ai mivmenti lungo una sola dimensione e in condizioni normali. Un accorgimento che questa legge ci porta a considerare è l'applicazione di menù pop-up che appaiono accanto al puntatore, in sostituzione dei menù a tendina.

                 </p>
               </section>
        </article>
        <Footer/>
    </div>
  )
}

export default IUM3