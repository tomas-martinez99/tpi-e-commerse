
import './App.css';
import Home from '../src/components/home/Home';
import LoginForm from '../src/components/login/LoginForm';
import Navbar from '../src/components/navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <LoginForm/>
    </div>
  );
}

export default App;
