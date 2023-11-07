import {useState} from 'react';

const ProductCount = ({started, stock, onAdd}) => {
    
    const [counter, setCounter] = useState(started);
    
    const add = () => counter < stock && setCounter(counter + 1)

    const rest = () => counter > 1 && setCounter(counter - 1)
    
    const addOnCart = () => onAdd(counter)

    return (
        <div>
            <button onClick={rest} className="btn btn-dark"><i className="fas fa-minus">Restar</i></button>
                    {counter}
            <button onClick={add} className="btn btn-dark"><i className="fas fa-plus">Sumar</i></button>
            <button className="btn btn-dark"onClick={addOnCart}>Agregar al Carrito<i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ProductCount;