import styled from "styled-components";

export const Wrapper = styled.main`
    background-color: var(--secondary-color, #1B1D1F);
    border-radius: 1rem;
    width: 100%;
    max-width: calc(100% - 20%);
    height: 100vh;
    margin: -2rem auto 3rem;
    padding: 1rem;
    z-index: 1;
    position: relative;
    
    @media screen and (min-width: 1024px) {
        margin: -11rem auto 3rem;
    }

`