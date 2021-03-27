import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import imagenes from '../../assets/imagenes';

export default function Footer(props) {
    return (
        <footer className="d-flex flex-column">
            <div className="footer-logo-redes d-flex flex-column align-items-center">
                <img src={ imagenes.logo }></img>
                <div className="footer-redes d-flex justify-content-center">
                    <a href="#"><FontAwesomeIcon icon={ faFacebookF }/></a>
                    <a href="#"><FontAwesomeIcon icon={ faTwitter }/></a>
                    <a href="#"><FontAwesomeIcon icon={ faWhatsapp }/></a>
                </div>
            </div>
            <div className="footer-derechos d-flex flex-column align-items-center">
                <p>© Copyright 2021 Bright IT.</p>
                <p>All rights reserverd.</p>
            </div>
        </footer>
    )
}
