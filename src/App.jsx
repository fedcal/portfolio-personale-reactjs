import React from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contatti from "./routes/Contact";
import Progetti from "./routes/Project";
import Servizi from "./routes/Servizi";
import { Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Reti01 from "./components/Blog/articoli/Reti/Reti01/Reti01";
import Libri01 from "./components/Blog/articoli/Libri/Libri01/Libri01";
import IUM1 from "./components/Blog/articoli/IUM/IUM1/IUM1";
import Reti02 from "./components/Blog/articoli/Reti/Reti02/Reti02";
import IUM2 from "./components/Blog/articoli/IUM/IUM2/IUM2";
import Intro from "./components/Blog/articoli/StudyCase/GestionaleAssociativo/Intro";
import Er from "./components/Blog/articoli/StudyCase/GestionaleAssociativo/2_ER/Er";
import IUM3 from "./components/Blog/articoli/IUM/IUM3/IUM3";
import ICON1 from "./components/Blog/articoli/ICON/ICON1/ICON1";
import ICON2 from "./components/Blog/articoli/ICON/ICON2/ICON2";
import ICON3 from "./components/Blog/articoli/ICON/ICON3/ICON3";
import ICON4 from "./components/Blog/articoli/ICON/ICON4/ICON4";
import CC1 from "./components/Blog/articoli/CC/CC1/CC1";
import CC2 from "./components/Blog/articoli/CC/CC2/CC2";
import CC3 from "./components/Blog/articoli/CC/CC3/CC3";
import LatexArticolo from "./components/Blog/articoli/latex/latex";
import CC4 from "./components/Blog/articoli/CC/CC4/CC4";
import CC5 from "./components/Blog/articoli/CC/CC5/CC5";
import CC6 from "./components/Blog/articoli/CC/CC6/CC6";
import CC7 from "./components/Blog/articoli/CC/CC7/CC7";
import CC8 from "./components/Blog/articoli/CC/CC8/CC8";
import CC9 from "./components/Blog/articoli/CC/CC9/CC9";
import CC10 from "./components/Blog/articoli/CC/CC10/CC10";

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/progetti'element={<Progetti/>}/>
        <Route path='/presentazioni'element={<About/>}/>
        <Route path='/servizi'element={<Servizi/>}/>
        <Route path='/blog'element={<Blog/>}/>
        <Route path='/contatti'element={<Contatti/>}/>

        
        <Route path='/Reti-di-Calcolatori-Introduzione'element={<Reti01/>}/>
        <Route path='/Libri-consigliati-01'element={<Libri01/>}/>
        <Route path='/Interazione-uomo-macchina-Introduzione'element={<IUM1/>}/>
        <Route path='/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione'element={<Reti02/>}/>
        <Route path='/Interazione-uomo-macchina-Usabilita-e-Modello-di-iterazione'element={<IUM2/>}/>
        <Route path='/Gestionale-associazione-intro'element={<Intro/>}/>
        <Route path='/Gestionale-associazione-diagramma-entita-relazione'element={<Er/>}/>
        <Route path='/Interazione-uomo-macchina-Conoscere-l-utente' element={<IUM3/>}/>
        <Route path='/Introduzione-ingegneria-della-conoscenza' element={<ICON1/>}/>
        <Route path='/Spazio-di-progettazione-di-un-agente' element={<ICON2/>}/>
        <Route path='/All-interno-di-un-agente-architettura-e-le-funzioni-agente' element={<ICON3/>}/>
        <Route path='/Controlli-e-azioni-di-un-agente' element={<ICON4/>}/>
        <Route path='/Introduzione-alla-Calcolabilita-e-Complessita' element={<CC1/>}/>
        <Route path='/Automi-e-linguaggi-regolari' element={<CC2/>}/>
        <Route path='/Espressioni-regolari-e-linguaggi-non-regolari' element={<CC3/>}/>
        <Route path='/Latex-Comandi-e-simboli-matematici' element={<LatexArticolo/>}/>
        <Route path='/Linguaggi-context-free-e-automi-a-pila' element={<CC4/>}/>
        <Route path='/Linguaggi-non-context-free-e-linguaggi-context-free-deterministici' element={<CC5/>}/>
        <Route path='/Le-macchine-di-Turing' element={<CC6/>}/>
        <Route path='/Dedicibilità-e-indecidibilità' element={<CC7/>}/>
        <Route path='/Riducibilità-Pt-1' element={<CC8/>}/>
        <Route path='/Riducibilità-Pt-2' element={<CC9/>}/>
        <Route path='/Complessità-temporale' element={<CC10/>}/>

        

      </Routes>
    </>
  );
}

export default App;
