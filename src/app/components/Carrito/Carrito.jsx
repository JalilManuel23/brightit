import React, { Component } from 'react';
import './Carrito.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductosCarrito from './ProductosCarrito';

export default class Carrito extends Component {
    constructor() {
        super();
        this.mostrarProductosCarrito = this.mostrarProductosCarrito.bind(this);
        this.state = {
            mostrarProductos: null
        }
    }

    mostrarProductosCarrito(){
        this.setState({mostrarProductos: !this.state.mostrarProductos});
    }

    render() {
        return (
            // <div className="carrito" onClick={() => this.mostrarProductosCarrito()}>
            <div className="carrito d-flex flex-column align-items-end">
                {this.state.mostrarProductos ? 
                    <ProductosCarrito imagenes= { this.props.imagenes } /> : 
                    ''
                }  
                <div className="carrito-icono d-flex align-items-center justify-content-center" onClick={() => this.mostrarProductosCarrito()}>
                {this.state.mostrarProductos ? 
                    <FontAwesomeIcon icon={this.props.icons.cerrar} /> : 
                    <FontAwesomeIcon icon={this.props.icons.shoppingCart} />
                }    
                </div>
            </div>
        )
    }
}
