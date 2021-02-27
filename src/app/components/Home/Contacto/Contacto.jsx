import React from 'react'

export default function Contacto(props) {
    return (
        <section id="contacto" className="contacto">
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
                            <img src={props.imagenes.bubbles}></img>
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
                        <input type="submit" className="boton-azul btn-enviar" value="Enviar"></input>
                    </form>
                </div>
            </div>
        </section>
    )
}
