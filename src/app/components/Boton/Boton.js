import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class Boton extends Component {
    render() {
        return <Link to={this.props.ruta}><button className= {this.props.color ? "btn btn-light" : "btn btn-primary"}  type="submit">{this.props.texto}</button></Link>
    }
}

export default Boton;