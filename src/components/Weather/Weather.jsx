import React, { useState } from 'react';
import { Search, Thermometer, Droplets, Wind } from 'lucide-react';
import { fetchWeatherDetails } from '../../services/weatherService';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    setError('');
    setWeather(null);
    try {
      const data = await fetchWeatherDetails(city);
      setWeather(data);
    } catch (err) {
      setError('City not found, please check the city name.');
    }
  };

  return (
    <div className="space-y-8 mb-8 mt-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Weather</h1>
        <p className="text-gray-600">Enter a city name to check current weather conditions</p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          onClick={handleFetchWeather}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          View Weather Info
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{weather.city}</h2>
                <p className="text-gray-600">{weather.country}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-gray-900">{weather.temperature}°C</p>
                <p className="text-gray-600">{weather.weatherDescription}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center">
                <Thermometer className="w-6 h-6 text-red-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Feels like</p>
                  <p className="text-lg font-semibold">{weather.feelsLike}°C</p>
                </div>
              </div>

              <div className="flex items-center">
                <Droplets className="w-6 h-6 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-lg font-semibold">{weather.humidity}%</p>
                </div>
              </div>

              <div className="flex items-center">
                <Wind className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-lg font-semibold">{weather.windSpeed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;