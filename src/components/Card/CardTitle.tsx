import { CardTitleElement } from "./style"

type CardTitleProps = {
    children?: never;
    description: string;
}

const CardTitle = ({ description = ''}: CardTitleProps) => {
    return (
        <CardTitleElement>
            {description}
        </CardTitleElement>
    )
}

export default CardTitle