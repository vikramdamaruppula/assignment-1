import React from 'react'
import { deleteCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'


const SingleCartItem = ({cartItemDetails}) => {
    const {name,image,price} =cartItemDetails 

    const dispatch =useDispatch()

    const handleDeleteCart=()=>{
        dispatch(deleteCart(cartItemDetails))
      }

  return (
    <div>
        <img src={image} alt={name} />
        <p> {name} </p>
        <p> {price} </p>
        <button type='button' className='btn btn-warning' onClick={handleDeleteCart} > Remove Item</button>
    </div>
  )
}

export default SingleCartItem
