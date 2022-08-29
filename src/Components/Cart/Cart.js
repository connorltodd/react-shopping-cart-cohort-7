import React from "react";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart (props) {

    const calculateTotalProductPrice = () => {
        let totalProductCost = 0;

        for( let i = 0; i < props.cartProducts.length; i++) {
            totalProductCost += props.cartProducts[i].price * props.cartProducts[i].count
        }

        return totalProductCost.toFixed(2)c;
    }

    return (
        <div className="cart-container">
            <p>Item</p>
            <div />
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
            {props.cartProducts.map(
                (productItem) => 
                <CartItem cartProductInfo={productItem} deleteProduct={props.deleteProduct} />
            )}
            {props.cartProducts.length ? 
                <>Total {calculateTotalProductPrice()}</>
                :
                null
            }
            
        </div>
    )
}