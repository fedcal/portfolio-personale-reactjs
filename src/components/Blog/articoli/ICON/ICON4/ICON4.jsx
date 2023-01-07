import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import img1 from './scomposizione.webp';


import * as Latex from 'react-latex'
import 'katex/dist/katex.min.css'

function ICON4() {
  const fRemember =`$$ S \\times P_l \\times C_h \\rightarrow S $$`;
  const fCommand = `$$ S \\times P_l \\times C_h \\rightarrow C_l$$`;
  const fTell = `$$ S \\times P_l \\times C_h \\rightarrow P_h$$`;
  const m1=`$$P_l$$`;
  const m2=`$$C_h$$`;
  const m3=`$$P_h$$`;
  const m4=`$$C_l$$`;
  
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 4. Controlli e azioni di un agente</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, agente, agente computazionale, orizzonte progettuale, funzione di transizione dello stato di credenza, a funzione di commando, funzione di percezione,
            sistema ibrido, ragionamento quantitativo, ragionamento qualitativo, punti di riferimento,termini sfocati,ragionamento per ordini di grandezza, derivati qualitativi, modello, resa dei conti,dead reckoning, sistema puramente reattivo,knowledge base '/>
            <meta name='description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 4. Controlli e azioni di un agente'/>
            <meta name='og:description' content='In questo articolo andremo ad approfondire lo spazio di progettazione degli agenti, con le relative proprietà e limiti. Infine definiremo alcune applicazioni in cui l&#39;intelligenza artificiale può essere
                     applicata, descrivendo in maniera generale alcuni esempi.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 4. Controlli e azioni di un agente"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Controlli-e-azioni-di-un-agente" />
        </Helmet>
        <Navbar/>
        <article itemscope itemtype="https://schema.org/BlogPosting">

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={HomeIcon} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='ingegneria della conoscenza'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <div className="prec-post">
                    <Link to="/All-interno-di-un-agente:-architettura-e-le-funzioni-agente"> &#8592; Post precendente</Link>
                </div>
                <h1 className='header-title' itemprop="headline">4. Controlli e azioni di un agente</h1>
                <span  itemprop="author" itemscope itemtype="https://schema.org/Person"><a itemprop="url" href='https://www.federicocalo.dev' className='autore'><span itemprop="name">Federico Calò</span></a></span> <time datetime="2023-01-07" className='data' itemprop="datePublished" content="2023-01-07T07:30:00+08:00">07/01/2023</time>
                                
                <p className='post-text first-text'>
                   Come definito nel precedente articolo, il corpo di un agente è suddiviso in attuatori sensori, i quali sono collegati a un sistema di percezione che crea una descrizione del mondo in un motore di ragionamento che implementa un controller, il quale a sua volta emette comandi agli attuatori. Questo tipo 
                   di architettura non è adatta per un agente, che potrebbe risultare lento, soprattutto per obiettivi complessi di alto livello. Un'architettura alternativa è costituita da una gerarchia  di controller, nella quale ogni strato vede il sottostante come un corpo virtuale dal quale riceve delle percezioni e 
                   verso il quale invia dei comandi. <strong> L'orizzonte progettuale </strong> al livello inferiore è molto più breve dell'orizzonte di pianificazione ai livelli superiori. Gli strati di livello inferiore funzionano molto più velocemente, reagiscono a quegli aspetti del mondo a cui è necessario reagire 
                   rapidamente e forniscono una visione più semplice del mondo agli strati superiori, nascondendo dettagli che non sono essenziali per gli strati superiori. Le persone devono reagire al mondo, al livello più basso, in frazioni di secondo, ma pianificare al livello più alto anche per decenni nel futuro.
                </p>
                
                <p className='post-text'>
                    In un controller gerarchico possono esserci più canali, ognuno dei quali rappresenta una caratteristica, tra i livelli e tra i livelli in momenti diversi. Ci sono tre tipi di input per ogni livello in ogni momento:
                </p>

                <ul>
                    <li>le caratteristiche che derivano dallo stato di credenza a cui ci si riferisce come ai valori ricordati o precedenti di queste richieste</li>
                    <li>le caratteristiche che rappresentano le percezioni dal livello sottostante nella gerarchia</li>
                    <li>le caratteristiche che rappresentano i comandi dal livello superiore nella gerarchia</li>
                </ul>
                
                <p className='post-text'>
                    Ci sono tre tipi di output da ogni livello in ogni momento:
                </p>

                <ul>
                    <li>le percezioni di livello superiore per lo strato superiore</li>
                    <li>i comandi di livello inferiore per il livello sottostante</li>
                    <li>i prossimi valori per le caratteristiche dello stato di credenza</li>
                </ul>

                <p className='post-text'>
                    Un'implementazione di un layer specifica come gli output di un layer sono una funzione dei suoi input. La definizione della <i>funzione di transizione dello stato di credenza</i> e <i>la funzione di commando </i> può essere estesa per includere comandi di livello superiore come input e ogni livello richiede anche una 
                    <strong> funzione di percezione</strong>. Quindi un layer implementa le seguenti funzioni:
                </p>

                <ul>
                    <li><i>remember: </i> <Latex>{fRemember}</Latex></li>
                    <li><i>command: </i> <Latex>{fCommand}</Latex></li>
                    <li><i>tell: </i><Latex>{fTell}</Latex></li>
                </ul>

                <p className='post-text'>
                    Ricordiamo che in queste espressioni S è lo stato di credenza, <Latex>{m2}</Latex> è l'insieme di comandi dal layer superiore, <Latex>{m1}</Latex> è l'insieme delle percezioni dello stato inferiore, <Latex>{m4}</Latex> è l'insieme dei comandi per il livello inferiore, <Latex>{m3}</Latex> rappresenta l'insieme delle 
                    percezioni per lo strato superiore. Da ciò si desume che per implementare un controller, ogni input a un livello deve ottenere il suo valore da qualche parte, inoltre ogni input di percezione o comando deve essere collegato a un output di qualche altro livello. Vi possiamo trovare anche input provenienti da credenze 
                    ricordate. Gli output di un layer non devono essere collegati a nulla o potrebbero essere collegati a più input. Il ragionamento di alto livello, svolto negli strati superiori, è spesso discreto e qualitativo, mentre il ragionamento di basso livello, svolto negli strati inferiori, è spesso continuo e quantitativo. Un 
                    controllore che ragiona sia in termini di valori discreti che continui è detto <strong>sistema ibrido</strong>. 
                </p>

                <p className='post-text'>
                    In questo ambito si fa una distinzione tra <strong>ragionamento quantitativo</strong>, nel quale si considerano quantità numeriche e nel quale si utilizza principalmente il calcolo integrale e differenziale, e il <strong>ragionamento qualitativo</strong>, nel quale si fa utilizzo della logica, facendo una distinzione 
                    appropriata tra valori numnerici e valori qualitativi per determinati parametri. Non bisogna dimenticare l'importanza del ragionamento qualitativo, in quanto un agente non potrebbe mai sapere quali sono i valori esatti, oppure perchè questo tipo di ragionamento può essere applicato indipendentemente dai valori quantitativi, 
                    infine è importante perchè può capitare che un agente deve fare un ragionamento qualitativo per determinare quali leggi quantitative sono applicabili.
                </p>

                <p className='post-text'>
                    I valori discreti utilizzati all'interno del ragionamento qualitativo possono essere classificati come <strong>punti di riferimento</strong>, costituiti da valori attraverso i quali si fanno delle distinzioni qualitative nell'individuo che viene modellato, oppure come <strong>termini sfocati</strong>, i quali hanno dei 
                    confini mal definiti e che vengono utilizzati all'interno del <strong>ragionamento per ordini di grandezza</strong> il quale implica un ragionamento approssimativo. L'ultima classificazione dei valori discreti consiste dei <strong>derivati qualitativi</strong>, i quali indicano se un certo valore sta aumentando, diminuendo o 
                    rimanendo invariato. Un agente flessibile deve fare un ragionamento qualitativo prima di fare un ragionamento quantitativo. A volte il ragionamento qualitativo è tutto ciò che serve. Pertanto, un agente non ha sempre bisogno di fare un ragionamento quantitativo, ma a volte ha bisogno di un ragionamento sia qualitativo che quantitativo.
                </p>
                
                <p className='post-text'>
                    All'interno di un layer ci sono feature che possono essere funzioni di altre feature e degli input ai layer. Nella rappresentazione grafica di un controller, c'è un arco in una caratteristica dalle caratteristiche o dagli input da cui dipende. Le caratteristiche che costituiscono lo stato di credenza possono essere scritte e lette dalla memoria.
                </p>

                <p className='post-text'>
                    Un agente opera i suoi compiti sullo stato di credenza che può essere complesso e variabile nel tempo, anche per un singolo livello. Definire uno stato di credenza non è facile, in quanto esso non si limita solamente a ciò che deve essere ricordato dall'agente. Un agente deve mantenere al proprio interno un <strong>modello</strong> del 
                    mondo, ovvero una rappresentazione dello stato del mondo in un momento particolare e/o dinamiche del mondo. Un modello molto valido porta l'agente ad ignorare le percezioni, in questo modo determina le proprie azioni semplicemente ragionando. Questo approccio richiede un modello sia dello stato del mondo che delle sue dinamiche. Prevedere 
                    lo stato nel momento successivo prende il nome di <strong>resa dei conti (dead reckoning)</strong>. Dall'altra parte vi è un <strong>sistema puramente reattivo</strong> che basa le sue azioni sulle percezioni e non aggiorna il suo stato di credenza interno. La funzione di comando è rappresentata da una funzione che va dall'insieme delle 
                    percezioni all'insieme delle azioni.
                </p>
                
                <p className='post-text'>
                    Un approccio più promettente consiste nel combinare la previsione dell'agente sullo stato del mondo con le informazioni rilevate. Lo stato di credenza successivo può essere stimato attraverso la regola di Bayes nel caso in cui vengano modellati sia il rumore della previsione in avanti sia il rumore del sensore, in questo caso si 
                    parla di <strong>filtraggio (filtering)</strong>. Mentre se si utilizzano sensori più complessi, è possibile utilizzare un modello per prevedere dove possono essere trovate determinate caratteristiche vicine alla posizione prevista, riducendo così l'errore e semplificando il lavoro. E' importante tenere in considerazione che 
                    un problema di controllo è <strong>separabile</strong> se l'azione migliore può essere ottenuta trovando il miglior modello del mondo, usandolo successivamente per determinare l'azione.
                </p>

                <p className='post-text'>
                    Un agente intelligente richiede una rappresentazione interna del suo stato di credenze. <strong>La conoscenza</strong> è definita come l'informazione su un dominio che viene utilizzata per agire all'interno di esso. Vi sono diversi tipi di conoscenza, da quella più generale a quella più particolare. Si può definire quindi <strong> un sistema basato su conoscenza </strong> 
                    quel sistema che utilizza la conoscenza di un dominio per agire o risolvere problemi. Si tende a confondere i termini di conoscenza e convinzione, quando invece il primo tende a indicare le informazioni generali e persistenti che vengono considerate vere per un periodo di tempo lungo, mentre la credenza indica informazioni più transitorie che vengono 
                    riviste sulla base di nuove informazioni. In un sistema di intelligenza artificiale, la conoscenza e le convinzioni vengono fornite con misure che indicano quanto esse siano credibili, inoltre la conoscenza in genere non è necessariamente vera, ma giustificata in quanto utile. La distinzione tra conoscenza e credenza diventa spesso sfumata quando un modulo 
                    di un agente può trattare alcune informazioni come vere ma un altro modulo può essere in grado di rivedere tali informazioni.
                </p>

                <div className='box-image'>
                    <img loading="lazy" decoding="async" src={img1} alt="Scomposizione offline e online di un agente" className='post-img2' title='Figura 1: Scomposizione offline e online di un agente.'/>
                    <p className='image-capture'>Figura 1: Scomposizione offline e online di un agente</p>
                </div>

                <p className='post-text'>
                    Nella figura numero 1 si può notare com'è costituito un agente basato su conoscenza, distinguendo la parte che lavora online con la parte che lavora offline. Una <strong>knowledge base</strong> viene creata offline e utilizzata online per determinare delle azioni. La <strong>base di conoscenza</strong> è la <i>memoria a lungo termine</i> di un agente, all'interno 
                    della quale viene conservata la conoscenza per agire in futuro, appresa attraverso conoscenze precedenti e da dati di esperienze precedenti. Mentre si parla di <strong>stato di credenza</strong> per indicare la memoria a breve termine dell'agente, attraverso la quale si mantiene il modello dell'ambiente attuale tra le fasi temporali. Quindi quando l'agente risulta 
                    online utilizza la sua base di conoscenza e le sue osservazioni per raggiungere i propri obiettivi.
                </p>

                <p className='post-text'>
                    Nel momento in cui un agente è <i>offline</i>, l'agente utilizza le conoscenze precedenti e le esperienze passate per eseguire tutte le operazioni relative <strong>all'apprendimento</strong>, operazioni volte alla costruzione di una base di conoscenza utile per agire online. Gli obiettivi e le abilità possono essere assegnati sia nel momento in cui l'agente è online 
                    o offline. Il calcolo online può essere reso più efficiente se la base di conoscenza è sintonizzata per gli obiettivi e le capacità particolare. Però questa cosa non può essere effettuata se gli obiettivi e le abilità sono disponibili solo in fase di esecuzione. 
                </p>
                
                <p className='post-text'>
                    La base di conoscenza richiesta per il calcolo online può essere creata inizialmente in fase di progettazione e quindi aumentata offline dall'agente. All'interno intelligenza artificiale viene definita <strong>antologia</strong> una specifica del significato dei simboli usati in un sistema informativo, specificando il vocabolario utilizzato per descriverla. Nel caso 
                    più semplice, se un agente utilizza una rappresentazione esplicita basata sullo stato con piena osservabilità, un'ontologia specifica la mappatura tra lo stato e il mondo. In altri casi, un'ontologia definirebbe le caratteristiche o gli individui e le relazioni. L'importanza dell'antologia consiste nel fatto che essa descrive logicamente i dati e la conoscenza. Senza 
                    un'ontologia i dati sono solo una sequenza di bit senza significato. Attraverso l'ontologia si definiscono i livelli di astrazione e da essa dipendono i dati, quindi se l'ontologia cambia, cambiano anche i dati. 
                </p>

                <p className='post-text'>
                    La base di conoscenza è in genere costruita offline da una combinazione di conoscenze e dati esperti. Un <strong>ingegnere della conoscenza</strong> è una persona che interagisce con un <strong>esperto di dominio</strong> per costruire una base di conoscenza. Offline, l'agente può combinare le conoscenze degli esperti e tutti i dati disponibili, inoltre in questa fase 
                    il sistema può essere testato e sottoposto a debug.
                </p>

                <p className='post-text'>
                    Online l'agente riesce a captare le informazioni sul mondo e l'agente inizia ad agire.  Le informazioni includono le osservazioni del dominio e spesso le preferenze o gli obiettivi. L'agente può ottenere osservazioni da sensori, utenti e altre fonti di informazioni, sebbene in genere non abbia accesso agli esperti del dominio o all'ingegnere della conoscenza mentre agisce. 
                    Un agente in genere ha molto più tempo per il calcolo offline che per il calcolo online. Durante il calcolo onlinea può sfruttare obiettivi particolari e osservazioni particolari. Online sono coinvolti diversi ruoli:
                </p>

                <ul>
                    <li><strong>un utente</strong>, ovvero una persona che ha bisogno di competenze o ha informazioni su situazioni individuali;</li>
                    <li><strong>i sensori</strong>, i quali forniscono informazioni sull'ambiente;</li>
                    <li><strong>una fonte di conoscenza esterna</strong>, come un sito web o un database.</li>
                </ul>

                
                </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON4