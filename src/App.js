import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          <Route exact path='/products' element={
            <Homepage 
              isSearchConfirmed={isSearchConfirmed}
              productSearchValue={productSearchValue}
            />
          } />
          {/* http://localhost:3000/products/12 */}
          {/* React parameter */}
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to='/products' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
