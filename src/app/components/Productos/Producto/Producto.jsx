import React, { Component } from 'react'
import Boton from '../../Boton/Boton';
import './Producto.css'

export default class Producto extends Component {
    render() {
        return (
            <div>
                <div className="container contenedor-producto d-flex flex-column flex-md-row justify-content-around align-items-center">
                    <img src={this.props.imagenes.producto}/>
                    <div className="caracteristicas">
                        <p className="nombre-producto">Alarma antirrobo</p>
                        <p className="descripcion-producto">Descripción....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id massa hendrerit ornare.  </p>
                        <p className="precio-producto">$522.00</p>
                        <ul className="lista-caracteristicas">
                            <li>Característica 1</li>
                            <li>Característica 2</li>
                            <li>Característica 3</li>
                            <li>Característica 4</li>
                        </ul>
                        <div className="botones d-flex flex-column">
                            <Boton className="btn btn-primary" texto="Comprar"/>
                            <Boton className="btn btn-primary" color="blanco" texto="Agregar al carrito"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
