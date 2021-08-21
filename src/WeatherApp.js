import React from 'react';
import InputIndex from './components/InputIndex';
import { WeatherProvider } from './context/WeatherContext';
import { useState } from 'react';
import WeatherCards from './components/WeatherCards';

function WeatherApp() {
    const [city, setCity] = useState({plaka: 34,
        il_adi: "İSTANBUL",
        lat: 41.00527,
        lon: 28.97696,
    })
    return (
        <div>
            <InputIndex setCity={setCity} city={city}/>
            <WeatherProvider city={city} >
                <WeatherCards/>
            </WeatherProvider>
        </div>
    )
}

export default WeatherApp
