import React from 'react'

const PhoneForm = ({name,img,price,brand}) => {
  return (
  <div>
    <div className='card'  > 
    <h2 className='name'>{name}</h2>
        
        <h4 className='brand'>{brand}</h4>
        
        <p className='price'>${price}</p>
        </div>
  
  </div>
    
  )
}

export default PhoneForm