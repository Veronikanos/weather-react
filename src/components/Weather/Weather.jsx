import axios from 'axios';
import React, {useEffect, useState} from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import {SearchBar} from '../SearchBar/SearchBar';
import {search} from '../service/api';

import './Weather.css';

export default function Weather() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  function showCurrentWeather({
    name,
    coord,
    sys,
    main,
    dt,
    weather,
    wind,
  }) {
    setWeatherData({
      city: name,
      coords: coord,
      country: new Intl.DisplayNames(['en'], {type: 'region'}).of(
        sys.country
      ),
      temperature: Math.round(main.temp),
      date: new Date(dt * 1000),
      description: weather[0].description,
      icon: `icons/${weather[0].icon}.svg`,
      humidity: main.humidity,
      wind: Math.round(Number(wind.speed) * 3.6),
      precipitation: `-`,
      max: main.temp_max,
      min: main.temp_min,
    });
  }

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const {data} = await search(query);
        console.log(data);
        showCurrentWeather(data);
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
      {weatherData && <CurrentWeather objData={weatherData} />}

      {/* <Forecast coordinates={weatherData.coords} /> */}
    </div>
  );
}
