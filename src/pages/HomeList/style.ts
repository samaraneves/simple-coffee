import styled from "styled-components";

export const DescriptionSection = styled.section`
    width: 100%;
    text-align: center;
    position: relative; 
    margin: 4rem 0 1rem 0;

    img {
        z-index: 1;
        position: absolute;
        left: calc(100% - 70%);
        right: 0;
        bottom: calc(100% - 110px);
        margin: 0 auto;
    }
`
export const ProductsSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
        max-width: 1024px;
        margin: 0 auto;
    }
`

export const Text = styled.p`
    width: 100%;
    min-width: 220px;
    max-width: 480px;
    text-align: center;
    margin: 1rem auto;
    font-size: 1.1rem;
    color: var(--gray-color, #BEE3CC);
    font-weight: var(--medium-weight, 400);
    line-height: 1.5;
    position: relative;
    z-index: 2;
`