// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5f5ee9513560a6b479fce3ca77095b82

import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5f5ee9513560a6b479fce3ca77095b82`
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);

      //object Destructuring
      const { temp, humidity, pressure, } = data.main;
      const { main: weathermood } = data.weather[0]; //because weather is an array of object
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp, humidity, pressure, weathermood, name, speed, country, sunset,
      }

      setTempInfo(myNewWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [])


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type='search' placeholder='search...' autoFocus
            id='search' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>


      {/* our temperature card */}
      {/* props passing */}
      <WeatherCard tempInfo={tempInfo}/>   

    </>
  )
}

export default Temp

