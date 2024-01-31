import { CardInformationElement } from "./style"

type CardInformationProps = {
    children?: React.ReactNode
}

export const CardInformation = ({
    children
}: CardInformationProps)=> {
    return (
        <CardInformationElement>
            {children}
        </CardInformationElement>
    )
}

export default CardInformation