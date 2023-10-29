import React from 'react'

const localStoredCartList = JSON.parse(localStorage.getItem('cartList'))

const CartContext = React.createContext({
  cartList: localStoredCartList === null ? [] : localStoredCartList,
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
