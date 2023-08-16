import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON9() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 9. Eliminare lo spazio di ricerca</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, strategia di ricerca, spazio di ricerca,Eliminare lo spazio di ricerca,Ciclo di potatura,Cycle Pruning, complessità computazionale della potatura,Potatura a percorsi multipli,Multiple-Path Pruning,eliminazione dei percorsi multipli,set esplorato,euristica consistenza,restrizione monotona'/>
            <meta name='description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 9. Eliminare lo spazio di ricerca'/>
            <meta name='og:description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 9. Eliminare lo spazio di ricerca"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Eliminare-lo-spazio-di-ricerca" />
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
                    <Link to="/La-ricerca-euristica"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">9. Eliminare lo spazio di ricerca</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-07" className='data' itemProp="datePublished" content="2023-02-07T07:30:00+08:00">07/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Abbiamo visto fin'ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama <strong>potatura</strong>. In questo articolo vedremo due strategie di potatura che agiscono in maniera diversa in base all'obiettivo.
                </p>

                <h2>Ciclo di potatura (Cycle Pruning)</h2>

                <p className='post-text'>
                    La prima strategia che vedremo è denominata <strong>ciclo di potatura</strong> o <i>cycle pruning</i>. Un grafo che rappresenta uno spazio di ricerca può includere cicli. In questa strategia per eliminare il ciclo si controlla se l'ultimo nodo sul percorso appare già prima sul percorso del nodo iniziale. Questi percorsi vengono scartati 
                    quando vengono aggiunti alla frontiera o non vengono aggiunti affatto.
                </p>

                <p className='post-text'>
                    La complessità computazionale della potatura del ciclo dipende dal metodo di ricerca utilizzato. Per i metodi depth-first, l'overhead può essere basso come un fattore costante, memorizzando gli elementi del percorso corrente come un set (ad esempio, mantenendo un bit impostato quando il nodo è nel percorso o utilizzando una funzione hash). 
                    Per le strategie di ricerca che mantengono percorsi multipli il ciclo di potatura richiede un tempo lineare rispetto alla lunghezza del percorso cercato.
                </p>

                <h2>Potatura a percorsi multipli (Multiple-Path Pruning)</h2>
                
                <p className='post-text'>
                    Spesso c'è più di un percorso per un nodo. Se è richiesto un solo percorso, un algoritmo di ricerca può eliminare dalla frontiera qualsiasi percorso che conduca a un nodo verso il quale ha già trovato un percorso. Per risolvere questo problema si utilizza la strategia dell'<strong>eliminazione dei percorsi multipli</strong>, la quale viene 
                    implementata mantenendo un <strong>set esplorato</strong> di nodi che si trovano alla fine dei percorsi che sono stati espansi.
                </p>

                <p className='post-text'>
                    L'insieme esplorato è inizialmente vuoto. Quando un percorso <InlineMath math='< n_0, \dots, n_k >'/> è selezionato, viene eseguito un controllo su <InlineMath math='n_k'/> e se questo è già presente nell'insieme esplorato, il percorso può essere scartato. Altrimenti <InlineMath math='n_k'/> viene aggiunto all'insieme esplorato e l'algoritmo 
                    continua la sua esplorazione.
                </p>

                <p className='post-text'>
                    Questo approccio non garantisce necessariamente che il percorso meno costoso non venga scartato. Potrebbe essere necessario fare qualcosa di più sofisticato per garantire che venga trovata una soluzione ottimale. Per garantire che l'algoritmo di ricerca possa ancora trovare un percorso a minor costo verso un obiettivo, è possibile:
                </p>

                <ul>
                    <li>Assicurasi che il primo percorso trovato per qualsiasi nodo sia un percorso a basso costo per quel nodo, quindi elimina tutti i percorsi successivi trovati per quel nodo;</li>
                    <li>Se l'algoritmo di ricerca trova un percorso a un nodo a costo inferiore rispetto a uno già trovato, potrebbe rimuovere tutti i percorsi che utilizzavano il percorso a costo più elevato verso il nodo</li>
                    <li>Ogni volta che la ricerca trova un percorso a un nodo a basso costo rispetto a un percorso a quel nodo già trovato, potrebbe incorporare una nuova sezione iniziale sui percorsi che hanno esteso il percorso iniziale.</li>
                </ul>

                <p className='post-text'>
                    La prima di queste alternative consente l'utilizzo del set esplorato senza perdere la capacità di trovare un percorso ottimale. Gli altri richiedono algoritmi più sofisticati. Nella ricerca con il costo più basso, il primo percorso trovato verso un nodo (ovvero, quando il nodo viene selezionato dalla frontiera) è il percorso con il 
                    costo più basso verso il nodo. L'eliminazione dei percorsi successivi a quel nodo non può rimuovere un percorso a basso costo verso quel nodo, e quindi l'eliminazione dei percorsi successivi a ciascun nodo consente comunque di trovare una soluzione ottimale.
                </p>

                <p className='post-text'>
                    L'algoritmo di ricerca A* non garantisce che quando un percorso verso un nodo viene selezionato per la prima volta sia il percorso a minor costo verso quel nodo. Il teorema di ammissibilità lo garantisce per ogni percorso verso un nodo obiettivo, ma non per ogni percorso verso qualsiasi nodo. Se vale per tutti i nodi dipende dalle proprietà della funzione euristica. 
                    Un'<strong>euristica consistenza</strong> è una funzione non negativa h(n) su un nodo n che soddisfa la condizione h(n)<InlineMath math=' \leq'/> cost(n,n')+h(n') per due nodi n' e n, dove cost(n,n') è il costo del percorso meno costoso da n a n'. Se h(g)=0 per qualsiasi obiettivo g, allora un'euristica coerente non è mai una sovrastima del costo del passaggio da un 
                    nodo n ad un obiettivo.
                </p>

                <p className='post-text'>
                    La coerenza può essere garantita se la funzione euristica soddisfa la <strong>restrizione monotona</strong> h(n) <InlineMath math='\leq'/> cost (n, n')+h(n') per qualsiasi arco {"<"}n,n'{"}"}. È più facile controllare la restrizione monotona in quanto dipende solo dagli archi, mentre la consistenza dipende da tutte le coppie di nodi. La coerenza e la restrizione monotona 
                    possono essere comprese in termini di disuguaglianza triangolare , che specifica che la lunghezza di qualsiasi lato di un triangolo non può essere maggiore della somma delle lunghezze degli altri due lati.
                </p>

                <p className='post-text'>
                    La ricerca A* ammette la potatura a più percorsi, la mancanza di questo fattore dovrebbe essere resa esplicita. Spetta al progettista di una funzione euristica garantire che l'euristica sia coerente e quindi verrà trovato il percorso ottimale. L'eliminazione a percorsi multipli include l'eliminazione del ciclo, poiché un ciclo è un altro percorso verso un nodo e pertanto 
                    viene eliminato. L'eliminazione di percorsi multipli può essere eseguita in tempo costante, impostando un bit su ciascun nodo a cui è stato trovato un percorso se il grafico è memorizzato in modo esplicito o utilizzando una funzione hash.
                </p>

                <p className='post-text'>
                    La potatura a percorsi multipli è preferita alla potatura ciclica per i metodi in ampiezza in cui praticamente tutti i nodi considerati devono essere comunque archiviati. La ricerca in profondità non deve memorizzare tutti i nodi alla fine di percorsi già espansi; memorizzarli per implementare la potatura a percorsi multipli rende esponenziale la ricerca in profondità nello spazio. 
                    Per questo motivo, la potatura ciclica è preferita alla potatura a percorsi multipli per la ricerca in profondità.
                </p>

                <p className='post-text'>
                    L'eliminazione dei percorsi multipli non è appropriata per una ricerca IDA*, perché lo spazio richiesto per archiviare il set esplorato è in genere maggiore dello spazio richiesto per A*, vanificando così lo scopo dell'approfondimento iterativo. La potatura ad anello può essere utilizzata con IDA*. Nei domini in cui sono presenti più percorsi per un nodo, IDA* perde gran parte della sua efficacia.
                </p>

                <h2>Riepilogo delle strategia di ricerca</h2>

                <p className='post-text'>
                    Un algoritmo di ricerca è completo se è garantito che trovi una soluzione se ce n'è una. Quelle strategie di ricerca che sono garantite per trovare un percorso con il minor numero di archi o il minor costo sono complete. Hanno una complessità temporale nel caso peggiore che aumenta in modo esponenziale con il numero di archi sui percorsi esplorati. Gli algoritmi che non garantiscono l'arresto 
                    (depth-first e greedy best-first) hanno una complessità temporale infinita nel caso peggiore.
                </p>

                <p className='post-text'>
                La ricerca in profondità ha utilizzato lo spazio lineare rispetto al numero di archi nei percorsi esplorati, ma non è garantito che trovi una soluzione anche se ne esiste una. Breadth-first, lowest-cost-first  e A* possono essere esponenziali sia nello spazio che nel tempo, ma è garantito che trovino una soluzione se ne esiste una, anche se il grafico è infinito fintanto che ci sono fattori di ramificazione finiti e i costi dell'arco sono limitati sopra lo zero. 
                </p>
                
                <div className="succ-post">
                    <Link to="/Ragionamento-con-vincoli-parte-1">Post successivo &#8594;</Link>
                </div>
                
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON9