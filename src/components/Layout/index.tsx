import React, { useState } from 'react'

import { fetchWeather } from './../../api/fecthWeather'

import { Container }from './styles'

//COMPONENTS
import Card from './../Card/'
import Clouds from './../Clouds/'
import Stars from './../Stars/'
import Loading from './../Loading/'

//IMGs
import sad from './../../assets/img/icons8-sad-100.png'

const Layout = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const background = () => {
        const curTime = new Date().getHours()

        let bg = ''

        if ((curTime >= 19 && curTime < 23) || curTime < 6) {
            bg = 'night'
        } else if (curTime >= 17 && curTime < 19) {
            bg = 'sunset'
        } else if (curTime >= 6 && curTime < 7) {
            bg = 'sunrise'
        } else {
            bg = 'daytime'
        }

        return bg
    }

    const search = async (e : any) => {
        setLoading(true)

        if (e.key === 'Enter') {
            try {
                const data = await fetchWeather(query).catch(err => {

                    if (err.response.status === 404) {
                        throw new Error(`${err.config.url} not found`)
                    }
                    throw err;
                });
                setError(false)
                setWeather(data)
            } catch (err) {
                setWeather(null)
                setError(true)
            }

            setQuery('')
        }

        setLoading(false)
    }

    const bg = background()

    return (
        <Container className={bg}>
            <div className="main">
                {bg === 'night' && (
                    <Stars />
                )}
                
                <input
                    type="text"
                    className="search"
                    placeholder="Search ..."
                    value={query}
                    onChange={ (e) => setQuery(e.target.value) }
                    onKeyPress={search}
                />

                <Clouds />

                {error && (
                    <div className="error">
                        <p>Ops! The location could not be determined</p>
                        <p>Try again!</p>
                        <img src={sad} alt="sadImage"/>
                    </div>
                )}

                {loading && (
                    <Loading />
                )}

                {weather && (
                    <Card weather={ weather } />
                )}
            </div>
        </Container>
    )
}

export default Layout
