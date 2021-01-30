import React, {Component} from 'react';
import MenuBar from './MenuBar';
import Boton from './Boton';

class Home extends Component {
    render() {
        return <div>
            <MenuBar imagenes={this.props.imagenes}/>
            <header className="contenedor">
                <h1 className="titulo top-5 texto-azul">Tecnología que resplandece</h1>
                <p>Los mejores productos de IoT para el hogar.</p>
                <p>Innovación, calidad y compromiso.</p>
                <img src={this.props.imagenes.iot} className="top-3" />
            </header>
            <div className="conoce-productos">
                <div className="contenedor contenedor-conoce-productos">
                    <div className="titulo-boton-conoce-productos">
                        <h2 className="titulo">Conoce nuestros productos</h2>
                        <Boton color="boton-blanco" texto="Ver productos" />
                    </div>
                    <img src={this.props.imagenes.smarthome}></img>
                </div>
            </div>
        </div>
    }
}

export default Home;