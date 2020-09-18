import React from 'react'

import { Container } from './styles'

const Loading = () =>  {
    return (
        <Container>
            <svg id="load" viewBox="0 0 150 150">
                <circle id="loading-inner" cx="75" cy="75" r="60"/>
            </svg>
        </Container>
    )
}

export default Loading
