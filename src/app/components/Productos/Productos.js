import React, { Component } from 'react'
import './Productos.css'

import ProductoCard from './ProductoCard/ProductoCard'

export default class Productos extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div class="container d-flex flex-column justify-content-between align-items-center cont-banner">          
                        <h2 className="titulo">Productos</h2>
                        <p>Los mejores productos que se adaptan a tus necesidades</p>              
                    </div>
                </div>

                <div className="container">
                    <ProductoCard imagenes={this.props.imagenes} />
                    <ProductoCard imagenes={this.props.imagenes} />
                    <ProductoCard imagenes={this.props.imagenes} />
                </div>
            </div>
        )
    }
}
