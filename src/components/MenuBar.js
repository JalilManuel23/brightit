import React, { Component } from "react";
import Boton from './Boton';

class MenuBar extends Component {
    render() {
        return <div className="contenedor">
            <div className="barra-menu">
                <a href="#" className="enlace-menu"><img src={this.props.imagenes.logo} className="logo-menu" /></a>
                <ul className="opciones-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <Boton texto="Iniciar Sesión" color="boton-azul" />
            </div>
        </div>
    }
}

export default MenuBar;