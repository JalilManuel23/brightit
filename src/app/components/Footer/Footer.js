import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
    return (
        <footer className="d-flex flex-column">
            <div className="footer-logo-redes d-flex flex-column align-items-center">
                <img src={props.imagenes.logo}></img>
                <div className="footer-redes d-flex justify-content-center">
                    <a href="#"><FontAwesomeIcon icon={ props.icons.facebook }/></a>
                    <a href="#"><FontAwesomeIcon icon={ props.icons.twitter }/></a>
                    <a href="#"><FontAwesomeIcon icon={ props.icons.whatsapp }/></a>
                </div>
            </div>
            <div className="footer-derechos d-flex flex-column align-items-center">
                <p>© Copyright 2021 Bright IT.</p>
                <p>All rights reserverd.</p>
            </div>
        </footer>
    )
}
