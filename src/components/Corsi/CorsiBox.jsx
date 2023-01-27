import React from 'react';
import '../Blog/BlogBoxes.css';
import {Link} from "react-router-dom";
import LogoCC from '../assets/cc_500.webp';


function CorsiBox() {
  return (
    <div>
        <div className='container' >
            
            <section className='post container'>

                <article  itemScope  itemType="https://schema.org/Article" className='post-box uni all'>
                    <meta itemProp="image" content="https://www.federicocalo.dev/static/media/cc_500.webp" />
                    <img loading="lazy" decoding="async" src={LogoCC} alt="Logo riferito ai post della materia ingegneria della conoscenza" className='post-img' title='ingegneria della conoscenza'/>
                    <h3 className='category'>Appunti Università - Calcolabilità e complessità</h3>
                    <h1 className='post-title' itemProp="headline">11. Complessità di spazio</h1>
                    <time dateTime="2023-01-26" className='post-date' temprop="datePublished" content="2023-01-26T08:00:00+08:00"> 26 Gennaio 2023</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span>
                    <p className='post-description' itemProp='description'> Nel precedente articolo abbiamo valutato la complessità dei problemi computazionali in termini temporali, in questo articolo ne valutiamo la complessità in termini di spazio e di memoria. Tempo e spazio sono due fattori importanti quando bisogna cercare la soluzione ai problemi computazionali.</p>
                    <div className='link'>
                        <Link to="/Complessità-di-spazio" className="btn">Leggi Post</Link>
                    </div>
                </article>


            </section>
        </div>
    </div>
  )
}

export default CorsiBox