import React from 'react'
import { useMyContext } from "../context/WeatherContext"
import WeatherCard from './WeatherCard';
import { } from '../WeatherCard.css'

function WeatherCards() {
    let { weather, isLoading } = useMyContext();
    return (
        <div className="container">

            {isLoading ? <div>Loading... </div> : <div className="card-group">
                {weather.daily.map((day, index) => {
                    return (
                        <WeatherCard key={index} index={index} day={day} />
                    );
                })
                }
            </div>

            }
        </div>
    )
}

export default WeatherCards
