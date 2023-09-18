import React from 'react'
import FilterPhone from './FilterPhone'

const Navbar = () => {
  return (
    <>
  
    
        
        <ul className='nav nav-tabs'role="tablist">
          <li className='nav-item'>
            <button>Inicio</button>
          </li>
          <li className='nav-item dropdown'>
          <FilterPhone/>
          </li>
          <li className='nav-item'>
            <button>Carrito</button>
            </li>
          <li className='nav-item'>
            <button>Iniciar sesion</button>
          </li>
          
           
          
        </ul>
        
       
    
  </>

  )
}

export default Navbar