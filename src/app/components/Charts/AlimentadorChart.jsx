import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Porciones',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export default class AlimentadorChart extends Component {
    render() {
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Uso de los últimos 5 días',
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
