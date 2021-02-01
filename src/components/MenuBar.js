import React, { Component, useState } from "react";
import Boton from './Boton';

function MenuBar(props) {
    const [navbar,setNavbar] = useState(false);

    const agregarSombra = () => {
        if(window.scrollY != 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
        console.log(window.scrollY);
    }

    window.addEventListener('scroll', agregarSombra);

    return( 
        <nav className={navbar ? 'contenedor-menu activo' : 'contenedor-menu'}>
            <div className="barra-menu">
                <a href="#" className="enlace-menu"><img src={props.imagenes.logo} className="logo-menu" /></a>
                <ul className="opciones-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div class="menu-boton">
                    <Boton texto="Iniciar Sesión" color="boton-azul" />
                    <a href="#" onClick={mostrarMenu} className="menu-movil"><img src={props.imagenes.menu}></img></a>
                </div>
            </div>
        </nav>
    );

    function mostrarMenu() {
        props.handler('menu-lateral mostrar');
    }
}

export default MenuBar;