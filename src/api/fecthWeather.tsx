import axios from 'axios'

const URL_OPEN_WEATHER = 'https://api.openweathermap.org/data/2.5/weather'

const API_KEY = 'f3055315f416131970af433755d3429b'

export const fetchWeather = async(query: String) => {
    const { data } = await axios.get(URL_OPEN_WEATHER, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data
}

