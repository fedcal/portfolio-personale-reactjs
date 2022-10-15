import React from 'react';
import './ServiziCard.css';
import { Link } from 'react-router-dom';

function ServiziCArd() {
  return (
    <div className='servizi'>
        <div className='card-container'>
            <div className='card'>
                <h3>Sviluppo siti web</h3>
                <p>Creazione personalizzata del sito web per la propria attività attraverso le ultime tecnologie. Verrà condotto uno studio SEO per l'ottimizzazione
                    del sito all'interno delle ricerche di Google. Il design verrà concordato insieme e sarete partecipi all'interno del suo sviluppo in maniera costante.
                    Design responsive, che si adatterà a ogni schermo.
                </p>
                <Link to="/contatti" className='btn btn-container'>Info</Link>
            </div>
            <div className='card'>
                <h3>Sviluppo software</h3>
                <p>Creazione di gestionali e software personalizzati per la propria attività e che andranno incontro alle vostre esigenze. Integrazione di analisi dati e 
                    visualizzazione dei risultati attraverso moderne tecniche di Data Mining. Si potranno creare modelli di raccolta dati, analisi di essi tramite modelli di 
                    regressione o clusterizzazione e visualizzazione attraverso tecniche di Data Visualitation.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>
            <div className='card'>
                <h3>Analisi tecnica</h3>
                <p>Svolgo lavori di analisi su software esistenti, sia a livello codice che grafico, per studiare la situazione as-is e progettare soluzioni to-be,
                    che andranno incontro alle esigenze aziendali. Creazione di documentazione accurata e dettagliata.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>
        </div>
    </div>
  )
}

export default ServiziCArd