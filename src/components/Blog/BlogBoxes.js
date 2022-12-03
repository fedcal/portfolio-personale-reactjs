import React from 'react';
import './BlogBoxes.css';
import {Link} from "react-router-dom";
import LogoRDC from '../assets/RetiDiCalcolatori_500.webp';
import LogoLibri from '../assets/libri_500.webp';
import LogoIum from '../assets/ium_500.webp';


function BlogBoxes() {
    return (
        <div className='container'>
            <div className='post-filter container' >
                <span className='filter-item active-filter' data-filter='all'>Tutti</span>
                <span className='filter-item' data-filter='uni'>Appunti Università</span>
                <span className='filter-item' data-filter='libri'>Libri</span>
                <span className='filter-item' data-filter='libri'>Case Sudy</span>
            </div>
            <section className='post container'>

                <div className='post-box uni all'>
                    <img src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'>1. Introduzione alle reti </h1>
                    <span className='post-date'> 1 Novembre 2022</span>
                    <p className='post-description'>Introduzione alle reti di calcolatori, fornendo un'immagine di come si è evoluta l'infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </div>

                <div className='post-box libri all'>
                    <img src={LogoLibri} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'/>
                    <h3 className='category'>Libri</h3>
                    <h1 className='post-title'>Consigli su libri settoriali - Pt. 1 </h1>
                    <span className='post-date'> 5 Novembre 2022</span>
                    <p className='post-description'>Primo articolo dedicato a consigli su libri settoriali per migliorare le proprie hard skills e soft skills legate al mondo della programmazione.</p>
                    <div className='link'>
                        <Link to="/Libri-consigliati-01" className="btn">Leggi Post</Link>
                    </div>
                </div>

                <div className='post-box uni all'>
                    <img src={LogoIum} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'>1. Introduzione all' Interazione Uomo Macchina </h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Primo articolo dedicato agli appunti relativi alla materia Interazione Uomo Macchina, il cui studio si incentra sul ruolo dell'utente all'interno dello sviluppo del software, ponendo una nuova visione incentrata
                    sui suoi bisogni e necessità.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Introduzione" className="btn">Leggi Post</Link>
                    </div>
                </div>

                <div className='post-box uni all'>
                    <img src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'/>
                    <h3 className='category'>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className='post-title'>2. I due tipi di commutazione </h1>
                    <span className='post-date'> 20 Novembre 2022</span>
                    <p className='post-description'>Analizziamo come le applicazioni si scambiano i pacchetti, esaminando la commutazione di circuito e la commutazione di pacchetto. Confrontiamo i due tipi di commutazione ed esminiamo le varie problematiche di ciascuno </p>
                    <div className='link'>
                        <Link to="/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione" className="btn">Leggi Post</Link>
                    </div>
                </div>

                <div className='post-box uni all'>
                    <img src={LogoIum} alt="Logo riferito ai post della materia reti di calcolatori" className='post-img'/>
                    <h3 className='category'>Appunti Universitari - Interazione Uomo macchina</h3>
                    <h1 className='post-title'>2. Interazione Uomo Macchina - L'usabilità </h1>
                    <span className='post-date'> 01 Dicembre 2022</span>
                    <p className='post-description'> Dopo una breve overview della materia, descritta nel primo articolo, iniziamo ad approfondire i vari argomenti, iniziando dal concetto di <strong>usabilità</strong> e del modello di interazione, fino 
                    ad addentrarci nel golfo di esecuzione e nel golfo di valutazione.</p>
                    <div className='link'>
                        <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione" className="btn">Leggi Post</Link>
                    </div>
                </div>

                

            </section>
        </div>
        
    )
}

export default BlogBoxes