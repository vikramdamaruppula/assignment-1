import React from 'react'
import data from "./MOCK_DATA (1).json"
import SingleProduct from './SingleProduct'
import Header from './Header'
import "./styles.css"
import { useSelector } from 'react-redux'
import Filters from './Filters'


const Home = () => {
  const searchVal = useSelector((state)=>state.cartReducer.searchProduct)
  const filterPrices = useSelector((state)=>state.cartReducer.priceFilter)

  const displayAll = data.products.map((eachItem)=>(
    <SingleProduct key={eachItem.id} productDetails={eachItem}  />
  ))

  const filteredItes = data.products.filter((item)=>{
    if(item.name.toLowerCase().includes(searchVal.toLowerCase())){
      return item 
    }
  }).map((eachItem)=>{
    return <SingleProduct key={eachItem.id} productDetails={eachItem} />
  })

  const filterProductsByPrice = data.products.filter((eachProd)=>{
    if(eachProd.price <= filterPrices){
      return eachProd 
    }
  }).map((items)=>{
    return <SingleProduct key={items.id} productDetails={items}  />
  })

  return (
    <div>
      <Header />
      <div className='filter-and-product'>
      <Filters />
        <ul className='product-container'>
          {searchVal ? filteredItes : filterPrices ? filterProductsByPrice :displayAll}
        </ul>
      </div>
    </div>
  )
}

export default Home
