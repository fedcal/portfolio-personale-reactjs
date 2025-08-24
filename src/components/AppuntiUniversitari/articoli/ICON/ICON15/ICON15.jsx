import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../../Navbar/Navbar';
import Footer from '../../../../Footer/Footer';
import HomeIcon from '../../../../assets/icon_1900.webp';
import '../../Articoli.css';
import {Link} from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function ICON15() {
  return (
    <div>
        <Helmet>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - 15. Clausole e vincoli proposizionali</title>
            <meta name='keywords' content='ingegneria della conoscenza, intelligenza artificiale, ai, linguaggio delle clausole proposizionali definite, proposizione atomica, proposizione definita,testa (head),regola,corpo,clausola atomica,fatto, procedura di dimostrazione, procedura bottom-up,procedura top-down '/>
            <meta name='description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - 15. Clausole e vincoli proposizionali'/>
            <meta name='og:description' content='Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - 15. Clausole e vincoli proposizionali"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Clausole-e-vincoli-proposizionali" />
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
                <h1 className='header-title' itemProp="headline">15. Clausole e vincoli proposizionali</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-04-05" className='data' itemProp="datePublished" content="2023-04-05T07:30:00+08:00">05/04/2023</time>
                                
                <p itemProp='description' className='post-text first-text'>
                    Dopo aver introdotto nel precedente articolo le proposizioni, in questo articolo approfondiamo le clausole e i vincoli proposizionali. Avevamo introdotto il ragionamento con vincoli sin dall'<Link to="/Ragionamento-con-vincoli-parte-1" className='link'>articolo 10</Link>, approfondiamo i vincoli proposizionali e le formule logiche, le quali forniscono una 
                    struttura di vincoli che può essere sfruttata.
                </p>

                <p className='post-text'>
                    Definiamo un sotto linguaggio del calcolo proposizionale che non ammette incertezza o ambiguità, il cosiddetto <strong>linguaggio delle clausole proposizionali definite</strong>. La sintassi delle proposizioni è definita attraverso una <strong>proposizione atomica</strong>, che corrisponde a quella del calcolo proposizionale e 
                    una <strong>proposizione definita</strong> nella forma <InlineMath math = 'h \leftarrow a_1 \wedge \dots \wedge a_m'/>. Definiamo h come la <strong>testa (head)</strong> della clausola, e ogni <InlineMath math ='a_i'/> un atomo.
                </p>

                <p className='post-text'>
                    Se m è maggiore di 0, la clausola prende il nome di <strong>regola</strong> e la parte destra <strong>corpo</strong> della clausola. Mentre nel caso in cui m sia proprio uguale a 0, la freccia uò essere omessa e la clausola prende il nome di <strong>clausola atomica</strong> o <strong>fatto</strong>. Una base di conoscenza è un insieme di queste clausole. 
                    Dopo che al computer è stata fornita una base di conoscenza su un particolare dominio, un utente potrebbe voler porre al computer domande su quel dominio. Il computer può rispondere se una proposizione è o meno una conseguenza logica della base di conoscenza. Se l'utente conosce il significato degli atomi, l'utente può interpretare la risposta in termini di dominio.
                </p>

                <p className='post-text'>
                    Una <strong>query</strong> è un modo per chiedere se una proposizione è una conseguenza logica di una base di conoscenza. Una volta che il sistema è stato dotato di una base di conoscenza, viene utilizzata una query per chiedere se una formula è una conseguenza logica della base di conoscenza. Una query è una domanda che ha come <strong>risposta</strong> “sì” se il corpo è una conseguenza 
                    logica della base di conoscenza, o la risposta “no” se il corpo non è una conseguenza della base di conoscenza.
                </p>

                <p className='post-text'>
                    All'interno della base di conoscenza vi è il problema della <strong>deduzione</strong>, ovvero il problema di determinare se una proposizione è una conseguenza logica di una base di conoscenza. Questa deduzione è una forma specifica di <strong>inferenza</strong>. Diciamo che una <strong>dimostrazione</strong> è una dimostrazione derivabile meccanicamente se una proposizione segue 
                    logicamente da una base di conoscenza. Un <strong>teorema</strong> è una proposizione dimostrabile. L'algoritmo per derivare le conseguenze di una base di conoscenza prende il nome di <strong>procedura di dimostrazione</strong>. 
                </p>

                <p className='post-text'>
                    Data una procedura, <InlineMath math="KB \vdash g"/> significa che g può essere dimostrato o derivato dalla knowledge base KB. La qualità di una procedura di dimostrazione può essere giudicata dal fatto che calcoli ciò che si intende calcolare. Una procedura di dimostrazione è <strong>corretta</strong> rispetto a una semantica se tutto ciò che può essere derivato da una base di conoscenza 
                    è una conseguenza logica della base di conoscenza. Una procedura di dimostrazione è <strong>completa</strong> rispetto a una semantica se esiste una dimostrazione di ogni conseguenza logica della base di conoscenza.
                </p>

                <p className='post-text'>
                    Vi sono due procedure per dimostrare le proposizioni definite: una <strong>procedura bottom-up</strong> e una <strong>procedura top-down</strong>. Nella <i>procedura bottom-up</i> si parte dimostrando atomi che sono stati già stabiliti, al contrario dell'<i>approccio top-down</i> il quale parte da una query e cerca di trovare le clausole che la supportano.  L'approccio bottom-up consiste in una 
                    procedura <i>forward chaining</i> sulle clausole definite. L'idea generale si basa sulla <strong>regola di derivazione</strong>.
                </p>

                <p className='post-text'>
                    La procedura di dimostrazione bottom-up, ha una serie di caratteristiche. E' <i>solida</i>, ha una <i>complessità lineare</i> nella dimensione della base di conoscenza ed è un algoritmo <i>completo</i>.
                </p>

                <p className='post-text'>
                    Nella <i>procedura di dimostrazione top-down</i> si parte dalla query per determinare se questa è una conseguenza logica delle clausole definite nella KB. Generalmente questo processo prende il nome di <strong>risoluzione SLD</strong>. Data una clausola di risposta, l'algoritmo top-down seleziona un atomo nel corpo della clausola di risposta, definito <strong>sotto obiettivo</strong>.
                </p>

                <div className="succ-post">
                    <Link to="/Problemi-di-rappresentazione-della-conoscenza">Post successivo &#8594;</Link>
                </div>
                                
            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default ICON15