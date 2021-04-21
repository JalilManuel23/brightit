import React, { Component } from 'react'
import './ConfirmarCompra.css';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2'
import Boton from '../Boton/Boton';

export default class ConfirmarCompra extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null,
            productos: []
        };

        this.eliminarProducto = this.eliminarProducto.bind(this);
        this.confirmarCompra = this.confirmarCompra.bind(this);
        this.guardarCompra = this.guardarCompra.bind(this);
        this.cargarProductos = this.cargarProductos.bind(this);
    }

    cargarProductos() {
        fetch('/productos/obtener_datos').then(
            res => {
                res.json().then((data) => {
                    this.setState({ productos: data.registros });
                });
            }
        );
    }

    componentDidMount() {
        this.cargarProductos();
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
            icon: 'success',
            title: `Producto eliminado del carrito`
        })
    }

    confirmarCompra() {
        fetch('/usuarios/is_logged', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status == 200) {
                Swal.mixin({
                    confirmButtonText: 'Siguiente &rarr;',
                    showCancelButton: true,
                    progressSteps: ['1', '2', '3']
                }).queue([
                    {
                        title: 'Número de telefono',
                        input: 'text'
                    },
                    {
                        title: 'Dirección de envio',
                        input: 'text'
                    },
                    {
                        title: 'Método de pago',
                        input: 'select',
                        inputOptions: {
                            tarjetaVisa: 'Tarjeta Visa',
                            tarjetaMaster: 'Tarjeta Mastercard',
                            efectivo: 'Efectivo en OXXO',
                            paypal: 'PayPal'
                        }
                    }
                ]).then((result) => {
                    if (result.value) {
                        const answers = JSON.stringify(result.value);
                        this.guardarCompra();
                        Swal.fire({
                            title: '¡Tu compra ha sido realizada con éxito!',
                            confirmButtonText: 'Comprar!'
                        })
                    }

                })
            } else {
                Swal.fire(
                    'Inicia sesión',
                    'Por favor, para realizar esta compra entra a tu cuenta',
                    'info'
                );
                this.setState({ redirect: '/login' });
            }
        })
    }

    guardarCompra() {
        this.state.productos.map(producto => {
            this.props.productosCarrito.map(productoAgregado => {
                if (producto.id == productoAgregado.id) {

                    let objeto = {};

                    if (producto._id == "607e27d208ba4f52404c4bed") {
                        objeto.alarma = true;
                    }

                    if (producto._id == "607e27fd08ba4f52404c4bee") {
                        objeto.cerradura = true;
                    }

                    if (producto._id == "607e281808ba4f52404c4bef") {
                        objeto.alimentador = true;
                    }

                    fetch(`/usuario/agregar_producto/${this.props.usuario}`, {
                        method: 'PUT', // or 'PUT'
                        body: JSON.stringify(objeto), // data can be `string` or {object}!
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        res.json().then(data => {
                            if (data.usuarioActualizado) {
                                this.setState({ redirect: '/dashboard' });
                            }
                        })
                    });
                }
            })
        });
    }

    render() {
        if (this.props.productosCarrito.length == 0) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center pagar-vacio">
                    <h2>Carrito de compras</h2>
                    <p>Tu carrito está vacio</p>
                    <Boton texto="Ir a productos" ruta="/productos"></Boton>
                </div>
            )
        } else {
            if (this.state.redirect) {
                return <Redirect to={this.state.redirect} />
            }

            let productos = this.state.productos;
            return (
                <div className="confirmar-compra container d-flex col-12 flex-column align-items-center">
                    <h2>Carrito de compras</h2>
                    <div className="productos-pagar d-flex col-12 col-md-8 flex-column">
                        {productos.map(producto => {
                            return (
                                this.props.productosCarrito.map(productoAgregado => {
                                    if (producto.id == productoAgregado.id) {
                                        return (
                                            <div className="d-flex flex-column flex-md-row align-items-center pagar">
                                                <Link key={productoAgregado.idProducto} to={`/producto/${producto.id}`} className="producto-pagar d-flex col-12 flex-column justify-content-between align-items-center flex-md-row">
                                                    <img className="col-5 col-md-2" src={`/producto/sacar_imagen/${producto.imagen}`}></img>
                                                    <div className="d-flex flex-column align-items-center">
                                                        <p className="nombre-producto">{producto.nombre}</p>
                                                        <p>{producto.descripcion}</p>
                                                    </div>
                                                    <p className="precio-producto">${producto.precio}</p>
                                                </Link>
                                                <a onClick={() => this.eliminarProducto(productoAgregado.idProducto, producto.precio)}>
                                                    <FontAwesomeIcon className="quitar" icon={faTrash} />
                                                </a>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })}
                    </div>
                    <h4 className="precio-producto">Total a pagar: ${this.props.subtotal}</h4>
                    <button onClick={this.confirmarCompra} className="btn btn-primary col-8 col-md-2">Continuar compra</button>
                </div>
            )
        }
    }
}

