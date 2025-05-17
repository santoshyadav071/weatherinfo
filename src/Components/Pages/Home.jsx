import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4 rain-effect" style={{ backgroundImage: 'url(/images/rain2.png)' }}>
      <img src="/images/banner.png" alt="Banner" className="animate-bounce w-full max-w-[300px] h-auto rounded object-cover" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce text-center">Wecome to the Weather Info App</h1>
      <p className="text-base md:text-lg text-center mb-8 animate-bounce">Get the latest weather updates and forecasts for your location.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm md:text-base">
        <Link to="/cheakweather">
          Check Weather
        </Link>
      </button>
     
    </div>
  );
}

export default Home;
