import Boton from '../../Boton/Boton';
import './Producto.css'
import productos from '../../../sample/productos';
import Swal from 'sweetalert2'
import { Link, Redirect } from "react-router-dom";

import React, { Component } from 'react'

export default class Producto extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null
        }

        this.agregarProducto = this.agregarProducto.bind(this);
    }
    
    agregarProducto = (id, precio, redirect) => {
        this.props.handleCarrito(id);
        this.props.sumarSubtotal(precio);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: `¡Producto agregado al carrito!`
        });

        redirect ? this.setState({ redirect: "/confirmar_compra" }) : this.setState({ redirect: null });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div>
                {
                    productos.map(producto => {
                        if (producto.id == this.props.match.params.id) {
                            return (
                                <div className="container contenedor-producto d-flex flex-column flex-md-row justify-content-around align-items-center">
                                    <img src={producto.imagen} />
                                    <div className="caracteristicas">
                                        <p className="nombre-producto">{producto.nombre}</p>
                                        <p className="descripcion-producto"> {producto.descripcion}</p>
                                        <p className="precio-producto">${producto.precio}</p>
                                        <div className="botones d-flex flex-column">
                                            <button className="btn btn-primary" onClick={() => this.agregarProducto(producto.id, producto.precio, true)}>Comprar</button>
                                            <button className="btn btn-light" onClick={() => this.agregarProducto(producto.id, producto.precio, false)} color="blanco">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}




















