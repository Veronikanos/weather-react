import axios from 'axios';
import React, {useEffect, useState} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import {SearchBar} from '../SearchBar/SearchBar';
import {search} from '../service/api';

import './Weather.css';

export default function Weather() {
  const [query, setQuery] = useState('');
  // const [weatherData, setWeatherData] = useState({});

  // function showCurrentWeather(response) {
  //   console.log(response);
  //   // setWeatherData({
  //   //   // ready: true,
  //   //   city: response.data.name,
  //   //   coords: response.data.coord,
  //   //   country: new Intl.DisplayNames(['en'], {type: 'region'}).of(
  //   //     response.data.sys.country
  //   //   ),
  //   //   temperature: Math.round(response.data.main.temp),
  //   //   date: new Date(response.data.dt * 1000),
  //   //   description: response.data.weather[0].description,
  //   //   icon: `icons/${response.data.weather[0].icon}.svg`,
  //   //   humidity: response.data.main.humidity,
  //   //   wind: Math.round(Number(response.data.wind.speed) * 3.6),
  //   //   precipitation: `-`,
  //   //   max: `-`,
  //   //   min: `-`,
  //   // });
  // }

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const {data} = await search(query);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCity();
  }, [query]);

  const onSubmitSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmitSearch} />

      {/* <CurrentWeather objData={weatherData} />
      <Forecast coordinates={weatherData.coords} /> */}
    </div>
  );
}
