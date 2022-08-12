import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetail () {
    const [selectedProduct, setSelectedProduct] = React.useState({})
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

    return (
        <div>Product Detail
            <h1>{selectedProduct.title}</h1>
            <img src={selectedProduct.image} />
            <p>{selectedProduct.description}</p>
            <p> $ {selectedProduct.price}</p>
            <button>Add to cart</button>
        </div>
    )
}


