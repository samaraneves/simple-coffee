import styled from "styled-components";

export const CardRootElement = styled.div`
    width: 100%;
    max-width: 300px;
`
export const CardInformationElement = styled.div`
    margin-top: .5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    line-height: 2;
`

export const CardImageElement = styled.img`
    border-radius: 12px;
`

export const CardImageWrapperElement = styled.div`
    width: 100%;
    position: relative;
`
export const CardFlagElement = styled.span`
    text-align: center;
    padding: .5rem 1rem;
    border-radius: 16px;
    background-color: var(--orange-ligth-color, #F6C768);
    color: var(--primary-color, #111315);
    font-size: .8rem;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    margin: .6rem;
`
export const CardTitleElement = styled.p`
    font-size: 1rem;
    color: var(--red-light-color, #FEF7EE);
    font-weight: var(--large-weight, 500);
`

export const CardPriceElement = styled.span`
    padding: .3rem .5rem;
    background-color: var(--green-light-color, #BEE3CC);
    color: var(--primary-color, #111315);
    font-size: 0.8rem;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    height: 20px;
    display: flex;
    align-items: center;
`

export const CardLineElement = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CardRatingsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CardRatingsInformation = styled.div`
    display: flex;
    gap: 0.3rem;
`

export const CardRatingsElement = styled.span`
    font-size: 1rem;
    color: var(--red-light-color, #FEF7EE);
    font-weight: var(--large-weight, 500);
`

export const CardNoRatingsElement = styled(CardRatingsElement)`
    color: var(--gray-color, #6F757C);
`

export const CardRatingsVotesElement = styled.p`
    font-size: 1rem;
    color: var(--gray-color, #6F757C);
    font-weight: bold;
`

export const CardAlertElement = styled(CardRatingsVotesElement)`
    color: var(--red-color, #ED735D);
`