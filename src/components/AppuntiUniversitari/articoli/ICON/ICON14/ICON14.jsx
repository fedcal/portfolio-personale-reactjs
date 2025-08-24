import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON14() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 14. Introduzione alle proposizioni</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, Metodi basati sulla popolazione e ottimizzazione, popolazione,individui,beam search,ricerca stocastica del raggio,stochastic beam search,distribuzione di Gibbs,distribuzione di Boltzmann,Ottimizzazione,relazione di preferenza,problema di ottimizzazione,funzione obiettivo,criterio di ottimalità,
            problema di ottimizzazione vincolata,problema di ottimizzazione dei vincoli,vincolo flessibile,Metodi sistematici per l&#39;ottimizzazione, La coerenza dell&#39;arco,strettamente dominato,ricerca locale per l&#39;ottimizzazione,ottimo locale,ottimo globale,discesa del gradiente,discesa in pendenza'/>
            <meta name='description' content='Come detto nei precedenti articoli, le affermazioni sul mondo forniscono vincoli su ciò che potrebbe essere vero. I vincoli possno essere specificati estensionalmente attraverso tabelle di assegnazioni possibili delle variabili, o intenzionalmente in termini di formule. Per molti domini le proposizioni 
                    forniscono un linguaggio adatto per fornire vincoli intenzionali. Le proposizioni sono spesso utilizzate per specificare vincoli e query, i motivi sono molteplici:'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 14. Introduzione alle proposizioni'/>
            <meta name='og:description' content='Come detto nei precedenti articoli, le affermazioni sul mondo forniscono vincoli su ciò che potrebbe essere vero. I vincoli possno essere specificati estensionalmente attraverso tabelle di assegnazioni possibili delle variabili, o intenzionalmente in termini di formule. Per molti domini le proposizioni 
                    forniscono un linguaggio adatto per fornire vincoli intenzionali. Le proposizioni sono spesso utilizzate per specificare vincoli e query, i motivi sono molteplici:'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 14. Introduzione alle proposizioni"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Introduzione-alle-proposizioni" />
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
                    <Link to="/Metodi-basati-sulla-popolazione-e-ottimizzazione"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemProp="headline">14. Introduzione alle proposizioni</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-03-29" className='data' itemProp="datePublished" content="2023-03-29T07:30:00+08:00">29/03/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Oltre alla base di conoscenza, un'agente ha a sua disposizione un insieme di proposizioni e inferenze tramite le quali decide cosa è vero e cosa no nel mondo. Introduciamo i formalismi di ragionamento tramite le proposizioni, ciascuno dei quali differisce in base alla gestione delle osservazioni e alla base di conoscenza su 
                    cui si basano.
                </p>

                <p className='post-text'>
                    Come detto nei precedenti articoli, le affermazioni sul mondo forniscono vincoli su ciò che potrebbe essere vero. I vincoli possno essere specificati <i>estensionalmente</i> attraverso tabelle di assegnazioni possibili delle variabili, o intenzionalmente in termini di formule. Per molti domini le proposizioni 
                    forniscono un linguaggio adatto per fornire vincoli intenzionali. Le proposizioni sono spesso utilizzate per specificare vincoli e query, i motivi sono molteplici:
                </p>

                <ul>
                    <li>Spesso è più conciso e leggibile fornire un'affermazione logica sulla relazione tra alcune variabili piuttosto che utilizzare una rappresentazione estensionale;</li>
                    <li>La forma della conoscenza può essere sfruttata per rendere più efficiente il ragionamento;</li>
                    <li>Sono modulari, facilitando in questo modo le modifiche e il <i>debug della knowledge base</i>;</li>
                    <li>Il tipo di domande a cui un agente può dover rispondere può essere più ricco delle singole assegnazioni di valori alle variabili</li>
                    <li>Questo linguaggio è esteso al ragionamento sugli individui e le relazioni ;</li>
                </ul>

                <p className='post-text'>Introduciamo così il calcolo proposizionale</p>

                <h2>Sintassi e semantica del calcolo proposizionale</h2>

                <p className='post-text'>
                    Si definisce <strong>proposizione</strong> una frase, scritta in un linguaggio, che ha un valore di verità in un mondo (quindi può essere vera o falsa). Una proposizione può essere atomica o essere costituita da più proposizioni atomiche attraverso l'uso di connettivi logici. Una <strong>proposizione atomica</strong>, o <i>atomo</i>, 
                    è un simbolo, generalmente consistono di lettere, cifre e il carattere di sottolineatura. Ad esempio is_empty. Le proposizioni possono essere costruite da proposizioni più semplici usando connettivi logici.
                </p>

                <p className='post-text'>
                    Una proposizione composta può essere nella forma.
                </p>
                
                <table>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Lettura</th>
                            <th>Significato</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math='\neg p'/></td>
                            <td>"not p"</td>
                            <td>negazione di p</td>
                        </tr>
                        <tr>
                            <td><InlineMath math='p \land q'/></td>
                            <td>"p and q"</td>
                            <td>congiunzione di p e q</td>
                        </tr>
                        <tr>
                            <td><InlineMath math='p \lor q'/></td>
                            <td>"p or q"</td>
                            <td>disgiunzione di p e q</td>
                        </tr>
                        <tr>
                            <td><InlineMath math='p \rightarrow q'/></td>
                            <td>"p implica q"</td>
                            <td>implicazione di q da p</td>
                        </tr>
                        <tr>
                            <td><InlineMath math='p \leftarrow q'/></td>
                            <td>"p se q"</td>
                            <td>implicazione di p da q</td>
                        </tr>

                        <tr>
                            <td><InlineMath math='p \leftrightarrow q'/></td>
                            <td>"p se e solo se q"</td>
                            <td>equivalenza di p e q</td>
                        </tr>
                    </tbody>
                </table>

            <p className='post-text'>
                P e q sono delle preposizioni, mentre gli operatori utilizzati prendono il nome di <strong>connettivi logici</strong>. Possono essere create delle espressioni proporzionali, mediante l'utilizzo di 
                parentesi, che rendono leggibili le formule. Quando queste sono omesse, viene seguito l'ordine degli operatori come sopra.
            </p>

            <p className='post-text'>
                Definiamo ora la <strong>semantica</strong> della logica proposizionale. Ogni atomo ha un significato, vero o falso, e ogni interpretazione è una funzione che mappa questi due valori ai relativi atomi. 
                Una base di conoscenza è un insieme di proposizioni dichiarate vere, ogni elemento prende il nome di <strong>assioma</strong>.
            </p>

            <p className='post-text'>
                Un <strong>modello</strong> di una base di conoscenza KB è un'interpretazione di cui tutte le proposizioni sono vere. Se g è una proposizione, può essere considerata una <strong>conseguenza logica</strong> della 
                base di conoscenza se può essere scritta come: <InlineMath math='KB \models g'/>, se questa è vera per ogni modello di KB.
            </p>

            <h4>La semantica dal punto di vista dell'uomo</h4>

            <p className='post-text'>
                Descrivere una semantica non ci dice perchè essa è interessante o come può essere utilizzata per costruire sistemi intelligenti. Un progettista ha un mondo particolare da caratterizzare e deve scegliere poterlo 
                interpretare, scegliendo i significati per i simboli rispetto a quel mondo e scrivere proposizioni su ciò che è vero. La metodologia utilizzata può essere rappresentata in diversi passi.
            </p>

            <dl>
                <dt>Passo 1</dt>
                <dd>Il progettista sceglie un dominio di attività o un mondo da rappresentare.</dd>
                
                <dt>Passo 2</dt>
                <dd>Il progettista della base di conoscenza seleziona gli atomi per rappresentare le proposizioni di interesse, ognuno avrà un significato preciso all'interno dell'interpretazione.</dd>

                <dt>Passo 3</dt>
                <dd>Si prosegue con l'<strong>assiomatizzazione del dominio</strong>, fase in cui il progettista indica le proposizione del sistema che sono vere all'interno della propria interpretazione;</dd>

                <dt>Passo 4</dt>
                <dd>Il progettista della knowledge base pone delle domande sull'interpretazione alle quali il sistema può rispondere.</dd>
            </dl>

            <p className='post-text'>
                Una specificazione del significato dei simboli è chiamata <strong>ontologia</strong>. Le ontologie possono essere specificate in modo informale nei commenti, ma sono sempre più specificate nei linguaggi formali per consentire l'interoperabilità semantica, 
                ovvero la capacità di utilizzare insieme simboli provenienti da diverse basi di conoscenza.
            </p>


            <div className="succ-post">
                <Link to="/Clausole-e-vincoli-proposizionali">Post successivo &#8594;</Link>
            </div>
                
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON14