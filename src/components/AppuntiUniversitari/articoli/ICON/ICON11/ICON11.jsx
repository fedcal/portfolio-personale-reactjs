import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON11() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 11. Ragionamento con vincoli PT. 2</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, suddivisione del dominio, analisi dei casi,Eliminare le variabili,eliminazione delle variabili (VE),min-factor,carenza minima,riempimento minimo, Ricerca locale,random initializtion,inizializzazione casuale,
            random restart,ricerca locale,cammino,Miglioramento iterativo,funzioni di valutazione,discesa avida,ascesa avida,ottimo locale,ottimo globale,Algoritmi randomizzati,riavvio casuale,passeggiata casuale,locale stocastica '/>
            <meta name='description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 11. Ragionamento con vincoli PT. 2'/>
            <meta name='og:description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 11. Ragionamento con vincoli PT. 2"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Ragionamento-con-vincoli-parte-2" />
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
                    <Link to="/Ragionamento-con-vincoli-parte-1"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">11. Ragionamento con vincoli PT. 2</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-12" className='data' itemProp="datePublished" content="2023-02-12T07:30:00+08:00">12/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    In questa seconda parte relativa al ragionamento con vincoli, introduciamo ulteriori concetti rispetto all'articolo precedente. Il primo è senza dubbio un ulteriore metodo per semplificare la rete dei vincoli, ovvero la <strong>suddivisione del dominio</strong>, denominata anche come <i>analisi dei casi</i>. 
                    L'idea alla base di questo metodo è quella di suddividere il problema in un numero di casi disgiunti e risolvere ogni caso separatamente.  L'insieme di tutte le soluzioni al problema iniziale è l'unione delle soluzioni a ciascun caso.
                </p>
                
                <p className='post-text'>
                    Considerando un semplice caso, supponiamo di avere una variabile binaria X con un dominio {"{"} t, f {"}"}. Le soluzioni avranno X=t o X=f, quindi per semplificare il problema possiamo dividere il dominio principale in due sotto domini, 
                    risolvere il problema in questi due. In questo modo stiamo effettuando una <i>riduzione</i>. 
                </p>

                <p className='post-text'>
                    Ci sono diversi metodi per dividere un dominio composto da diversi elementi. I due più semplici consistono del dividere il dominio in più sottodomini, uno per ogni caso, mentre il secondo consiste nel dividere il dominio in due sottodomini 
                    disgiunti e non vuoti. Il primo metodo porta più risultati rispetto al secondo, ma allo stesso tempo il secondo consente una potatura del dominio con meno passaggi.
                </p>

                <p className='post-text'>
                    Risolvere ricorsivamente i casi utilizzando la suddivisione del dominio, riconoscendo quando non c'è soluzione basata sulle assegnazioni, è equivalente all'algoritmo di ricerca visto <Link className='link' to='/Ragionamento-con-vincoli-parte-1'>nel precedente articolo</Link>. Un modo per renderlo più efficiente, 
                    consiste nell'utilizzare la consistenza dell'arco all'interno di un algoritmo di ricerca.
                </p>

                <p className='post-text'>
                    Per semplificare la risoluzione di un CSP, si potrebbe semplificare la rete prima di ogni fase della suddivisione del dominio. Questo algoritmo non richiede la consistenza dell'arco per ripartire da zero dopo la divisione del dominio. La suddivisione del dominio costituisce uno spazio di ricerca da cui è possibile utilizzare uno qualsiasi dei metodi 
                    di ricerca visti in precedenza. Tuttavia, poiché interessa solo la soluzione e non il percorso e poiché lo spazio di ricerca è finito, per questi problemi viene spesso utilizzata la ricerca in profondità.
                </p>

                <h3>Eliminare le variabili</h3>

                <p className='post-text'>
                    A differenza della consistenza dell'arco in cui viene semplificata la rete rimuovendo i valori delle variabili, vi è un metodo complementare attraverso il quale si semplifica la rete rimuovendo le variabili ed è definito <strong>eliminazione delle variabili (VE)</strong>. L'idea alla base di questo metodo consiste 
                    nell'eliminare una variabile X e costruire un nuovo vincolo, sulle variabili rimanenti, che riflette gli effetti della variabile X sulle altre. 
                </p>

                <p className='post-text'>
                    Vengono sostituiti tutti i vincoli che comportano X, formando una rete ridotta che non coinvolge quest'ultimo. Il nuovo vincolo è costruito in modo tale che qualsiasi soluzione al CSP ridotto possa essere estesa a una soluzione del CSP che contiene X. Possiamo definire uno pseudocodice di questo algoritmo che riceve in input 
                    un insieme Vs contenente tutte le variabili e un insieme CS contenente i vincoli su Vs. In output restituisce le assegnazioni delle variabili coerenti.
                </p>

                <div className='pre'>
                    <div className='code'>
                        <h3>Pseudocodice 11.1</h3>
                        <h3>Algoritmo VE per un CSP</h3>
                        <h3>VE_CSP ( Vs, CS )</h3>
                        <p>
                            <span className='number-row'>1.</span> Se Vs contiene solo un elemento allora<br/>
                            <span className='number-row'>2.</span> &emsp;restituisce l'unione di tutte le relazioni in Cs<br/>
                            <span className='number-row'>3.</span> altrimenti <br/>
                            <span className='number-row'>4.</span> &emsp; seleziona una variabile Xs da eliminare<br/>
                            <span className='number-row'>5.</span> &emsp;Vs' = Vs \ {"{"}X{"}"}<br/> 
                            <span className='number-row'>6.</span> &emsp;<InlineMath math='Cs_X'/> = {"{"}T <InlineMath math='\in'/> Cs : T coinvolge X {"}"}<br/>
                            <span className='number-row'>7.</span> &emsp;definiamo R come l'unione di tutti i vincoli in <InlineMath math='Cs_X'/><br/>
                            <span className='number-row'>8.</span> &emsp;definiamo R' come proiezione di R sulle variabili diverse da X<br/> 
                            <span className='number-row'>9.</span> &emsp;S = VE_CSP(Vs',(Cs\<InlineMath math='Cs_X) \cup'/>{"{"}R'{"}"})<br/>
                            <span className='number-row'>10.</span> &emsp;restituisci R<InlineMath math='\bowtie'/>S<br/>   
                        </p>
                    </div>
                </div>

                <p className='post-text'>
                    Il caso base della ricorsione si verifica quando rimane solo una variabile. In questo caso ( riga 2 ), esiste una soluzione se e solo se ci sono righe nel join delle relazioni finali. Si noti che queste relazioni sono tutte relazioni su una singola variabile, e quindi sono gli insiemi di valori legali per questa variabile. L'unione di queste relazioni 
                    è l'intersezione di questi insiemi.
                </p>

                <p className='post-text'>
                    Durante la ricorsione una variabile X è selezionata per l'eliminazione alla riga 4. La variabile selezionata non influisce sulla correttezza dell'algoritmo, ma può influire sull'efficienza. Per eliminare la variabile X, l'algoritmo propaga l'effetto alle variabili correlate. 
                    Questo è possibile farlo unendo tutte le relazioni in cui X è coinvolto e quindi proietta X dalla relazione risultante.
                </p>

                <p className='post-text'>
                    Se si vuole ottenere solo una soluzione si può restituire un elemento del join. Indipendentemente dall'elemento restituito, è garantito che quell'elemento farà parte di una soluzione. L'efficienza dell'algoritmo VE dipende dall'ordine in cui le variabili vengono selezionate. 
                    Essa può essere determinata considerando la struttura grafica.
                </p>

                <p className='post-text'>
                    In generale, VE è efficiente quando la rete di vincoli è sparsa. Il numero di variabili nella relazione più grande restituita per un particolare ordinamento di variabili è chiamato larghezza dell'albero del grafico per quell'ordinamento di variabili. La larghezza dell'albero di un grafico è la larghezza minima dell'albero per qualsiasi ordinamento. 
                    La complessità di VE è esponenziale nella larghezza dell'albero e lineare nel numero di variabili.
                </p>

                <p className='post-text'>
                    Trovare un ordinamento di eliminazione che si traduca nella larghezza dell'albero più piccola è NP-difficile. Tuttavia, esistono alcune buone euristiche. I due più comuni sono:
                </p>

                <ul>
                    <li><strong>min-factor</strong>: in ogni fase si seleziona la variabile che risulta nella relazione la più piccola</li>
                    <li><strong>carenza minima</strong> o <strong>riempimento minimo</strong>: in ogni fase si seleziona la variabile che aggiunge il minor numero di archi alla rete di vincoli rimanente.</li>
                </ul>

                <h3>Ricerca locale</h3>

                <p className='post-text'>
                    Molti spazi sono troppo grandi per una ricerca sistematica e forse sono anche infiniti. In un tempo ragionevole, la ricerca sistematica non sarà riuscita a considerare uno spazio sufficiente per fornire risultati significativi. I metodi non cercano sistematicamente l'intero spazio di ricerca, ma sono progettati per trovare rapidamente soluzioni in media. 
                    Non garantiscono che verrà trovata una soluzione anche se ne esiste una, e quindi non sono in grado di dimostrare che non esiste alcuna soluzione.
                </p>

                <p className='post-text'>
                    I metodi di ricerca locale iniziano con un'assegnazione totale di un valore a ciascuna variabile e cercano di migliorare questa assegnazione in modo iterativo eseguendo passaggi di miglioramento, eseguendo passaggi casuali o ricominciando con un'altra assegnazione totale. Sono stati definiti diversi algoritmi di ricerca, definiamo lo pseudocodice di un algoritmo 
                    di ricerca generico per un CSP. Questo accetta in input un insieme di variabili Vs, una funzione dom tale che dom(X) è il dominio della variabile X e un insieme di vincoli Cs da soddisfare. Come output restituisce un'assegnazione totale che soddisfa i vincoli. Infine utilizza un array A di valori indicizzati dalle variabili in Vs.
                </p>

                <div className='pre'>
                    <div className='code'>
                        <h3>Pseudocodice 11.2</h3>
                        <h3>Algoritmo di ricerca generico per un CSP</h3>
                        <h3>Local_search ( Vs, dom, CS )</h3>
                        <p>
                            <span className='number-row'>1.</span> repeat<br/>
                            <span className='number-row'>2.</span> &emsp;per ogni variabile X in Vs fai:<br/>
                            <span className='number-row'>3.</span> &emsp;&emsp;A[X]= un valore casuale in dom(X) <br/>
                            <span className='number-row'>4.</span> &emsp; while !stop_walk() & A non è un assegnamento soddisfatto, allora<br/>
                            <span className='number-row'>5.</span> &emsp;&emsp;Seleziona una variabile Y e un valore w <InlineMath math='\in'/> dom(Y)<br/> 
                            <span className='number-row'>6.</span> &emsp;&emsp;imposta A[Y]=w<br/>
                            <span className='number-row'>7.</span> &emsp;Se A è un assegnamento soddisfatto allora<br/>
                            <span className='number-row'>8.</span> &emsp;&emsp;restituisci A<br/> 
                            <span className='number-row'>9.</span> fino a quando non termini<br/>
                        </p>
                    </div>
                </div>

                <p className='post-text'>
                    Il vettore A specifica l'assegnamento di un valore a ogni variabile. Il primo loop assegna un valore casuale a ogni variabile, la prima volta che questo procedimento viene eseguito, prende il nome di <strong>random initializtion</strong>, <i>inizializzazione casuale</i>. Le altre iterate prendono il nome di <strong>try</strong>. Gli assegnamenti alle righe 2 e 3 
                    prendono il nome di <strong>random restart</strong>. Il loop alla riga 4 esegue una <strong>ricerca locale</strong> o un <strong>cammino</strong>. In questo processo viene considerato un insieme di possibili <i>successori</i> per l'assegnamento totale di A.
                </p>

                <p className='post-text'>
                    Il criterio di stop è dato dalla funzione stop_walk() per decidere quando interrompere la ricerca locale corrente ed eseguire un riavvio casuale, ricominciando con una nuova assegnazione. L'arresto di questo algoritmo non è garantito. In particolare, se la condizione di terminazione è falsa, continua all'infinito se non c'è soluzione e, anche se c'è una soluzione, 
                    è possibile rimanere intrappolati in qualche regione dello spazio di ricerca. Un algoritmo è <strong>completo</strong> se garantisce di trovare una risposta ogni volta che ce n'è una. Questo algoritmo può essere completo o incompleto, a seconda della selezione e del criterio di arresto.
                </p>

                <h4>Miglioramento iterativo</h4>
                
                <p className='post-text'>
                    Il <strong>miglioramento iterativo</strong> è un algoritmo di ricerca locale che seleziona un successore dell'assegnazione corrente che migliora maggiormente alcune <strong>funzioni di valutazione</strong>. Se ci sono diversi possibili successori che migliorano maggiormente la funzione di valutazione, ne viene scelto uno a caso. Quando l'obiettivo è minimizzare, questo algoritmo è chiamato <strong>discesa avida</strong>. 
                    Quando l'obiettivo è massimizzare una funzione, si parla di arrampicata in collina o <strong>ascesa avida</strong>.
                </p>

                <p className='post-text'>
                    Il miglioramento iterativo richiede un modo per valutare ogni assegnazione totale. Per i problemi di soddisfazione dei vincoli, una funzione di valutazione comune è il numero di vincoli violati. Un vincolo violato è chiamato <strong>conflitto</strong>. Poiché la funzione di valutazione è il numero di conflitti, una soluzione è un'assegnazione totale con una valutazione pari a zero. A volte questa funzione di valutazione 
                    viene affinata ponderando alcuni vincoli più di altri.
                </p>

                <p className='post-text'>
                    Un <strong>ottimo locale</strong> è un'assegnazione tale che nessun possibile successore migliora la funzione di valutazione. Questo è anche chiamato minimo locale in discesa avida, o massimo locale in salita avida. Un <strong>ottimo globale</strong> è un'assegnazione che ha il miglior valore tra tutte le assegnazioni. Tutti gli ottimi globali sono ottimi locali, ma possono esserci molti ottimi locali che non sono ottimi globali. 
                    Se la funzione euristica è il numero di conflitti, un CSP soddisfacibile ha un ottimo globale con un valore euristico pari a 0 e un CPS insoddisfacente ha un ottimo globale con un valore superiore a 0. Se la ricerca raggiunge un minimo locale con un valore superiore a 0 , non sai se si tratta di un minimo globale (il che implica che il CSP non è soddisfacibile) o meno.
                </p>

                <p className='post-text'>
                    Il miglioramento iterativo considera la migliore assegnazione del successore anche se è uguale o addirittura peggiore dell'assegnazione corrente. Ciò significa che se ci sono due o più assegnazioni che sono possibili successori l'una dell'altra e sono tutte ottimali locali, ma non globali, continuerà a spostarsi tra queste assegnazioni e non raggiungerà mai un ottimo globale. Pertanto, questo algoritmo non è completo.
                </p>

                <h3>Algoritmi randomizzati</h3>

                <p className='post-text'>
                    La casualità può essere utilizzata per sfuggire ai minimi locali che non sono minimi globali in due modi principali:
                </p>

                <ul>
                    <li><strong>riavvio casuale</strong>, in cui i valori per tutte le variabili vengono scelti a caso. Ciò consente alla ricerca di iniziare da una parte completamente diversa dello spazio di ricerca.</li>
                    <li><strong>passeggiata casuale</strong>, in cui vengono eseguiti alcuni passaggi casuali interlacciati con i passaggi di ottimizzazione. Con la discesa avida, questo processo consente passaggi verso l'alto che possono consentire alla passeggiata casuale di sfuggire a un minimo locale che non è un minimo globale.</li>
                </ul>

                <p className='post-text'>
                    Una passeggiata casuale è una mossa casuale locale, mentre un riavvio casuale è una mossa casuale globale. Per problemi che coinvolgono un gran numero di variabili, un riavvio casuale può essere piuttosto costoso. Un mix di miglior miglioramento iterativo con mosse casuali è un'istanza di una classe di algoritmi nota come ricerca <strong>locale stocastica</strong>.
                </p>
                <div className="succ-post">
                    <Link to="/Ragionamento-con-vincoli-parte-3">Post successivo &#8594;</Link>
                </div>

            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON11