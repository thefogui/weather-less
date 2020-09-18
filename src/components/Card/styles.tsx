import styled from 'styled-components';


export const Container = styled.div`
    .card {
        display: flex;
        flex-direction: column;
        box-shadow: 0px 9px 10px 9px rgba(0,0,0,0.25);
        width: 300px;
        height: 400px;
        min-height: 400px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: #1e91f7;
        z-index: 9;

        .details {
            display: flex;
            justify-content: space-around;
            align-items: stretch;
            width: 100%;
            padding: 15px;

            .temperature {
                width: 30%;
                font-size: 3.0rem;
                line-height: 60px;
                font-family: 'Kameron', serif;

                span {
                    font-size: 1.0rem;
                    line-height: 1.5rem;
                    vertical-align: top;
                    margin-left: 5px;
                }
            }

            .right {
                text-align: right;
                width: 70%;
		    }

            p {
                text-transform: capitalize;
                font-size: 1.0rem;
                font-weight: bold;
            }
        }
    }

    @media (max-height: 600px) and (max-width: 450px){
        .card {
            width: 270px;
            height: 360px;

            .details {
                p {
                    font-size: 0.7rem;
                }
            }
        }
    }

    @media (max-height: 640px) and (max-width: 360px){
        .card {
            width: 270px;

            .details {
                p {
                    font-size: 0.7rem;
                }
            }
        }
    }

    @media (max-height: 568px) and (max-width: 320px){
        .card {
            width: 250px;

            .details {
                p {
                    font-size: 0.7rem;
                }
            }
        }
    }

    @media (max-height: 658px) and (max-width: 280px){
        .card {
            width: 220px;

            .details {
                p {
                    font-size: 0.6rem;
                }
            }
        }
    }

`;
