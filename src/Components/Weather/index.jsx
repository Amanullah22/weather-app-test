import React, { useEffect } from 'react'
import axios from 'axios'
import './index.css'

const Weather = (props) => {
    const { coordinates } = props
    const [weatherInfo, setWeatherInfo] = React.useState(null)

    useEffect(() => {
        if (coordinates) {
            const { lat, lon } = coordinates

            axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response) => {
                setWeatherInfo(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [coordinates])

    return <>
        {weatherInfo && <div className='weatherContainer'>
            <div className='currentWeather'>
                <h1>Today</h1>
                <img
                    src={`https://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png`}
                    className='weatherIcon'
                />
                <h2>{weatherInfo.current.weather[0].main}</h2>
                <h2>{weatherInfo.current.temp}&deg;</h2>

                <hr />

                <h3>Clouds: {weatherInfo.current.clouds}</h3>
                <h3>Feels Like: {weatherInfo.current.feels_like}</h3>
                <h3>Pressure: {weatherInfo.current.pressure}</h3>
                <h3>Humidity: {weatherInfo.current.humidity}</h3>
                <h3>Wind Speed: {weatherInfo.current.wind_speed}</h3>
                <h3>Visibility: {weatherInfo.current.visibility}</h3>
            </div>
            <div className='dailyWeather'>
                <h1>Daily Weather Forecast</h1>

                <div className='daysForecast'>
                    {weatherInfo.daily.map((dailyItem) => {
                        return <div className='dayBox'>
                            <img
                                src={`https://openweathermap.org/img/wn/${dailyItem.weather[0].icon}@2x.png`}
                                className='weatherIcon'
                            />

                            <h3>{dailyItem.weather[0].main}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>}
    </>
}

export default Weather