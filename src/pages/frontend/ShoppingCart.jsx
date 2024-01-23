import _products from '../../api/product.json'
const ShoppingCart = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {
                    _products.map((item, index) => {
                        return <p></p>
                    })
                }
            </div>
        </div>
    )
}

export default ShoppingCart