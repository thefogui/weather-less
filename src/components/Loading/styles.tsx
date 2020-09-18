import styled, {keyframes} from 'styled-components';

const Loading = keyframes`
    0% {
        transform: rotate(0);
    }

	100% {
      transform: rotate(360deg);
    }
`;

const LoadingCicle = keyframes`
    0% {
        stroke-dashoffset: 0
    }

    100% {
        stroke-dashoffset: -600;
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: flex;
    text-align: center;
    align-items: center;
    z-index: 1000;

    #load {
        width: 150px;
        display: flex;
        animation: ${Loading} 3s linear infinite;
        align-self: center;
        stroke-dashoffset: 0;
        stroke-dasharray: 300;
        stroke-width: 10;
        stroke-miterlimit: 10;
        stroke-linecap: round;
        display: block;
        margin: auto;

        #loading-inner {
            animation: ${LoadingCicle} 2s linear infinite;
            stroke: #0077FF;
            fill: transparent;
        }
    }
`;
