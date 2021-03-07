import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton';
import './Carrito.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProductosCarrito extends Component {

    render() {

        return (
            <div className="productos d-flex flex-column align-items-center">
                <p className="sub">Subtotal:</p>
                <p className="subtotal-carrito">$522.00</p>
                <div className="imagenes-productos-carrito d-flex flex-column">
                    <div className="producto-carrito d-flex justify-content-around align-items-center">
                        <Link to="/producto/1">
                            <img src={this.props.imagenes.producto}></img>
                        </Link>
                        <a href="#">
                            <FontAwesomeIcon className="quitar" icon={this.props.icons.trash} />
                        </a>
                    </div>
                    <div className="producto-carrito d-flex justify-content-around align-items-center">
                        <Link to="/producto">
                            <img src={this.props.imagenes.producto}></img>
                        </Link>
                        <a href="#">
                            <FontAwesomeIcon className="quitar" icon={this.props.icons.trash} />
                        </a>
                    </div>
                    <div className="producto-carrito d-flex justify-content-around align-items-center">
                        <Link to="/producto">
                            <img src={this.props.imagenes.producto}></img>
                        </Link>
                        <a href="#">
                            <FontAwesomeIcon className="quitar" icon={this.props.icons.trash} />
                        </a>
                    </div>
                </div>
                <Boton color="blanco" texto="Proceder al pago" />
            </div>
        )
    }
}
