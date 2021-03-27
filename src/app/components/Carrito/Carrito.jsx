import React, { Component } from 'react';
import './Carrito.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
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
            <div className="carrito d-flex flex-column align-items-end">
                {this.state.mostrarProductos ? 
                    <ProductosCarrito 
                        productosCarrito = { this.props.productosCarrito } 
                        subtotal = { this.props.subtotal }
                        eliminarProducto = { this.props.eliminarProducto }
                    /> : 
                    ''
                }  
                <div className="carrito-icono d-flex align-items-center justify-content-center" onClick={() => this.mostrarProductosCarrito()}>
                {this.state.mostrarProductos ? 
                    <FontAwesomeIcon icon={ faTimes } /> : 
                    <FontAwesomeIcon icon={ faShoppingCart } />
                }    
                </div>
            </div>
        )
    }
}
