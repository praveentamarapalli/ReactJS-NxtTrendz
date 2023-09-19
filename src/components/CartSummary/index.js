import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div>
          <h1 className="cart-value-heading">
            Order Total: <span className="total-amount">Rs {total}/-</span>
          </h1>
          <p className="item-count">{cartItemsCount} items in cart</p>
          <button type="button" className="check-out-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
