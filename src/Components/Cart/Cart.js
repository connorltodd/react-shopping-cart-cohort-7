import CartItem from "../CartItem/CartItem";

export default function Cart (props) {
    return (
        <div>
            {props.cartProducts.map(
                (productItem) => 
                <CartItem cartProductInfo={productItem} />
            )}
        </div>
    )
}