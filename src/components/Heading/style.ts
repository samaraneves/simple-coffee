import styled from "styled-components";
import { KnownTarget } from "styled-components/dist/types";

const fontSize = (headingLevel: string | undefined | KnownTarget): number => {
    const HEADING_FONTS_SIZE: Record<string, number> = {
        h1: 2.5,
        h2: 2,
        h3: 1.5
    }

    switch (headingLevel) {
        case 'h1':
            return HEADING_FONTS_SIZE.h1

        case 'h2':
            return HEADING_FONTS_SIZE.h2
        
        case 'h3':
            return HEADING_FONTS_SIZE.h3
        
        default:
            return HEADING_FONTS_SIZE.h1
    }
}

export const HeadingTag = styled.div`
    font-size: ${props => fontSize(props?.as)}rem;
    color: var(--red-light-color, #FEF7EE);
    font-weight: var(--large-weight);
    position: relative;
    z-index: 2;
`