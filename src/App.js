import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  const [productSearchValue, setProductSearchValue] = React.useState('')
  const [isSearchConfirmed, setSearchConfirmation] = React.useState(false);

  const handleProductSearchInput = (event) => {
      const currentSearchInputValue = event.target.value
      setProductSearchValue(currentSearchInputValue)
      
      if(currentSearchInputValue === '') {
        setSearchConfirmation(false)
      }
  }


  const productSearchSubmit = (productSearchValue) => {
    setSearchConfirmation(true)
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar 
          handleProductSearchInput={handleProductSearchInput} 
          productSearchSubmit={productSearchSubmit}
          productSearchValue={productSearchValue}
        />
        <Routes>
          <Route exact path='/' element={
            <Homepage 
              isSearchConfirmed={isSearchConfirmed}
              productSearchValue={productSearchValue}
            />
          } />
          <Route path='/detail' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
