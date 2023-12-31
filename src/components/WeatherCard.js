import React, { useState, useEffect } from 'react'
import "./style.css";
const WeatherCard = ({ tempInfo }) => {


    const [weatherState, setWeatherState] = useState("");  //this is for the weather icon. to use weather icon acc. to the weather mood.

    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset,
    } = tempInfo; //destructuring

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }

    }, [weathermood]);


    //convertion the sunset seconds into time format
    let sec = sunset;
    let date = new Date(sec * 1000);  //we get miliseconds from this
    let time = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>


                {/* our 4 cloumn section */}

                <div className="extra-temp">
                    <div className='temp-info-minmax'>
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-sunset'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {time}
                                <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}
                                <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-rain'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}
                                <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className='wi wi-strong-wind'></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}
                                <br />
                                Speed
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default WeatherCard
