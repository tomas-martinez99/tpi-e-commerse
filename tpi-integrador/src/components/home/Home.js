import React, { useState, useEffect} from 'react'
import AddPhone from './AddPhone'
import PhoneList from './PhoneList'

import Products from "../../Json/Products.json"


const Home = () => {
    const [phone, setPhone] = useState([]);
    

  useEffect(()=>{
    const fetchData = async()=>{
       try{
       const data = await new Promise((resolve)=>{
       setTimeout(()=>{
       resolve(Products)
      }, 2000);
       });
       setPhone(data);
     }catch(error){
       console.log('Error:', error);
     }
    };
   fetchData();})
    const onPhoneSubmit = (phone) =>{
        console.log(phone);
        setPhone((phones)=>[...phones,phone]);
    }
  
  
    
  return (
    <div>
        <AddPhone onFormSubmit={onPhoneSubmit}/>
        <PhoneList phones={phone}/>
    </div>
  )
}

export default Home