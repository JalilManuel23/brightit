import React, { Component } from 'react'
import './Opciones.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default class Opciones extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="opcs">
                <div className="opciones-inicio container d-flex flex-column align-items-center justify-content-between">
                    <img src={this.props.imagenes.userGif} className="col-6 col-md-3 img-us" />
                    <h3>¡Bienvenido {this.props.usuario}!</h3>
                    <p>¿Qué deseas hacer?</p>
                    <div className="d-flex flex-column flex-md-row col-10 col-md-12 justify-content-around">
                        <Link to="/productos" className="opcion-inicio col-12 col-md-4">
                            <FontAwesomeIcon icon={this.props.icons.shoppingCart} className="icono-inicio" />
                            <p>Comprar productos</p>
                        </Link>
                        <Link to="/dashboard" className="opcion-inicio col-12 col-md-4">
                            <FontAwesomeIcon icon={this.props.icons.admin} className="icono-inicio" />
                            <p>Administrar mis productos</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
