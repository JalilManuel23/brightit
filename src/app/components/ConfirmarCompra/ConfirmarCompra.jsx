import React, { Component } from 'react'
import './ConfirmarCompra.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ConfirmarCompra extends Component {
    render() {
        return (
            <div className="confirmar-compra container d-flex col-12 flex-column align-items-center">
                <h2>Carrito de compras</h2>
                <div className="productos-pagar d-flex col-12 col-md-8 flex-column">
                    <Link to="/producto/1" className="producto-pagar d-flex col-12 flex-column justify-content-between align-items-center flex-md-row">
                        <img className="col-5 col-md-2" src={this.props.imagenes.alarma}></img>
                        <div className="d-flex flex-column align-items-center">
                            <p className="nombre-producto">Alarma</p>
                            <p>Lorem ipsum!</p>
                        </div>
                        <FontAwesomeIcon className="quitar" icon={this.props.icons.trash} />
                        <p className="precio-producto">$522.00</p>
                    </Link>
                </div>
                <button className="btn btn-primary col-8 col-md-2">Continuar compra</button>
            </div>
        )
    }
}

