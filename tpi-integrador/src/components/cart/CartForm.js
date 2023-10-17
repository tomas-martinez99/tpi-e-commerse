import React from 'react'

const CartForm = ({phones}) => {
  return (
    <div>
    <div className='card'  > 
    <h2 className='name'>{phones.name}</h2>
    <img src= {phones.img} className='card-img-top' alt={phones.name} />
        <h4 className='brand'>{phones.brand}</h4>
        <p className='price'>${phones.price}</p>
        </div>
      
  
  </div>
  )
}

export default CartForm