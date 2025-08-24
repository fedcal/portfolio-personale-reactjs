import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON10() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 10. Ragionamento con vincoli PT.1</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai,vincoli rigidi, variabili, caratteristiche, vincoli flessibili, mondo possibile, variabili algebriche, dominio,variabili discrete,variabili binarie,variabili booleane,variabile continua,problema di soddisfazione del vincolo, csp, Definizione del problema di soddisfazione del vincolo, Algoritmi di generazione e test,spazio di assegnazione,backtracking,Algoritmi di consistenza,
            consistente nel dominio,arco consistente,algoritmo della consistenza generalizzata dell arco'/>
            <meta name='description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 10. Ragionamento con vincoli PT.1'/>
            <meta name='og:description' content='Abbiamo visto fin ora svariati algoritmi di ricerca, i quali però possono essere migliorati prendendo in considerazione più percorsi verso un nodo. Introduciamo quindi una tecnica che si chiama potatura.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 10. Ragionamento con vincoli PT.1"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Ragionamento-con-vincoli-parte-1" />
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
                    <Link to="/Eliminare-lo-spazio-di-ricerca"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">10. Ragionamento con vincoli PT.1</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-02-11" className='data' itemProp="datePublished" content="2023-02-11T07:30:00+08:00">11/02/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Gli agenti lavorano in termini di stati, in genere questi vengono descritti in termini di <strong>caratteristiche</strong>, descrivendo le funzionalità attraverso le <strong>variabili</strong>. Le caratteristiche non indipendenti e ci possono essere <strong>vincoli rigidi</strong> che specificano combinazioni legali di assegnazioni di valori 
                    a variabili. Nella pianificazione e programmazione un agente assegna un tempo per ogni azione. Questi incarichi devono soddisfare vincoli sull'ordine in cui le azioni possono essere eseguite e vincoli che specificano che le azioni raggiungono un obiettivo. Le preferenze rispetto alle assegnazioni sono specificate in termini di <strong>vincoli flessibili</strong>.
                </p>

                <p className='post-text'>
                    Nel descrivere i problemi di soddisfazione dei vincoli si utilizzano variabili e mondi possibili. Un <strong>mondo possibile</strong> è un modo possibile in cui il mondo potrebbe essere. La loro descrizione avviene tramite <strong>variabili algebriche</strong>, ovvero dei simboli usati per denotare caratteristiche di mondi possibili. Vengono scritte in maiuscolo e 
                    ognuna ha un <i>dominio</i> associato. Vi sono diversi tipi di variabili:
                </p>

                <ul>
                    <li><strong>variabili discrete</strong>, le quali hanno un dominio finito o numerabili finito</li>
                    <li><strong>variabili binarie</strong>, che sono un caso particolare di variabili discrete e hanno solo due valori nel proprio dominio</li>
                    <li><strong>variabili booleane</strong>, le quali possono assumere solo i valori di "vero" o "falso"</li>
                    <li><strong>variabile continua</strong>, i cui valore sono all'interno di un insieme reale</li>
                </ul>

                <p className='post-text'>
                    E' importante definire la funzione di <strong>assegnazione</strong> sull'insieme di variabili e diciamo che questa assegnazione è totale quando questa assegna tutte le variabili. Quindi 
                    un <strong>mondo possibile</strong> è definito come un incarico totale, ovvero come una funzione che assegna da variabili in valori ad ogni variabile. 
                </p>

                <p className='post-text'>
                    Il numero di mondi è il prodotto del numero di valori nei domini delle variabili. Quindi se ci sono N variabili e ciascuna con una dimensione del dominio pari a D, allora ci sono <InlineMath math='D^N'/> mondi 
                    possibili.
                </p>

                <p className='post-text'>
                    In molti domini, non tutte le possibili assegnazioni di variabili sono consentite per via dell'esistenza di <strong>vincoli</strong>, detti anche <i>vincoli rigidi</i>. Questi vincoli specificano le combinazioni legali 
                    di assegnazione di valori alle variabili. Definiamo un <strong>ambito</strong> come un insieme di variabili e una <strong>relazione</strong> al suo interno è costituita da una funzione che agisce su un ambito S restituisce 
                    un valore vero o falso.
                </p>

                <p className='post-text'>
                    Un vincolo C è un ambito S e una relazione su S. Si dice che un vincolo coinvolge ciascuna delle variabili nel suo ambito. Un mondo soddisfa un insieme di vincoli se per ogni vincolo, i valori assegnati in w alle variabili 
                    soddisfano il vincolo. Definiamo il <strong>problema di soddisfazione del vincolo</strong> o <i>CSP</i>.
                </p>

                <dl className='definizione'>
                    <dt><strong>Definizione del problema di soddisfazione del vincolo </strong></dt>
                    <dd>
                        Un problema di soddisfazione del vincolo (CSP) è costituito da
                        <ul>
                            <li>un insieme di variabili,</li>
                            <li>un dominio per ogni variabile</li>
                            <li>un insieme di vincoli.</li>
                        </ul>
                    </dd>
                </dl>

                <p className='post-text'>
                    Un CSP finito ha un insieme finito di variabili e un dominio finito per ogni variabile. Alcuni dei metodi considerati in questo capitolo funzionano solo per CSP finiti, sebbene alcuni siano progettati per domini infiniti, anche continui. 
                    Quando ci si ritrova a dover risolvere un CSP, è utile svolgere una serie di attività:
                </p>

                <ul>
                    <li>Determinare se esiste o meno un modello</li>
                    <li>Trovare un modello</li>
                    <li>Contare il numero di modelli.</li>
                    <li>Enumerare tutti i modelli</li>
                    <li>Trovare un modello migliore, data una misura di quanto sono buoni i modelli</li>
                    <li>Determinare se qualche affermazione vale in tutti i modelli</li>
                </ul>

                <p className='post-text'>
                    L'aspetto multidimensionale dei CSP, in cui ogni variabile è una dimensione separata, rende questi compiti difficili da risolvere, ma fornisce anche una struttura che può essere sfruttata. Alcuni dei metodi possono anche determinare 
                    se non esiste un modello e possono essere adattati per trovare tutti i modelli. Ciò che può essere più sorprendente è che alcuni dei metodi possono trovare un modello se ne esiste uno, ma non possono determinare che non esiste un modello se non esiste.
                </p>

                <h3>Algoritmi di generazione e test</h3>

                <p className='post-text'>
                    Un CSP finito potrebbe essere risolto da un esaustivo algoritmo di generazione e test. Lo <strong>spazio di assegnazione</strong> D è l'insieme delle assegnazioni totali. L'algoritmo restituisce un modello o tutti i modelli. L' algoritmo 
                    di generazione e verifica per trovare un modello è il seguente: controllare a turno ogni assegnazione totale; se viene trovato un incarico che soddisfa tutti i vincoli, restituire tale assegnazione. Un algoritmo di generazione e verifica per trovare tutti i modelli è lo stesso tranne che, invece di restituire il primo modello trovato, salva tutti i modelli trovati.
                </p>

                <p className='post-text'>
                    Se ciascuna delle N variabili di dominio ha una dimensione pari a d, allora D ha una dimensione pari a <InlineMath math='D^N'/> elementi. Inoltre la presenza di è vincoli, comporta che il totale dei vincoli testati è <InlineMath math='O(ed^n)'/>. 
                    Al crescere di n il problema diventa intrattabile e si deve pensare a diversi metodi risolutivi. 
                </p>

                <p className='post-text'>
                    I problemi CSP possono essere risolti attraverso algoritmi di ricerca. Gli algoritmi di generazione e test assegnano valori alle variabili prima di controllare i vincoli. Poiché i singoli vincoli coinvolgono solo un sottoinsieme delle variabili, alcuni vincoli possono essere verificati 
                    prima che a tutte le variabili vengano assegnati valori. Se un'assegnazione parziale non è coerente con un vincolo, anche qualsiasi assegnazione totale che estende l'assegnazione parziale sarà incoerente.
                </p>

                <p className='post-text'>
                    L'algoritmo di ricerca che viene utilizzato nella risoluzione dei problemi CSP utilizza un grafo da cercare  è definito mediante:
                </p>

                <ul>
                    <li>I nodi sono costituiti da assegnazioni di valori di sottoinsiemi di variabili </li>
                    <li>I neighbors di un nodo n sono ottenuti selezionando una variabile Y che non è assegnata a un nodo n</li>
                    <li>n ha un neighboor per ogni assegnamento i un valore a Y che non viola il vincolo</li>
                    <li>Il nodo iniziale è un'assegnazione vuota che non assegna nessun valore a nessuna variabile</li>
                    <li>Un nodo obiettivo è un nodo che assegna un valore a ogni variabile.</li>
                </ul>

                <p className='post-text'>
                    Supponiamo che n sia l'assegnazione {"{"}<InlineMath math='X_1=v_1, \dots. X_k=v_k'/>{"}"}. Per trovare i neighbors di n, si seleziona una variabile Y che non nell'insieme {"{"}<InlineMath math='X_1,\dots,X_k'/>{"}"}. Per ogni 
                    valore <InlineMath math='y_i \in dom(Y)'/>, nella quale <InlineMath math='X_1 = v_1, \dots, X_k = v_k, Y = y_i'/> è consistente per ogni vincolo, il nodo {"{"}<InlineMath math='X_1 = v_1, \dots, X_k = v_k, Y = y_i'/>{"}"} è un 
                    neighbor di n.
                </p>

                <p className='post-text'>
                    La ricerca in un albero attraverso un algoritmo di ricerca in profondità viene chiamato tipicamente <strong>backtracking</strong> ed è più efficiente di un algoritmo di generazione e test. L'algoritmo di generazione e test è equivalente a 
                    non controllare i vincoli sui nodi foglia prima di effettuare delle operazioni. Il controllo dei vincoli più in alto nell'albero può eliminare i sottoalberi di grandi dimensioni che non devono essere cercati.
                </p>

                <h3>Algoritmi di consistenza</h3>

                <p className='post-text'>
                    La ricerca in profondità all'interno dello spazio dei vincoli presenta ancora alcuni punti di miglioramento. In questo caso vengono in aiuto gli <strong>algoritmi di consistenza</strong>, i quali operano molto bene su una rete di vincoli dei 
                    problemi CSP. Infatti in questi algoritmi:
                </p>
                
                <ul>
                    <li>Esiste un nodo in ogni variabile</li>
                    <li>Esiste un nodo per ogni vincolo</li>
                    <li>Ogni variabile X viene associata a un insieme di possibili valori <InlineMath math='D_X'/> che prende il nome di <i>dominio della variabile</i></li>
                    <li>Per ogni vincolo c e per ogni variabile X nel suo ambito esiste un arco {"<"} X, c{">"}</li>
                </ul>

                <p className='post-text'>
                    Questa rete prende il nome di <strong>rete di vincoli</strong>. Se un vincolo ha solo una variabile nello scopo, l'arco è <strong>consistente nel dominio</strong> per ogni valore che la variabile soddisfa nel vincolo. Mentre se esiste un vincolo c ha 
                    nel proprio scopo {"{"} <InlineMath math='X, Y_1, \dots, Y_k'/> {"}"}, un arco {"<"} X, c {">"} è un <strong>arco consistente</strong> se, per ogni valore di <InlineMath math='x \in D_X'/>, esistono valori <InlineMath math='y_1, \dots, y_k'/> dove 
                    ogni <InlineMath math='y_i \in D_{Y_i}'/>, tale che il vincolo <InlineMath math='c = ( X =x, Y_1=y_1, \dots, Y_k = y_k'/> è soddisfatto. Una rete di archi è consistente se tutti gli archi sono consistenti.
                </p>

                <p className='post-text'>
                    Se un arco {"<"}X, c{">"} non è un arco consistente, ci sono alcuni valori di X per i quali non ci sono valori per <InlineMath math='Y_1, \dots. Y_k'/> per i quali vale il vincolo. In questo caso, tutti i valori di X in <InlineMath math='D_X'/> per i quali non 
                    vi sono valori corrispondenti per altre variabili possono essere cancellate da <InlineMath math='D_X'/> per rendere l'arco consistente. Quando un valore è rimosso dal dominio, gli archi che precedentemente erano consistenti, non lo saranno più.
                </p>

                <h3>L'algoritmo della consistenza generalizzata dell'arco (GAC)</h3>

                <p className='post-text'>
                    Questo tipo di algoritmo rende un insieme di archi consistenti considerando un insieme di archi potenzialmente inconsistenti. L'insieme to_do inizialmente consiste di tutti gli archi del grafo. Fino a quando l'insieme non rimane vuoto, un arco {"<"} X, c {">"} è 
                    rimosso dall'insieme e considerato. Se l'arco non è consistente, viene reso consistente sfoltendo il dominio della variabile X.
                </p>

                <p className='post-text'>
                    Dopo aver eliminato la variabile X, tutti gli archi precedentemente consistenti potrebbero non esserlo più e vengono inseriti nell'insieme to_do. Questi archi {"<"} Z, c' {">"}, dove c' è una consistenza differente da c in X, e Z è la variabile coinvolta in c'.
                </p>

                <p className='post-text'>
                    Indipendentemente dall'ordine in cui vengono considerati gli archi, l'algoritmo terminerà con lo stesso risultato, vale a dire una rete consistente con gli archi e lo stesso insieme di domini ridotti. Sono possibili tre casi, a seconda dello stato della rete al momento della terminazione:
                </p>

                <ul>
                    <li>Nel primo caso, un dominio diventa vuoto, indicando che non esiste alcuna soluzione per il CSP;</li>
                    <li>Nel secondo caso, ogni dominio ha un valore singleton, che indica che esiste un'unica soluzione per il CSP;</li>
                    <li>Nel terzo caso, ogni dominio non è vuoto e almeno uno contiene più valori. In questo caso, non sappiamo se esiste una soluzione o come sono le soluzioni.</li>
                </ul>

                <div className="succ-post">
                    <Link to="/Ragionamento-con-vincoli-parte-2">Post successivo &#8594;</Link>
                </div>
                
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON10