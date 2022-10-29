import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/Hero/HeroImg2';
import Form from '../components/Contact/Form';
function Contact() {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="CONTATTAMI"text="Compila il forum per lasciarmi un messaggio."/>
     <Form/>
     <Footer/>
   </div>
  )
}

export default Contact