import React from 'react'
import Boton from '../../Boton/Boton';
import './Producto.css'
import productos from '../../../sample/productos';

export default function Producto(props) {
    return (
        <div>
            {
                productos.map(producto => {
                    if (producto.id == props.match.params.id) {
                        return (
                            <div className="container contenedor-producto d-flex flex-column flex-md-row justify-content-around align-items-center">
                                <img src={producto.imagen} />
                                <div className="caracteristicas">
                                    <p className="nombre-producto">{producto.nombre}</p>
                                    <p className="descripcion-producto"> {producto.descripcion}</p>
                                    <p className="precio-producto">${producto.precio}</p>
                                    <div className="botones d-flex flex-column">
                                        <Boton className="btn btn-primary" texto="Comprar" />
                                        <Boton className="btn btn-primary" color="blanco" texto="Agregar al carrito" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}



















