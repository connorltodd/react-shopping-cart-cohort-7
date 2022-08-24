import './CartItem.css';

export default function CartItem (props) {
    return (
        <>
            <img className='cart-item-image' src={props.cartProductInfo.image} />
            <h1 className='cart-item-title'>{props.cartProductInfo.title}</h1>
            <p>{props.cartProductInfo.price} €</p>
            <p>1</p>
            <button className='cart-item-button'>Delete Product</button>
        </>
    )
}