import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import Order from './Order'

const showOrders = (props)=>{
  let quantity = 0
  props.orders.forEach(el => quantity += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el =>(
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='quantity'>quantity: {new Intl.NumberFormat().format(quantity)}$</p>
    </div>
  )
}
const showNothing = ()=>{
  return (
    <div className='empty'>
      <h2>Nothing is here yet</h2>
    </div>
  )
}
const Header = (props) => {
  const[cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
                <li>About Us</li>
                <li>Contact</li>
                <li>Room</li>
            </ul>
            <FaShoppingCart onClick={()=> setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className="presentation"></div>
    </header>
  )
}

export default Header