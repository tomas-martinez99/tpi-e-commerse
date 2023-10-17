import React, { useContext } from 'react'

import CartForm from './CartForm'

const Cart = () => {
    const {cartItem, setCartItem }= useContext
    const onCartSubmit = (phone) =>{
        console.log(phone);
        setCartItem((phones)=>[...phones,phone]);
    }
  return (
    <div>
        <div className='phone-list'>
          {cartItem.map((phone) => (
          <CartForm key={phone.id} {...phone} />
          ))}
        </div>
    </div>
        
      

  )
}

export default Cart