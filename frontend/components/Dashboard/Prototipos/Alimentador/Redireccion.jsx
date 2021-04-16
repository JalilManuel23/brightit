import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class Redireccion extends Component {
    constructor() {
        super();
        this.state = {
            redirect: '/dashboard/alimentador'
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                red
            </div>
        )
    }
}
