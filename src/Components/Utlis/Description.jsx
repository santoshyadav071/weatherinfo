import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Description = () => {
  return (
    <section className="h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-6 py-16 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">About</h2>
          <p className="mt-2">
            Our Weather App delivers precise, real-time weather updates for cities around the globe. Utilizing the OpenWeather API, it provides crucial weather information such as temperature, humidity, wind speed, and a comprehensive 7-day forecast.
          </p>
          <h3 className="text-xl font-semibold mt-4">Features</h3>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Real-time weather updates based on your current location
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Intuitive search functionality for any city
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Detailed 7-day weather forecast
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Interactive and user-friendly interface for seamless navigation
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Technology Stack</h3>
          <p>
            <strong>Frontend:</strong> React.js, Tailwind CSS <br />
            <strong>API:</strong> OpenWeather, Axios for API calls <br />
            <strong>Design Tools:</strong> Figma, various CSS libraries <br />
            <strong>Postman:</strong> For testing the API
          </p>
          <h3 className="text-xl font-semibold mt-4">How It Works</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Enter your location in the search bar.</li>
            <li>Select your desired city from the results.</li>
            <li>Explore detailed weather information, available hourly or weekly.</li>
          </ol>
          <h3 className="text-xl font-semibold mt-4">Vision & Mission</h3>
          <p>
            Our mission is to provide accessible and reliable weather information to empower users in planning their daily activities effectively.
          </p>
          <h3 className="text-xl font-semibold mt-4">Developer</h3>
          <p>
            Developed by Santosh Yadav, a dedicated frontend developer passionate about creating intuitive and engaging web applications.
          </p>
          <h3 className="text-xl font-semibold mt-4">Acknowledgments</h3>
          <p>
            Weather data is powered by the OpenWeather API.
          </p>
          <div className="mt-4">
            Note: If you want to learn more about weather information, then click on the button below.
          </div>

          <div className="mt-4">
            <Link to="/studyweather">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                learn Weather
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/images/about2.png" alt="About Weather App" className="h-auto max-w-full "/>
        </div>
      </div>
    </section>    
  );
};

export default Description;
