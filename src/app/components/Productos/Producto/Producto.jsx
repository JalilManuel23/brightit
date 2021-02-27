import React, { Component } from 'react'
import './Producto.css'

export default class Producto extends Component {
    render() {
        return (
            <div>
                <div className="container contenedor-producto d-flex align-items-center">
                    <img src={this.props.imagenes.producto}/>
                    <div className="caracteristicas">
                        <p className="nombre-producto">Alarma antirrobo</p>
                        <p className="descripcion-producto">Descripción....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id massa hendrerit ornare.  </p>
                        <ul className="lista-caracteristicas">
                            <li>Característica 1</li>
                            <li>Característica 2</li>
                            <li>Característica 3</li>
                            <li>Característica 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
