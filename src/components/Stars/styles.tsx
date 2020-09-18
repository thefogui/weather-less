import styled, { css, keyframes } from 'styled-components';

const Pulse = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }
`;

const Falling = keyframes`
    60%, 100% {
        transform: rotate(-40deg) translate3d(-560px, 0, 0);
        opacity: 0.5;
        width: 0;
    }
`;

function starLoop() {
    let styles = ''
    const numberOfStars = 50
    let randomInteger = 0
    let top = 0
    let left = 0

    for(let i = 0; i < numberOfStars; i += 1) {

        left = Math.floor((Math.random() * window.innerWidth) + 1)
        top = Math.floor((Math.random() * window.innerHeight / 2) + 1)

        styles += `
            &:nth-child(${i}){
                left: ${left}px;
                top: ${top}px;
            }
        `

        randomInteger = Math.floor(Math.random() * 10)

        if (randomInteger < 4) {
            styles += `
                &:nth-child(${i}) {
                    animation-duration: 3s;
                    animation-fill-mode: forwards;
                    animation-iteration-count: infinite;
                }
            `
        }
    }

    return css`${styles}`
}

export const Container = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
`;

export const Star = styled.div`
    position: relative;
    width: 3px;
    height: 3px;
    background: #fff;
    transform: rotate(45deg);
    animation-name: ${Pulse};
    z-index: 1;
    ${starLoop()}
`;

export const FallingStar = styled.span`
    position: absolute;
    width: 190px;
    height: 2px;
    z-index: 12;

    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 1) 33%,
        rgba(255, 255, 255, 0) 100%
    );

    border-radius: 50%;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${Falling};
    animation-timing-function: cubic-bezier(0.33, 0.19, 0.26, 1.3);
    top: -70px;
    transform: rotate(-45deg) translate3d(0, 0, 0);
    will-change: transform, width, opacity;

    &:nth-of-type(1) {
        right: 40px;
        animation-delay: 3.2s;
    }

    &:nth-of-type(2) {
        right: 200px;
        animation-delay: 6s;
        animation-iteration-count: 4;
    }

    &:nth-of-type(3) {
        right: -180px;
        animation-duration: 3s;
        animation-delay: 1.8s;
    }

    &:nth-of-type(4) {
        right: 400px;
        animation-duration: 2s;
        animation-delay: 3s;
    }

    &:nth-of-type(5) {
        right: 600px;
        animation-duration: 6s;
        animation-delay: 2.4s;
    }
`;
