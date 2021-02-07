import React, { Component } from 'react'
import { MenuItems } from "../sample/MenuItems";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class OpcionesMenu extends Component {
    render() {
        return (
            <ul className={this.props.clase}>
                {MenuItems.map((item, index) => {
                        if(item.titulo != "Productos") {
                            return (
                                <li key={index}>
                                    <a href={item.ruta}>{item.titulo}</a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <Link to={item.ruta}>{item.titulo}</Link>
                                </li>
                            )
                        }
                    })}
            </ul>
        )
    }
}
