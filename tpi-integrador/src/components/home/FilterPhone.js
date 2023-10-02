import React, { useState } from 'react'

const FilterPhone = ({onBrandChange, brands}) => {
  const [brandSelected, setBrandSelected]= useState('');
  const brandChangeHandler = (event) =>{
    setBrandSelected(event.target.value);
    onBrandChange((brandSelected))
  }

  return (
    <div>
    <select id="brand" value={brandSelected} onChange={brandChangeHandler}>
       <option value={''}>Seleciona una Marca</option>
       {brands.map((brand,index)=>(
        <option key={index} value={brand}>{brand}</option>
       ))}

    </select>
    </div>
  )
}

export default FilterPhone