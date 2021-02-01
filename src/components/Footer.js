import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-logo-redes">
                    <img src={this.props.imagenes.logo}></img>
                    <div className="footer-redes">
                        <a href="#">f</a>
                        <a href="#">t</a>
                        <a href="#">w</a>
                    </div>
                </div>
                <div className="footer-derechos">
                    <p>© Copyright 2021 Bright IT.</p>
                    <p>All rights reserverd.</p>
                </div>
            </footer>
        )
    }
}
