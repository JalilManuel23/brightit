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
        fetch('/alarma/ver_datos_usuarios').then(res => {
            res.json().then((data) => {
                const usuarios = [];
                const valores = [];
        
                data.registros.map(registro => {
                    usuarios.push(registro.nombre);
                    valores.push(registro.contador);
                })

                this.setState({
                    labels: usuarios,
                    datasets: [{
                        data: valores,
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
