export default function CartItem (props) {
    return (
        <div>
            <h1>{props.cartProductInfo.title}</h1>
            <img src={props.cartProductInfo.image} />
            <p>{props.cartProductInfo.price}</p>
            <p>1</p>
            <button>Delete Product</button>
        </div>
    )
}