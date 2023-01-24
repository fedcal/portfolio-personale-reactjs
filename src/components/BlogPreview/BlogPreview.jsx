import React from 'react'
import './BlogPreview.css'
import {Link} from 'react-router-dom'

function BlogPreview() {
  return (
    <div className='blog-preview'>
        <div className='title'>
            <h1 className='blog-heading'>Blog</h1>
        </div>
       <div className='blog-text'>
            <p className='text'>Una mia passione è sempre stata la divulgazione, soprattutto quella in ambito informatico. Quindi ho deciso di raccogliere in questa sezione svariati articoli,
                    redatti da me, riguardanti i miei appunti universitari, libri settoriali che ho letto e che mi sento di consigliare, o adirittura case study, ovvero progetti che sviluppo di mio pugno, al
                    solo scopo di sviluppare le mie skill. Spero che riesca a raggiungere un vasto pubblico e ad essere d'aiuto a molti. Prima di lasciarvi visitare l'area blog, lasciatemi entrare nel dettaglio 
                    delle varie aree:</p>
            <ul>
                <li><i>Appunti universitari:</i> condvisione dei vari appunti presi nel corso degli anni universati per prepararmi agli esami universitari</li>
                <li><i>Libri consigliati:</i> letture tecniche consigliate;</li>
                <li><i>Case Study:</i> progetti sviluppati interamente da me e open source, correlati da analisi tecnica, analisi dei requisiti e analisi dell'utente.</li>
            </ul>
       </div>
       <div className='project-heading'>
        <Link to='/blog'className='btn'>Area Blog</Link>
        </div>
    </div>
  )
}

export default BlogPreview