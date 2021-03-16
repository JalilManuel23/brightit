import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export default class AlimentadorChart extends Component {
    constructor() {
        super();
        this.state = {
            labels: null,
            datasets: [
                {
                    label: 'Porciones',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                    data: null
                }
            ]
        }
        this.cargarDatos = this.cargarDatos.bind(this);
    }

    cargarDatos() {
        fetch('/alimentador/obtener_porciones').then(res => {
            res.json().then((data) => {
                this.setState({
                    labels: data.meses,
                    datasets: [{
                        data: data.valores,
                        label: 'Porciones',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(75,192,192,1)',
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
                hola
                <Bar
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Uso de los últimos 5 meses',
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
