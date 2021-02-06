import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class ProductoCard extends Component {
    render() {
        return (
            <div className="tarjeta-producto">
                <img src={this.props.imagenes.producto}></img>
                <div className="datos">
                    <p className="nombre-producto">Alarma antirrobo</p>
                    <p className="descripcion-producto">Descripción....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id massa hendrerit ornare.  </p>
                    <div className="btn-ver">
                        <Link to="producto" className="boton-azul">Ver más</Link>
                    </div>
                </div>
            </div>
        )
    }
}
