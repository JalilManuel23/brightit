import React, { Component } from 'react'
import Header from './Header/Header'
import Productos from './Productos/Productos'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header imagenes= { this.props.imagenes } />
                <Productos imagenes= { this.props.imagenes } />
            </div>
        )
    }
}
