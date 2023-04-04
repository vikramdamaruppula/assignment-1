import React from 'react'
import {Navbar,Container, Nav, FormControl} from "react-bootstrap"
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {searchItems} from "../redux/cartSlice"
import "./styles.css"

const Header = () => {
  const cartCount = useSelector((state)=>state.cartReducer.cartItems.length)
  const search = useSelector((state)=>state.cartReducer.searchProduct)
  const dispatch=useDispatch()

  const handleInput=(e)=>{
    dispatch(searchItems(e.target.value))
  }

  return (
      <Navbar bg="dark" variant='dark' className='header'>
        <Container>
            <Navbar.Brand href='/home'>E-Kart</Navbar.Brand>
            <FormControl className='w-50' onChange={handleInput} value={search} type="search" />
            <Nav className="mr-auto">
                <Link to="/home" className='cart text-secondary pt-2 m-3' >Home</Link>
                {/* <Nav.Link href="/cart">cart {cartCount} </Nav.Link> */}
                <Link to="/cart"  className='cart text-secondary pt-2 m-3' >Cart: {cartCount}</Link>
                <Link to="/counter" className='cart text-secondary pt-2 m-3' >Counter</Link>

            </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
