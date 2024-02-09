import { ButtonElement } from "./style";

type ButtonProps = {
    name: string;
    id?: string;
    description?: string;
    value?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const Button = ({ name, id, description = 'New Button', value, disabled = false, onClick }: ButtonProps) => {
  return (
    <ButtonElement 
        name={name}
        id={id}
        value={value}
        disabled={disabled}
        onClick={onClick}
    >
        {description}
    </ButtonElement>
  )
}

export default Button