import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Boton from '../../Boton/Boton';

import './ProductoCard.css'

export default class ProductoCard extends Component {
    render() {
        return (
            <Link to={`/producto/${ this.props.id }`}  className="d-flex flex-column align-items-center tarjeta-producto">
                <img src={ this.props.imagen }></img>
                <div className="datos">
                    <p className="nombre-producto">{ this.props.nombre }</p>
                    <p className="descripcion-producto">{ this.props.descripcion }</p>
                    <p className="precio-producto ">$ { this.props.precio } </p>
                    <Boton className="btn-carrito btn btn-primary" texto="Agregar al carrito"></Boton>
                </div>
            </Link>
        )
    }
}
