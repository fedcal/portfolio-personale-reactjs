import React from 'react';
import {Link} from "react-router-dom";
import LogoLibri from '../assets/libri_500.webp';
import LogoStudyCase from '../assets/caseStudy_500.webp';
import LatexImg from '../assets/LaTeX_logo.webp';

function BlogBoxes() {
  return (
    <div className='container' >
    <p className='area-description'>Ecco a voi il mio blog! Preparatevi a scoprire un mondo di contenuti intriganti mentre esplorate le diverse sezioni. Il divertimento è garantito, quindi lasciatevi trasportare e iniziate questa avventura online! </p>
    <div className='post-filter container' >
        <span className='filter-item active-filter' data-filter='all'>Tutti</span>
        <span className='filter-item' data-filter='casestudy'>Case Study</span>
        <span className='filter-item' data-filter='libri'>Libri</span>
        <span className='filter-item' data-filter='altro'>Altro</span>
    </div>
    <section className='post container'>

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

        <article  itemScope  itemType="https://schema.org/Article" className='post-box libri all'>
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

    </section>
</div>
  )
}

export default BlogBoxes