import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?zip={}';
const API_KEY = '90b70ba4b6b0a825b55173bb80c52299';

export const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      zip:9040,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
};
