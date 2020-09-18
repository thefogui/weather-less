import styled from 'styled-components'

export const Container = styled.div`
    .main {
        text-align: center;
        height: 100vh;
        width: 100vw;

        input {
            margin-top: 15vh;
            font-size: 0.8rem;
            padding: 0.8rem 2rem;
            text-align: center;
            border: none;
            background-color: rgb(255, 255, 255);
            color: #333;
            border-radius: 3px;
            text-transform: capitalize;

            &:focus {
                background-color: rgba(#000, .05);
                outline: none;
                box-shadow: inset 0 -2px 0 #0077FF;
            }
        }

        .date {
            color: white;
        }
    }

    @media (max-height: 750px) {
        .main {
            input {
                margin-top: 6vh;
            }
        }
    }

    @media(height: 1336) and (width: 1024) {
        .main {
            input {
                margin-top: 6vh;
            }
        }
    }

    @media (max-height: 736px) and (max-width: 414px){
        .main {
            input {
                margin-top: 9vh;
            }
        }
    }

    @media (max-height: 600px) and (max-width: 450px){
        .main {
            input {
                margin-top: 6vh;
            }
        }
    }

    @media (max-height: 640px) and (max-width: 360px){
        .main {
            input {
                margin-top: 7vh;
            }
        }
    }

    @media (max-height: 568px) and (max-width: 320px){
        .main {
            input {
                margin-top: 3vh;
            }
        }
    }
`