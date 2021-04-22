import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class CerraduraChart extends Component {
    constructor() {
        super();
        this.state = {
            labels: null,
            datasets: [
                {
                    label: '°C',
                    backgroundColor: 'rgba(80, 161, 228)',
                    borderColor: 'rgba(80, 161, 228)',
                    borderWidth: 2,
                    data: null
                }
            ]
        }
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    cargarDatos() {
        fetch('/cerradura/datos_grafica/5').then(res => {
            res.json().then((data) => {

                let dias = [];
                let valores = [];

                data.registros.map(registro => {
                    dias.push(registro.horaRegistro.substring(11,16));
                    valores.push(registro.temperaturaRegistrada);
                });

                this.setState({
                    labels: dias,
                    datasets: [{
                        data: valores,
                        label: '°C',
                        backgroundColor: 'rgba(80, 161, 228)',
                        borderColor: 'rgba(80, 161, 228)',
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
                <Line
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Temperatura cuarto frio',
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
