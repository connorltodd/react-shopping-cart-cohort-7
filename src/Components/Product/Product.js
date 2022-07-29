import './Product.css';

export default function Product (props) {
    console.log(props)
    return (
        <div className='product'>
            <img className="product-image" src={props.product.image} alt={props.product.title} />
            <h2 className="product-title">{props.product.title}</h2>
            <p className="product-category">{props.product.category}</p>
            <p className="product-price">{props.product.price} €</p>
        </div>
    )
}