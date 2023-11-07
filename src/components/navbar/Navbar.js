import {Link, NavLink} from "react-router-dom"
import Cart from "../cart/Cart"
const Navbar = () => {

  return (
    <div className="container" id="navbar">
    <div className="row">
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}>Inicio</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/login"} >Inisiar sesion</NavLink>
                                </li> 
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-6 d-flex justify-content-end  align-items-center">
                <NavLink className="nav-link" aria-current="page" to={"/cart"} >Carrito</NavLink>
                </div>        
    </div>
</div>
  )
}

export default Navbar