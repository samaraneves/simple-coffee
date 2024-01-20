import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --primary-color: #111315;
        --secondary-color: #1B1D1F;
        --gray-color: #6F757C;
        --green-light-color: #BEE3CC;
        --red-color: #ED735D;
        --red-light-color: #FEF7EE;
        --orange-ligth-color: #F6C768;
        --primary-font: 'DM Sans', sans-serif;
        --large-weight: 500;
        --medium-weight: 400;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--primary-color, #111315);
        font-family: var(--primary-font);
        font-weight: var(--medium-weigth, 300);
        color: var(--gray-color, #6F757C);
    }
`

export default GlobalStyle