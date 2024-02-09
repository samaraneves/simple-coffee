import styled from "styled-components";

export const ButtonElement = styled.button`
    background-color: var(--secondary-color, #1B1D1F);
    padding: .6rem .8rem;
    font-size: 1rem;
    color: var(--red-light-color, #FEF7EE);
    font-weight: var(--medium-weight, 400);
    border: 0;
    border-radius: 10px;

    &:focus,
    &:focus-within,
    &:hover {
        background-color: var(--gray-color, #6F757C);
    }
`