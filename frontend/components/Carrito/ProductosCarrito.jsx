import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton';
import './Carrito.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
// import productos from '../../sample/productos';

export default class ProductosCarrito extends Component {
    constructor() {
        super();

        this.state = {
            productos: []
        }

        this.eliminarProducto = this.eliminarProducto.bind(this);
        this.cargarProductos = this.cargarProductos.bind(this);
    }

    componentDidMount() {
        this.cargarProductos();
    }

    cargarProductos() {
        fetch('/productos/obtener_datos').then(
            res => {
                res.json().then((data) => {
                    this.setState({productos: data.registros});
                });
            }
        );
    }

    eliminarProducto(idProducto, precio) {
        this.props.eliminarProducto(idProducto, precio);
        
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
            icon: 'info',
            title: `Producto eliminado del carrito`
        })
    }

    render() {
        if (this.props.productosCarrito.length == 0) {
            return (
                <div className="productos d-flex flex-column align-items-center">
                    <p>Tu carrito está vacio</p>
                </div>
            )
        } else {
            let productos = this.state.productos;
            return (
                <div className="productos d-flex flex-column align-items-center">
                    <p className="sub">Subtotal:</p>
                    <p className="subtotal-carrito">$ {this.props.subtotal}</p>
                    <div className="imagenes-productos-carrito d-flex flex-column col-12">
                        {productos.map(producto => {
                            return (
                                this.props.productosCarrito.map(productoAgregado => {
                                    if (producto.id == productoAgregado.id) {
                                        return (
                                            <div key={productoAgregado.idProducto} className="producto-carrito d-flex justify-content-around align-items-center">
                                                <Link to={`/producto/${producto.id}`}>
                                                    <img src={`/producto/sacar_imagen/${producto.imagen}`}></img>
                                                </Link>
                                                <a onClick={() => this.eliminarProducto(productoAgregado.idProducto, producto.precio)}>
                                                    <FontAwesomeIcon className="quitar" icon={ faTrash } />
                                                </a>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })}
                    </div>
                    <Boton ruta="/confirmar_compra" color="blanco" texto="Proceder al pago" />
                </div>
            )
        }
    }
}