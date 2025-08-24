import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON12() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 12. Ragionamento con vincoli PT. 3</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, ricerca tabu,mandato tabu,Most Improving Step,Two-Stage Choice,Any Conflict,Simulated Annealing,Valutazione degli algoritmi randomizzati,distribuzione del tempo di esecuzione '/>
            <meta name='description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 12. Ragionamento con vincoli PT. 3'/>
            <meta name='og:description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 12. Ragionamento con vincoli PT. 3"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Ragionamento-con-vincoli-parte-3" />
        </Helmet>
        <Navbar/>
        <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/icon_1900.webp" />
            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIcon} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Ragionamento-con-vincoli-parte-2"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">12. Ragionamento con vincoli PT. 3</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-18" className='data' itemProp="datePublished" content="2023-02-18T07:30:00+08:00">18/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Esistono diversi tipi di varianti della ricerca locale e del miglioramento iterativo. Se le variabili hanno piccoli domini finiti, un algoritmo di ricerca locale può considerare tutti gli altri valori della variabile quando considera i possibili successori. Se i domini sono grandi, il costo per considerare tutti gli altri valori 
                    potrebbe essere troppo elevato. Un'alternativa è considerare solo pochi altri valori, spesso i valori vicini, per una delle variabili.
                </p>

                <p className='post-text'>
                    La ricerca locale non ha memoria. Non ricorda nulla della ricerca mentre procede. Un modo semplice per utilizzare la memoria per migliorare una ricerca locale è utilizzare la <strong>ricerca tabu</strong> che impedisce che le assegnazioni di variabili modificate di recente vengano nuovamente modificate. Alla base di questa ricerca 
                    vi è l'idea di utilizzare un numero intero, detto <i>mandato tabu</i>, il quale indica che quella variabile è stata modificata negli ultimi t step e quindi non va modificata.
                </p>

                <p className='post-text'>
                    Se la variabile tabu t è troppo piccola, la ricarca può essere implementata avendo un elenco delle variabili modificate di recente. Se la variabile t è maggiore, può essere implementato includendo, per ogni variabile, il passo in cui la variabile ha ottenuto il suo valore corrente. La ricerca Tabu impedisce di scorrere tra alcuni incarichi. 
                    Il tabu tenure è uno dei parametri che possono essere ottimizzati. Un elenco tabu di dimensione 1 equivale a non consentire la rivisitazione immediata dello stesso compito.
                </p>

                <p className='post-text'>
                    Gli algoritmi che descriveremo differiscono tra di loro per via del carico di lavoro per garantire il passo migliore. Quale di questi metodi funziona meglio è, tipicamente, una questione empirica; è difficile determinare teoricamente se passi lunghi e lenti siano migliori di passi piccoli e veloci per un particolare dominio problematico. 
                    Esistono molte possibili varianti di quale successore selezionare, alcune delle quali vengono esplorate nelle sezioni successive.
                </p>

                <h4>Most Improving Step</h4>

                <p className='post-text'>
                    L'algoritmo <strong>most improving step</strong> è un metodo che seleziona una coppia variabile-valore che apporta un notevole miglioramento. Se ci sono diverse coppie viene scelta una a caso. Un semplice modo di implementare questo algoritmo consiste nello scansionare linearmente le variabili e per ogni variabile X e per ogni valore v nel dominio 
                    di X che è diverso dal valore X ha nell'attuale assegnazione totale, confrontando l'attuale assegnazione totale con l'assegnazione che differiva solo per avere X = v.  Quindi seleziona una delle coppie variabile-valore che produce il miglioramento, anche se tale miglioramento è negativo. Le variabili che non compaiono in alcun vincolo possono essere ignorate.
                </p>

                <p className='post-text'>
                    Un'alternativa più sofisticata consiste nell'avere una coda di priorità di coppie variabile-valore con pesi associati. Per ogni variabile X e ogni valore v nel dominio X take che X non è assegnato a v nel corrente assegnamento, la coppia {"<"} X, v {">"} viene inserita nella coda prioritaria. Il peso w della coppia corrisponde alla valutazione totale dell'assegnamento che è 
                    la stessa dell'assegnamento corrente, ma con X = v meno la valutazione del corrente assegnamento totale.  
                </p>

                <p className='post-text'>
                    Questo peso dipende dai valori assegnati a X e dai vincoli vicini a X nel grafo di consistenza, ma questo non dipende dai valori assegnati alle altre variabili. A ogni step, l'algoritmo seleziona una coppia di variabile-valore con un peso minimo, la quale fornisce un successore con un maggiore miglioramento. Una volta che è stato assegnato il valore alla variabile X, i pesi di tutte le 
                    coppie variabile-valore che partecipano a un vincolo che è stato reso soddisfatto o insoddisfatto dalla nuova assegnazione, devono essere rivalutati e devono essere reinseriti nella coda di priorità.
                </p>

                <p className='post-text'>
                    Questo algoritmo impiega molto tempo a mantenere le strutture dei dati per garantire che ogni volta venga eseguito il passo più migliorativo.
                </p>
                
                <h4>Two-Stage Choice</h4>

                <p className='post-text'>
                    Un'alternativa all'algoritmo precedente è il <strong>two-stage choice</strong>, nel quale si seleziona una variabile e dopo il corrispettivo valore. Questo algoritmo mantiene una coda prioritaria di variabili, nella quale il peso di una variabile è il numero di conflitti nei quali la variabile partecipa. Ogni volta l'algoritmo seleziona una variabile con il numero massimo di conflitti e le 
                    assegna  un valore che riduca al minimo il numero di conflitti o un valore casuale. Per ogni vincolo che diventa vero o falso come risultato di questa nuova assegnazione, il peso delle altre variabili che partecipano al vincolo deve essere rivalutato.
                </p>

                <p className='post-text'>
                    Rispetto alla selezione della migliore coppia variabile-valore, questo fa meno lavoro per ogni passaggio e quindi è possibile ottenere più passaggi per un dato periodo di tempo. Tuttavia, i passaggi tendono a dare meno miglioramenti, offrendo un compromesso tra il numero di passaggi e la complessità per passaggio.
                </p>

                <h4>Any Conflict</h4>
                
                <p className='post-text'>
                    Nell'algoritmo <strong>any-conflit</strong>, ad ogni passo, viene selezionata casualmente una delle variabili in conflitto. L'algoritmo assegna alla variabile prescelta uno dei valori che minimizza il numero di vincoli violati oppure un valore a caso. Esistono due varianti di questo conflitto: 
                </p>

                <ul>
                    <li>La variabile che viene scelta è sulla base dei conflitti nei quali essa è coinvolta</li>
                    <li>Viene scelta casualmente tra le variabili che sono in conflitto</li>
                </ul>

                <p className='post-text'>
                    Entrambe queste varianti richiedono la creazione di una struttura dati che permetta di selezionare una variabile casualmente. La prima variante rappresenta questa struttura come un albero binario, e quindi ha una complessità pari a O (r log c), dove r è il numero di vincoli per variabili e c è il numero di vincoli.
                </p>

                <h4>Simulated Annealing</h4>

                <p className='post-text'>
                    Questo ultimo metodo non ha nessuna struttura dati, in quanto, dopo aver preso una variabile in considerazione e averle assegnato un valore casuale, rifiuta o accetta la nuova assegnazione. L'algoritmo <strong>simulated annealing</strong> mantiene un'assegnazione totale corrente. Ad ogni passaggio, sceglie una variabile 
                    a caso, quindi sceglie un valore per quella variabile a caso. Se l'assegnazione di quel valore alla variabile non aumenta il numero di conflitti, l'algoritmo accetta l'assegnazione di quel valore alla variabile, risultando in una nuova assegnazione corrente. In caso contrario, accetta l'incarico con una certa probabilità, 
                    a seconda della temperatura e di quanto sia peggiore il nuovo incarico rispetto a quello attuale. Se la modifica non viene accettata, l'assegnazione corrente rimane invariata.
                </p>

                <p className='post-text'>
                    Per controllare se lo stato e accettato, viene corrisposto un valore reale positivo T. Nell'algoritmo è presente una funzione di assegnamento totale A e una funzione h(A) che valuta l'assegnamento da minimizzare. Per risolvere i vincoli, h è tipicamente il numero conflitti. L'algoritmo seleziona un possibile successore casualmente, al 
                    quale viene assegnato un nuovo valore A'. Se h(A')<InlineMath math='\leq'/>h(A), A' sarà la nuova assegnazione. Altrimenti la nuova assegnazione viene accettata in modo casuale, utilizzando una distribuzione di Gibbs o una distribuzione di Boltzmann.
                </p>

                <h2>Valutazione degli algoritmi randomizzati</h2>

                <p className='post-text'>
                    E' difficile comparare i diversi algoritmi trattati in precedenza, in quanto danno differenti risultati e hanno differenti tempi di esecuzione ad ogni esecuzione. Alcune statistiche come il tempo di esecuzione medio non aiutano a tale scopo. Un modo per visualizzare il tempo di esecuzione di un algoritmo per un particolare problema consiste 
                    nell'utilizzare una <strong>distribuzione del tempo di esecuzione</strong>, che mostra la variabilità del tempo di esecuzione di un algoritmo randomizzato su una singola istanza del problema.
                </p>

                <div className="succ-post">
                    <Link to="/Metodi-basati-sulla-popolazione-e-ottimizzazione">Post successivo &#8594;</Link>
                </div>

            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON12