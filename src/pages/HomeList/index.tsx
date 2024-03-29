import Header from "../../components/Header"
import Main from "../../components/Main"
import Heading from "../../components/Heading"
import { Card } from "../../components/Card"

import { useProducts } from "../../hooks/useProducts"

import Background from "../../assets/jpg/background.jpg"
import Signature from "../../assets/svg/signature.svg"

import { ButtonsContainer, DescriptionSection, ProductsSection, Text } from "./style"
import Button from "../../components/Button"

const HomeList = () => {
    const { products, loading, selectFilterOption, filterOptionsProduct } = useProducts()

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
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
                        expertly roasted in small batches and shipped fresh weekly.
                    </Text>
                </DescriptionSection>

                <ProductsSection>
                    <ButtonsContainer>
                        {
                            filterOptionsProduct.map(option => (
                                <Button
                                    key={option?.name}
                                    name={option?.name}
                                    value={option?.name}
                                    id={option?.name}
                                    description={option?.description}
                                    onClick={selectFilterOption}
                                />
                            ))
                        }
                        
                    </ButtonsContainer>
                
                    <Card.Placeholder ready={!loading}>
                        { 
                            products.map(product => (
                                <Card.Root key={product?.id}>
                                    <Card.ImageWrapper>
                                        <Card.Image 
                                            src={product?.image}
                                            alt={product?.name}
                                            width='100%'
                                        />
                                        {
                                            product?.popular && <Card.Flag description="Popular"/>
                                        }
                                    </Card.ImageWrapper>
                                    <Card.Information>
                                        <Card.Line>
                                            <Card.Title description={product?.name} />
                                            <Card.Price value={product?.price} />
                                        </Card.Line>
                                        <Card.Ratings 
                                            rating={product?.rating}
                                            votes={product?.votes} 
                                            available={product?.available} 
                                        />
                                    </Card.Information>
                                </Card.Root>
                            )
                        )
                        }
                    </Card.Placeholder>
                </ProductsSection>
            </Main>
        </>

    )
}

export default HomeList