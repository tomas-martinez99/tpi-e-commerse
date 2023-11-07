import React, { useState } from 'react'

const FilterPhone = ({onBrandChange, brands}) => {
  const [brandSelected, setBrandSelected]= useState('');
  const brandChangeHandler = (event) =>{
    const selectedBrand = event.target.value;
    setBrandSelected(selectedBrand);
    onBrandChange(selectedBrand);
    
  }

  return (
    <div>
    <select id="brand" value={brandSelected} onChange={brandChangeHandler}>
       <option value={'All'}>Seleccione una Marca</option>
       {brands.map((brand,id)=>(
        <option key={id} value={brand}>{brand}</option>
       ))}

    </select>
    </div>
  )
}

export default FilterPhone