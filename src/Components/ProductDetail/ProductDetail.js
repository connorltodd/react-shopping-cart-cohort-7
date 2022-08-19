import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetail (props) {
    const [selectedProduct, setSelectedProduct] = React.useState()
    let { id } = useParams();

    // component did mount
    React.useEffect(() => {
        // console.log('product id', typeof id)
        fetchProduct()
    }, []);

    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            console.log(response)
            setSelectedProduct(response.data)
        })
    }

    // first render (no product in state)
    // componentDidMount or useEffect (fetch product and store in state)
    // Second render after state update (display product as it is stored in state)

    return (
        <div>Product Detail
            {selectedProduct ?
                <div>
                    <h1>{selectedProduct.title}</h1>
                    <img src={selectedProduct.image} />
                    <p>{selectedProduct.description}</p>
                    <p> $ {selectedProduct.price}</p>
                    {/* The following syntax for function calls should be used if you need to send an 
                    argument to the function to avoid an infinite loop */}
                    <button onClick={() => props.addProductToCart(selectedProduct)}>Add to cart</button>
                </div>
                :
                null
            }
        </div>
    )
}


