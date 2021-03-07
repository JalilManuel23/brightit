import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton';
import './Carrito.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import productos from '../../sample/productos';

export default class ProductosCarrito extends Component {

    render() {
        if (this.props.productosCarrito.length == 0) {
            return (
                <div className="productos d-flex flex-column align-items-center">
                    <p>Tu carrito está vacio</p>
                </div>
            )
        } else {
            return (
                <div className="productos d-flex flex-column align-items-center">
                    <p className="sub">Subtotal:</p>
                    <p className="subtotal-carrito">$ {this.props.subtotal}</p>
                    <div className="imagenes-productos-carrito d-flex flex-column">
                        {productos.map(producto => {
                            return(
                                this.props.productosCarrito.map(productoAgregado => {
                                    if(producto.id == productoAgregado.id){
                                        return(
                                            <div key = { productoAgregado.idProducto } className="producto-carrito d-flex justify-content-around align-items-center">
                                                <Link to={`/producto/${ producto.id }`}>
                                                    <img src={producto.imagen}></img>
                                                </Link>
                                                <a onClick={ () => this.props.eliminarProducto(productoAgregado.idProducto, producto.precio) }>
                                                    <FontAwesomeIcon className="quitar" icon={this.props.icons.trash} />
                                                </a>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })}
                    </div>
                    <Boton ruta="/" color="blanco" texto="Proceder al pago" />
                </div>
            )
        }
    }
}