import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/ContextCart'

const Cart = () => {
    const {cart,emptyCart, totalPrice, removeItem}= useCartContext()
  return (
    <>
        {cart.length ===0?
        <>
         <h1>Carrito vacio</h1>
                <button className="btn btn-primary"><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
        </>:
             <div className="container cartContainer">
                {cart.map((prod) =>
                <div className={`card mb-3  'text-white bg-secondary' : 'border-light'}`} key={prod.id} style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                      <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{prod.name}</h5>
                            <p className="card-text">Cantidad: {prod.stock}</p>
                            <p className="card-text">Precio unitario: $ {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
                            <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(prod.price * prod.stock)}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className="fas fa-trash-alt"></i></button>
                        </div>  
                      </div>
                  </div>
              </div>   
         )}

         <div className="divButtons">
             <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
             <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
             <button className="btn btn-primary"><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
             <button className="btn btn-secondary"><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
         </div>  
        </div>  
      }
    </>


  )}

  export default Cart