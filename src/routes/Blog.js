import React from 'react';
import BlogBoxes from '../components/Blog/BlogBoxes';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';
import {Helmet} from "react-helmet";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Federico Calò - Blog Personale</title>
        <meta name='keywords' content='Mondo informatico, blog personale, libri settoriali, libri informatica, hard skills, soft skills,blog informatica, appunti università, appunti universitari, reti di calcolatori, Libri'/>
        <meta name='description' content='Blog personale di Federico Calò relativo al mondo informatico, in cui si condividono anche appunti universitari e letture interessanti che aiutano a sviluppare le skill tecniche del settore.'/>
        <meta name='robots' content='index,follow'/>
        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:title' content='Federico Calò - Blog Personale'/>
        <meta name='og:description' content='Blog personale di Federico Calò relativo al mondo informatico, in cui si condividono anche appunti universitari e letture interessanti che aiutano a sviluppare le skill tecniche del settore.'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Blog Personale"/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
      </Helmet>
      <Navbar/>
      <HeroImg2 heading="Blog,"text="condivisione di esperienze e sapere."/>
      <BlogBoxes/>
      <Footer/>
      <script  src="https://code.jquery.com/jquery-3.6.1.js"  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="  crossorigin="anonymous"></script>
      <script src="./script.js"></script>
    </div>
  )
}

export default Blog