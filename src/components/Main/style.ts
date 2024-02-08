import styled from "styled-components";

export const Wrapper = styled.main`
    background-color: var(--secondary-color, #1B1D1F);
    border-radius: 1rem;
    width: 100%;
    max-width: calc(100% - 20%);
    margin: -2rem auto 3rem;
    padding: 1rem;
    z-index: 1;
    position: relative;
    overflow: hidden;
    
    @media screen and (min-width: 1024px) {
        margin: -11rem auto 3rem;
        padding: 3rem 3rem 5rem 3rem;
    }

`