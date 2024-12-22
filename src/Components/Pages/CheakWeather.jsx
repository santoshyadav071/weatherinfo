import { useState } from 'react';
import { fetchWeather } from '../Servicess/WeatherService'; // Importing the weather service
import { FaTemperatureHigh, FaCloud, FaTint, FaWind, FaCompressArrowsAlt, FaEye } from 'react-icons/fa'; // Importing icons

const CheckWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckWeather = async () => {
    setError('');
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px]">
        <div className="flex-1 mb-4 md:mb-0">
          <img src="/images/banner3.png" alt="Weather" className="w-full max-w-[400px] h-auto rounded-lg shadow-lg mb-4 animate-pulse" />
          <details className="mb-4">
            <summary className="cursor-pointer text-blue-600 font-semibold">Did you know about space?</summary>
            <p className="text-sm">Space is completely silent because there is no atmosphere for sound to travel through.</p>
            <p className="text-sm">A day on Venus is longer than a year on Venus.</p>
            <p className="text-sm">There are more stars in the universe than grains of sand on all the Earth's beaches.</p>
            <p className="text-sm">The universe is estimated to be 13.8 billion years old.</p>
            <p className="text-sm ">The Milky Way galaxy contains an estimated 200 billion stars.</p>
            <p className="text-sm">The Andromeda galaxy is the closest major galaxy to the Milky Way.</p>
          </details>
        </div>

        {/* Card for input and output */}
        <div className="border rounded-lg p-6 shadow-lg flex-1 max-w-[400px] w-full">
          {/* Did you know section moved to the top of the card */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-600">Did you know?</h3>
            <p className="text-sm">Weather can change rapidly, so always be prepared!</p>
            <p className="text-sm">Check the forecast regularly to stay informed.</p>
          </div>

          <input 
            type="text" 
            placeholder="Enter city name" 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black" 
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update city state
          />
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-bold md:text-base w-full"
            onClick={handleCheckWeather} // Handle button click
          >
            Check Weather
          </button>

          {loading && <p className="text-blue-500 mt-4">Loading weather data...</p>} {/* Loading message */}
          {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error message */}
          {weather && (
            <div className="border-t mt-4 pt-4">
              <h2 className="text-xl font-bold">{weather.name}</h2>
              <img 
                src={weather.weather[0].main === 'Rain' ? '/images/rain.png' : 
                      weather.weather[0].main === 'Clouds' ? '/images/cloud.png' : 
                      weather.weather[0].main === 'Clear' ? '/images/clear.png' :
                      weather.weather[0].main === 'Snow' ? '/images/snow.png' :
                      weather.weather[0].main === 'Thunderstorm' ? '/images/thunder.png' :
                      weather.weather[0].main === 'Mist' ? '/images/mist.png' :
                      weather.weather[0].main === 'Fog' ? '/images/fog.png' :
                      weather.weather[0].main === 'Drizzle' ? '/images/drizzle.png' :
                      weather.weather[0].main === 'Haze' ? '/images/haze.jpg' :
                      weather.weather[0].main === 'Smoke' ? '/images/smoke2.webp' :
                      weather.weather[0].main === 'Dust' ? '/images/dust.png' :
                      weather.weather[0].main === 'Sand' ? '/images/sand.png' :
                      weather.weather[0].main === 'Ash' ? '/images/ash.jpeg' :
                      weather.weather[0].main === 'Squall' ? '/images/squal.png' :
                      weather.weather[0].main === 'Tornado' ? '/images/torndo.png' :
                      '/images/default.png'} 
                alt={weather.weather[0].description} 
                className="w-16 h-16 mb-2"
              />
              <p>{weather.weather[0].description}</p>
              <p className="flex items-center"><FaTemperatureHigh className="mr-2" /> Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
              <p className="flex items-center"><FaTint className="mr-2" /> Humidity: {weather.main.humidity}%</p>
              <p className="flex items-center"><FaWind className="mr-2" /> Wind Speed: {weather.wind.speed} m/s</p>
              <p className="flex items-center"><FaCompressArrowsAlt className="mr-2" /> Pressure: {weather.main.pressure} hPa</p>
              <p className="flex items-center"><FaCloud className="mr-2" /> Cloudiness: {weather.clouds.all}%</p>
              <p className="flex items-center"><FaEye className="mr-2" /> Visibility: {weather.visibility / 1000} km</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckWeather;
