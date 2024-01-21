import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    text-align: center;
    position: relative; 
    margin: 4rem 0 1rem 0;

    img {
        z-index: 1;
        position: absolute;
        width: 250px;
        left: 0;
        right: 0;
        bottom: calc(100% - 110px);
        margin: 0 auto;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: calc(100% - 30%);
    text-align: center;
    margin: 1rem auto;
    font-size: 1rem;
    color: var(--gray-color, #BEE3CC);
    font-weight: var(--medium-weight);
    line-height: 1.5;
    position: relative;
    z-index: 2;

    @media screen and (min-width: 350px) {
        max-width: calc(100% - 30%);
    }

    @media screen and (min-width: 1024px) {
        max-width: calc(100% - 50%);
    }
`