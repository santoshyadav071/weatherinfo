import weatherData from '../../Data/weatherData.json';

const StudyW = () => {
    const { weather } = weatherData;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 text-center">Weather and Space Information</h1>
            
            <section className="p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mt-4">Weather Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(weather.overview.howWeatherWorks).map(([key, value]) => (
                        value.description ? (
                            <div key={key} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                                <p className="mt-2">{typeof value === 'string' ? value : value.description}</p>
                                {value.image && <img src={value.image} alt={key} className="mt-2 rounded-lg w-full h-[200px] object-cover" />} {/* Display image if available */}
                            </div>
                        ) : null
                    ))}
                </div>
            </section>

            <section className="p-4 rounded-lg shadow-lg mt-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mt-4">Water Cycle Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(weather.overview.howWeatherWorks.waterCycle).map(([key, value]) => (
                        value.description ? (
                            <div key={key} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                                <p className="mt-2">{typeof value === 'string' ? value : value.description}</p>
                                {value.image && <img src={value.image} alt={key} className="mt-2 rounded-lg w-full h-[200px] object-cover" />} {/* Display image if available */}
                            </div>
                        ) : null
                    ))}
                </div>
            </section>

            <section className="p-4 rounded-lg shadow-lg mt-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mt-4">Space Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(weather.space.overview).map(([key, value]) => (
                        value.description ? (
                            <div key={key} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                                <p className="mt-2">{typeof value === 'string' ? value : value.description}</p>
                                {value.image && <img src={value.image} alt={key} className="mt-2 rounded-lg w-full h-[200px] object-cover" />} {/* Display image if available */}
                            </div>
                        ) : null
                    ))}
                </div>
            </section>

            <section className="p-4 rounded-lg shadow-lg mt-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mt-4">Space Exploration Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(weather.space.overview.spaceExploration).map(([key, value]) => (
                        value.description ? (
                            <div key={key} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                                <p className="mt-2">{typeof value === 'string' ? value : value.description}</p>
                                {value.image && <img src={value.image} alt={key} className="mt-2 rounded-lg w-full h-[200px] object-cover" />} {/* Display image if available */}
                            </div>
                        ) : null
                    ))}
                </div>
            </section>

            <section className="p-4 rounded-lg shadow-lg mt-6 transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold mt-4">Phenomena in Space Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(weather.space.overview.phenomenaInSpace).map(([key, value]) => (
                        value.description ? (
                            <div key={key} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                                <p className="mt-2">{typeof value === 'string' ? value : value.description}</p>
                                {value.image && <img src={value.image} alt={key} className="mt-2 rounded-lg w-full h-[200px] object-cover" />} {/* Display image if available */}
                            </div>
                        ) : null
                    ))}
                </div>
            </section>
        </div>
    );
};

export default StudyW;
