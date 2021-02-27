import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Boton extends Component {
    render() {
        return <Link to={this.props.ruta} ><button className= {this.props.color ? "btn btn-light" : "btn btn-primary"} >{this.props.texto}</button></Link>
    }
}

export default Boton;