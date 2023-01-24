import './FormStyle.css';
import emailjs from '@emailjs/browser';
import React, { useRef }  from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const form = useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_1ggtrk7', 'template_rfe9xm5',form.current,"rfmFD_QkRyWYw7o2C");
    form.current.value=''
  };
  return (
    <div className='form'>
        <form onSubmit={sendEmail}ref={form}>
            <label>Il vostro nome</label>
            <input type="text" name='nome'></input>
            <label>E-mail</label>
            <input type="email"name='email'></input>
            <label>Soggetto</label>
            <input type="text" name='oggetto'></input>
            <label>Testo</label>
            <textarea rows="6" cols="Inserisci il messaggio" name='testo'></textarea> 
            <Link to="/"className='btn' type='submit'value="Send">Invia</Link>
        </form>
    </div>
  )
}

export default Form