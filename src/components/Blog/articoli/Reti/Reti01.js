import React from 'react'
import '../Articoli.css'
import Navbar from '../../../Navbar/Navbar.js';
import Footer from '../../../Footer/Footer.js'
import BgImg from '../../../assets/hero.webp';

function Reti01() {
  return (
    <div>
        <Navbar/>

        <section className='post-header'>
            <div className='header-content post-container'>
                <h1 className='header-title'>Titolo del blog</h1>
                <img src={BgImg} alt="" className='header-img'/>
            </div>
        </section>
        <section className='post-content post-container'>
            <h2 className='sub-heading'>Sub titolo</h2>
            <p className='post-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className='box-image'>
                <img src={BgImg} alt="" className='post-img'/>
                <p className='image-capture'>Figura numero 3: Pc aziendale</p>
            </div>
            <p className='post-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <Footer/>
    </div>
  )
}

export default Reti01