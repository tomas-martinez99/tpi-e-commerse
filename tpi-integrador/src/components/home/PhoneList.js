import React from 'react'
import PhoneForm from './PhoneForm'

const PhoneList = ({p}) => {
  return (
    <>
        <div className='phone-list'>
            <h1> Lista de celulares</h1>
            {p.map((p, index) => (
                <PhoneForm key={index} name={p.name} price={p.price} img={p.img} brand={p.brand}/>
            ))}

        </div>
    
    
    </>
  )
}

export default PhoneList