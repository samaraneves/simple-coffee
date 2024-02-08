import { CardPriceElement } from "./style"

type CardPriceProps = {
    children?: never;
    value: string;
}

const CardPrice = ({ value = '' }: CardPriceProps) => {
    return (
        <CardPriceElement>
            {value}
        </CardPriceElement>
    )
}

export default CardPrice