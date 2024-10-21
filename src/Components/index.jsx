import React, { useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import SearchHistory from './History'
import Weather from './Weather'
import './index.css'

const MainComponent = () => {
    const [search, setSearch] = React.useState(null)
    const [coordinates, setCoordinates] = React.useState(null)
    const [history, setHistory] = React.useState([])

    useEffect(() => {
        if (search) {
            axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response) => {
                setCoordinates(response.data[0])
                addToHistory(search)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [search])

    const addToHistory = (location) => {
        if(localStorage.getItem('searchHistory')) {
            var existingHistory = localStorage.getItem('searchHistory')
            let parsed = JSON.parse(existingHistory)
            parsed.push(location)
            setHistory(parsed)
            let finalHistory = JSON.stringify(parsed)
            localStorage.setItem('searchHistory', finalHistory)
        } else {
            var searchHistory = []
            searchHistory.push(location)
            setHistory(searchHistory)
            let finalHistory = JSON.stringify(searchHistory)
            localStorage.setItem('searchHistory', finalHistory)
        }
    }

    return <>
        <div className='mainContainer'>
            <Search getInfo={setSearch} />
            <SearchHistory history={history} />
            <Weather coordinates={coordinates} />
        </div>
    </>
}

export default MainComponent