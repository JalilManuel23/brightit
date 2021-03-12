import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

import Menu from './Menu/Menu'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.ver = this.ver.bind(this);
    }

    ver() {
        fetch('/compra/agregarCompra', {credentials: 'include'}).then(res => {
            if (res.status == 200) {
                console.log("adentro");
            } else {
                console.log("No entro")
            }
        })
    }
    render() {
        return (
            <div className="d-flex container">
                
            </div>
        )
    }
}
