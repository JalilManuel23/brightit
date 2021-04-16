import React, { Component } from 'react'
import Contacto from './Contacto/Contacto'
import Header from './Header/Header'
import Nosotros from './Nosotros/Nosotros'
import Productos from './Productos/Productos'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Productos/>
                <Nosotros/>
                <Contacto/>
            </div>
        )
    }
}
