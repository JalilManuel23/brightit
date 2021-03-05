import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ProductoCard.css'

export default class ProductoCard extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center tarjeta-producto">
                <img src={this.props.imagenes.producto}></img>
                <div className="datos">
                    <p className="nombre-producto">Alarma antirrobo</p>
                    <p className="descripcion-producto">Descripción....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id massa hendrerit ornare.  </p>
                    <p className="precio-producto ">$522.00</p>
                </div>
            </div>
        )
    }
}
