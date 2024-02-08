import { API, ENDPOINT } from "../constants"

class ProductService {
    getAllProducts = () =>
        API
        .get(ENDPOINT)
        .then(response => response.data)
        .catch(error => error)
        
}

export default ProductService;