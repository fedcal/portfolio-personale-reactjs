import React from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contatti from "./routes/Contact";
import Progetti from "./routes/Project";
import Servizi from "./routes/Servizi";
import { Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Reti01 from "./components/Blog/articoli/Reti/Reti01";

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
        <Route path='/reti01'element={<Reti01/>}/>
      </Routes>
    </>
  );
}

export default App;
