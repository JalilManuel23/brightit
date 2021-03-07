import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Boton from '../../Boton/Boton';
import Swal from 'sweetalert2'

import './ProductoCard.css'

export default class ProductoCard extends Component {
    constructor() {
        super();
        this.agregarProducto = this.agregarProducto.bind(this);
        this.manejador = this.manejador.bind(this);
    }

    manejador(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    agregarProducto(id) {
        this.props.handleCarrito(id);
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
        })
    }

    render() {
        return (
            <div  className="d-flex flex-column align-items-center tarjeta-producto">
            <Link className="link-producto" to={`/producto/${ this.props.id }`}>
                <img src={ this.props.imagen }></img>
                <div className="datos">
                    <p className="nombre-producto">{ this.props.nombre }</p>
                    <p className="descripcion-producto">{ this.props.descripcion }</p>
                    <p className="precio-producto ">$ { this.props.precio } </p>
                </div>
            </Link>
            <button className="btn-carrito btn btn-primary" onClick={() => this.agregarProducto( this.props.id )}>Agregar al carrito</button>
            </div>
        )
    }
}
