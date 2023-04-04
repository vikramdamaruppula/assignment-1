import React from 'react'
import { useSelector } from 'react-redux'
import SingleCartItem from './SingleCartItem'

const Cart = () => {
  const prodList = useSelector((state)=>state.cartReducer.cartItems)
  const priceOfProducts = useSelector((state)=>state.cartReducer.totalPrice) 


  return (
    <div className=' container'>
       <p className="price"> total Price :Rs {priceOfProducts.toFixed(2)} </p>
        {prodList.map((eachCart)=>( <SingleCartItem key={eachCart.id} cartItemDetails={eachCart} /> ))}

    </div>
  )
}



export default Cart
