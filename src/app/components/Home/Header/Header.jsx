import React from 'react'
import './Header.css';

export default function Header(props) {
    return (
        <header className="container d-flex flex-column align-items-center text-center">
            <h1 className="titulo texto-azul">Tecnología que resplandece</h1>
            <div className="p-4">
                <p>Los mejores productos de IoT para el hogar.</p>
                <p>Innovación, calidad y compromiso.</p>
            </div>
            <img src={ props.imagenes.iot } />
        </header>
    )
}
