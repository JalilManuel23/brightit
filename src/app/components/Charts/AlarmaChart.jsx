import React, { Component } from 'react'
import { Doughnut, Line } from 'react-chartjs-2';

export default class CerraduraChart extends Component {
    constructor() {
        super();
        this.state = {
            labels: null,
            datasets: [
                {
                    label: 'Usuario',
                    backgroundColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                    borderWidth: 0,
                    data: null
                }
            ]
        }
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    cargarDatos() {
        fetch('/alarma/numero_usos').then(res => {
            res.json().then((data) => {
                this.setState({
                    labels: data.usuarios,
                    datasets: [{
                        data: data.valores,
                        label: 'Usuario',
                        borderWidth: 2,
                    }] 
                })
                console.log(data);
                console.log(this.state);
            });
        })
    }

    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        return (
            <div>
                <Doughnut
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Historial de uso por persona',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}
