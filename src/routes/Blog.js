import React from 'react';
import BlogBoxes from '../components/Blog/BlogBoxes';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/Hero/HeroImg2';
import Navbar from '../components/Navbar/Navbar';

function Blog() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Blog,"text="condivisione di esperienze e sapere."/>
      <BlogBoxes/>
      <Footer/>
    </div>
  )
}

export default Blog