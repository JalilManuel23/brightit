import React, { Component } from 'react'
import './Productos.css'

import ProductoCard from './ProductoCard/ProductoCard'

export default class Productos extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container d-flex flex-column justify-content-between align-items-center cont-banner">          
                        <h2 className="titulo">Productos</h2>
                        <p>Los mejores productos que se adaptan a tus necesidades</p>              
                    </div>
                </div>

                <div className="container d-flex flex-column flex-md-row justify-content-md-between">
                    <ProductoCard imagenes={this.props.imagenes} icons = { this.props.icons }/>
                    <ProductoCard imagenes={this.props.imagenes} icons = { this.props.icons }/>
                    <ProductoCard imagenes={this.props.imagenes} icons = { this.props.icons }/>
                </div>
            </div>
        )
    }
}
