import './NavbarStyle.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header'>
        <Link to={"/"}><h1>Federico Calò</h1></Link>
        <ul className='nav-menu'>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/mipresento"}>Chi sono</Link>
            </li>
            <li>
                <Link to={"/progetti"}>Progetti</Link>
            </li>
            <li>
                <Link to={"/contatti"}>Contatti</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar