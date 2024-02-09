import { useCallback, useEffect, useState } from "react"
import { IProduct } from "../interfaces"
import ProductService from "../services/ProductService"

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
    const [selectFilter, setSelectFilter] = useState<string>('all')
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

    const selectFilterOption = (event: React.MouseEvent<HTMLElement>): void => {
        setSelectFilter(event?.target?.value)
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