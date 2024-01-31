import { CardFlagElement } from "./style"

type CardFlagProps = {
    description: string
}

const CardFlag = ({ description= ''}: CardFlagProps) => {
    return (
        <CardFlagElement>
            {description}
        </CardFlagElement>
    )
}

export default CardFlag