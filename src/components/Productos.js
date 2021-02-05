import React, { Component } from 'react'
import MenuBar from './MenuBar';
import Boton from './Boton';
import Footer from './Footer';
import MenuLateral from './MenuLateral';
import ProductoCard from './ProductoCard';

export default class Productos extends Component {
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
            
                <div className="banner">
                    <div class="contenedor contenedor-banner">          
                        <h2 className="titulo">Productos</h2>
                        <p>Los mejores productos que se adaptan a tus necesidades</p>              
                    </div>
                </div>

                <div className="contenedor productos">
                    <ProductoCard imagenes={this.props.imagenes} />
                    <ProductoCard imagenes={this.props.imagenes} />
                    <ProductoCard imagenes={this.props.imagenes} />
                </div>
                <Footer imagenes={this.props.imagenes}/>
            </div>
        )
    }
}
