import React, { Component, useState } from "react";
import Boton from './Boton';
import OpcionesMenu from "./OpcionesMenu";

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
                <OpcionesMenu clase="opciones-menu"/>
                <div class="menu-boton">
                    <Boton ruta={'/login'} texto="Iniciar Sesión" color="boton-azul btn-login" />
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