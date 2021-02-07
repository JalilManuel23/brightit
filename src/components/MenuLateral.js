import React, { Component } from 'react';
import OpcionesMenu from "./OpcionesMenu";

function MenuLateral(props) {
    return ( <div className={props.clase}>
        <div className="cerrar-menu">
            <img className="close" onClick={ocultarMenu} src={props.imagenes.close}></img>
        </div>
        <OpcionesMenu clase="opciones-menu-lateral"/>
    </div>
    )
    function ocultarMenu() {
        props.handler('menu-lateral ocultar');
    }
}
export default MenuLateral;