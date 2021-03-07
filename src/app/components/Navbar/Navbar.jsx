import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Boton from '../Boton/Boton';
import { MenuItems } from './MenuItems';

import './Navbar.css';

function Navbar(props) {
    const [navbar,setNavbar] = useState(false);

    const agregarSombra = () => {
        if(window.scrollY != 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', agregarSombra);
    return (
        <nav className= {navbar ? 'navbar sticky-top navbar-expand-lg navbar-light p-3 activo' : 'navbar sticky-top navbar-expand-lg navbar-light p-3'}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={ props.imagenes.logo } className="logo-menu"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {MenuItems.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={item.ruta}>{item.titulo}</Link>
                                </li>
                            )
                        })}
                        <Boton ruta="login" texto="Iniciar Sesión"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;