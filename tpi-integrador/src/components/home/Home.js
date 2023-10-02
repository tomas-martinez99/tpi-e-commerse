import React, { useState } from 'react'
import AddPhone from './AddPhone'
import PhoneList from './PhoneList'

const InitialPhones = [
    {name: ' Iphone 14' ,  price : '15' , brand :'Apple ',img:"https://i.blogs.es/d69481/iphone-14-00-01/1366_2000.jpg" }
]
const Home = () => {
    const [phones, setPhones] = useState(InitialPhones);
    const onPhoneSubmit = (phone) =>{
        console.log(phone);
        setPhones((phones)=>[...phones,phone]);
    }
 

    
  return (
    <>
        <AddPhone onFormSubmit={onPhoneSubmit}/>
        <PhoneList phones={phones}/>
    </>
  )
}

export default Home