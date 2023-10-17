import React from 'react'
import './UniversitaPreview.css'
import {Link} from 'react-router-dom'

function UniversitaPreview() {
  return (
    <div className='blog-preview'>
      <div className='title'>
          <h1 className='blog-heading'>Appunti Universitari</h1>
      </div>
      <div className='blog-text'>
          <p className='text'>L'arte della divulgazione è una fiamma che arde dentro di me, soprattutto quando si tratta del mondo informatico. E così, ho dato vita a questa sezione speciale, 
          un caleidoscopio di appunti universitari che ho personalmente forgiato. È il mio regalo per tutti gli studenti universitari e i professionisti del settore, una risorsa pensata per voi. Ma prima di lasciarvi catturare dalla curiosità nell'area Appunti, permettetemi di svelarvi un piccolo assaggio di ciò che troverete:</p>
          <ul>
              <li><i>Interazione Uomo Macchina:</i> disciplina che studia l'interazione tra persone e computer, tenendo conto degli aspetti fisici, psicologici e teorici del processo</li>
              <li><i>Ingegneria della conoscenza:</i> disciplina che studia tutto quello che concerne la costruzione, la manutenzione e lo sviluppo di sistemi basati sulla conoscenza;</li>
              <li><i>Reti di Calcolatori:</i> disciplina che analizza le tecnologie, i modelli, i principi di funzionamento e i principali protocolli alla base delle reti;</li>
              <li><i>Calcolabilità e complessità:</i> La teoria della calcolabilita' si preoccupa di stabilire quali problemi sono effettivamente risolvibili da un calcolatore. La teoria della complessita' invece, ha lo scopo di studiare e classificare i problemi rispetto alle risorse (di tempo, di spazio, ecc.) necessari per poterli risolvere</li>
          </ul>
      </div>
      <div className='project-heading'>
        <Link to='/appunti-universitari'className='btn'>Appunti Universitari</Link>
      </div>
      <div className='blog-text'>
          <p className='text'>Qui puoi trovare una serie di appunti di diverse materie:</p>
          <ul>
              <li><i><a href="../assets/appunti_data_mining_Federico_Calo.pdf" download>Data Mining</a></i> </li>
          </ul>
      </div>
    </div>
  )
}

export default UniversitaPreview