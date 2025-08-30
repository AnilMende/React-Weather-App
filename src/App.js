
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import Search from './Components/Search/Search';
import CurrentWeather from './Current-Weather/current-weather';
import Forecast from './forecast/forecast';

function App() {
  // We are using the hooks to store the weather and forecast responses   
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const[lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    // For paraller processing of fetch 
    Promise.all([currentWeatherFetch, forecastFetch])
         .then(async (resonse) => {
                const weatherResponse = await resonse[0].json();
                const forecastResponse = await resonse[1].json();

                // updating the responses using set in useState
                setCurrentWeather({city:searchData.label, ...weatherResponse});
                setForecast({city:searchData.label, ...forecastResponse});
         })
         .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);
  
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
