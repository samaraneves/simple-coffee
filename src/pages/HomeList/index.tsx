import Header from "../../components/Header"
import Main from "../../components/Main"
import Heading from "../../components/Heading"
import { Card } from "../../components/Card"

import Background from "../../assets/jpg/background.jpg"
import Signature from "../../assets/svg/signature.svg"

import { DescriptionSection, ProductsSection, Text } from "./style"

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
                <DescriptionSection>
                    <img src={Signature} alt="Simple signature" loading="lazy" />
                    <Heading  
                        tagLevel="h1" 
                        description="Our Collection"
                    />
                    <Text>
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </Text>
                </DescriptionSection>
                <ProductsSection>
                    <Card.Root>
                        <Card.ImageWrapper>
                            <Card.Image 
                                src='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' 
                                alt='Produto aqui'
                                width='100%'
                            />
                            <Card.Flag description="Popular"/>
                        </Card.ImageWrapper>
                        <Card.Information>
                            <Card.Line>
                                <Card.Title description='Home Coffee' />
                                <Card.Price value={10.9} />
                            </Card.Line>
                            <Card.Ratings rating={0} votes={100} />
                        </Card.Information>
                    </Card.Root>  
                </ProductsSection>
            </Main>
        </>

    )
}

export default HomeList