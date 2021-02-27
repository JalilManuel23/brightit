import React from 'react';
import './Productos.css';
import Boton from '../../Boton/Boton';

export default function Productos(props) {
    return (
        <div className="conoce-productos">
            <div className="container d-flex justify-content-around">
                <div className="d-flex flex-column justify-content-around align-items-start">
                    <h2 className="titulo">Conoce nuestros productos</h2>
                    <Boton color="blanco" texto="Ver productos" />
                </div>
                <img src={props.imagenes.smarthome}></img>
            </div>
        </div>
    )
}
