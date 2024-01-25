import { useDispatch, useSelector } from 'react-redux'
import { addToCart, placeOrder } from '../../redux/slices/cart'
import { updateProduct } from '../../redux/slices/product'
const ShoppingCart = () => {
    const products = useSelector((state) => state.product)
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const totalAmount = (cartItems.reduce((total, item) => total + item.quantity * item.price, 0)).toFixed(2)
    const handleAddToCart = (e) => {
        dispatch(addToCart({ ...e, quantity: 1 }))
        dispatch(updateProduct({ id: e.id }))
    }
    const handlePlaceOrder = () => {
        dispatch(placeOrder())
    }
    return (
        <div className='d-flex flex-column gap-2 min-vh-100'>
            <h1>Shopping Cart</h1>
            <div>
                {
                    products.map((item, index) => {
                        return <div key={item.id}>
                            <p>{item.title} - ${item.price} {item.inventory > 0 && `x${item.inventory}`}</p>
                            <button onClick={() => handleAddToCart(item)} disabled={item.inventory === 0}>{item.inventory > 0 ? "Add to cart" : "Sold out"}</button>
                        </div>
                    })
                }
            </div>
            <div>
                <h3>Cart Items</h3>
                {cartItems.length == 0 ? <p>Add items to cart...</p> : null}
                {cartItems.map((item, index) => <p key={item.id}>{item.title} - ${item.price} x {item.quantity}</p>)}
                <p>Total-${totalAmount}</p>
            </div>
            <div>
                <button onClick={handlePlaceOrder}>Place Orders</button>
            </div>
        </div>
    )
}

export default ShoppingCart