import React from 'react';
import './Contacto.css';

export default function Contacto(props) {
    return (
        <section className="contacto">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h2 className="titulo texto-azul">Contacto</h2>
                <div className="info-formulario d-flex">
                    <div className="info-bubbles d-flex flex-column">
                        <div className="info">
                            <h3>Información de contacto</h3>
                            <p>¿Tienes alguna duda? Solo escribenos en nuestras
                            redes o en nuestro formulario.</p>
                            <p>6181846889</p>
                            <p>brightit@gmail.com</p>
                        </div>
                        <div className="bubbles">
                            <img src={props.imagenes.bubbles}></img>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <form className="d-flex flex-column align-items-center">
                        <div>
                            <label>Envianos un mensaje</label>
                            <input type="text" placeholder="Nombre"></input>
                            <input type="email" placeholder="Email"></input>
                            <textarea>Mensaje</textarea>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Enviar"></input>
                    </form>
                </div>
            </div>
        </section>
    )
}
