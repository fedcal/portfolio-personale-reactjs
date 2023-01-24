import React from 'react';
import './ServiziCard.css';
import { Link } from 'react-router-dom';

function ServiziCArd() {
  return (
    <div className='servizi'>
        
        <div className='card-container'>
            <div className='card'>
                <h3>Copywriter</h3>
                <p>
                    Redazione e ottimizzazione di testi per blog, testate giornalistiche o contenuti per finalità pubblicitarie. Tutti i testi sono ottimizzati attraverso l'utilizzo corretto di varie tecniche 
                    SEO.
                </p>
                <Link to="/contatti" className='btn btn-container'>Info</Link>
            </div>
            <div className='card'>
                <h3>Social Management</h3>
                <p>
                    Gestione dei profili social, gestione della pubblicazione dei post in base al proprio target, descrizioni create seguendo la SEO e analisi dei dati della dashboard. Tutte le attività 
                    sono finalizzate al raggiungimento di un pubblico sempre più vasto e all'aumento del numero di followers, delle visualizzazioni e delle interazione in generale.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>

            <div className='card'>
                <h3>Digital Education</h3>
                <p>
                    Aiuto a comprendere i prodotti digitali con cui si viene a contatto durante la quotidinianità e a riconoscere i link di phishing o altre tipologie di minacce nelle quali si può incappare in 
                    rete.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>
        </div>
    </div>
  )
}

export default ServiziCArd