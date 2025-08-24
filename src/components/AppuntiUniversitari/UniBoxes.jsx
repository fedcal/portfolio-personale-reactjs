import React from 'react';
import './UniBoxes.css';
import {Link} from "react-router-dom";
import LogoRDC from '../assets/rdc_500.webp';
import LogoLibri from '../assets/libri_500.webp';
import LogoIum from '../assets/ium_500.webp';
import LogoIcon from '../assets/icon_500.webp';
import LogoStudyCase from '../assets/caseStudy_500.webp';
import LogoCC from '../assets/cc_500.webp';
import LatexImg from '../assets/LaTeX_logo.webp';


function UniBoxes() {
    return (
        <div className='container' >
            <p className='area-description'>All'interno di questa sezione, ho raccolto con cura la trascrizione dettagliata dei miei appunti universitari relativi al mio percorso nel corso di Informatica presso l'Università Aldo Moro di Bari. La mia speranza è che questi appunti possano rivelarsi un'ancora di salvezza per tutti voi studenti universitari, e anche per coloro che stanno facendo i primi passi in questo affascinante campo.</p>
            <div className='post-filter container' >
                <span className='filter-item active-filter' data-filter='all'>Tutti</span>
                <span className='filter-item' data-filter='icon'>Ingegneria della conoscenza</span>
                <span className='filter-item' data-filter='calc'>Calcolabilità e complessità</span>
                <span className='filter-item' data-filter='ium'>Interazione Uomo Macchina</span>
                <span className='filter-item' data-filter='rdc'>Reti di Calcolatori</span>
                 {/*<span className='filter-item' data-filter='casestudy'>Case Study</span>
                <span className='filter-item' data-filter='altro'>Altro</span>*/}
            </div>
            <section className='post container'>

                {/*<article  itemScope  itemType="https://schema.org/Article" className='post-box uni all'>
                  *  <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                  * <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                  * <h3 className='category'>Ingegneria della conoscenza</h3>
                  *  <h1 className='post-title'itemProp="headline">17. Dimostrazione per contraddizione</h1>
                  *  <div className='post-subtitle'><time dateTime="2023-07-21" className='post-date' temprop="datePublished" content="2023-07-21T08:00:00+08:00"> 21 Luglio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                  *  <p className='post-description' itemProp='description'>Le clausole definite all'interno della base di conoscenza possono essere utilizzate in una dimostrazione per assurdo consentendo regole che definiscono delle contraddizioni, utili all'interno del sistema. Approfondiamo questo concetto in questo articolo.</p>
                  *  <div className='link'>
                  *      <Link to="/Dimostrazione-per-contraddizione" className="btn">Leggi Post</Link>
                  *  </div>
    </article>*/}

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">16. Problemi di rappresentazione della conoscenza</h1>
                    <div className='post-subtitle'> <time dateTime="2023-04-13" className='post-date' temprop="datePublished" content="2023-04-13T08:00:00+08:00"> 13 Aprile 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo andiamo ad analizzare i problemi relativi alla rappresentazione della conoscenza, andando dapprima a definire un background per poi seguire con le domande all'utente, la presentazione della base di conoscenza e il suo debugging.</p>
                    <div className='link'>
                        <Link to="/Problemi-di-rappresentazione-della-conoscenza" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">15. Clausole e vincoli proposizionali</h1>
                    <div className='post-subtitle'> <time dateTime="2023-04-05" className='post-date' temprop="datePublished" content="2023-04-05T08:00:00+08:00"> 05 Aprile 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.</p>
                    <div className='link'>
                        <Link to="/Clausole-e-vincoli-proposizionali" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">14. Introduzione alle proposizioni</h1>
                    <div className='post-subtitle'> <time dateTime="2023-03-29" className='post-date' temprop="datePublished" content="2023-03-29T08:00:00+08:00"> 29 Marzo 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Oltre alla base di conoscenza, un'agente ha a sua disposizione un insieme di proposizioni e inferenze tramite le quali decide cosa è vero e cosa no nel mondo.</p>
                    <div className='link'>
                        <Link to="/Introduzione-alle-proposizioni" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">13. Metodi basati sulla popolazione e ottimizzazione</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-18" className='post-date' temprop="datePublished" content="2023-02-18T08:00:00+08:00"> 18 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Analizziamo gli algoritmi di ragionamento con i vincoli che si basano principalmente sulla popolazione e affrontiamo il tema dell'ottimizazione.</p>
                    <div className='link'>
                        <Link to="/Metodi-basati-sulla-popolazione-e-ottimizzazione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">12. Ragionamento con vincoli PT. 3</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-18" className='post-date' temprop="datePublished" content="2023-02-18T08:00:00+08:00"> 18 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Affrontiamo le diverse varianti di ricerca locale precdentemente affrontate, per poi dare uno sguardo alla valutazione degli algoritmi randomizzati e infine vedremo come ottimizzare gli algoritmi che ragionano con vincoli.</p>
                    <div className='link'>
                        <Link to="/Ragionamento-con-vincoli-parte-3" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">11. Ragionamento con vincoli PT. 2</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-12" className='post-date' temprop="datePublished" content="2023-02-12T08:00:00+08:00"> 12 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo secondo articolo relativo al ragionamento con vincoli, analizzeremo la divisione del domino, l'eliminazione delle variabili e un algoritmo di ricerca locale.</p>
                    <div className='link'>
                        <Link to="/Ragionamento-con-vincoli-parte-2" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">10. Ragionamento con vincoli PT. 1</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-11" className='post-date' temprop="datePublished" content="2023-02-11T08:00:00+08:00"> 11 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo primo articolo articolo vedremo come basare il ragionamento di un agente sulle caratteristiche e sui vincoli del dominio, analizzando l'algoritmo di consistenza.</p>
                    <div className='link'>
                        <Link to="/Ragionamento-con-vincoli-parte-1" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">9. Eliminare lo spazio di ricerca</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-07" className='post-date' temprop="datePublished" content="2023-02-07T08:00:00+08:00"> 07 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Abbiamo visto fin'ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.</p>
                    <div className='link'>
                        <Link to="/Eliminare-lo-spazio-di-ricerca" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">8. La ricerca euristica</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-05" className='post-date' temprop="datePublished" content="2023-02-05T08:00:00+08:00"> 05 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> A differenza del precedente articolo in cui abbiamo visto diversi tipi di ricerca non informata, in questo articolo vedremo come alcuni algoritmi elaborano i percorsi in base alle informazioni sui nodi e sugli archi in loro possesso.</p>
                    <div className='link'>
                        <Link to="/La-ricerca-euristica" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">7. Strategie di ricerca non informate</h1>
                    <div className='post-subtitle'> <time dateTime="2023-02-04" className='post-date' temprop="datePublished" content="2023-02-04T08:00:00+08:00"> 04 Febbraio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> A differenza del precedente articolo nel quale abbiamo analizzato un algoritmo di ricerca generico, in questo articolo affrontiamo alcune strategie di ricerca non informate. Ma cos'è una strategia di ricerca?</p>
                    <div className='link'>
                        <Link to="/Strategie-di-ricerca-non-informate" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">6. Introduzione alla ricerca: un algoritmo di ricerca generico</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-31" className='post-date' temprop="datePublished" content="2023-01-31T08:00:00+08:00"> 31 Gennaio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Nell'articolo precedente abbiamo parlato del problema di ricerca sfruttando la struttura del grafo, e in particolare quella dell'albero, tramite il quale possiamo trovare il percorso da un nodo di partenza a uno finale. In questo articolo ci concentriamo sull'algoritmo di ricerca generica.</p>
                    <div className='link'>
                        <Link to="/Introduzione-alla-ricerca:-un-algoritmo-di-ricerca-generico" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">5. Ricerca di soluzioni</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-28" className='post-date' temprop="datePublished" content="2023-01-28T08:00:00+08:00"> 28 Gennaio 2023</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Dopo aver visto negli articoli precedenti come un agente percepisce e agisce nel mondo, adesso cerchiamo di comprendere come i suoi obiettivi influenzano le sue azioni. Infatti un agente, per essere definito intelligente, deve saper ragionare sulle sue capacità e sui suoi obiettivi per determinare cosa fare.</p>
                    <div className='link'>
                        <Link to="/Ricerca-di-soluzioni" className="btn">Leggi Post</Link>
                    </div>
                </article> 

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">11. Complessità di spazio</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-26" className='post-date' temprop="datePublished" content="2023-01-26T08:00:00+08:00"> 26 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Nel precedente articolo abbiamo valutato la complessità dei problemi computazionali in termini temporali, in questo articolo ne valutiamo la complessità in termini di spazio e di memoria. Tempo e spazio sono due fattori importanti quando bisogna cercare la soluzione ai problemi computazionali.</p>
                    <div className='link'>
                        <Link to="/Complessità-di-spazio" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">10. Complessità temporale</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-25" className='post-date' temprop="datePublished" content="2023-01-25T08:00:00+08:00"> 25 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo parleremo della complessità temporale partendo dalle sue basi. Anche se un problema risulta decidibile, questo può anche non essere risolvibile a causa di una quantità di tempo o di memoria impiegati nella sua risoluzione.</p>
                    <div className='link'>
                        <Link to="/Complessità-temporale" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">9. Riducibilità Pt. 2</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-24" className='post-date' temprop="datePublished" content="2023-01-24T08:00:00+08:00"> 24 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questa seconda parte dedicata alla riducibilità parliamo del problema della corrispondenza di Post e della riducibilità mediante funzione.</p>
                    <div className='link'>
                        <Link to="/Riducibilità-Pt-2" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">8. Riducibilità Pt. 1</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-24" className='post-date' temprop="datePublished" content="2023-01-24T08:00:00+08:00"> 24 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo introduciamo un altro metodo per dimostrare che un problema non è computazionalmente irrisolvibile, un metodo che comunemente viene chiamato riducibilità.</p>
                    <div className='link'>
                        <Link to="/Riducibilità-Pt-1" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">7. Decidibilità e indecibilità</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-21" className='post-date' temprop="datePublished" content="2023-01-21T08:00:00+08:00"> 21 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo trattiamo l'argomento della decidibilità. Non tutti i problemi possono essere risolti, vedremo quindi un modo per dimostrare la loro dedicibilità.</p>
                    <div className='link'>
                        <Link to="/Dedicibilità-e-indecidibilità" className="btn">Leggi Post</Link>
                    </div>
                </article>
                
                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">6. Le macchine di Turing</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-19" className='post-date' temprop="datePublished" content="2023-01-19T08:00:00+08:00"> 19 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo ci concentreremo sulle macchine di Turing, il cui potenziale viene sfruttato nella teoria della computabilità, a differenza degli automi e delle grammatiche viste negli articoli precedenti.</p>
                    <div className='link'>
                        <Link to="/Le-macchine-di-Turing" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">5. Linguaggi non context-free e linguaggi context-free deterministici</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-19" className='post-date' temprop="datePublished" content="2023-01-19T08:00:00+08:00"> 19 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo ci concentreremo su un'altra tipologia, le grammatiche context-free, le quali riconoscono i relativi linguaggi context-free,  attraverso una struttura ricorsiva. Successivamente tratteremo anche degli automi a pila, i quali hanno la stessa potenza delle CFG</p>
                    <div className='link'>
                        <Link to="/Linguaggi-non-context-free-e-linguaggi-context-free-deterministici" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">4. Linguaggi context-free e automi a pila</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-18" className='post-date' temprop="datePublished" content="2023-01-18T08:00:00+08:00"> 18 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo ci concentreremo su un'altra tipologia, le grammatiche context-free, le quali riconoscono i relativi linguaggi context-free,  attraverso una struttura ricorsiva. Successivamente tratteremo anche degli automi a pila, i quali hanno la stessa potenza delle CFG</p>
                    <div className='link'>
                        <Link to="/Linguaggi-context-free-e-automi-a-pila" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box altro all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LatexImg} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Altro</h3>
                    <h1 className='post-title' itemProp="headline">Latex: simboli e sintassi</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-16" className='post-date' temprop="datePublished" content="2023-01-16T08:00:00+08:00"> 16 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'>Questo articolo nasce dall'esigenza di avere una tabella di simboli matematici e corrispettivi comandi in Latex da poter copiare e incolalre velocemente.</p>
                    <div className='link'>
                        <Link to="/Latex-Comandi-e-simboli-matematici" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">3. Espressioni regolari e Linguaggi non regolari</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-16" className='post-date' temprop="datePublished" content="2023-01-16T08:00:00+08:00"> 16 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Dopo aver introdotto gli automi NFA e DFA, introduciamo in questoa articolo le espressioni regolari e i linguaggi non regolari, analizzando i relativi teoremi.</p>
                    <div className='link'>
                        <Link to="/Espressioni-regolari-e-linguaggi-non-regolari" className="btn">Leggi Post</Link>
                    </div>
                </article>
            
                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">2. Automi e linguaggi regolari</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-14" className='post-date' temprop="datePublished" content="2023-01-14T08:00:00+08:00"> 14 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Introduciamo gli elementi alla base della teoria della computazione quali ad esempio gli automi finiti e i linguaggi regolari. </p>
                    <div className='link'>
                        <Link to="/Automi-e-linguaggi-regolari" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box calc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">1. Introduzione alla calcolabilità e alla complessità</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-10" className='post-date' temprop="datePublished" content="2023-01-10T08:00:00+08:00"> 10 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo introdurremo la materia della Calcolabilità e Complessità, dando una prima definizione delle teorie principali e definendo la terminologia e la notazione matematica che utilizzeremo per trattare questa materia. </p>
                    <div className='link'>
                        <Link to="/Introduzione-alla-Calcolabilita-e-Complessita" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">4. Controlli e azioni di un agente</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-07" className='post-date' temprop="datePublished" content="2023-01-07T08:00:00+08:00"> 7 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo andiamo a vedere nello specfico la logica del corpo di un agente, daremo un'occhiata alla sua architettura e come agisce, ovvero come usa le regole definite nel precedente articolo all'interno del suo ragionamento.</p>
                    <div className='link'>
                        <Link to="/Controlli-e-azioni-di-un-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">3. All'interno di un agente: architettura e le funzioni agenti</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-03"className='post-date' temprop="datePublished" content="2023-01-03T08:00:00+08:00"> 3 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Dopo aver spiegato lo spazio di progettazione di un agente, andiamo a comprendere la sua architettura, ovvero come come un agente intelligente può percepire, ragionare e agire nel tempo in 
                    un ambiente. Andremo ad ispezionare la gerarchia all'interno di un agente e i modi in cui esso può essere costruito.</p>
                    <div className='link'>
                        <Link to="/All-interno-di-un-agente-architettura-e-le-funzioni-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title' itemProp="headline">2. Spazio di progettazione e applicazioni prototipiche</h1>
                    <div className='post-subtitle'> <time dateTime="2023-01-01"className='post-date' temprop="datePublished" content="2023-01-01T08:00:00+08:00"> 1 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l'intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.</p>
                    <div className='link'>
                        <Link to="/Spazio-di-progettazione-di-un-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box icon all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemProp="headline">1. Intelligenza artificiale e agenti</h1>
                    <div className='post-subtitle'> <time dateTime="2022-12-30" className='post-date' temprop="datePublished" content="2022-12-30T08:00:00+08:00"> 30 Dicembre 2022</time>  <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Introduzione all'ingegneria della conoscenza, andando a definire che cos'è l'intelligenza artificiale, gli agenti e l'ambiente in cui essi operano. Vedremo i vari algoritmi che vengono applicati in questo settore, 
                     in quali casi e le varie metodologie di ricerca della soluzione.</p>
                    <div className='link'>
                        <Link to="/Introduzione-ingegneria-della-conoscenza" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box ium all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/ium_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img'title='interazione uomo macchina'/>
                    <h3 className='category'>Interazione Uomo Macchina</h3>
                    <h1 className='post-title' itemProp="headline">3. Conoscere l'utente</h1>
                    <div className='post-subtitle'> <time dateTime="2022-12-17" className='post-date' temprop="datePublished" content="2022-12-17T08:00:00+08:00"> 17 Dicembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> All'interno dello sviluppo incentrato sull'utente, possiamo visualizzare l'utente da molteplici punti di vista. E' fondamentale analizzare i processi cognitivi, le caratteristiche personali e il 
                    ruolo dei singoli utenti che interagiscono con il sistema. Il progettista di sistemi interattivi non deve perdere di vista questi obiettivi, vediamo come.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Conoscere-l-utente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box casestudy all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/caseStudy_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoStudyCase} alt="Logo riferito ai post dello study case" className='post-img'title='study case'/>
                    <h3 className='category'>Case Study - Gestionale Associativo</h3>
                    <h1 className='post-title'itemProp="headline">2. Diagramma Entità Relazione</h1>
                    <div className='post-subtitle'> <time dateTime="2022-12-11" className='post-date' temprop="datePublished" content="2022-12-11T08:00:00+08:00"> 11 Dicembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> In relazione al caso di studio del gestionale associativo, in questo articolo entriamo nel dettaglio di uno schema entità relazione delle entità e delle relazioni che dovranno
                     essere implementate all'interno del database e che rappresentano una prima fotografia di com'è organizzata l'associazione in questa fase.</p>
                    <div className='link'>
                        <Link to="/Gestionale-associazione-diagramma-entita-relazione" className="btn">Leggi Post</Link>
                    </div>
                </article>
                
                <article  itemScope  itemType="https://schema.org/Article" className='post-box casestudy all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/caseStudy_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoStudyCase} alt="Logo riferito ai post dello study case" className='post-img'title='study case'/>
                    <h3 className='category'>Case Study - Gestionale Associativo</h3>
                    <h1 className='post-title'itemProp="headline">1. Introduzione allo sviluppo del gestionale associativo</h1>
                    <div className='post-subtitle'> <time dateTime="2022-12-04" className='post-date' temprop="datePublished" content="2022-12-04T08:00:00+08:00"> 04 Dicembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Avviamo questo nuovo progetto per la creazione di un gestionale associativo. In questa prima fase analizziamo i requisiti richiesti e abbozziamo uno 
                     schema ER del database.</p>
                    <div className='link'>
                        <Link to="/Gestionale-associazione-intro" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box ium all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/ium_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img' title='interazione uomo macchina'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'itemProp="headline">2. Interazione Uomo Macchina - L'usabilità </h1>
                    <div className='post-subtitle'> <time dateTime="2022-12-01" className='post-date' temprop="datePublished" content="2022-12-01T08:00:00+08:00"> 01 Dicembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'> Dopo una breve overview della materia, descritta nel primo articolo, iniziamo ad approfondire i vari argomenti, iniziando dal concetto di <strong>usabilità</strong> e del modello di interazione, fino 
                    ad addentrarci nel golfo di esecuzione e nel golfo di valutazione.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box rdc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/RetiDiCalcolatori_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img' title='reti di calcolatori'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'itemProp="headline">2. I due tipi di commutazione </h1>
                    <div className='post-subtitle'> <time dateTime="2022-11-20" className='post-date' temprop="datePublished" content="2022-11-20T08:00:00+08:00"> 20 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'>Analizziamo come le applicazioni si scambiano i pacchetti, esaminando la commutazione di circuito e la commutazione di pacchetto. Confrontiamo i due tipi di commutazione ed esminiamo le varie problematiche di ciascuno </p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box ium all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/ium_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img'title='interazione uomo macchina'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'itemProp="headline">1. Introduzione all' Interazione Uomo Macchina </h1>
                    <div className='post-subtitle'> <time dateTime="2022-11-12" className='post-date'temprop="datePublished" content="2022-11-12T08:00:00+08:00"> 12 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'>Primo articolo dedicato agli appunti relativi alla materia Interazione Uomo Macchina, il cui studio si incentra sul ruolo dell'utente all'interno dello sviluppo del software, ponendo una nuova visione incentrata
                    sui suoi bisogni e necessità.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box altro all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/libri_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoLibri} alt="Logo riferito ai post dei libri consigliati" className='post-img' title='libri consigliati'/>
                    <h3 className='category'>Libri</h3>
                    <h1 className='post-title' itemProp="headline">Consigli su libri settoriali - Pt. 1 </h1>
                    <div className='post-subtitle'> <time dateTime="2022-11-05" className='post-date' temprop="datePublished" content="2022-11-05T08:00:00+08:00"> 5 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'>Primo articolo dedicato a consigli su libri settoriali per migliorare le proprie hard skills e soft skills legate al mondo della programmazione.</p>
                    <div className='link'>
                        <Link to="/Libri-consigliati-01" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box rrdc all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/RetiDiCalcolatori_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'title='reti di calcolatori'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title' itemProp="headline">1. Introduzione alle reti </h1>
                    <div className='post-subtitle'> <time dateTime="2022-11-01" className='post-date' temprop="datePublished" content="2022-11-01T08:00:00+08:00"> 1 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> </div>
                    <p className='post-description' itemProp='description'>Introduzione alle reti di calcolatori, fornendo un'immagine di come si è evoluta l'infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </article>

            </section>
        </div>
        
    )
}

export default UniBoxes