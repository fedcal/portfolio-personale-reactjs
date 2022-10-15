import './WorkCard.css';
import React from 'react';
import abitareMicocci from '../assets/abitaremicocci.webp';
import portfolioTemplate1 from '../assets/PortfolioTamplate1.webp';
import worldsInn from '../assets/worldsinn.webp';
import gestionaleDipendenti from '../assets/gestionaleDipendenti.PNG';
import casaMagnolie from '../assets/casaMagnolie.png';
import portfolio from '../assets/portfolio.PNG';

function WorkCard() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Progetti</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={gestionaleDipendenti} alt=""/>
                <h2 className='project-title'>Gestionale Dipendenti</h2>
                <div className='pro-details'>
                    <p>Un esempio di gestionale creato con ReactJs per quanto riguarda l'interfaccia web, mentre per il lato backend
                        ho utilizzato la libreria SpringBoot di Java. I dati vengono salvati su un database MySQL in locale. Il pattern
                        co cui è stato creato il progetto è il mvc.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/fedcal/websiteWorldsInn.github.io' className='btn'>GitHub</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={portfolio} alt=""/>
                <h2 className='project-title'>Portfolio PErsonale</h2>
                <div className='pro-details'>
                    <p>Nato come progetto sviluppato nel tempo libero, questo mio sito web è stato realizzato interamente con la 
                        libreria ReactJs e svariate librerie Javascript. La principale è la libreria Helmet.js, la quale supporta 
                        lo svilupo web per la gestione dinamica delle keyword delle varie pagine, migliorando significativamente la 
                        SEO del sito.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/fedcal/portfolio-personale-reactjs' className='btn'>GitHub</a>
                        <a href='https://federicocalo.it/' className='btn'>Sito</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={abitareMicocci} alt=""/>
                <h2 className='project-title'>Sito Web per un negozio di arredamento</h2>
                <div className='pro-details'>
                    <p>Sito web realizzato per un negozio di arredamento attraverso i linguaggi HTML, CSS e Javascript. Attraverso l'utilizzo
                        di quest'ultimo linguaggio lo scorrimento verticale del sito è stato reso più gradevole e sono state create delle piccole 
                        gallerie per le immagini. Inoltre è stato condotto uno studio SEO sui testi presenti all'interno del sito, per migliorarne 
                        il posizionamento all'interno del ranking di ricerca Google.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/AbitareMicocci/abitare.github.io' className='btn'>GitHub</a>
                        <a href='https://abitaremicocci.com/' className='btn'>Sito</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={portfolioTemplate1} alt=""/>
                <h2 className='project-title'>Sito Web template per un portfolio</h2>
                <div className='pro-details'>
                    <p>Ho realizzato un piccolo sito web rappresentante un template per un portfolio online o un CV. E' stato sviluppato
                        in HTML, CSS e javascript, rendendolo responsive per essere visualizzato su qualsiasi dispositivo. Non è stato
                        eseguito nessuno studio SEO in merito, in quanto sito prototipo, ciò non toglie che verrà fatto una volta che 
                        qualcuno commissionerà il lavoro.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/fedcal/TemplaeteWebsite1.github.io' className='btn'>GitHub</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={worldsInn} alt=""/>
                <h2 className='project-title'>Sito Web riguardante un progetto personale</h2>
                <div className='pro-details'>
                    <p>Sito web riguardante un progetto relativo ai giochi di ruolo. Realizzato con il linguaggio Sass, HTML  e javascript, il sito è
                        stato creato per sperimentare nuove tecniche di sviluppo e avviare uno studio SEO riguardante un settore di nicchia, in cui
                        bisogna scegliere attentamente i contenuti da esporre e le parole da adottare.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/fedcal/websiteWorldsInn.github.io' className='btn'>GitHub</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={casaMagnolie} alt=""/>
                <h2 className='project-title'>Casa Delle Magnolie</h2>
                <div className='pro-details'>
                    <p>Sito web di una casa vacanza sita a Gallipoli, nel cuore del salento. Sito realizzato con HTML, CSS e Javascript. Anche in questo 
                        progetto è stato condotto uno studio SEO per andare a individuare i termini e gli argomenti relativi al settore turistico che 
                        influenzano il ranking del sito nella ricerca di Google.
                    </p>
                    <div className='pro-btns'>
                        <a href='https://github.com/fedcal/websiteWorldsInn.github.io' className='btn'>GitHub</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard