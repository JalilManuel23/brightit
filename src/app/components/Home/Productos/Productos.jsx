import React from 'react';
import './Productos.css';
import Boton from '../../Boton/Boton';
import imagenes from '../../../assets/imagenes';

export default function Productos(props) {
    return (
        <div className="conoce-productos banner">
            <div className="container d-flex flex-column align-items-center flex-md-row justify-content-md-around text-md-start align-items-start">
                <div className="d-flex flex-column align-items-center justify-content-around align-items-md-start text-md-start">
                    <h2 className="titulo text-center text-md-left">Conoce nuestros productos</h2>
                    <Boton ruta="productos" color="blanco" texto="Ver productos" />
                </div>
                <img src={ imagenes.smarthome }></img>
            </div>
        </div>
    )
}
