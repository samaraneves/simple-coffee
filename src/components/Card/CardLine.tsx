import { CardLineElement } from "./style"

type CardLineProps = {
    children?: React.ReactNode
}

const CardLine = ({ children }: CardLineProps) => {
    return (
        <CardLineElement>
            {children}
        </CardLineElement>
    )
}

export default CardLine