import React, { useEffect, useState } from 'react'
import PhoneForm from './PhoneForm'
import FilterPhone from './FilterPhone'

function getPhonesBrand (p) {
  const brands = [...new Set( p.map((phone) => phone.brand))];
  return brands;
}


const PhoneList = ({phones}) => {
  const [phonesFiltered, setPhonesFiltered] = useState(phones)



  const onBrandChangeHandler = (brand) =>{
    if (brand === 'All') {
      setPhonesFiltered(phones);
    } else {
      const phonesFilter = phones.filter((phone) => phone.brand === brand);
      setPhonesFiltered(phonesFilter);
    }
  };
 

  return (
    <div>  
      <h1>Celulares UTN</h1>
      <h3> Lista de celulares</h3>
      
          <FilterPhone
          onBrandChange={onBrandChangeHandler}
          brands={getPhonesBrand(phones)}
          />

        <div className='phone-list'>
          {phonesFiltered.map((phone) => (
          <PhoneForm key={phone.id} {...phone} />
          ))}
        </div>
    </div>
  )
}

export default PhoneList