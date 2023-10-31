
import { useState } from 'react'
import { ProductsFetch } from '../customHooks/ProductsFetch'
import AddPhone from './AddPhone'
import PhoneList from './PhoneList'




const Home = () => {
   
    const {data} = ProductsFetch("https://api-servis.onrender.com/products")
    const [phones , setPhones] = useState()
    const onPhoneSubmit = async (phone) =>{
      try {
        const response = await fetch("https://api-servis.onrender.com/products",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(phone)
      });
      if (response.ok){
        const newPhone = await response.json();
        console.log("post request successful:" , newPhone);
        setPhones([...phones, newPhone])
      }else{
        console.error("POST request failed", response.statusText);
      }
    }catch(error){
      console.error("Error", error);
    }
  };


    
  return (
    <div>
        <AddPhone onFormSubmit={onPhoneSubmit}/>
        <PhoneList phones={data}/>
    </div>
  )
}

export default Home