import { CardImageElement } from './style';

type CardImageProps = {
    children?: never;
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

const CardImage = ({ src = '', alt='', width = '', height=''}: CardImageProps) => {
    return (
        <CardImageElement src={src} alt={alt} width={width} height={height}/>
    )
}

export default CardImage