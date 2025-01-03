import React from 'react';
import {AiOutlineCalendar} from "react-icons/ai";
import './Esperienze.css';
function Esperienze() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='experience'>
                <h1>Esperienze Lavorative</h1>
                <div className='row'>
                    <div className='timeline-box'>
                        <div className='timeline'>

                        <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>09/12/2024 - Attualmente ricopro questo ruolo</h4>
                                <h2 className='timeline-title'>Accenture</h2>
                                <p className='timeline-text'>Custom Software Engineering Analyst:
                                <ul>
                                    <li>Analisi e sviluppo in Quarkus e Oracle</li>
                                </ul>
                                </p>
                            </div>

                            <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>27/12/2022 - 08/12/2024</h4>
                                <h2 className='timeline-title'>Links Management and Technology SPA</h2>
                                <p className='timeline-text'>Apprendistato nel ruolo di Backend developer:
                                <ul>
                                    <li>Sviluppo backend di applicazioni attraverso il framework SpringBoot</li>
                                    <li>Struts 2 e Vaadin</li> 
                                    <li>Analisi e sviluppo tramite Sql</li>
                                </ul>
                                </p>
                            </div>

                            <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>14/02/2022 - 23/12/2022</h4>
                                <h2 className='timeline-title'>Links Management and Technology SPA</h2>
                                <p className='timeline-text'>Stage nel ruolo di analista software:
                                <ul>
                                    <li>Analisi software AS-IS e TO-BE nell'ambito di un progetto relativo alla pubblica amministrazione</li>
                                    <li>Formazione riguardante Java, la programmazione OO, Design Patterns, Git, Docker e Flussi ETL</li>
                                </ul>
                                </p>
                            </div>

                            <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>02/02/2021 - 29/10/2021</h4>
                                <h2 className='timeline-title'>WebScience</h2>
                                <p className='timeline-text'>
                                Assunzione in qualità Software Developer Junior presso l'azienda WebScience. Attività svolte:
                                <ul>
                                    <li>Analisi software AS-IS e TO-BE</li>
                                    <li>Evolutive SEO WebSite</li>
                                    <li>Evolutive WebSite</li>
                                    <li>Utilizzo CMS Liferay</li>
                                </ul>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='education'>
                <h1>Formazione</h1>
                <div className='row'>
                    <div className='timeline-box'>
                        <div className='timeline'>

                            <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>2017</h4>
                                <h2 className='timeline-title'> Inizio studi universitari in Informatic</h2>
                                <p className='timeline-text'>Immatricolazione presso l'università Aldo Moro di Bari, facoltà di Informatica. Classe di laurea L31</p>
                            </div>

                            <div className='timeline-item'>
                                <div className='circle-dot'></div>
                                <h4 className='timeline-date'><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>2012-2017</h4>
                                <h2 className='timeline-title'>Diploma di scuola superiore I.T.C Cezzi De Castro Moro</h2>
                                <p className='timeline-text'>Diploma di maturità conseguito presso l'Istituto Tecnico Commerciale Cezzi De Castro Moro, con indirizzo Sistemi Informativi Aziendali.</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Esperienze