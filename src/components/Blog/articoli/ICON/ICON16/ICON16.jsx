import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON16() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 16. Problemi di rappresentazione della conoscenza</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, linguaggio delle clausole proposizionali definite, proposizione atomica, proposizione definita,testa (head),regola,corpo,clausola atomica,fatto, procedura di dimostrazione, procedura bottom-up,procedura top-down '/>
            <meta name='description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 16. Problemi di rappresentazione della conoscenza'/>
            <meta name='og:description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 16. Problemi di rappresentazione della conoscenza"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Problemi-di-rappresentazione-della-conoscenza" />
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
                    <Link to="/Introduzione-alle-proposizioni"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">16. Problemi di rappresentazione della conoscenza</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-03-29" className='data' itemProp="datePublished" content="2023-04-05T07:30:00+08:00">05/04/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    La conoscenza di abse di una KB consente all'agente di agire in maniera utile attraverso le osservazioni. Quest'ultime sono costituite da informazioni ricevute online dagli utenti, da sensori o da latre risorse di conoscenza. Vi sono casi in cui le osservazioni sono incluse nella base di conoscenza, mentre in altri casi sono 
                    separate.
                </p>

                <p className='post-text'>
                   Non sempre gli utenti dicono ciò che è vero e ciò che non lo è. Vi sono diversi motivi, tra i quali non sanno ciò che è rilevante e non conoscono il vocabolario da usare. Questi problemi possono però essere risolti attraverso un'ontologia che specifica il significato dei simboli e un'interfaccia utente grafica per facilitare l'utente. 
                   Anche i sensori passivi sono in grado di fornire oservazioni dirette, mentre i sensori attivi necessitano di essere interrogati per un compito.
                </p>

                <p className='post-text'>
                    Un modo semplice per aquisire informazioni da un utente consiste nell'icorporare le sue informazioni attraverso un meccanismo denominato <strong>ask-to-user</strong> nella fase di prova top-down. Un atomo è definito <strong>askable</strong> se in fase di esecuzione l'utente può conoscere il valore di verità. La procedura di dimostrazione 
                    top down, quando seleziona un atomo da dimostrare, può utilizzare una clausola nella base di conoscenza per dimostrarlo oppure, se l'atomo è interrogabile, può chiedere all'utente se esso è vero o meno.
                </p>

                <p className='post-text'>
                    L'utente viene quindi interrogato su atomi rilevanti attraverso le query. Ci sono due classi di atomi che possono essere selezionati:
                </p>

                <ul>
                    <li>atomi per i quali non ci si aspetta che l'utente conosca la risposta</li>
                    <li>atomi askable per i quali l'utente non ha già fornito una risposta, in questo caso la risposta dovrebbe essere chiesta all'utente e registrata</li>
                </ul>

                <p className='post-text'>
                    Invece di rispondere alle domande, a volte è preferibile che un utente sia in grado di specificare che sta accadendo qualcosa di strano o insolito. Dato che un utente ha specificato tutto ciò che è eccezionale, un agente può spesso dedurre qualcosa dalla mancanza di conoscenza. La normalità sarà un valore predefinito che può essere sovrascritto con informazioni eccezionali.
                </p>

                <p className='post-text'>
                    L'uso esplicito della semantica consente di spiegare e di effettuare il debugging della base di conoscenza. Per rendere un sistema utilizzabile dalle persone, il sistema non può limitarsi a dare una risposta e aspettarsi che l'utente ci creda. Vi sono tre tipi di domande per interrogare la base di conoscenza e ottenre una spiegazione:
                </p>

                <ul>
                    <li><strong>How</strong>: viene utilizzata per spiegare come è stata dimostrata una risposta</li>
                    <li><strong>Why</strong>: viene utilizzata per chiedere al sistema perchè sta ponendo una domanda all'utente</li>
                    <li><strong>whynot</strong>: viene utilizzata per chiedere perché un atomo non è stato dimostrato</li>
                </ul>

                <p className='post-text'>
                    La domanda <i>how</i> può essere posta dall'utente al sistema per chiedere spiegazioni di come è stata dimostrata una risposta. In questo caso  il sistema fornisce la clausola definita utilizzata per dedurre la risposta. Per ogni atomo nel corpo della proposizione definita, l'utente può chiedere come il sistema ha dimostrato quell'atomo. Inoltre l'utente può rispondere a una 
                    domanda del sistema tramite la domanda <i>why</i> per conoscere la regola che ha prodotto la domanda.
                </p>

                <p className='post-text'>
                    La spiegazione del sistema dimostra come un atomo è stato dimostrato. Se c'è una prova per g, allora g è una clausola aotmica o una regola <InlineMath math='g \leftarrow a_1 \wedge \dots \wedge a_k'/> tale che ogni <InlineMath math='a_i'/> è stata provata. Se il sistema ha provato g e l'utente chiede come, il sistema può visualizzare la clausola che è stata uata per provare g. Se 
                    la clausola è una regola, l'utente può chiedere <i>how i</i> per ricevere la regola usata per provare <InlineMath math='a_i'/>. Utilizzando questa tecnica ricorsivamente, l'utente può esplorare g come è stato dimostrato.
                </p>

                <h2>Debug della conoscenza</h2>

                <p className='post-text'>
                    Le basi di conoscenza possono contenere errori e omissioni. Gli esperti di dominio e gli ingegneri della conoscenza devono essere in grado di eseguire il debug di una base di conoscenza e aggiungere conoscenza. Nei sistemi basati sulla conoscenza, il debugging è difficile perché gli esperti del dominio e gli utenti che hanno la conoscenza del dominio necessaria per rilevare un bug non 
                    necessariamente sanno nulla del funzionamento interno del sistema, né lo desiderano. Gli strumenti di debug standard, come fornire tracce dell'esecuzione, sono inappropriati perché richiedono una conoscenza del meccanismo con cui è stata prodotta la risposta.
                </p>

                <p className='post-text'>
                    Il debugging a livello di conoscenza è il processo di ricerca di errori nelle basi di conoscenza con riferimento solo al significato dei simboli e a ciò che è vero nel mondo. Uno degli obiettivi della costruzione di sistemi basati sulla conoscenza utilizzabili da una serie di esperti di dominio è che una discussione sulla correttezza di una base di conoscenza dovrebbe essere una discussione sul dominio della conoscenza. 
                    Si possono individuare 4 tipi di errori non sintattici che possono sorgere nei sistemi basati su regole:
                </p>

                <ul>
                    <li>Viene prodotta una risposta errata in seguito a una derivazione errata su un atomo falso nell'interpretazione </li>
                    <li>Una risposta che non è stata prodotta a vausa di una dimostrazionne fallimentare su un atomo che avrebbe dovuto aver successo</li>
                    <li>Il programma entra in un ciclo infinito</li>
                    <li>Il sistema pone domande irrilevanti</li>
                </ul>

                <p className='post-text'>
                    Quando si verifica una <i>risposta errata</i> da parte del sistema, si dice che si è verificato l'<strong>errore falso-positivo</strong>. Questo si verifica quando nella dimostrazione è stata utilizzata una clausola definita errata. Supponiamo che ci sia un atomo g che era previsto falso nell'interpretazione. Ci sarà quindi una regola <InlineMath math="g \leftarrow a_1 \wedge \dots \wedge a_k"/> nella 
                    base di conoscenza che verrà utilizzata per provare g. Ciò porta a pensare a due sole possibilità:
                </p>

                <ul>
                    <li>una delle <InlineMath mmath='a_i'/> è falsa all'interno dell'implementazione</li>
                    <li>tutte le <InlineMath mmath='a_i'/> sono vere all'interno dell'interpretazione e quindi la clausola <InlineMath math='g \leftarrow a_i\wedge \dots \wedge a_k'/> è incorretta</li>
                </ul>
                

                
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON16