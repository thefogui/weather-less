import React from 'react'

import { Container } from './styles'


//images
import brokenClouds from './../../assets/img/brokenclouds.jpg'
import clearSky from './../../assets/img/clearsky.jpg'
import fewClouds from './../../assets/img/fewclouds.jpg'
import mist from './../../assets/img/mist.jpg'
import rain from './../../assets/img/rain.jpg'
import scatteredClouds from './../../assets/img/scatteredclouds.jpg'
import showerRain from './../../assets/img/showerrain.jpg'
import snow from './../../assets/img/snow.jpg'
import thunderStorm from './../../assets/img/thunderstorm.jpg'
import drizzle from './../../assets/img/drizzle.jpg'
import fog from './../../assets/img/fog.jpg'
import smoke from './../../assets/img/smoke.jpg'
import atmosphere from './../../assets/img/atmosphere.jpg'

const rainArray = [
    'light rain',
    'moderate rain',
    'heavy intensity rain',
    'very heavy rain',
    'extreme rain',
    'freezing rain',
    'light intensity shower rain',
    'heavy intensity shower rain',
    'ragged shower rain'
]

const snowArray = [
    'light snow',
    'Snow',
    'Heavy snow',
    'Sleet',
    'Light shower sleet',
    'Shower sleet',
    'Light rain and snow',
    'Rain and snow',
    'Light shower snow',
    'Shower snow',
    'Heavy shower snow'
]

const atmosphereArray = [
    'Haze',
    'sand/ dust whirls',
    'sand',
    'dust',
    'volcanic ash',
    'squals',
    'tornado'
]

const cloudsArray = [
    'few clouds',
    'scattered clouds',
    'broken clouds',
    'overcast clouds'
]

const drizzleArray = [
    'light intensity drizzle',
    'drizzle',
    'heavy intensity drizzle',
    'light intensity drizzle rain',
    'drizzle rain',
    'heavy intensity drizzle rain',
    'shower rain and drizzle',
    'heavy shower rain and drizzle',
    'shower drizzle'
]

const cardBg = (description : string) => {

    if (rainArray.includes(description)) {
        return rain
    }

    if (cloudsArray.includes(description)) {
        return brokenClouds
    }

    if (snowArray.includes(description)) {
        return snow
    }

    if (atmosphereArray.includes(description)) {
        return atmosphere
    }

    if (drizzleArray.includes(description)) {
        return drizzle
    }

    switch(description)  {
        case 'clear sky':
            return clearSky
        case 'few clouds':
            return fewClouds
        case 'scattered clouds':
            return scatteredClouds
        case 'shower rain':
            return showerRain
        case 'thunderstorm':
            return thunderStorm
        case 'mist':
            return mist
        case 'fog':
            return fog
        case 'Smoke':
            return smoke
    }
}



function float2int(value : number) {
    return value | 0
}

const Card = (props : any) => {

    const cardStyle = {
        background: "url(" + cardBg(props.weather.weather[0].description) + ") 0% 0% / cover",
    }

    return (
        <Container>
            <div className="card" style={cardStyle}>
                <div className="details">
                    <div className="temperature">
                        { float2int(props.weather.main.temp) }
                        <span>&deg;C</span>
                    </div>
                    <div className="right">
                        <p>{ props.weather.weather[0].description }</p>

                        <div className="city-name">
                            <span>{ props.weather.name }</span>
                            <sup>{ props.weather.sys.country }</sup>
                        </div>

                        <div id="date">

                        </div>
                        <div id="summary"></div>
                    </div>
                </div>

                <div className="photo">
                    <img
                        className="city-icon"
                        src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                        alt="city-icon" />
                </div>
            </div>
        </Container>

    )
}

export default Card
