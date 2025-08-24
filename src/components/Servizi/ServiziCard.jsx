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
                    Dalla mia penna nascono testi che risplendono su blog, fanno eco nelle testate giornalistiche e brillano nei contenuti pubblicitari. Ogni parola è forgiata con cura, infusa con la magia dell'ottimizzazione e modellata grazie a una danza armoniosa con le tecniche SEO. Il risultato? Testi che non solo comunicano, ma che si alzano in piedi e si fanno notare. Benvenuti nel mondo in cui le parole prendono vita e si trasformano in autentiche stelle dei contenuti.
                </p>
                <Link to="/contatti" className='btn btn-container'>Info</Link>
            </div>
            <div className='card'>
                <h3>Social Management</h3>
                <p>
                    Nel vortice dei social media, plasmo profili che catturano l'attenzione. Scelgo i post con la precisione di un archer, mirando al cuore del mio target. Le descrizioni danzano al ritmo dell'ottimizzazione SEO, mentre la dashboard rivelatrice svela i segreti dei dati. La mia missione? Portare il tuo pubblico in un crescendo di connessioni: followers che crescono come stelle, visualizzazioni che sfiorano l'infinito e interazioni che scatenano un applauso virtuale.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>

            <div className='card'>
                <h3>Help Informatico</h3>
                <p>
                Quando l'informatica ti sfida, io sono qui per rendere ogni ostacolo un ricordo lontano. Sia che tu sia uno studente in cerca di luce nel labirinto digitale o un qualcuno che desidera domare il proprio pc ribelle, il mio aiuto è a portata di clic. Abbatti le barriere dell'incertezza e affida i tuoi problemi a me. Insieme, trasformeremo la frustrazione in soluzioni e lasceremo alle spalle ogni dubbio. Non esitare: il mondo digitale è nostro da conquistare!
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>
        </div>
    </div>
  )
}

export default ServiziCArd