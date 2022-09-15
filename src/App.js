import React from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contatti from "./routes/Contact";
import Progetti from "./routes/Project";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/progetti'element={<Progetti/>}/>
        <Route path='/mipresento'element={<About/>}/>
        <Route path='/contatti'element={<Contatti/>}/>
      </Routes>
    </>
  );
}

export default App;
