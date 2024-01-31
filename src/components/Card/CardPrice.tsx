import { currency } from "../../utils";
import { CardPriceElement } from "./style"

type CardPriceProps = {
    children?: never;
    value: number;
}

const CardPrice = ({ value = 0 }: CardPriceProps) => {
    return (
        <CardPriceElement>
            {currency(value)}
        </CardPriceElement>
    )
}

export default CardPrice