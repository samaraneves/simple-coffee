import { HeadingTag } from "./style"

type HeadingProps = {
    tagLevel: 'h1'| 'h2' | 'h3'
    description: string
}
const Heading = ({ tagLevel = 'h1', description = ''}: HeadingProps) => {

    return (
     <HeadingTag as={tagLevel}>{description}</HeadingTag>
    )
}
export default Heading