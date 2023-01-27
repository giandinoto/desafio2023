import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
        <CartWidget />
        <a href="#">Cat 1</a> 
        <a href="#">Cat 2</a> 
        <a href="#">Cat 3</a> 
    </nav>
  )
}

export default NavBar