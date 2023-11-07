import {Link} from "react-router-dom";
import "./PhoneForm.css";
import {useCartContext } from '../../context/ContextCart';
import ProductCount from "./ProductCount";

const PhoneForm = ({name,img,price,stock,brand}) => {
  const {addItem}= useCartContext()
 
 const onAdd = (phone, contador) =>{
   addItem(phone, contador)
 }
  return (
    <>
    
    <div>
    <div className='card'  > 
    <h2 className='name'>{name}</h2>
    <img src= {img} className='card-img-top' alt={name} />
        <h4 className='brand'>{brand}</h4>
        <p className='price'>${price}</p>

      
        <ProductCount started = {1} stock= {stock} onAdd={onAdd}/><br/>
    </div>
    </div>
        
  

  <button className= "btn btn-primary"><Link to="/cart" className="nav-link">Finalizar compra</Link></button>
  </>
    
  )
}

export default PhoneForm