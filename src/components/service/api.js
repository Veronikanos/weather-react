import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
  params: {
    appid: '0f146129869d8f01315497362c4058ae',
    units: 'metric',
  },
});

export const search = async (city) => {
  try {
    const {data} = await apiService.get('', {
      params: {q: city},
    });
    return {data};
  } catch (error) {
    return error.message;
  }
};
