import { HeaderElement } from './style'

type HeaderProps = {
    children?: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return (
        <HeaderElement>
            {children}
        </HeaderElement>
    )
}

export default Header 