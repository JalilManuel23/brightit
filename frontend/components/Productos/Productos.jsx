import React, { Component } from 'react'
import './Productos.css'
import productos from '../../sample/productos';
import ProductoCard from './ProductoCard/ProductoCard';

export default class Productos extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container d-flex flex-column justify-content-between align-items-center cont-banner">          
                        <h2 className="titulo">Productos</h2>
                        <p className="subt">Los mejores productos que se adaptan a tus necesidades</p>              
                    </div>
                </div>

                <div className="container d-flex flex-column flex-md-row justify-content-md-between">
                    {productos.map(producto => <ProductoCard 
                        handleCarrito = { this.props.handleCarrito }
                        sumarSubtotal = { this.props.sumarSubtotal }
                        key = { producto.id }
                        id = { producto.id }
                        nombre = { producto.nombre }
                        descripcion = { producto.descripcion }
                        ruta = { producto.ruta }
                        precio = { producto.precio }
                        imagen = { producto.imagen }
                    />)}
                </div>
            </div>
        )
    }
}
