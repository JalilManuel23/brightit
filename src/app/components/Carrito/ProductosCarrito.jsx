import React, { Component } from 'react'
import Boton from '../Boton/Boton';
import './Carrito.css';



export default class ProductosCarrito extends Component {

    render() {
        return (
            <div className="productos d-flex flex-column align-items-center">
                <p className="sub">Subtotal:</p>
                <p className="subtotal-carrito">$522.00</p>
                <div className="imagenes-productos-carrito d-flex flex-column">
                    <img src={this.props.imagenes.producto}></img>
                    <img src={this.props.imagenes.producto}></img>
                    <img src={this.props.imagenes.producto}></img>
                </div>
                <Boton color="blanco" texto="Proceder al pago"/>
            </div>
        )
    }
}
