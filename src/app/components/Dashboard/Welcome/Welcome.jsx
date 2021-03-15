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
        };

        this.cargarClima = this.cargarClima.bind(this);
        this.icono = this.icono.bind(this);
    }

    componentDidMount() {
        this.cargarClima();
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
                    <p className="titulo-welcome">¡Buenos días!</p>
                    <p className="frase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-around">
                    {this.icono(this.state.description)}
                    <p className="dato-disp">{this.state.temperature} °c</p>
                </div>
            </div>
        )
    }
}
