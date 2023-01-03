import React, {lazy} from "react";
import './index.css';
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";

const About = lazy(()=>import("./routes/About"));
const Contatti = lazy(()=>import("./routes/Contact"));
const Progetti = lazy(()=>import("./routes/Project"));
const Servizi = lazy(()=>import("./routes/Servizi"));
const Blog = lazy(()=>import("./routes/Blog"));
const Reti01 = lazy(()=>import("./components/Blog/articoli/Reti/Reti01/Reti01"));
const Libri01 = lazy(()=>import("./components/Blog/articoli/Libri/Libri01/Libri01"));
const IUM1 = lazy(()=>import("./components/Blog/articoli/IUM/IUM1/IUM1"));
const Reti02 = lazy(()=>import("./components/Blog/articoli/Reti/Reti02/Reti02"));
const IUM2 = lazy(()=>import("./components/Blog/articoli/IUM/IUM2/IUM2"));
const Intro = lazy(()=>import("./components/Blog/articoli/StudyCase/GestionaleAssociativo/Intro"));
const Er =lazy(()=>import( "./components/Blog/articoli/StudyCase/GestionaleAssociativo/2_ER/Er"));
const IUM3 = lazy(()=>import("./components/Blog/articoli/IUM/IUM3/IUM3"));
const ICON1 = lazy(()=>import("./components/Blog/articoli/ICON/ICON1/ICON1"));
const ICON2 = lazy(()=>import("./components/Blog/articoli/ICON/ICON2/ICON2"));
const ICON3 = lazy(()=>import("./components/Blog/articoli/ICON/ICON3/ICON3"));

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
        <Route path='/All-interno-di-un-agente:-architettura-e-le-funzioni-agente' element={<ICON3/>}/>

      </Routes>
    </>
  );
}

export default App;
