import { Wrapper } from "./style"

type MainProps = {
    children?: React.ReactNode;
  };

const Main = ({ children }: MainProps) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Main