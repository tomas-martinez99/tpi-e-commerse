import React, { useContext, useState } from 'react'
import "./PhoneForm.css"
import { CartContext } from '../../context/ContextCart'

const PhoneForm = ({name,img,price,brand, onCartSubmit}) => {
  const {cartItem, setCartItem} = useContext(CartContext)
 
 const addPhoneCartClick = () =>{
   setCartItem( { name: name, img : img, price:price, brand : brand})
        onCartSubmit(cartItem);
 }
  return (
  <div>
    <div className='card'  > 
    <h2 className='name'>{name}</h2>
    <img src= {img} className='card-img-top' alt={name} />
        <h4 className='brand'>{brand}</h4>
        <p className='price'>${price}</p>
        </div>
      <button onClick={addPhoneCartClick}>Agregar al carrito</button>
  
  </div>
    
  )
}

export default PhoneForm