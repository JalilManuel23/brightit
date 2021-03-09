import React, { Component } from 'react'
import Contacto from './Contacto/Contacto'
import Header from './Header/Header'
import Nosotros from './Nosotros/Nosotros'
import Productos from './Productos/Productos'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header imagenes= { this.props.imagenes } />
                <Productos imagenes= { this.props.imagenes } />
                <Nosotros imagenes = {this.props.imagenes} />
                <Contacto imagenes = { this.props.imagenes} />
            </div>
        )
    }
}
