import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    

    </div>
  );
}

export default App;
