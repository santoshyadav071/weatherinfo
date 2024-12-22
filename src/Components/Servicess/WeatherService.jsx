import axios from 'axios';

const API_KEY = 'e898dd692b659e483ba9571e162467b9'; // Apna API key yahan daalein
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${apiUrl}${city},IN&appid=${API_KEY}`); // Location ko India ke saath specify karein
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchWeatherByLocation = async (setWeatherData) => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(`${apiUrl}${latitude},${longitude}&appid=${API_KEY}`);
        setWeatherData(response.data);
        resolve(response.data);
      }, reject);
    });
  } else {
    throw new Error('Geolocation is not supported by this browser.');
  }
};


export const fetchWeatherByCity = async (city, setWeatherData) => {
  try {
    const response = await axios.get(`${apiUrl}${city},IN&appid=${API_KEY}`); // Location ko India ke saath specify karein
    setWeatherData(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
