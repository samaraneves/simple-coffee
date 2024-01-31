import React from "react"
import { CardRootElement } from './style'

type CardRootProps = {
    children: React.ReactNode;
}

const CardRoot = ({ children }: CardRootProps ) => {
    return (
        <CardRootElement>
            {children}
        </CardRootElement>
    )
}

export default CardRoot