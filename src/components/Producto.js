import React, { Component } from 'react'
import MenuBar from './MenuBar';
import MenuLateral from './MenuLateral';

export default class Producto extends Component {
    state = {
        menuMovil: 'menu-lateral ocultar'
    }

    handler = (param) => {
        this.setState({
            menuMovil: param
        })
    }

    render() {
        return (
            <div>
                <MenuBar imagenes={this.props.imagenes} handler={this.handler} menuMovil={this.menuMovil}/>
                <MenuLateral imagenes={this.props.imagenes} handler={this.handler} menuMovil={this.menuMovil} clase={this.state.menuMovil} />
            
                <div className="contenedor contenedor-producto">
                    <img src={this.props.imagenes.producto}/>
                    <div className="caracteristicas">
                        <p className="nombre-producto">Alarma antirrobo</p>
                        <p className="descripcion-producto">Descripción....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id massa hendrerit ornare.  </p>
                        <ul className="lista-caracteristicas">
                            <li>Característica 1</li>
                            <li>Característica 2</li>
                            <li>Característica 3</li>
                            <li>Característica 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
