import axios from 'axios';
import chalk from 'chalk';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherDetails = async (city) => {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        q: city,
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });

    const data = response.data;

    console.log(chalk.green('Weather Data Fetched'));

    return {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weatherDescription: data.weather[0].description,
      weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

  } catch (error) {
    console.log(chalk.red('Error Fetching Weather Data'));
    console.error('Error fetching weather details:', error);
    throw error;
  }
};
