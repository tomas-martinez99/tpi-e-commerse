import React, { useState } from 'react'

const AddPhone = ({onFormSubmit}) => {

   const [data, setData] =useState({
    name: "",
    img: "",
    price: "",
    brand:"",
    stock:"",
   })

    const AddPhoneClick =(e) =>{
    
        
        onFormSubmit(e.preventDefault());

        setData({
            name: "",
            img: "",
            price: "",
            brand:"",
            stock:"",
        })

    }

    const onDataChangeHandler= (e)=> {
       setData({...data,[e.target.name]: e.target.value,
    });
    };



  return (
    <div>
       <form>
        <h2>Agregar celular</h2>
            <label  className='addLabel'>Imagen</label>
            <input 
            type='text'
            id='img' 
            className='addControl'
            value={data.img}
            onChange={onDataChangeHandler}
            />
            <label  className='addLabel'>Modelo</label>
            <input 
            type='text'
            id='name' 
            className='addControl'
            value={data.name}
            onChange={onDataChangeHandler}
            />
            <label  className='addLabel'>Marca</label>
            <input 
            type='text'
            id='brand' 
            className='addControl'
            value={data.brand}
            onChange={onDataChangeHandler}
            />
            <label  className='addLabel'>Precio</label>
            <input 
            type='number'
            id='price' 
            className='addControl'
            value={data.price}
            onChange={onDataChangeHandler}
            />
            <label  className='addLabel'>Stock</label>
            <input 
            type='number'
            id='stock' 
            className='addControl'
            value={data.stock}
            onChange={onDataChangeHandler}
            />
            <button type='button' className='button' onClick={AddPhoneClick}>Agregar</button>
            </form>
    
    </div>
  )
}

export default AddPhone