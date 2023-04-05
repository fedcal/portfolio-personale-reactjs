import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON13() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 13. Metodi basati sulla popolazione e ottimizzazione</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, Metodi basati sulla popolazione e ottimizzazione, popolazione,individui,beam search,ricerca stocastica del raggio,stochastic beam search,distribuzione di Gibbs,distribuzione di Boltzmann,Ottimizzazione,relazione di preferenza,problema di ottimizzazione,funzione obiettivo,criterio di ottimalità,
            problema di ottimizzazione vincolata,problema di ottimizzazione dei vincoli,vincolo flessibile,Metodi sistematici per l&#39;ottimizzazione, La coerenza dell&#39;arco,strettamente dominato,ricerca locale per l&#39;ottimizzazione,ottimo locale,ottimo globale,discesa del gradiente,discesa in pendenza'/>
            <meta name='description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 13. Metodi basati sulla popolazione e ottimizzazione'/>
            <meta name='og:description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 13. Metodi basati sulla popolazione e ottimizzazione"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Metodi-basati-sulla-popolazione-e-ottimizzazione" />
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
                    <Link to="/Ragionamento-con-vincoli-parte-3"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">13. Metodi basati sulla popolazione e ottimizzazione</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-18" className='data' itemProp="datePublished" content="2023-02-18T07:30:00+08:00">18/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    A differenza dei precedenti algoritmi di ricerca locale in cui si mantiene una singola assegnazione totale, adesso andremo ad analizzare quegli algoritmi che agiscono su una <strong>popolazione</strong> e che mantengono un insieme di multiple assegnazioni. Una popolazione non è altro che un insieme di singole assegnazioni a 
                    ogni variabile chiamati <strong>individui</strong>. Un primo metodo è chiamato <strong>beam search</strong>, la cui implementazione è simile al miglioramento iterativo con l'unica eccezione che consiste nel mantenere un insieme di k assegnazioni.
                </p>

                <p className='post-text'>
                    Questo algoritmo termina con successo quando trova un'assegnazione soddisfacente. Ad ogni step vengono selezionati i k possibili successori e in caso di pareggio sceglie in maniera casuale. Questa operazione viene ripetuta ogni volta per un nuovo insieme di k assegnazioni. Inoltre, come detto prima, questo algoritmo riesce a gestire 
                    multiple assegnazioni allo stesso tempo ed è molto utile. La sua utilità maggiore si ha quando vi sono particolari limit di memoria, in quanto dipendendo dalla variabile k, si può impostare per gestire insiemi minori.  Le varianti della ricerca locale stocastica sono applicabili anche alla ricerca del raggio, cercando di ottimizzare per trovare 
                    il miglior valore di k o approssimarlo.
                </p>

                <p className='post-text'>
                    La <strong>ricerca stocastica del raggio</strong>, o <i>stochastic beam search</i>, è un algoritmo di ricerca alternativo a quello di beam search. In questo algoritmo, invece di selezionare  i k individui migliori, vengono selezionati k individui casuali. Gli individui con una valutazione migliore hanno maggiori probabilità di essere scelti. Per fare 
                    ciò viene utilizzata una <i>distribuzione di Gibbs</i> o una <i>distribuzione di Boltzmann</i>.
                </p>

                <p className='post-text'>
                    La ricerca del raggio stocastico tende a consentire una maggiore diversità dei k individui rispetto alla ricerca a fascio semplice.  Si noti che durante la ricerca stocastica del raggio è possibile che un individuo venga selezionato più volte a caso.
                </p>

                <h2>Ottimizzazione</h2>

                <p className='post-text'>
                    Invece di avere solo mondi possibili che soddisfano vincoli o meno, spesso abbiamo una <strong>relazione di preferenza</strong> sui mondi possibili e vogliamo un miglior mondo possibile in base alla preferenza. Definiamo quindi un <strong>problema di ottimizzazione</strong> costituito da un insieme di variabili, ciascuna con un dominio associato, una <i>funzione obiettivo</i> che 
                    mappa le assegnazioni totali a numeri reali, e un <i>criterio di ottimalità</i>,  che consiste tipicamente nel trovare un'assegnazione totale che minimizzi o massimizzi la funzione obiettivo.
                </p>

                <p className='post-text'>
                    L'obiettivo è trovare un'assegnazione totale che sia ottimale secondo il criterio di ottimalità. Un <strong>problema di ottimizzazione vincolata</strong> è un problema di ottimizzazione che ha anche vincoli rigidi che specificano quali assegnazioni variabili sono possibili. L'obiettivo è trovare un'assegnazione ottimale che soddisfi i vincoli rigidi.
                </p>

                <p className='post-text'>
                    In un <strong>problema di ottimizzazione dei vincoli</strong>, la funzione obiettivo viene scomposta in un insieme di vincoli flessibili. Un <i>vincolo flessibile</i> ha un ambito che è un insieme di variabili. Il vincolo soft è una funzione dai domini delle variabili nel suo ambito in un numero reale, un costo . Un tipico criterio di ottimalità è scegliere un'assegnazione totale 
                    che minimizzi la somma dei costi dei vincoli soft. I vincoli flessibili possono essere aggiunti in modo puntuale. La somma di due vincoli soft è un vincolo soft con ambito che è l'unione dei loro ambiti. Il costo di qualsiasi assegnazione a variabili nell'ambito è la somma dei costi dei vincoli aggiunti a tale assegnazione.
                </p>

                <p className='post-text'>
                    I vincoli rigidi possono essere modellati come aventi un costo infinito per la violazione di un vincolo. Finché il costo di un incarico è finito, non viola un vincolo rigido. Un'alternativa consiste nell'utilizzare un numero elevato, maggiore di quanto potrebbe essere la somma dei vincoli soft, come costo della violazione di un vincolo hard. Quindi l'ottimizzazione può essere utilizzata 
                    per trovare una soluzione con il minor numero di vincoli rigidi violati e, tra questi, quella con il costo più basso.
                </p>

                <h3>Metodi sistematici per l'ottimizzazione</h3>

                <p className='post-text'>
                    Un modo per trovare l'assegnazione minima è calcolare la somma dei vincoli soft e selezionare un'assegnazione con valore minimo. Questo non è fattibile per problemi di grandi dimensioni. <strong>La coerenza dell'arco</strong> può  
                    essere generalizzata ai problemi di ottimizzazione consentendo la potatura delle assegnazioni dominate.
                </p>

                <p className='post-text'>
                    Supponiamo che <InlineMath math='c_1, \dots, c_2'/> sono vincoli morbidi che riguardano X, definiamo la variabile <InlineMath math='c=c_1 + \dots + c_k'/>. Prendiamo in considerazione le variabili <InlineMath math='Y_1, \dots, Y_m'/> diverse da X, coinvolte in c. Un valore v per la variabile X è <strong>strettamente dominato</strong> se, per ogni valore 
                    <InlineMath math='y_1, \dots, y_k'/> delle variabili <InlineMath math='Y_1, \dots, Y_m'/>, esiste qualche valore v' di X tale che <InlineMath math='c ( X = v\prime, Y_1 = y_1, \dots, Y_m = y_m ) \leq c ( X = v, Y_1 = y_1, \dots, Y_m = y_m )' />.
                </p>

                <p className='post-text'>
                    Dominato debolmente ha la stessa definizione di dominato rigorosamente, ma con "minore di" sostituito da "minore di o uguale a". Se è richiesta una sola soluzione, i valori con dominanza debole possono essere eliminati in sequenza. Quali valori debolmente dominati vengono rimossi può influire sulla soluzione ottimale trovata, ma la rimozione di un valore 
                    debolmente dominato non rimuove tutte le soluzioni ottimali.
                </p>

                <p className='post-text'>
                    La suddivisione del dominio viene utilizzata per creare un albero di ricerca. Un nodo è un'assegnazione di un valore a un sottoinsieme delle variabili. I vicini di un nodo si ottengono selezionando una variabile X che non è assegnata al nodo da dividere. In questo caso esiste un neighbor per ogni valore di X. L'assegnazione di un valore a X consente di 
                    semplificare i vincoli che coinvolgono X e di eliminare i valori per altre variabili a causa di vincoli rigidi o di dominanza. Il costo dell'arco è la valutazione dei vincoli soft che possono essere valutati. Un nodo obiettivo è quello in cui sono assegnate tutte le variabili.
                </p>

                <p className='post-text'>
                    Assegnando i costi non appena è possibile valutare un vincolo soft, è possibile utilizzare algoritmi di ricerca come A∗ o branch-and-bound per trovare una soluzione minima. Questi metodi richiedono che ogni costo dell'arco sia non negativo. Per ottenere ciò, il costo più basso in ciascun vincolo flessibile, anche se negativo, viene sottratto da ciascuno dei costi nel vincolo flessibile. 
                    Questo costo deve quindi essere aggiunto al costo di una soluzione finale.
                </p>

                <p className='post-text'>
                    L'eliminazione variabile può essere utilizzata anche per i vincoli flessibili. Le variabili vengono eliminate una alla volta. Una variabile X viene eliminata come segue. Sia R l'insieme dei vincoli che coinvolgono X. Calcolare, T, un nuovo vincolo il cui scope è l'unione degli scope dei vincoli in R e il cui valore è la somma dei valori di R.
                </p>

                <h3>La ricerca locale per l'ottimizzazione</h3>

                <p className='post-text'>
                    La ricerca locale è direttamente applicabile ai problemi di ottimizzazione, in cui la ricerca locale viene utilizzata per minimizzare la funzione obiettivo, piuttosto che trovare una soluzione. L'algoritmo viene eseguito per un certo periodo di tempo (magari includendo riavvii casuali per esplorare altre parti dello spazio di ricerca), mantenendo sempre l'assegnazione migliore trovata fino a quel momento e restituendola come risposta.
                </p>
                
                <p className='post-text'>
                    La ricerca locale per l'ottimizzazione ha una complicazione in più che non si presenta quando ci sono solo vincoli rigidi. Con solo vincoli rigidi, l'algoritmo ha trovato una soluzione quando non ci sono conflitti. Per l'ottimizzazione, è difficile determinare se la migliore assegnazione totale trovata sia la migliore soluzione possibile. 
                    Un <strong>ottimo locale</strong> è un'assegnazione totale che è almeno altrettanto buona, secondo il criterio di ottimalità, di qualsiasi suo possibile successore. Un <strong>ottimo globale</strong> è un'assegnazione totale che è buona almeno quanto tutte le altre assegnazioni totali. Senza cercare sistematicamente le altre assegnazioni, 
                    l'algoritmo potrebbe non sapere se la migliore assegnazione trovata finora è un ottimo globale o se esiste una soluzione migliore in una parte diversa dello spazio di ricerca.
                </p>

                <p className='post-text'>
                    Quando si utilizza la ricerca locale per risolvere problemi di ottimizzazione vincolata, con vincoli rigidi e flessibili, è spesso utile consentire all'algoritmo di violare i vincoli rigidi sulla strada per una soluzione. Questo viene fatto assegnando al costo della violazione di un vincolo rigido un valore grande ma finito.
                </p>
                <p className='post-text'>
                    Per l'ottimizzazione con domini continui, una ricerca locale diventa più complicata perché non è ovvio quali siano i possibili successori di un'assegnazione totale. Per l'ottimizzazione in cui la funzione di valutazione è continua e differenziabile, è possibile utilizzare la <strong>discesa del gradiente</strong> per trovare un valore minimo e l'ascesa del gradiente 
                    per trovare un valore massimo. La <strong>discesa in pendenza</strong> è come camminare in discesa e fare sempre un passo nella direzione che scende di più; questa è la direzione in cui una roccia cadrà se lasciata libera. L'idea generale è che il successore di un assegnamento totale sia un gradino in discesa proporzionale alla pendenza della funzione di valutazione h. 
                    Pertanto, la discesa del gradiente fa passi in ciascuna direzione proporzionali al negativo della derivata parziale in quella direzione.         
                </p>

                <p className='post-text'>
                    La discesa del gradiente viene utilizzata per l'apprendimento dei parametri, in cui potrebbero esserci migliaia o addirittura milioni di parametri con valori reali da ottimizzare. Ci sono molte varianti di questo algoritmo. Ad esempio, invece di utilizzare una dimensione del passo costante, l'algoritmo potrebbe eseguire una ricerca binaria per determinare una dimensione del passo ottimale a livello locale. Per le funzioni lisce, 
                    dove c'è un minimo, se la dimensione del passo è sufficientemente piccola, la discesa del gradiente convergerà a un minimo locale. Se la dimensione del passo è troppo grande, è possibile che l'algoritmo diverge. Se la dimensione del passo è troppo piccola, l'algoritmo sarà molto lento. Se c'è un minimo locale unico, la discesa del gradiente, con una dimensione del passo sufficientemente piccola, convergerà a quel minimo globale. 
                    Quando sono presenti più minimi locali, non tutti minimi globali, potrebbe essere necessario eseguire una ricerca per trovare un minimo globale, ad esempio eseguendo un riavvio casuale o una passeggiata casuale. Questi non sono garantiti per trovare un minimo globale a meno che l'intero spazio di ricerca non sia esaurito, ma spesso sono i migliori che possiamo ottenere.
                </p>

                <div className="succ-post">
                    <Link to="/Introduzione-alle-proposizioni">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON13