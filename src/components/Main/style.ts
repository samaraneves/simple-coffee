import styled from "styled-components";

export const Wrapper = styled.main`
    background-color: var(--secondary-color, #1B1D1F);
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    margin: -11rem auto 3rem;
    padding: 1rem;
    z-index: 1;
    position: relative;
    
    @media screen and (min-width: 1024px) {
        max-width: calc(100% - 20%);
    }
`