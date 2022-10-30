import React from 'react';
import './BlogBoxes.css';
import tcp from '../assets/tcp.webp';
import udp from '../assets/udp.webp';
import {Link} from "react-router-dom";

function BlogBoxes() {
   
    return (
        <div className='container'>
            <div className='post-filter container' >
                <span className='filter-item active-filter' data-filter='all'>Tutti</span>
                <span className='filter-item' data-filter='reti'>Reti di Calcolatori</span>
                <span className='filter-item' data-filter='map'>Metodi Avanzati di Programmazione</span>
                <span className='filter-item' data-filter='programmazione'>Programmazione</span>
                <span className='filter-item' data-filter='asd'>Algoritmi e Strutture Dati</span>
                <span className='filter-item' data-filter='cc'>Calcolabilità e Complessità</span>
            </div>
            <section className='post container'>
                <div className='post-box reti all'>
                    <img src={tcp} alt="" className='post-img'/>
                    <h3 className='category'>Reti di Calcolatori</h3>
                    <h1 className='post-title'>TCP</h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='link'>
                        <Link to="/reti01" className="btn">Progetti</Link>
                    </div>
                </div>

                <div className='post-box map all'>
                    <img src={udp} alt="" className='post-img'/>
                    <h3 className='category'>Metodi avanzati di programmazione</h3>
                    <h1 className='post-title'>UDP</h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='link'>
                       <Link to="/progetti" className="btn">Progetti</Link>
                    </div>
                </div>

                <div className='post-box map all'>
                    <img src={tcp} alt="" className='post-img'/>
                    <h3 className='category'>Reti di Calcolatori</h3>
                    <h1 className='post-title'>TCP</h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='link'>
                        <Link to="/progetti" className="btn">Progetti</Link>
                    </div>
                </div>
                
                <div className='post-box asd all'>
                    <img src={tcp} alt="" className='post-img'/>
                    <h3 className='category'>Reti di Calcolatori</h3>
                    <h1 className='post-title'>TCP</h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='link'>
                        <Link to="/progetti" className="btn">Progetti</Link>
                    </div>
                </div>

                <div className='post-box cc all'>
                    <img src={tcp} alt="" className='post-img'/>
                    <h3 className='category'>Reti di Calcolatori</h3>
                    <h1 className='post-title'>TCP</h1>
                    <span className='post-date'> 12 Novembre 2022</span>
                    <p className='post-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='link'>
                        <Link to="/progetti" className="btn">Progetti</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogBoxes