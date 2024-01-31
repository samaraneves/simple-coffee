import React from "react"
import { CardImageWrapperElement } from "./style";

type CardImageWrapperProps = {
    children?: React.ReactNode;
}

const CardImageWrapper = ({ children }: CardImageWrapperProps) => {
    return (
        <CardImageWrapperElement>
            { children }
        </CardImageWrapperElement>
    )
}

export default CardImageWrapper