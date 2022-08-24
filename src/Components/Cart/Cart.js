import CartItem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart (props) {
    return (
        <div className="cart-container">
            <p>Item</p>
            <div />
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
            {props.cartProducts.map(
                (productItem) => 
                <CartItem cartProductInfo={productItem} />
            )}
        </div>
    )
}