import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'


import "./styles.css"

const SingleProduct = ({productDetails}) => {
  const {name,price,image} =productDetails

  const dispatch = useDispatch()

  const handleAddToCart=()=>{
    dispatch(addToCart(productDetails))
  }

  return (
    <li className='each-item'>
      <img src={image} alt={name} /> 
      <div className=''>
        <p> {name} </p>
        <p> {price} </p>
      </div>
      <button className='btn btn-primary m-1' onClick={handleAddToCart}>  Add to Cart </button> 
    </li>
  )
}

export default SingleProduct
