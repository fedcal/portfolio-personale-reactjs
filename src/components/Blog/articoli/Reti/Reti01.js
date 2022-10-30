import React from 'react'
import '../Articoli.css'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Footer/Footer'
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

        <Footer/>
    </div>
  )
}

export default Reti01