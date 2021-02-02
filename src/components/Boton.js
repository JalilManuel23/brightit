import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Boton extends Component {
    render() {
        return <Link to={this.props.ruta} className={this.props.color}>{this.props.texto}</Link>
    }
}

export default Boton;