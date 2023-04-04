import React, { useState } from 'react'
import { useDispatch } from 'react-redux'          
import { filterByPrice } from '../redux/cartSlice'

const Filters = () => {
  const dispatch= useDispatch()
  // const [filter, setFilter] = useState('')

  const handleFilter = (e) =>{
    // setFilter(e.target.value)
    dispatch(filterByPrice(e.target.value))
  }

  return (
    <div className='filters'>
      <p className='pl-3'>Filter by price</p>
      <select name='price' id="price" className='pl-4' onChange={handleFilter}>
        <option value="">{` `}</option>
        <option value="200">{`< 200 `}</option>
        <option value="500">{`< 500 `}</option>
        <option value="999">{`< 1000 `}</option>
      </select>
    </div>
  )
}

export default Filters
