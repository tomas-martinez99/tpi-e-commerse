import React, { useEffect, useState } from 'react'
import PhoneForm from './PhoneForm'
import FilterPhone from './FilterPhone'

function getPhonesBrand (p) {
  const brands = p.map((phone)=> phone.brand);
  let uniqueBrand = brands.filter((brand,index)=> brands.indexOf(brand)=== index);
  return uniqueBrand;
}


const PhoneList = ({p}) => {
  const [phonesFiltred, setPhonesFiltred] = useState(p)

useEffect(() => {
  setPhonesFiltred(p);
}, [p])

  const onBrandChangeHandler = (brand) =>{
    const phonesFilter = p.filter(function(phone){
      return phone.brand === brand
    })
    setPhonesFiltred(phonesFilter)
  }
 

  return (
    <div>  
      <h1>Celulares UTN</h1>
      <h3> Lista de celulares</h3>
      
          <FilterPhone
          onBrandChange={onBrandChangeHandler}
          brands={getPhonesBrand(p)}
          />
        <div className='phone-list'>
        {phonesFiltred.map((p,index) => (
        <PhoneForm key={index} name={p.name} price={p.price} img={p.img} brand={p.brand}/>
      ))}
            

        </div>
    
    
    </div>
  )
}

export default PhoneList