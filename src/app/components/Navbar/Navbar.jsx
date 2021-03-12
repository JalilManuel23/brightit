import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Boton from '../Boton/Boton';
import Swal from 'sweetalert2';
import { MenuItems } from './MenuItems';
import { MenuItemsDash } from './MenuItemsDash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    const cerrarSesion = () => {
        fetch('/usuarios/logout').then(res => {
                if(res.status == 505) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: `Has cerrado sesión correctamente`
                })
                props.handleLogged();
            }
        })
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
                        {props.dash ?                             
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard'><FontAwesomeIcon icon={ props.icons.home }/></Link>
                            </li>
                            : ''
                        }
                        {
                            !props.dash ?
                                MenuItems.map((item, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={item.ruta}>{item.titulo}</Link>
                                        </li>
                                    )
                                })
                            : 
                            MenuItemsDash.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={item.ruta}>{item.titulo}</Link>
                                    </li>
                                )
                            })
                        }
                        {
                            props.logged ? <button className="btn btn-primary" onClick={cerrarSesion}>Cerrar Sesión</button> : <Boton ruta="login" texto="Iniciar Sesión"/>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;