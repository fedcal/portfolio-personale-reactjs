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
      </Routes>
    </>
  );
}

export default App;
