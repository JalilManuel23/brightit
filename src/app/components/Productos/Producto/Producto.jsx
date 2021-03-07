import React from 'react'
import Boton from '../../Boton/Boton';
import './Producto.css'
import productos from '../../../sample/productos';
import Swal from 'sweetalert2'

export default function Producto(props) {
    
    const agregarProducto = (id, precio) => {
        props.handleCarrito(id);
        props.sumarSubtotal(precio);
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
            title: `¡Producto agregado al carrito!`
        })
    }
    var i = 0;
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
                                        <Boton texto="Comprar" />
                                        <button className="btn btn-light" onClick={() => agregarProducto( producto.id, producto.precio )} color="blanco">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        i++;
                    }

                    if(i == 3) {
                        return <div className="no-existe container d-flex flex-column align-items-center justify-content-around">
                            <h1 className="text-center">Este producto no existe</h1>
                            <Boton texto="Ir a productos" ruta="/productos"></Boton>
                        </div>
                    }
                })
            }
        </div>
    )
}



















