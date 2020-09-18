import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32, 34, 37);
        --quartenary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;

        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64, 68, 75);
        --symbol: #74777a;

        --notification: #f84a4b;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --link: #5d80d6;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .sunrise {
        background-image: radial-gradient(circle, #F9A72B 0%, #FA9026 70%, #FB6C1F 100%);
    }

    .daytime {
        background: linear-gradient(135deg, #a2e0f9 6%, #cef5fc 39%, #eafaeb 70%, #fefcd3 88%, #fdf4ba 100%);
    }

    .sunset {
        background-color: #fce043;
        background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);
    }

    .night {
        background: -webkit-linear-gradient(to top, #283E51, #0A2342);
        background: linear-gradient(to top, #283E51, #0A2342);
        background: -olinear-gradient(to top, #283E51, #0A2342);

        .error {
            color: white;
        }
    }
`;