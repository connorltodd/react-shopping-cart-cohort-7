import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/detail' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
