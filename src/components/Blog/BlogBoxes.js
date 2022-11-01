import React from 'react';
import './BlogBoxes.css';
import {Link} from "react-router-dom";
import LogoRDC from '../assets/RetiDiCalcolatori 500.png';

function BlogBoxes() {
   
    return (
        <div className='container'>
            <div className='post-filter container' >
                <span className='filter-item active-filter' data-filter='all'>Tutti</span>
                <span className='filter-item' data-filter='uni'>Appunti Università</span>
                <span className='filter-item' data-filter='generale'>Mondo Informatico</span>
                <span className='filter-item' data-filter='libri'>Libri</span>
            </div>
            <section className='post container'>

                <div className='post-box uni all'>
                    <img src={LogoRDC} alt="" className='post-img'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'>1. Introduzione alle reti </h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Introduzione alle reti di calcolatori, fornendo un'immagine di come si è evoluta l'infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default BlogBoxes