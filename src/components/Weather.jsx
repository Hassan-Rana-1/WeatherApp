import React from 'react'
import './Weather.css'
import search_icon from '../assests/search.png'

const Weather = () => {
  return (
    <div classname = 'weather'>
        <div classname = 'Search Bar'>
            <input type="text" placeholder='Search'/>
            <img src ={search_icon} alt ="" />
        </div>
      
    </div>
  )
}

export default Weather
