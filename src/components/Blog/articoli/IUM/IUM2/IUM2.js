import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Navbar/Navbar';
import HomeIum from '../../../../assets/ium_1900.webp';
import ModelloNorman from './modelloDiNorman.webp';
import { Link } from 'react-router-dom';
import '../IUM.css';
import '../../Articoli.css';

function IUM2() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 2. Interazione Uomo Macchina - L'usabilità</title>
            <meta name='keywords' content='interazione uomo macchina, ium, appunti universitari, usabilità, modello di Norman, ciclo di feedback,memorabilità,affordance,apprendibilità, accessibilità '/>
            <meta name='description' content='Cosa si intende per memorabilità? Che cos&#39;è l&#39;apprendibilià? Andiamo a scoprirlo dandone una definizione in base ai vari standard ISO '/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 2. Interazione Uomo Macchina - L&#39;usabilità'/>
            <meta name='og:description' content='Cosa si intende per memorabilità? Che cos&#39;è l&#39;apprendibilià? Andiamo a scoprirlo dandone una definizione in base ai vari standard ISO'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 2. Interazione Uomo Macchina - L&#39;usabilità"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/ium_1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/modelloDiNorman.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIum} alt="Logo della pagina riferita alla materia interazione uomo macchina" className='header-img'title='interazione uomo macchina'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Interazione-uomo-macchina-Introduzione"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">2. Interazione Uomo Macchina - L'usabilità</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2022-12-01" className='data' itemprop="datePublished" content="2022-12-01T07:30:00+08:00">01/12/2022</time>
                                
                <p className='post-text first-text'>Nel mondo della progettazione del software incentrato sull'utente, è fondamentale analizzare il modo con l'utente comune andrà ad interagire con il sistema, permettendo di individuare le cause delle difficoltà durante il suo utilizzo, per poi andarle a risolvere.
                 Il modello più semplice di interazione fra un sistema e l'utente è il <i>ciclo di feedback</i>, nel quale l'utente fornisce un input al sistema per raggiungere il proprio scopo, ricevendo da quest'ultimo una risposta o feedback che viene interpretato e confrontato con lo scopo iniziale. Il risultato del
                 confronto porta ad una successiva azione dell'utente, innescando un continuo ciclo di domanda e risposta. Donald Norman si interessò a questo ciclo di feedback e realizzò uno schema molto dettagliato, che prende il nome di <strong>modello di Norman</strong>. </p>
                
                <div className='box-image'>
                    <img loading="lazy" decoding="async" src={ModelloNorman} alt="Schema di rete ad accesso in forma ibrida" className='post-img2' title='Figura 1: Modello di Norman'/>
                    <p className='image-capture'>Figura 1: modello di Norman</p>
                </div>
                <p className='post-text'>Norman divise l'interazione tra uomo e sistema in 7 stadi principali:</p>
                <div className='numerata'>
                    <ul>
                        <li><i>Formare lo scopo</i>: fase in cui l'utente forma lo scopo che vuole raggiungere</li>
                        <li><i>Formare l'intenzione</i>: l'utente decide cosa intende fare per raggiungere lo scopo prefissato</li>
                        <li><i>Specificare un'azione</i>: pianifica nel dettaglio le azioni specifiche da compiere</li>
                        <li><i>Eseguire l'azione</i>: esegue effettivamente le azioni pianificate</li>
                        <li><i>Percepire lo stato del mondo</i>: osserva come sono cambiati il sistema e il mondo circostante dopo le nostre azioni</li>
                        <li><i>Interpretare lo stato del mondo</i>: pianifica nel dettaglio le azioni specifiche da compiere</li>
                        <li><i>Valutare il risultato</i>: decide se lo scopo iniziale è stato raggiunto.</li>
                    </ul>
                </div>
                <p className='post-text'>I punti 2, 3 e 4 prendono parte della fase di esecuzione, in cui si pianificano e si effettuano le azioni, mentre i punti 5, 6 e 7 fanno parte della fase di valutazione, in cui 
                 si valutano le azioni eseguite. Questo modello può essere applicato a qualsiasi tipo di azione, anche se Norman lo considera un modello approssimativo. Attraverso questo modello, però, si riescono a
                  individuare i momenti in cui si possono presentarsi dei problemi. Ci sono due golfi difficili da superare:</p>
                
                <ul>
                    <li><i>il golfo della esecuzione</i>, che separa lo stadio delle intenzioni da quello delle azioni</li>
                    <li><i>il golfo della valutazione</i>, che separa lo stadio della percezione dello stato del mondo da quello della valutazione dei risultati</li>
                </ul>

                <p className='post-text'>Quindi il golfo dell'esecuzione separa le intenzioni dalle azioni che permettono di realizzarle, per superarlo si dovranno identificare fra le azioni che è possibile eseguire con il sistema, quelle 
                che permettono all'utente di raggiungere lo scopo. Mentre il golfo della valutazione è legato alle difficoltà che l'utente deve superare per interpretare lo stato fisico del sistema dopo le azioni effettuate e comprendere se ha raggiunto 
                o meno lo scopo prefissato. Per superare il golfo dell'esecuzione, un oggetto deve possedere una buona <i>affordance</i>, ovvero la proprietà di un oggetto di influenzare attraverso la sua forma il modo in cui viene utilizzato. Mentre per
                superare il golfo della valutazione, l'oggetto deve fornire un feedback facilmente interpretabile. </p>

                <p className='post-text'>Il modello di Norman fa capire quando e perchè nascono i problemi di usabilità, ma non definisce l'usabilità. Lo standard ISO 9241 definisce <strong>l'usabilità</strong> di un prodotto come il grado con cui esso
                può essere usato da specifici utenti per raggiungere specificati obiettivi con efficacia, efficienza e soddisfazione in uno specificato contesto d'uso. Questa definizione scompone l'usabilità in tre assi:</p>
                <ul>
                    <li><i>l'efficacia</i>, definita come l'accuratezza e la completezza con cui gli utenti raggiungono specificati obiettivi;</li>
                    <li><i>l'efficienza</i>, definita come quantità di risorse spese in relazione all'accuratezza e alla completezza con cui gli utenti raggiungono gli obiettivi;</li>
                    <li><i>la soddisfazione</i>, definita come la sensazione positiva verso l'uso del prodotto.</li>
                </ul>
                <p className='post-text'>Attraverso queste tre misure potremmo misurare l'usabilità associando tre grandezze numeriche che quantificano obiettivamente l'efficacia, l'efficienza e la soddisfazione dell'utente. L'usabilità di un prodotto dipende
                anche da due fattori aggiuntivi, anch'essi molto importanti, <i>l'apprendibilità</i> e <i>la memorabilità</i>. All'inizio, l'utente non conosce il sistema e impara piano piano ad utilizzarlo, fino a diventare un esperto. In questo
                processo di apprendimento l'utente può incontrare difficoltà in base alle caratteristiche del sistema. Un sistema con un'elevata apprendibilità risulta molto semplice da imparare. Nello sviluppo di un sistema, un progettista deve compiere diverse scelte:</p>
                <ul>
                    <li>prendere in considerazione tutti gli <i>utenti occasionali</i> come principali destinatari del prodotto, i quali non utilizzeranno il prodotto assiduamente e quindi non sono disposti a spendere molto tempo per apprenderlo</li>
                    <li>progettare il sistema considerando in primis gli <i>utenti continuativi</i>, ovvero tutti coloro che utilizzeranno il sistema in modo continuativo e pertanto saranno disposti a investire del tempo per imparare ad utilizzarlo.</li>
                </ul>
                <p className='post-text'>I risultati della progettazione, nei due casi, produrranno prodotti molto differenti, destinati quindi a due tipologie di clienti diversi, anche se vi è una terza opzione, ovvero quella in cui il prodotto è destinato alle due
                categorie di clienti sopra elencate. In quest'ultimo caso, il sistema offrirà compiti basilari con un rapido apprendimento e funzioni più complesse e specifiche che richiedono un tempo di apprendimento più lungo. Quando il prodotto è destinato a utenti 
                occasionali, è auspicabile che possieda una buona <strong>memorabilità</strong>, ovvero la capacità del sistema di essere appreso da questi ultimi con facilità e a ricordare il suo utilizzo a distanza di tempo.</p>
                
                <p className='post-text'>Nielsen definisce l'usabilità come la somma di cinque attributi: </p>

                <ul>
                    <li><strong>Apprendibilità:</strong> il sistema dovrebbe essere facile da imparare, in modo tale che l'utente possa rapidamente iniziare a ottenere qualche risultato dal sistema;</li>
                    <li><strong>Efficienza:</strong> il sistema dovrebbe essere efficiente da usare e aumentare il livello di produttività nel momento in cui l'utente ha imparato a usarlo;</li>
                    <li><strong>Memorabilità:</strong> il sistema dovrebbe essere facile da ricordare, in modo tale che l'utente occasionale sia in grado di ritornare al sistema dopo un periodo di non utilizzo, senza dover imparare tutto di nuovo;</li>
                    <li><strong>Errori:</strong> il sistema dovrebbe rendere difficile sbagliare o fare in modo che se l'utente ne commetta uno, si possa facilmente recuperare;</li>
                    <li><strong>Soddisfazione:</strong> il sistema dovrebbe essere piacevole da usare.</li>
                </ul>
                
                <p className='post-text'>L'usabilità è un concetto relativo, un oggetto non è usabile a livello assoluto, bisogna specificare per quali utenti, obiettivi e in quali contesti d'uso il prodotto
                 può essere usato. Si è deciso di utilizzare l'espressione <i>usabilità universale</i> per indicare tutti quei prodotti e servizi destinati a un'utenza generica. Per <strong>usabilità universale </strong> 
                  si intende un prodotto o un servizio che può essere utilizzata facilmente da tutti senza discriminazioni. Correlato al concetto di usabilità universale, è il concetto di <strong>accessibilità</strong>,
                 concetto che indica la capacità dei sistemi informatici, nelle forme e nei limiti consentiti dalle conoscenze tecnologiche, di erogare servizi e fornire informazioni fruibili, senza discriminazioni,
                  anche da parte di coloro che a causa di disabilità necessitano di tecnologie assistite o configurazioni particolari.</p>
                
                <p className='post-text'>A volte il termine di <i>accessibilità universale</i> per enfatizzare ulteriormente un'accessibilità estesa a tutti i possibili utenti. Inoltre non bisogna confondere l'accessibilità e l'usabilità,
                 sono due concetti diversi. L'usabilità garantisce un uso efficiente, efficace e soddisfacente del sistema, mentre l'usabilità garantisce la possibilità di accedere al sistema.</p>
                 <div className="succ-post">
                    <Link to="/Interazione-uomo-macchina-Conoscere-l-utente">Post successivo &#8594;</Link>
                 </div>
               </section>
        </article>
        <Footer/>
    </div>
  )
}

export default IUM2