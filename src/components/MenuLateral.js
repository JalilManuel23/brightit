import React, { Component } from 'react';
import { MenuItems } from "../sample/MenuItems";

function MenuLateral(props) {
    return ( <div className={props.clase}>
        <div className="cerrar-menu">
            <img className="close" onClick={ocultarMenu} src={props.imagenes.close}></img>
        </div>
        <ul className="opciones-menu-lateral">
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.ruta}>{item.titulo}</a>
                    </li>
                )
            })}
        </ul>
    </div>
    )
    function ocultarMenu() {
        props.handler('menu-lateral ocultar');
    }
}
export default MenuLateral;