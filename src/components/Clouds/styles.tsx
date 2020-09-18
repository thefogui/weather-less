import styled, { css, keyframes } from 'styled-components';

import cloudForeground from './../../assets/cloudForeground.svg'
import cloudBackground from './../../assets/cloudBackground.svg'
import cloudBackgroundNight from './../../assets/cloudBackgroundNight.svg';

const night = () => {
    const curTime = new Date().getHours()

    return ((curTime >= 19 && curTime < 23) || (curTime < 6))
}

const FadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Float = keyframes`
    from {
        transform: translateX(100%) translateZ(0);
    }

    to {
        transform: translateX(-15%) translateZ(0);
    }
`;

const FadeFloat = keyframes`
    0%, 100% {
        opacity: 0;
    }

    5%, 90% {
        opacity: 1;
    }
`;

const height = 20
const duration = 60

function cloudLoop() {
    let styles = ''
    let actualDuration = (duration / 6.5) * -1

    for(let i = 14; i > 0; i -= 1) {
        styles += `
            &:nth-child(${i}) {
                animation-delay: ${actualDuration * i}s;
                top: ${i * 6}%;
            }
            &.foreground:nth-child(${i}) {
                animation-duration: ${actualDuration - (i * 4)}s;
                height: ${height + (i * 2.5)}%;
            }
            &.background:nth-child(${i}) {
                animation-duration: ${actualDuration * 1.25 - (i * 4)}s;
                height: ${(height / 1.1) - (i * 1.25)}%;
            }
        `
    }

    return css`${styles}`
}

export const Container = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50%;
    margin: auto;
    overflow: hidden;
    animation: ${FadeIn} 3s ease-out;
    user-select: none;
    position: relative;
    z-index: 5;
`;

export const Cloud = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 100px;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-name: ${Float}, ${FadeFloat};

    &.background {
        background-image: url(${(night()) ? cloudBackgroundNight : cloudBackground});
        height: ${height}%;
        min-height: 30px;
        z-index: 7;
    }

    &.foreground {
        background-image: url(${(night()) ? cloudBackgroundNight : cloudForeground});
        height: ${height / 1.1}%;
        min-height: 10px;
        animation-duration: ${duration * 1.75}s;
    }

    ${cloudLoop()}
`;

