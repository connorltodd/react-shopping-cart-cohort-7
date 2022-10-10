import { DECREASE, INCREASE } from '../../helpers/constants';
import './CartItem.css';

export default function CartItem (props) {
    return (
        <>
            <img className='cart-item-image' src={props.cartProductInfo.image} alt={props.cartProductInfo.title} />
            <h1 className='cart-item-title'>{props.cartProductInfo.title}</h1>
            <p>{props.cartProductInfo.price} €</p>
            <p>{props.cartProductInfo.quantity}</p>
            {/* When calling increment or decrement quantity we need to send through the product id here */}
            <button onClick={() => props.handleProductInCart(
                { id: props.cartProductInfo.product_id}, INCREASE
            )}>+</button>
            <button onClick={() => props.handleProductInCart(
                { id: props.cartProductInfo.product_id}, DECREASE
            )}>-</button>
            <button 
                className='cart-item-button' 
                onClick={() => props.deleteProduct(props.cartProductInfo)}
            >
                Delete Product
            </button>
        </>
    )
}