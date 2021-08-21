import React from 'react'
import cities from "../iller.json"

function InputIndex({ city, setCity }) {
    
    const onChangeHandler = (input_il_adi) => {
        let cityChanged = cities.filter(function (cities) {return (cities.il_adi) === input_il_adi;})
        setCity(cityChanged[0]) 
    }
    return (
        <div>
            <br></br> <br></br>
            <label htmlFor="cities">Choose a city: </label> <br></br> <br></br>
            <select name="cities" id="cities" value={city.il_adi} onChange={(e) => onChangeHandler(e.target.value)}>
                {cities.map(function (il) {
                    return <option key = {il.plaka} value={il.il_adi}>{il.il_adi}</option>
                })}
            </select>
        </div>
    )
}
export default InputIndex
