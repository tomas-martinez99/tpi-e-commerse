import React, { useState } from 'react'
import AddPhone from './AddPhone'
import PhoneList from './PhoneList'

const Home = () => {
    const [phones, setPhones] = useState([{name: ' Iphone 14' ,  price : '15' , brand :'Apple ',img:"https://i.blogs.es/d69481/iphone-14-00-01/1366_2000.jpg"}]);
    const onPhoneSubmit = (phone) =>{
        console.log(phone);
        setPhones((phones)=>[...phones,phone]);
    }
 

    
  return (
    <div>
        <AddPhone onFormSubmit={onPhoneSubmit}/>
        <PhoneList phones={phones}/>
    </div>
  )
}

export default Home