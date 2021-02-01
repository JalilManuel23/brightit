import React, { Component } from 'react'

function MenuLateral(props) {
    return ( <div className={props.clase}>
        <div className="cerrar-menu">
            <img className="close" onClick={ocultarMenu} src={props.imagenes.close}></img>
        </div>
        <ul className="opciones-menu-lateral">
            <a href="#"><li>Inicio</li></a>
            <a href="#"><li>Productos</li></a>
            <a href="#"><li>Nosotros</li></a>
            <a href="#"><li>Contacto</li></a>
        </ul>
    </div>
    )
    function ocultarMenu() {
        props.handler('menu-lateral ocultar');
    }
}
export default MenuLateral;