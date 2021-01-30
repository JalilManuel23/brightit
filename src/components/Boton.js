import React, {Component} from 'react';

class Boton extends Component {
    render() {
        return <a href="#" className={this.props.color}>{this.props.texto}</a>
    }
}

export default Boton;