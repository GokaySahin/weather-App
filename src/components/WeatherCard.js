import React from 'react'
import { } from "../WeatherCard.css"

function WeatherCard({ index, day }) {
  let s = new Date(day.dt * 1000)
  s = (s.toLocaleString('en-US', {
    weekday: 'long', // long, short, narrow
    day: '2-digit', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
  }));
  return (
    <div className="card" style={{ "width": "8rem", "height": "8rem" }} id={"myid" + index}>
      <img className="card-img-top" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather Status" style={{ "width": "30px", "height": "30px" }} />
      <div className="card-body">
        <h5 className="card-title">{s}</h5>
        <p className="card-text">
          Day : <br></br> {day.temp.day}<>&nbsp;</>°C <br></br> {day.weather[0].description}  <br></br>
          </p>
          <hr></hr>
          <p className="card-text">
          Night : <br></br>  {day.temp.night}<>&nbsp;</>°C <br></br> </p>
      </div>
    </div>

  )
}

export default WeatherCard
