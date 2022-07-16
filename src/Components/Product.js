import './Product.css';

export default function Product (props) {
    console.log(props)
    return (
        <div>
            <img className="product-image" src={props.product.image} />
            <h2>{props.product.title}</h2>
            <p>{props.product.category}</p>
            <p>{props.product.price}</p>
        </div>

    )
}