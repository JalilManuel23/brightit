import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            temperature: '',
            description: '',
            saludo: ''
        };

        this.cargarClima = this.cargarClima.bind(this);
        this.icono = this.icono.bind(this);
        this.saludo = this.saludo.bind(this);
    }

    componentDidMount() {
        this.cargarClima();
        this.saludo();
    }

    cargarClima = async () => {
        // metric parameter is for Celcius Unit
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Durango,Mexico&appid=9ff9f3f26098c231f106d108edc4a253&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)

        this.setState({
            temperature: Math.floor(data.main.temp * 1) / 1,
            description: data.weather[0].main,
        });
    }

    saludo() {
        var date = new Date();
        var hrs = date.getHours();
        var saludo = '';

        if(hrs >= 0 && hrs < 12) {
            saludo = '¡Buenos días!';
        } else {
            if(hrs >= 12 && hrs <= 19) {
                saludo = '¡Buenas tardes!';
            } else {
                if(hrs >= 20) {
                    saludo = '¡Buenas noches!';
                }
            }
        }
        this.setState({saludo: saludo});
    }

    icono(main) {
        console.log(main);
        if (main === 'Thunderstorm') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faBolt} />;
        } else if (main === 'Drizzle') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faCloudRain} />;
        } else if (main === 'Rain') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faCloudShowersHeavy} />;
        } else if (main === 'Snow') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faSnowflake} />;
        } else if (main === 'Clear') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faSun} />;
        } else if (main === 'Clouds') {
            return <FontAwesomeIcon className="icono-temperatura" icon={faCloud} />;
        } else {
            return <FontAwesomeIcon className="icono-temperatura" icon={faSmog} />;
        }
    }

    render() {
        return (
            <div className="welcome d-flex align-items-center justify-content-around">
                <div className="d-flex flex-column align-items-start justify-content-around">
                    <p className="titulo-welcome">{this.state.saludo}</p>
                    <p className="frase">Administra tus dispositvos y mira sus estadísticas desde este panel.</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-around">
                    {this.icono(this.state.description)}
                    <p className="dato-disp">{this.state.temperature} °c</p>
                </div>
            </div>
        )
    }
}
