import React from 'react';
import './Productos.css';
import Boton from '../../Boton/Boton';

export default function Productos(props) {
    return (
        <div className="conoce-productos">
            <div className="container d-flex flex-column align-items-center flex-md-row justify-content-md-around text-md-start align-items-start">
                <div className="d-flex flex-column align-items-center justify-content-around align-items-md-start text-md-start">
                    <h2 className="titulo text-center text-md-left">Conoce nuestros productos</h2>
                    <Boton ruta="productos" color="blanco" texto="Ver productos" />
                </div>
                <img src={props.imagenes.smarthome}></img>
            </div>
        </div>
    )
}
