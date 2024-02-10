import { useCallback, useEffect, useState } from "react"
import ProductService from "../services/ProductService"

export interface IProduct {
    id: number,
    name: string,
    image: string,
    price: string,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean
}

type FilterProducts = {
    description: string;
    name: FilterProductsEnum;
}

enum FilterProductsEnum {
    AllProducts = 'AllProducts',
    AvailableNow = 'AvailableNow'
}

export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [selectFilter, setSelectFilter] = useState<string>(FilterProductsEnum.AllProducts)
    const [loading, setLoading] = useState<boolean>(false)

    const filterOptionsProduct: FilterProducts[] = [
        {
            description: 'All Products',
            name: FilterProductsEnum.AllProducts
        },
        {
            description: 'Available Now',
            name: FilterProductsEnum.AvailableNow
        }
    ]

    const getAllProducts = async () => {
        try {
            setLoading(true)

            const products = new ProductService()

            const productsList: IProduct[] = await products.getAllProducts()

            setProducts(productsList)
            
            setLoading(false)
        } catch(error) {
            setLoading(false)
        }
    }

    const getAvailableProducts = useCallback(() => {
        try {
            setLoading(true)

            const availableProducts = products.filter(product => product?.available)

            setProducts(availableProducts)
            
            setLoading(false)
        } catch(error) {
            setLoading(false)
        }
    }, [products])

    const selectFilterOption = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event?.target as HTMLButtonElement;
        setSelectFilter(target.value)
    }

    useEffect(() => {
        if(selectFilter === FilterProductsEnum.AvailableNow) {
            getAvailableProducts()
            return
        }

        getAllProducts()
    }, [selectFilter])

    return {
        loading,
        products,
        selectFilterOption,
        filterOptionsProduct
    }
}