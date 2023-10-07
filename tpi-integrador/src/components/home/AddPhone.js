import React, { useState } from 'react'

const AddPhone = ({onFormSubmit}) => {

    const [img , setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');

    const AddPhoneClick = () =>{
        let phone = { name: name, img : img, price:price, brand : brand};
        onFormSubmit(phone);

        setName('');
        setImg('');
        setPrice('');
        setBrand('');

    }

    const onImgChangeHandler = (event) => {
        setImg(event.target.value);
        console.log(img)

    }

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
        console.log(name)

    }

    const onPriceChangeHandler = (event) => {
        setPrice(event.target.value);
        console.log(price)

    }

    const onBrandChangeHandler = (event) => {
        setBrand(event.target.value);
        console.log(brand)

    }



  return (
    <div>
       <form>
        <h2>Agregar celular</h2>
            <label  className='addLabel'>Imagen</label>
            <input 
            type='text'
            id='img' 
            className='addControl'
            value={img}
            onChange={onImgChangeHandler}
            />
            <label  className='addLabel'>Modelo</label>
            <input 
            type='text'
            id='name' 
            className='addControl'
            value={name}
            onChange={onNameChangeHandler}
            />
            <label  className='addLabel'>Marca</label>
            <input 
            type='text'
            id='brand' 
            className='addControl'
            value={brand}
            onChange={onBrandChangeHandler}
            />
            <label  className='addLabel'>Precio</label>
            <input 
            type='text'
            id='price' 
            className='addControl'
            value={price}
            onChange={onPriceChangeHandler}
            />
            <button type='button' className='button' onClick={AddPhoneClick}>Agregar</button>
            </form>
    
    </div>
  )
}

export default AddPhone