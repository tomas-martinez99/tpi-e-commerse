import React from 'react'

const PhoneForm = ({name,img,price,brand}) => {
  return (
  <>
    <div className='card'> 
    <h2 className='name'>{name}</h2>
        <img src={img} className='img' width='200px'></img>
        <h4 className='brand'>{brand}</h4>
        
        <p className='price'>${price}</p>
        </div>
  
  </>
    
  )
}

export default PhoneForm