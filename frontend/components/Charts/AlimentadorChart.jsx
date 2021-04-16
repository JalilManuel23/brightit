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
                    backgroundColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                    borderColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
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
                        backgroundColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                        borderColor: ['rgba(104,183,220,255)','rgba(104,148,220,255)', 'rgba(104,113,220,255)', 'rgba(128,104,220,255)', 'rgba(163,104,220,255)', 'rgba(199,104,220,255)'],
                        borderWidth: 2,
                    }] 
                })
            });
        })
    }

    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        let datos = this.props.datos ? this.props.datos : this.state;

        return (
            <div>
                <Bar
                    data={datos}
                    options={{
                        title: {
                            display: true,
                            text: 'Uso por mes',
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
