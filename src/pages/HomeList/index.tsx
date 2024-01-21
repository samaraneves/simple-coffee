import Header from "../../components/Header"
import Main from "../../components/Main"
import Heading from "../../components/Heading"

import Background from "../../assets/jpg/background.jpg"
import Signature from "../../assets/svg/signature.svg"

import { Section, Text } from "./style"

const HomeList = () => {
    return (
        <>
            <Header>
                <img 
                    src={Background} 
                    width={'100%'}
                    alt="A cafe and people sitting on chairs on the sidewalk tasting"
                    loading="lazy"
                />
            </Header>
            <Main>
                <Section>
                    <img src={Signature} alt="Simple signature" loading="lazy" />
                    <Heading  
                        tagLevel="h1" 
                        description="Our Collection"
                    />
                    <Text>
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </Text>
                </Section>
            </Main>
        </>

    )
}

export default HomeList