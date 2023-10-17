
import './App.css';
import Home from '../src/components/home/Home';
import LoginForm from '../src/components/login/LoginForm';
import Navbar from '../src/components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from './components/Error404.js';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/ContextCart';

function App() {
  return (
    <div>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LoginForm />} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
   
        
      </CartContextProvider>

    </div>
    
  );
}

export default App;
