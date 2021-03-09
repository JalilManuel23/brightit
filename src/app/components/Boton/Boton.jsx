import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Boton extends Component {
    render() {
        return <Link to={this.props.ruta} ><button className= {this.props.color ? "btn btn-light" : "btn btn-primary"} >
                {this.props.texto}
                {this.props.icono ? <FontAwesomeIcon icon={ this.props.icono }/> : ""}
            </button>
        </Link>
    }
}

export default Boton;