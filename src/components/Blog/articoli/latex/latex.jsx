import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import LatexImg from '../../../assets/latex_1900.webp';
import '../Articoli.css';
import 'katex/dist/katex.min.css';
import './latex.css';
import {InlineMath} from 'react-katex';

function LatexArticolo() {
  return (
    <div>
        <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossorigin="anonymous"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Federico Calò Blog - Latex: Comandi e simboli matematici</title>
            <meta name='keywords' content='latex, simboli latex, frecce latex, simboli matematici latex, alfabeto greco latex, lettere greche latex'/>
            <meta name='description' content='Questo articolo nasce dall&#39;esigenza di avere una tabella di simboli matematici e corrispettivi comandi in Latex da poter copiare e incolalre velocemente.'/>
            <meta name="robots" content="index, follow, max-snippet:[100]" />
            <meta name="googlebot" content="index, follow,  max-snippet:[100] max-image-preview:[standard]"/>
            <meta name="googlebot-news" content="index, follow, max-snippet:[100] max-image-preview:[standard]"/>
            
            <meta name='language' content='IT'/>
            <meta name='topic' content='Programmazione e Sviluppo'/>
            <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
            <meta name='og:title' content='Federico Calò Blog - Latex: Comandi e simboli matematici'/>
            <meta name='og:description' content='Questo articolo nasce dall&#39;esigenza di avere una tabella di simboli matematici e corrispettivi comandi in Latex da poter copiare e incolalre velocemente.'/>
            <meta name='og:email' content='fedcal01@gmail.com'/>
            <meta name='og:phone_number' content='+39 3332673965'/>
            <meta name="apple-mobile-web-app-title" content="Federico Calò Blog - Latex: Comandi e simboli matematici"/> 
            <meta name='apple-mobile-web-app-capable' content='yes'/>
            <meta name='apple-touch-fullscreen' content='yes'/>
            <link rel="canonical" href="https://www.federicocalo.dev/Latex-Comandi-e-simboli-matematici" />
        </Helmet>
        <Navbar/>
        <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/Latex_logo.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <img loading="lazy" decoding="async" src={LatexImg} alt="Logo della pagina riferita alla materia ingnegneria della conoscenza" className='header-img'title='latex logo'/>
                </div>
            </section>
            <section className='post-content post-container'>

                
                <h1 className='header-title' itemProp="headline">Latex: Comandi e simboli matematici</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2023-01-16" className='data' itemProp="datePublished" content="2023-01-16T07:30:00+08:00">16/01/2023</time>
                                
                <p itemProp='description'className='post-text first-text'>
                   Questo articolo nasce dall'esigenza di avere una tabella di simboli matematici e corrispettivi comandi in Latex da poter copiare e incolalre velocemente. Tutti coloro che hanno approcciato alla scrittura di appunti, articoli o libri scientifici attravero Latex, si sono trovati difronte a tabelle di simboli matematici e corrispettivi comandi 
                   su immagini, senza la possibilità di poterli selezionare, copiare e incollarili. Questo articolo, nato per esigenze personali, vuole ovviare a questa cosa. Durante la scrittura dei miei articoli, raccoglierò nella tabella sottostante tutti i simboli che mi serviranno, affiancati dai relativi comandi.
                </p>

                <p className='post-text first-text'>
                   Per quanto riguarda il loro utilizzo, diepnde molto dall'editor che utilizzate. Io vi consiglio <a href="https://www.overleaf.com/" target='_blank'rel="noopener noreferrer" aria-label="Overleaf"className='link'>Overleaf</a>, come editor online, mentre come editor offline, da installare sul pc, potete utilizzare tranquillamente 
                   <a href="https://www.xm1math.net/texmaker/" target='_blank'rel="noopener noreferrer" aria-label="TEXMAKER" className='link'> TEXMAKER</a>, infine se state sviluppando un sito in RactJs, personalmente vi consiglio la libreria <a href="https://www.npmjs.com/package/react-katex"rel="noopener noreferrer" aria-label="react-katex" className='link'>react-katex</a>
                </p>

                <h3 className='titolo-tabella'>Lettere dell'alfabeto greco minuscole</h3>
                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\alpha"/></td>
                            <td>\alpha</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\beta"/></td>
                            <td>\beta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\gamma"/></td>
                            <td>\gamma</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\delta"/></td>
                            <td>\delta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\epsilon"/></td>
                            <td>\epsilon</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\zeta"/></td>
                            <td>\zeta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\eta"/></td>
                            <td>\eta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\theta"/></td>
                            <td>\theta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\iota"/></td>
                            <td>\iota</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\kappa"/></td>
                            <td>\kappa</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\lambda"/></td>
                            <td>\lambda</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\mu"/></td>
                            <td>\mu</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\nu"/></td>
                            <td>\nu</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\xi"/></td>
                            <td>\xi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{o}"/></td>
                            <td>\textrm{"{"}o{"}"}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\pi"/></td>
                            <td>\pi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\rho"/></td>
                            <td>\rho</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\sigma"/></td>
                            <td>\sigma</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\tau"/></td>
                            <td>\tau</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\upsilon"/></td>
                            <td>\upsilon</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\phi"/></td>
                            <td>\phi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\chi"/></td>
                            <td>\chi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\psi"/></td>
                            <td>\psi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\omega"/></td>
                            <td>\omega</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\varepsilon"/></td>
                            <td>\varepsilon</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\vartheta"/></td>
                            <td>\vartheta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\alpha"/></td>
                            <td>\alpha</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="o"/></td>
                            <td>o</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\varpi"/></td>
                            <td>\varpi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\varrho"/></td>
                            <td>\varrho</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\varsigma"/></td>
                            <td>\varsigma</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\varphi"/></td>
                            <td>\varphi</td>
                        </tr>
                    </tbody>                   
                </table>

                <h3 className='titolo-tabella'>Lettere dell'alfabeto greco maiuscole</h3>
                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\textrm{A}"/></td>
                            <td>\textrm{'{'}A{'}'}</td>
                        </tr>
                        <tr>
                        <td><InlineMath math="\textrm{B}"/></td>
                            <td>\textrm{'{'}B{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Gamma"/></td>
                            <td>\Gamma</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Delta"/></td>
                            <td>\Delta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{E}"/></td>
                            <td>\textrm{'{'}E{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{Z}"/></td>
                            <td>\textrm{'{'}Z{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{H}"/></td>
                            <td>\textrm{'{'}H{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Theta"/></td>
                            <td>\Theta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{I}"/></td>
                            <td>\textrm{'{'}I{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{K}"/></td>
                            <td>\textrm{'{'}K{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Lambda"/></td>
                            <td>\Lambda</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{M}"/></td>
                            <td>\textrm{'{'}M{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Xi"/></td>
                            <td>\Xi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{O}"/></td>
                            <td>\textrm{"{"}O{"}"}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Pi"/></td>
                            <td>\Pi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{P}"/></td>
                            <td>\textrm{'{'}P{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Sigma"/></td>
                            <td>\Sigma</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{T}"/></td>
                            <td>\textrm{'{'}T{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Upsilon"/></td>
                            <td>\Upsilon</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Phi"/></td>
                            <td>\Phi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\textrm{X}"/></td>
                            <td>\textrm{'{'}X{'}'}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Psi"/></td>
                            <td>\Psi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Omega"/></td>
                            <td>\Omega</td>
                        </tr>
                    </tbody>                   
                </table>

                <h3 className='titolo-tabella'>Simboli matatematici comuni</h3>

                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\backslash"/></td>
                            <td>\backslash</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\aleph"/></td>
                            <td>\aleph</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\hbar"/></td>
                            <td>\delta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\ell"/></td>
                            <td>\ell</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\wp"/></td>
                            <td>\wp</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Re"/></td>
                            <td>\Re</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Im"/></td>
                            <td>\theta</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\partial"/></td>
                            <td>\partial</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\infty"/></td>
                            <td>\kappa</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\prime"/></td>
                            <td>\prime</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="'"/></td>
                            <td>'</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\emptyset"/></td>
                            <td>\emptyset</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\nabla"/></td>
                            <td>\xi</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\top"/></td>
                            <td>\top</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bot"/></td>
                            <td>\bot</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="|"/></td>
                            <td>|</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\vert"/></td>
                            <td>\vert</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\|"/></td>
                            <td>\|</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\angle"/></td>
                            <td>\angle</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\triangle"/></td>
                            <td>\triangle</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\forall"/></td>
                            <td>\forall</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\exists"/></td>
                            <td>\exists</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\neg"/></td>
                            <td>\neg</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\natural"/></td>
                            <td>\natural</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\sharp"/></td>
                            <td>\sharp</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\surd"/></td>
                            <td>\surd</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\mho"/></td>
                            <td>\mho</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Box"/></td>
                            <td>\Box</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Diamond"/></td>
                            <td>\Diamond</td>
                        </tr>
                    </tbody>                   
                </table>

                <h3 className='titolo-tabella'>Operatori binari comuni</h3>

                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\pm"/></td>
                            <td>\pm</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\mp"/></td>
                            <td>\mp</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\cdot"/></td>
                            <td>\cdot</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="+"/></td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="-"/></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\times"/></td>
                            <td>\times</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\div"/></td>
                            <td>\div</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\ast"/></td>
                            <td>\ast</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\star"/></td>
                            <td>\star</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\diamond"/></td>
                            <td>\diamond</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\circ"/></td>
                            <td>\circ</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bullet"/></td>
                            <td>\bullet</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\cap"/></td>
                            <td>\cap</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\cup"/></td>
                            <td>\cup</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\uplus"/></td>
                            <td>\uplus</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\sqcap"/></td>
                            <td>\sqcap</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\sqcup"/></td>
                            <td>\sqcup</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\triangleleft"/></td>
                            <td>\triangleleft</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\triangleright"/></td>
                            <td>\triangleright</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\wr"/></td>
                            <td>\wr</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bigcirc"/></td>
                            <td>\bigcirc</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bigtriangleup"/></td>
                            <td>\bigtriangleup</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bigtriangledown"/></td>
                            <td>\bigtriangledown</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\vee"/></td>
                            <td>\vee</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\lor"/></td>
                            <td>\lor</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\wedge"/></td>
                            <td>\wedge</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\land"/></td>
                            <td>\land</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\oplus"/></td>
                            <td>\oplus</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\ominus"/></td>
                            <td>\ominus</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\otimes"/></td>
                            <td>\otimes</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\oslash"/></td>
                            <td>\oslash</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\odot"/></td>
                            <td>\odot</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\lhd"/></td>
                            <td>\lhd</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\rhd"/></td>
                            <td>\rhd</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\unlhd"/></td>
                            <td>\unlhd</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\unrhd"/></td>
                            <td>\unrhd</td>
                        </tr>
                    </tbody>                   
                </table>

                <h3 className='titolo-tabella'>Operatori di relazione</h3>

                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="="/></td>
                            <td>=</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\neq"/></td>
                            <td>\neq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\equiv"/></td>
                            <td>\equiv</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \equiv"/></td>
                            <td>\not \equiv</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\sim"/></td>
                            <td>\sim</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \sim"/></td>
                            <td>\not \sim</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\simeq"/></td>
                            <td>\simeq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \simeq"/></td>
                            <td>\not \simeq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\approx"/></td>
                            <td> \approx</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\cong"/></td>
                            <td>\cong</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \cong"/></td>
                            <td>\not \cong</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\parallel"/></td>
                            <td>\parallel</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\perp"/></td>
                            <td>\perp</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \perp"/></td>
                            <td>\not \perp</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="<"/></td>
                            <td>{"<"}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not <"/></td>
                            <td>\not {"<"}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\leq"/></td>
                            <td>\leq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \leq"/></td>
                            <td>\not \leq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math=">"/></td>
                            <td>{">"}</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\geq"/></td>
                            <td>\geq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \geq"/></td>
                            <td>\not \geq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\subset"/></td>
                            <td>\subset</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \subset"/></td>
                            <td>\not \subset</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\subseteq"/></td>
                            <td>\subseteq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \subseteq"/></td>
                            <td>\not \subseteq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\supset"/></td>
                            <td>\supset</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \supset"/></td>
                            <td>\not \supset</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\supseteq"/></td>
                            <td>\supseteq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \supseteq"/></td>
                            <td>\not \supseteq</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\in"/></td>
                            <td>\in</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \in"/></td>
                            <td>\not \in</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\ni"/></td>
                            <td>\ni</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\not \ni"/></td>
                            <td>\not \ni</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\rhd"/></td>
                            <td>\rhd</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Join"/></td>
                            <td>\Join</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='titolo-tabella'>Frecce</h3>

                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\leftarrow"/></td>
                            <td>\leftarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\rightarrow"/></td>
                            <td>\rightarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Leftarrow"/></td>
                            <td>\Leftarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Rightarrow"/></td>
                            <td>\Rightarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Longleftarrow"/></td>
                            <td>\Longleftarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\Longrightarrow "/></td>
                            <td>\Longrightarrow </td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\longleftarrow"/></td>
                            <td>\longleftarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\longrightarrow"/></td>
                            <td>\longrightarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\iff"/></td>
                            <td>\iff </td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\mapsto"/></td>
                            <td>\mapsto</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\longmapsto "/></td>
                            <td>\longmapsto </td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\leftrightarrow"/></td>
                            <td>\leftrightarrow</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\longleftrightarrow"/></td>
                            <td>\longleftrightarrow</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='titolo-tabella'>Altri simboli matematici</h3>

                <table className='latexTable'>
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th>Comando</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><InlineMath math="\sum"/></td>
                            <td>\sum</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\prod"/></td>
                            <td>\prod</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\coprod"/></td>
                            <td>\coprod</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\int"/></td>
                            <td>\int</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\oint"/></td>
                            <td>\oint</td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bigcap "/></td>
                            <td>\bigcap </td>
                        </tr>
                        <tr>
                            <td><InlineMath math="\bigcup"/></td>
                            <td>\bigcup</td>
                        </tr>
                    </tbody>
                </table>


            </section>
        </article>
        <Footer/>
    </div>
  )
}

export default LatexArticolo