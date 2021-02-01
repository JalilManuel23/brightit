import React, {Component} from 'react';
import MenuBar from './MenuBar';
import Boton from './Boton';
import Footer from './Footer';
import MenuLateral from './MenuLateral';

class Home extends Component {
    state = {
        menuMovil: 'menu-lateral ocultar'
    }

    handler = (param) => {
        this.setState({
            menuMovil: param
        })
    }

    render() {
        return <div>
            <MenuBar imagenes={this.props.imagenes} handler={this.handler} menuMovil={this.menuMovil}/>
            <MenuLateral imagenes={this.props.imagenes} handler={this.handler} menuMovil={this.menuMovil} clase={this.state.menuMovil} />
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
            <section className="nosotros">
                <img className="workflow-items" src={this.props.imagenes.workflowitems}/>
                <div className="contenedor contenedor-nosotros">
                    <h2 className="titulo">Nosotros</h2>
                    <p>
                    Somos una empresa 100% duranguense que tiene el principal
                    objetivo de desarrollar y vender aplicaciones de software y prototipos de internet de las cosas de alta calidad, cubriendo las necesidades de  sus clientes y mejorando el funcionamiento de algunas cosas de su vida cotidiana.
                    </p>
                </div>
                <img className="workflow-slide" src={this.props.imagenes.workflowslide}/>
            </section>
            <section className="contacto">
                <div className="contenedor contenedor-contacto">
                    <h2 className="titulo texto-azul">Contacto</h2>
                    <div className="info-formulario">
                        <div className="info-bubbles">
                            <div class="info">
                                <h3>Información de contacto</h3>
                                <p>¿Tienes alguna duda? Solo escribenos en nuestras
                                redes o en nuestro formulario.</p>
                                <p>6181846889</p>
                                <p>brightit@gmail.com</p>
                            </div>
                            <div class="bubbles">
                                <img src={this.props.imagenes.bubbles}></img>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                        <form>
                            <div>
                                <label>Envianos un mensaje</label>
                                <input type="text" placeholder="Nombre"></input>
                                <input type="email" placeholder="Email"></input>
                                <textarea>Mensaje</textarea>
                            </div>
                            <input type="submit" className="boton-azul btn-enviar"></input>
                        </form>
                    </div>
                </div>
            </section>
            <Footer imagenes={this.props.imagenes}/>
        </div>
    }
}

export default Home;