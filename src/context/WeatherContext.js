import React from 'react'
import { createContext , useState , useEffect , useContext , } from "react";
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ city ,children }) => {
    const [weather, setWeather] = useState({})
    const [isLoading, setisLoading] = useState(true)
    useEffect(  () => {
         axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=8eee8757baee16c12b451514ed973fc8`).then((res) =>{ setWeather(res.data); setisLoading(false) })
     }, [city])
     const values = {city , weather ,isLoading }
    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}
export const useMyContext = () => useContext(WeatherContext)