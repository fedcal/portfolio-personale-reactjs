import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Navbar/Navbar';
import HomeIum from '../../../../assets/ium_1900.webp';
import { Link } from 'react-router-dom';
import '../IUM.css';
import '../../Articoli.css';
import Memorie from './Memorie.webp';
import Latex from 'react-latex';
function IUM3() {
    const piuomeno=`$$ \\pm $$`
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog -  3. Interazione Uomo Macchina - Conoscere l&#39;utente</title>
            <meta name='keywords' content='interazione uomo macchina, ium, appunti universitari, usabilità, modello di Norman, ciclo di feedback,memorabilità,affordance,apprendibilità, accessibilità '/>
            <meta name='description' content='Cosa si intende per memorabilità? Che cos&#39;è l&#39;apprendibilià? Andiamo a scoprirlo dandone una definizione in base ai vari standard ISO '/>
            <meta name='robots' content='index,follow'/>
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 3. Interazione Uomo Macchina - Conoscere l&#39;utente'/>
            <meta name='og:description' content='Cosa si intende per memorabilità? Che cos&#39;è l&#39;apprendibilià? Andiamo a scoprirlo dandone una definizione in base ai vari standard ISO'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog -  3. Interazione Uomo Macchina - Conoscere l&#39;utente"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Interazione-uomo-macchina-Conoscere-l-utente" />
       
        </Helmet>
        <Navbar/>
        <div itemscope itemtype="https://schema.org/BlogPosting">

            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/ium_1900.webp" />
            <meta itemprop="image" content="https://www.federicocalo.dev/static/media/modelloDiNorman.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img src={HomeIum} alt="Logo della pagina riferita alla materia reti di calcolatori" className='header-img'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">3. Interazione Uomo Macchina - Conoscere l'utente</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <span className='data' itemprop="datePublished" content="2022-12-17T07:30:00+08:00">17/12/2022</span>
                                
                <p className='post-text first-text'>Come accennato nella descrizione del post, quando si sviluppa un sistema destinato all'uso da parte di diversi utenti, si deve studiare come questi si relazioneranno con esso in base a diversi fattori quali le caratteristiche individuali, il livello di apprendimento o il ruolo dell'utente. Possiamo racchiudere
                 gli utenti in quattro livelli in cui emergono le loro diversità: </p>
                
                <ul>
                    <li><i>livello cognitivo</i></li>
                    <li><i>livello personale</i></li>
                    <li><i>livello comportamentale</i></li>
                    <li><i>il ruolo in cui l'utente si trova</i></li>
                </ul>
                <p className='post-text'> Ogni livello deve essere studiato con metodi diversi, approcciando a diversi metodi interdisciplinari, quali ad esempio quelli relativi alla psicologia sperimentale e all'etnografia. A livello cognitivo, una pietra miliare è rappresentata dal libro <a href="https://amzn.to/3W1QA80" className='link'>"The Psychology of Human-Computer Interaction"</a>,
                 in cui gli autori specificano come i processi sensoriali, cognitivi e motori che caratterizzano l'utente influenza il modo in cui il progettista sviluppi il sistema in maniera consona rispetto ai compiti richiesti. Questo avviene generalmente attraverso l'analisi dei compiti, chiamata generalmente <strong>task analysis</strong>, attraverso la quale si valutano diverse soluzioni
                  progettuali prima della loro realizzazione, per poter scegliere quella più conveniente dal punto di vista prestazionale. Nel libro si può riscontrare la descrizione di un metodo che prende il nome di <strong>GOMS</strong>, ovvero <i>goals, operators, Methods and Selection rules</i>, in base al quale si decompone l'interazione con il sistema nelle sue azioni elementari. I <i>Goals</i>  definiscono 
                  gli obiettivi che l'utente intende raggiungere, le <i>Operators</i> costituiscono tutte quelle azioni necessarie a raggiungere gli obiettivi. Mentre, per quanto riguarda i <i> Methods</i>, vengono raggruppate tutte le seguenze di operazioni che il sistema offre per raggiungere ogni singolo goals. L'insieme di più methods possibili per uno stesso obiettivo, prende il nome
                  di <i>Selection rules</i>, correlato da una descrizione di criteri di selezione di un metodo rispetto ad un altro.</p>
                
                <p className='post-text'>Questa tecnica permette al progettista di individuare i limiti in termini di prestazione del sistema, tenendo conto dei limiti dell'utente e della possibilità che quest'ultimo sbagli. Entra in gioco anche l'attenzione, ovvero l'insieme di processi cognitivi che consentono all'utente di selezionare solo le informazioni più importanti da elaborare. E' come se 
                 vi fosse un filtro che ci permette di focalizzare l'attenzione in particolari dettagli rispetto ad altri. Questo ci permette di classificare l'attenzione in <strong>attenzione selettiva</strong>, quando ci si focalizza su un singolo evento, e in <strong>attenzione divisiva</strong>, quando vengono seguiti più eventi contemporaneamente. Questi due tipi di attenzione sono tra di loro
                  dipendenti, in quanto aspetti di uno stesso fenomeno. Vi sono diverse teorie sull'attenzione che analizzano di diversi fattori esterni, <i>esogeni</i>, e interni, <i>endogeni</i>. I primi fanno riferimento alle caratteristiche degli stimoli che arrivano ai nostri sensi, mentre nel secondo caso siamo noi a guidare l'attenzione. Inoltre si è dimostrato come riusciamo a concentrare 
                  maggiore attenzione in compiti sempre più difficili.</p>
                
                <p className='post-text'>Il progettista non deve certamente trascurare questi aspetti:</p>
                <ul>
                    <li>come mantenere costantemente l'attenzione dell'utente sugli elementi desiderati dell'interfaccia</li>
                    <li>come evitare interferenze indesiderate, che sottraggano l'attenzione dell'utente da tali elementi;</li>
                    <li>come ridurre al minimo le richieste di attenzione divisa poste dall'interfaccia.</li>
                </ul>

                <p className='post-text'>Un altro elemento da tenere in considerazione è la memoria dell'utente che può essere divisa in <i>memoria sensoriale</i>, <i>memoria a breve termine</i>, <i>memoria a lungo termine</i>. Questi tipi di memoria sono tra di loro collegate, e si può rappresentare in questo modo: </p>
                <div className='box-image'>
                    <img src={Memorie} alt="Schema di rete ad accesso in forma ibrida" className='post-img2'/>
                    <p className='image-capture'>Figura 1: Vari tipi di memorie</p>
                </div>
                <p className='post-text'>Come si può evincere, quando arriva un <i>input sensoriale</i>, i suoi dati vengono elaborati dapprima dalla memoria sensoriale, la quale li registra temporaneamente, li seleziona e li carica nella memoria a breve termine. Quest'ultima è la memoria dedicata alle elaborazioni mentali, anche se le informazioni vengono memorizzate per un periodo di tempo molto breve, in quanto 
                servono a supportare i processi cognitivi in atto, prima di trasferirli definitivamente nella memoria a lungo termine. Una unità di misura della memoria a breve termine è detta chunk, e ogni <i>STM</i>, ovvero <strong>short time memory</strong>, riesce a memorizzare 7<Latex>{piuomeno}</Latex>2. Questo è stato quantificato dallo studioso Miller, il quale ha definito un chunk come un raggruppamento di elementi che trattiamo 
                in modo unitario. Questo aspetto deve essere considerato dal progettista che dovrà facilitare il chunking, facendo memorizzare all'utente solo elementi che abbiano significato, e deve minimizzare le richieste di memorizzazione. Per quanto riguarda la memoria a lungo termine, il progetista deve riuscire a trovare il miglior modo possibile per poter codificare e recuperare le informazioni in essa.</p>

                <p className='post-text'> Un altro aspetto dell'utente che il progettista deve tenere in considerazione è la vista, il cui sguardo segue percorsi irregolari, dettati a volte dalla disposizione degli oggetti su cui cade l'attenzione. In questa situazione è sufficiente utilizzare alcune tecniche di eye-tracking, ovvero tecniche attraverso le quali si cerca di seguire la direzione dello sguardo, andando successivamente
                 ad analizzarla e a distribuire in maniera ottimale gli oggetti. Le ultime due caratteristiche da considerare si riferiscono alle attività motorie e il contesto in cui l'utente si identifica in relazione del sistema.</p>
               </section>
        </div>
        <Footer/>
    </div>
  )
}

export default IUM3