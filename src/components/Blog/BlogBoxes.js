import React from 'react';
import './BlogBoxes.css';
import {Link} from "react-router-dom";
import LogoRDC from '../assets/RetiDiCalcolatori_500.webp';
import LogoLibri from '../assets/libri_500.webp';
import LogoIum from '../assets/ium_500.webp';
import LogoIcon from '../assets/icon_500.webp';
import LogoStudyCase from '../assets/caseStudy_500.webp';
import LogoCC from '../assets/cc_500.webp';


function BlogBoxes() {
    return (
        <div className='container' itemscope  itemtype="https://schema.org/HowTo">
            <div className='post-filter container' >
                <span className='filter-item active-filter' data-filter='all'>Tutti</span>
                <span className='filter-item' data-filter='uni'>Appunti Università</span>
                <span className='filter-item' data-filter='libri'>Libri</span>
                <span className='filter-item' data-filter='casestudy'>Case Study</span>
            </div>
            <section className='post container'>
            
                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemprop="headline">1. Introduzione alla calcolabilità e alla complessità</h1>
                    <time datetime="2023-01-10" className='post-date' temprop="datePublished" content="2023-01-10T08:00:00+08:00"> 10 Gennaio 2023</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> In questo articolo introdurremo la materia della Calcolabilità e Complessità, dando una prima definizione delle teorie principali e definendo la terminologia e la notazione matematica che utilizzeremo per trattare questa materia. </p>
                    <div className='link'>
                        <Link to="/Introduzione-alla-Calcolabilita-e-Complessita" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Ingegneria della conoscenza</h3>
                    <h1 className='post-title'itemprop="headline">4. Controlli e azioni di un agente</h1>
                    <time datetime="2023-01-07" className='post-date' temprop="datePublished" content="2023-01-07T08:00:00+08:00"> 7 Gennaio 2023</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> In questo articolo andiamo a vedere nello specfico la logica del corpo di un agente, daremo un'occhiata alla sua architettura e come agisce, ovvero come usa le regole definite nel precedente articolo all'interno del suo ragionamento.</p>
                    <div className='link'>
                        <Link to="/Controlli-e-azioni-di-un-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Ingegneria della conoscenza</h3>
                    <h1 className='post-title'>3. All'interno di un agente: architettura e le funzioni agenti</h1>
                    <time datetime="2023-01-03"className='post-date' temprop="datePublished" content="2023-01-03T08:00:00+08:00"> 3 Gennaio 2023</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> Dopo aver spiegato lo spazio di progettazione di un agente, andiamo a comprendere la sua architettura, ovvero come come un agente intelligente può percepire, ragionare e agire nel tempo in 
                    un ambiente. Andremo ad ispezionare la gerarchia all'interno di un agente e i modi in cui esso può essere costruito.</p>
                    <div className='link'>
                        <Link to="/All-interno-di-un-agente:-architettura-e-le-funzioni-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Ingegneria della conoscenza</h3>
                    <h1 className='post-title'>2. Spazio di progettazione e applicazioni prototipiche</h1>
                    <time datetime="2023-01-01"className='post-date' temprop="datePublished" content="2023-01-01T08:00:00+08:00"> 1 Gennaio 2023</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l'intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.</p>
                    <div className='link'>
                        <Link to="/Spazio-di-progettazione-di-un-agente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIcon} alt="Logo riferito ai post della materia ingnegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Ingegneria della conoscenza</h3>
                    <h1 className='post-title'>1. Intelligenza artificiale e agenti</h1>
                    <time datetime="2022-12-30" className='post-date' temprop="datePublished" content="2022-12-30T08:00:00+08:00"> 30 Dicembre 2022</time>  <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> Introduzione all'ingegneria della conoscenza, andando a definire che cos'è l'intelligenza artificiale, gli agenti e l'ambiente in cui essi operano. Vedremo i vari algoritmi che vengono applicati in questo settore, 
                     in quali casi e le varie metodologie di ricerca della soluzione.</p>
                    <div className='link'>
                        <Link to="/Introduzione-ingegneria-della-conoscenza" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img'title='interazione uomo macchina'/>
                    <h3 className='category'>Appunti Università - Interazione Uomo Macchina</h3>
                    <h1 className='post-title'>3. Conoscere l'utente</h1>
                    <time datetime="2022-12-17" className='post-date' temprop="datePublished" content="2022-12-17T08:00:00+08:00"> 17 Dicembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> All'interno dello sviluppo incentrato sull'utente, possiamo visualizzare l'utente da molteplici punti di vista. E' fondamentale analizzare i processi cognitivi, le caratteristiche personali e il 
                    ruolo dei singoli utenti che interagiscono con il sistema. Il progettista di sistemi interattivi non deve perdere di vista questi obiettivi, vediamo come.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Conoscere-l-utente" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box casestudy all'>
                    <img loading="lazy" decoding="async" src={LogoStudyCase} alt="Logo riferito ai post dello study case" className='post-img'title='study case'/>
                    <h3 className='category'>Case Study - Gestionale Associativo</h3>
                    <h1 className='post-title'>2. Diagramma Entità Relazione</h1>
                    <time datetime="2022-12-11" className='post-date' temprop="datePublished" content="2022-12-11T08:00:00+08:00"> 11 Dicembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> In relazione al caso di studio del gestionale associativo, in questo articolo entriamo nel dettaglio di uno schema entità relazione delle entità e delle relazioni che dovranno
                     essere implementate all'interno del database e che rappresentano una prima fotografia di com'è organizzata l'associazione in questa fase.</p>
                    <div className='link'>
                        <Link to="/Gestionale-associazione-diagramma-entita-relazione" className="btn">Leggi Post</Link>
                    </div>
                </article>
                
                <article className='post-box casestudy all'>
                    <img loading="lazy" decoding="async" src={LogoStudyCase} alt="Logo riferito ai post dello study case" className='post-img'title='study case'/>
                    <h3 className='category'>Case Study - Gestionale Associativo</h3>
                    <h1 className='post-title'>1. Introduzione allo sviluppo del gestionale associativo</h1>
                    <time datetime="2022-12-04" className='post-date' temprop="datePublished" content="2022-12-04T08:00:00+08:00"> 04 Dicembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> Avviamo questo nuovo progetto per la creazione di un gestionale associativo. In questa prima fase analizziamo i requisiti richiesti e abbozziamo uno 
                     schema ER del database.</p>
                    <div className='link'>
                        <Link to="/Gestionale-associazione-intro" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img' title='interazione uomo macchina'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'>2. Interazione Uomo Macchina - L'usabilità </h1>
                    <time datetime="2022-12-01" className='post-date' temprop="datePublished" content="2022-12-01T08:00:00+08:00"> 01 Dicembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'> Dopo una breve overview della materia, descritta nel primo articolo, iniziamo ad approfondire i vari argomenti, iniziando dal concetto di <strong>usabilità</strong> e del modello di interazione, fino 
                    ad addentrarci nel golfo di esecuzione e nel golfo di valutazione.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img' title='reti di calcolatori'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'>2. I due tipi di commutazione </h1>
                    <time datetime="2022-11-20" className='post-date' temprop="datePublished" content="2022-11-20T08:00:00+08:00"> 20 Novembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'>Analizziamo come le applicazioni si scambiano i pacchetti, esaminando la commutazione di circuito e la commutazione di pacchetto. Confrontiamo i due tipi di commutazione ed esminiamo le varie problematiche di ciascuno </p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoIum} alt="Logo riferito ai post della materia interazione uomo macchina" className='post-img'title='interazione uomo macchina'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'>1. Introduzione all' Interazione Uomo Macchina </h1>
                    <time datetime="2022-11-12" className='post-date'temprop="datePublished" content="2022-11-12T08:00:00+08:00"> 12 Novembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'>Primo articolo dedicato agli appunti relativi alla materia Interazione Uomo Macchina, il cui studio si incentra sul ruolo dell'utente all'interno dello sviluppo del software, ponendo una nuova visione incentrata
                    sui suoi bisogni e necessità.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box libri all'>
                    <img loading="lazy" decoding="async" src={LogoLibri} alt="Logo riferito ai post dei libri consigliati" className='post-img' title='libri consigliati'/>
                    <h3 className='category'>Libri</h3>
                    <h1 className='post-title'>Consigli su libri settoriali - Pt. 1 </h1>
                    <time datetime="2022-11-05" className='post-date' temprop="datePublished" content="2022-11-05T08:00:00+08:00"> 5 Novembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'>Primo articolo dedicato a consigli su libri settoriali per migliorare le proprie hard skills e soft skills legate al mondo della programmazione.</p>
                    <div className='link'>
                        <Link to="/Libri-consigliati-01" className="btn">Leggi Post</Link>
                    </div>
                </article>

                <article className='post-box uni all'>
                    <img loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'title='reti di calcolatori'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'>1. Introduzione alle reti </h1>
                    <time datetime="2022-11-01" className='post-date' temprop="datePublished" content="2022-11-01T08:00:00+08:00"> 1 Novembre 2022</time> <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span>
                    <p className='post-description'>Introduzione alle reti di calcolatori, fornendo un'immagine di come si è evoluta l'infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </article>

            </section>
        </div>
        
    )
}

export default BlogBoxes