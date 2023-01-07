import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/Navbar';
import '../../../Articoli.css';
import HomeStdy from '../../caseStudy_1900.webp';
import erImg from './entita-relazione.webp';
import { Link } from 'react-router-dom';


function Er() {
  return (
    <div>
       <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 2. Diagramma Entità Relazione</title>
            <meta name='keywords' content='gestionale, gestionale associativo, java, javafx, sql, modello er, modello entità relazione, requisiti, fase implementativa, stack tecnologico, integrità, foreign key, primary key, int, varchar, relazione molti a molti, entità, logica di business, relazione '/>
            <meta name='description' content='In relazione al caso di studio del gestionale associativo, in questo articolo entriamo nel dettaglio di uno schema entità relazione delle entità e delle relazioni che dovranno
                     essere implementate all&#39;interno del database e che rappresentano una prima fotografia di com&#39;è organizzata l&#39;associazione in questa fase.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 2. Diagramma Entità Relazione'/>
            <meta name='og:description' content='In relazione al caso di studio del gestionale associativo, in questo articolo entriamo nel dettaglio di uno schema entità relazione delle entità e delle relazioni che dovranno
                     essere implementate all&#39;interno del database e che rappresentano una prima fotografia di com&#39;è organizzata l&#39;associazione in questa fase.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 2. Diagramma Entità Relazione"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev//Gestionale-associazione-diagramma-entita-relazione" />
       </Helmet>
       <Navbar/>
       <article itemscope itemType="https://schema.org/NewsArticle">

        <meta itemProp="image" content="https://www.federicocalo.dev/static/media/caseStudy_1900.webp" />


        <section className='post-header'>
            <div className='header-content post-container'>
                
                <img loading="lazy" decoding="async" src={HomeStdy} alt="Logo della pagina riferita allo study case" className='header-img' title='study case'/>
            </div>
        </section>
        <section className='post-content post-container'>
            <div className="prec-post">
                    <Link to="/Gestionale-associazione-intro"> &#8592; Post precendente</Link>
                </div>
            <h1 className='header-title' itemProp="headline">2. Diagramma Entità Relazione</h1>
            <span  itemProp="author" itemscope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time datetime="2022-12-11" className='data' itemProp="datePublished" content="2022-12-11T07:30:00+08:00">11/12/2022</time>
                            
            <p className='post-text first-text'>Come anticipato, in questo articolo entriamo in maniera approfondita nella questione relativa allo <strong>schema entità relazione (ER)</strong> sul quale si baserà l'implementazione del nostro database in cui si memorizzeranno i dati. La creazione dello <strong>strato di persistenza </strong>
             in un'applicazione  è un processo delicato, in quanto su di esso si baserà anche il codice per <i>il recupero delle informazioni</i> dalla base di dati e <i>la rappresentazione del dato</i> all'interno della memoria. Avere una corretta rappresentazione del dato sin dall'inizio, anche se si evolverà con il tempo, facilita le operazioni
             di implementazione della controparte all'interno del gestionale. Analizziamo lo schema che ho creato.</p>
            
            <div className='big-img'>
                <img src={erImg} alt="Schema di rete ad accesso in forma ibrida" title='Figura 1: Schema ER'/>
                <p className='image-capture'>Figura 1: Schema ER</p>
            </div>
            <p className='post-text'>L'entità principale da cui è partita la fase di analisi è l'entità <strong>socio</strong> composta dai seguenti campi:</p>
            
            <ul>
                <li><i>tessera</i>, rappresentato come intero all'interno del database e allo stesso tempo è la <strong>primary key</strong> della tabella, in quanto con questo valore si identifica univocamente il socio;</li>
                <li><i>data_iscrizione</i>, di tipo date all'interno del database, nel formato "yyyy-mm-dd", indica la data in cui il socio ha presentato la sua domanda;</li>
                <li><i>data_approvazione</i>, anch'esso di tipo date nel formato "yyyy-mm-dd", indica la data di approvazione da parte dell'assemblea associativa della richiesta di iscrizione del socio;</li>
                <li><i>cognome</i>, di tipo varchar, rappresentante il cognome del socio;</li>
                <li><i>nome</i>, di tipo varchar, rappresentante il nome del socio;</li>
                <li><i>nascita</i>, di tipo date nel formato "yyyy-mm-dd", rappresentante la data di nascita del socio;</li>
                <li><i>luogo_nascita</i>, di tipo varchar, rappresentante il luogo di nascita del socio;</li>
                <li><i>indirizzo</i>, campo strutturato per memorizzare l'indirizzo di residenza del socio. I campi che lo costituiscono sono la <i>città</i>,il <i>cap</i> e la <i>via</i>;</li>
                <li><i>ruolo</i>, di tipo int, questo campo rappresenta una foreign key che collega la tabella <strong>soci</strong> alla tabella <strong>ruoli</strong> attraverso la <strong>relazione stato</strong>;</li>
                <li><i>data_annullamento</i>, di tipo date nel formato "yyyy-mm-dd", indicante la data a partire dalla quale l'iscrizione del socio non è più attiva;</li>
                <li><i>note</i>, di tipo varchar, contenente alcune note che il direttivo può inserire in riferimento al socio;</li>
                <li><i>cellulare</i>, di tipo varchar, rappresentante il numero di cellulare del socio per eventuali contatti;</li>
                <li><i>consenso</i>, di tipo varchar per rappresentare il consenso al trattamento dei dati personali;</li>
                <li><i>minorenne</i>, di tipo varchar, indicante se il socio ha raggiunto la maggiore età.</li>
            </ul>
            <p className='post-text'>Alcune considerazioni personali sulla scelta implementativa di questa entità e sulle prossime. Ho scelto di utilizzare il tipo varchar per la maggior parte dei campi in quanto non verranno fatti molte
             trasformazioni su questi dati, eccetto per qualche operazione di inserimento e aggiornamento. Ho lasciato il tipo int per tutti quei campi che rappresentano un codice identificativo come <i>primary key</i> di quella entità/relazione
             oppure rappresentano una <i>foreign key</i>, indicante un collegamento con entità o relazioni esterne. Inoltre prima di schematizzare questa entià ho raccolto alcune <strong>business logic</strong> che hanno influenzato la sua realizzazione.
              I dati dei soci erano racchiusi in un folgio excel, quindi ho mantenuto la stessa tipologia di valori memorizzata, però consultandomi con gli altri membri, abbiamo deciso di aggiungere le colonne per il consenso e per indicare se un
               socio è minorenne, per facilitare la sua visualizzazione nel caso in cui si organizzano attività nelle quali è necessario sapere se un socio ha prestato o meno il consenso per l'utilizzo dei dati oppure se il socio e maggiorenne.</p>
            
            <p className='post-text'>Passiamo a documentare l'entità <i>ruolo</i> e la relazione <i>stato</i>. La prima memorizza tutti i vari tipi di ruoli presenti all'interno dell'associazione, mentre la relazione rappresenta un collegamento 
             tra l'entità socio e l'entità ruolo. Iniziamo dall'entità <i>ruolo</i>:</p>

            <ul>
                <li><i>id_ruolo</i>: identificativo del ruolo, è rappresentato come un intero;</li>
                <li><i>titolo</i>: nome del ruolo, memorizzato come un varchar;</li>
                <li><i>compito</i>: campo descrittivo di tipo varchar, contenente tutte le informazioni relative al ruolo, inclusi i suoi compiti che deve svolgere all'interno dell'associazione.</li>
            </ul>
            <p className='post-text'>Mentre la relazione <i>stato</i> presenta solo tre campi:</p>
            <ul>
                <li><i>id_stato</i>: id della relazione, di tipo int e primary key</li>
                <li><i>id_socio</i>: id del socio, di tipo int e collegato all'entità socio in quanto foreign key</li>
                <li><i>id_ruolo</i>: id del ruolo, di tipo int e colelgato all'entità ruolo in quanto foreign key</li>
            </ul>

            <p className='post-text'><strong>Business Logic:</strong> i ruoli all'interno dell'associazione sono descritti nello statuto. Attualmente sono: <i>socio</i>, <i>volontario</i>, <i>presidente</i>, <i>vicepresidente</i> e <i>due cariche vuote</i>. Gli 
            ultimi 4 tipi di ruoli fanno parte del direttivo dell'associazione. Non è stata rappresentata questa relazione in quanto è possibile ottenerla attraverso delle query all'interno del database. In questo caso tra l'entità socio e l'entità ruolo è stata 
            inserita una <strong>relazione molti a molti</strong> in quanto un socio può ricoprire più ruoli e un ruolo può essere ricoperto da più soci. Questo ragionamento non fa riferimento solo alle cariche del direttivo, in quanto per poterci accedere devono essere implicitamente dei soci,
             ma anche perchè il presidente e il vicepresidente possono incaricare altri soci di ruoli, la cui necessità nasce solo in determinati momenti e non è possibile prevederla in anticipo.</p>
            
            <p className='post-text'> Descriviamo ora la sezione eventi, con i relativi costi e ricavi, e come questa si relazione con l'entità soci. Iniziamo descrivendo l'entità <i>evento</i>, la quale rappresenta la seconda parte più importante dell'associazione.
             L'entità è molto semplice, ma la logica di business che orchestra questa sezione è molto articolata, e se non gestita correttamente potrebbe portare a complicazioni a livello implementativo. L'entità evento quindi possiede solo tre attributi:</p>
            <ul>
                <li><i>id_evento</i>: primary key di tipo int, rappresentate il codice univoco dell'evento</li>
                <li><i>nome</i>: nome dell'evento o del format di eventi che l'associazione organizza, viene rappresentato come varchar</li>
                <li><i>descrizione</i>: descrizione dell'evento, memorizzato come varchar</li>
            </ul>
            <p className='post-text'>Ho voluto escludere da questa entità il campo data, in quanto ho ritenuto più opportuno memorizzarlo nell'entità <i>evento_creato</i>, che racchiuderà tutti gli eventi creati. E' stata impostata una <strong>relazione molti a molti</strong>, in quanto 
             in un giorno possono essere effettuati più eventi e un evento può svolgersi in più giorni. Ero combattuto se convertire l'entità evento_creato in una relazione, ma non vi erano altre entità coinvolte. Mentre non avevo dubbi per la relazione <i>partecipazione</i>, che collega
             l'entità <i>socio</i> con l'entità <i>evento_creato</i>, in quanto vi era una <strong>relazione molti a molti</strong>: un socio poteva partecipare alla creazione di più eventi e a un evento possono partecipare più eventi. Esplicitiamo i campi di questa relazione: </p>
             
            <ul>
                <li><i>id_partecipazione</i>: primary key che identifica la partecipazione, è memorizzata come int;</li>
                <li><i>id_creato</i>: foreign key, memorizzata come int e che si riferisce all'evento creato o che si sta creando;</li>
                <li><i>id_socio</i>: foreign key memorizzata come int e che si riferisce al socio che ha partecipato alla creazione dell'evento;</li>
                <li><i>gruppo</i>: campo di tipo varchar che rappresenta il gruppo di appartenenza del socio durante l'organizzazione dell'evento. </li>
            </ul>
            
            <p className='post-text'>Per questa relazione, l'unica <strong>logica di business</strong> che mi ha spinto ad aggiungere il campo gruppo come attributo e non come entità, è stata dettata dal fatto dell'assenza di gruppi di lavoro definiti.
             Ciò non toglie che in un aggiornamento futuro, l'attributo gruppo venga trasformato in un'entità.</p>
            
            <p className='post-text'>Vorrei concludere questo articolo analizzando le entità <i>costo_evento</i> e <i>entità_evento</i>, rimandando le altre al prossimo articolo. Introduciamo la <strong>logica di business</strong> alla base di queste due entità. Anche se l'associazione 
             <a className='link'href="https://www.instagram.com/onstageaps/"target='_blank'rel="noopener noreferrer" aria-label="ONstage page"> ONstage</a> è un'associazione no profit, deve tenere traccia delle spese e dei costi relativi agli eventi e alla gestione generale dell'associazione, questo è il motivo principale della presenza di queste entità che hanno una natura di tipo <strong>"economico"</strong>.
             I campi relativi all'entità costo_eventi: </p>

            <ul>
                <li><i>id_costo</i>: primary key di tipo int che identifica univocamente la transazione del costo;</li>
                <li><i>id_evento_creato</i>:foreign key di tipo inti che identifica l'evento a cui fa riferimento il costo;</li>
                <li><i>data</i>: data riferita al momento in cui il costo è stato sostenuto, è memorizzata come tipo date nel formato "yyyy-mm-dd"</li>
                <li><i>descrizione</i>: descrizione del costo, memorizzato come varchar</li>
                <li><i>costo</i>: valorizzato come tipo float all'interno del database e rappresentante l'effettivo costo sostenuto</li>
                <li><i>id_fattura</i>: foreign key relativa alla relativa fattura del costo, è memorizzato come int; </li>
                <li><i>id_scontrino</i>: foreign key relativa al relativo scontrino, è memorizzato come int.</li>

            </ul>
            <p className='post-text'>Gli attributi id_fattura e id_scontrino possono essere anche valorizzati con 'Null', in quanto la valorizzazione di uno esclude la valorizzazione dell'altro. Seguendo questa logica, analizziamo anche l'entità <i>entrate_evento</i>, formata dai seguenti attributi:</p>
            <ul>
                <li><i>id_entrata</i>: primary key di tipo int che identifica univocamente la transazione dell'entrata;</li>
                <li><i>id_evento_creato</i>:foreign key di tipo inti che identifica l'evento a cui fa riferimento l'entrata;</li>
                <li><i>data</i>: data riferita al momento in cui l'entrata è stata riscossa, è memorizzata come tipo date nel formato "yyyy-mm-dd"</li>
                <li><i>descrizione</i>: descrizione dell'entrata, memorizzato come varchar</li>
                <li><i>entrata</i>: valorizzato come tipo float all'interno del database e rappresentante l'effettiva entrata riscossa</li>
                <li><i>id_fattura</i>: foreign key relativa alla relativa fattura emessa, è memorizzato come int; </li>
                <li><i>id_scontrino</i>: foreign key relativa al relativo scontrino emesso, è memorizzato come int.</li>
            </ul>

            <p className='post-text'>Per non annoiarvi, la descrizione delle altre entità e relazioni che sono rimaste verrà effettuata nel prossimo articolo. Rimanete aggiornati per i futuri progressi e le future novità.</p>

            </section>
        </article>
       <Footer/>
    </div>
  )
}

export default Er