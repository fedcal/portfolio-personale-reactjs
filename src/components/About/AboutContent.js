import React from 'react';
import './AboutContent.css';
import profilo from '../assets/profilo.webp';
 
function AboutContent() {
  return (
    <div className='about'>
        <div className='content'>
            <img src={profilo} alt=""/>
            <div className='text'>
                <h1>Mi presento</h1>
                <p>Sono Federico Calò, sviluppatore software. Studio informatica presso l'università Aldo Moro di Bari. Durante gli Studi
                    ho iniziato a lavorare come analista software e sviluppatore software. Mi piace molto ciò che faccio, approfondisco
                    sempre ogni argomento e mi paice sperimentare nuove tecnologie. Oltre allo sviluppo di software per le aziende ho anche 
                    altri interessi, quali l'analisi di dati e lo sviluppo di siti web. Mi diverto a integrare le varie conoscenze, quindi
                    ogni software o sito web che realizzo, ha una sezione legata allo studio dei dati che vengono raccolti. La cura dei 
                    dettagli è essenziale e nulla va lasciato al caso.
                    I linguaggi che utilizzo in base ai progetti da realizzare sono:</p>
                    <ul>
                        <li>JavaFX, per la creazione di desktop application </li>
                        <li>Java, per la creazione del core relativo alle desktop application</li>
                        <li>Python, per l'analisi di dati e la loro visualizzazione</li>
                        <li>HTML, per lo sviluppo di siti web</li>
                        <li>CSS, per creare fogli di stile per il web</li>
                        <li>Javascript, per alcuni effetti che migliorano la navigabilità all'interno dei siti</li>
                    </ul>
                    <br/><br/>
                    <p>Mentre per quanto riguarda le librerie che utilizzo:</p>
                    <ul>
                        <li>SpringBoot, per la realizzazione del backend relativo alle web application </li>
                        <li>ReactJs, per la creazione del front-end di siti web e web application</li>
                        <li>Helmet, per la gestione dinamica delle keywords delle pagine e migliorarne la SEO</li>
                    </ul> 
                    <br/>
                    <br/>
                    <div className='cv-dw'>
                        <a href="../assets/cv.pdf" className='btn'>Scarica CV</a>
                    </div>
            </div>
            
                
        </div>
    </div>
  )
}

export default AboutContent