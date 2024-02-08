import { useEffect, useState } from "react"
import { IProduct } from "../interfaces"
import ProductService from "../services/ProductService"

export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false)

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

    useEffect(() => {
        getAllProducts()
    }, [])

    return {
        loading,
        products
    }
}