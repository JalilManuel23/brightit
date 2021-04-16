import React from 'react';
import './Nosotros.css';
import imagenes from '../../../assets/imagenes';

export default function Nosotros(props) {
    return (
        <section className="nosotros d-flex align-items-center">
            <img className="workflow-items" src={ imagenes.workflowitems }/>
            <div className="container d-flex flex-column align-items-center justify-content-center text-center">
                <h2 className="titulo">Nosotros</h2>
                <p>
                    Somos una empresa 100% duranguense que tiene el principal
                    objetivo de desarrollar y vender aplicaciones de software y prototipos de internet de las cosas de alta calidad, cubriendo las necesidades de  sus clientes y mejorando el funcionamiento de algunas cosas de su vida cotidiana.
                </p>
            </div>
            <img className="workflow-slide" src={ imagenes.workflowslide }/>
        </section>
    )
}
