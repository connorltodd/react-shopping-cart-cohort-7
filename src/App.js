import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import './App.css';
import { BASE_URL } from './helpers/api';
import { DECREASE, INCREASE } from './helpers/constants';

function App() {
  const [productSearchValue, setProductSearchValue] = React.useState('')
  const [isSearchConfirmed, setSearchConfirmation] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    fetchUser()
  }, []);

  const fetchCartProducts = (userInfo) => {
    axios.get(`${BASE_URL}/cart/${userInfo.cart_id}/products`)
    .then(response => setCartProducts(response.data))
  }

  const fetchUser = () => {
    axios.get(`${BASE_URL}/users/3`)
    .then(response => {
      setUser(response.data)
      fetchCartProducts(response.data) 
    })
  }

  // cart products array
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleProductSearchInput = (event) => {
      const currentSearchInputValue = event.target.value
      setProductSearchValue(currentSearchInputValue)
      
      if(currentSearchInputValue === '') {
        setSearchConfirmation(false)
      }
  }

  // On Product detail we have id which is product id
  // When incrementing quantity we press add to cart on product detail and this sends through the product 
  // which does not contain cart_product_id
  // change the way the find works to check for cartProduct.product_id === productToAdd.id
  // send through a parameter for increase or decrease of quantity through handleQuantity parameter
  // this function can be called from anywhere in the app and will function the same
  // have an if else statement to increase or decrease quantity
  // call the quantity endpoint and reuse the the code to sync up the state

  const handleProductInCart = (productToAdd, handleQuantity) => {
    const productExistsInCart = cartProducts.find(product => product.product_id === productToAdd.id)
    console.log('cart product exists in array increment quantity', productExistsInCart)
    if (productExistsInCart) {
      // increase the quantity
      // map goes through each product in array
      // checks to see if it exists and if it does increment the count by one
      // otherwise ignore and return the product (if we do not include this step the product will be removed)
      if(handleQuantity === INCREASE) {
        productExistsInCart.quantity += 1

      } else if (handleQuantity === DECREASE) {
        if(productExistsInCart.quantity === 1) {
          return;
        } else {
          productExistsInCart.quantity -= 1
        }

      }

      axios.put(`${BASE_URL}/cart/${user.cart_id}/products/${productExistsInCart.cart_product_id}`, {
        "quantity":  productExistsInCart.quantity
      })
      .then(response => {
        // the map creates a copy of the array which maintains all of the preexisting products
        const newCartProducts = cartProducts.map(product => product.id === productToAdd.id ?
          productExistsInCart : product
        )
        setCartProducts(newCartProducts)
      })

      
     
    } else {
      axios.post(`${BASE_URL}/cart/${user.cart_id}/products`, {
        // product id and not the cart_product_id
        "product_id": productToAdd.id
      })
      .then(response => {
          const newCartProducts = [
          // keep everything that is in the array and add a new product at the end
          // the spread copies the existing products
            ...cartProducts,
            response.data[0]
          ]
           // add the product to the cart with the quantity of 1
          setCartProducts(newCartProducts)
      })
    }
  }
  

  const deleteProduct = (productToDelete) => {
    axios.delete(`${BASE_URL}/cart/${user.cart_id}/products/${productToDelete.cart_product_id}`)
    .then (response => {
      const newCartProducts = cartProducts.filter(item => item.cart_product_id !== productToDelete.cart_product_id);
      setCartProducts(newCartProducts)
    })
  }


  const productSearchSubmit = (productSearchValue) => {
    setSearchConfirmation(true)
  }

  const removeAllProductsFromCart = () => {
    setCartProducts([])
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
          <Route path='/products/:id' element={
          <ProductDetail 
            handleProductInCart={handleProductInCart}
          />
          } />
          <Route path='/cart' element={
            <Cart 
              cartProducts={cartProducts} 
              deleteProduct={deleteProduct}
              handleProductInCart={handleProductInCart} 
              removeAllProductsFromCart={removeAllProductsFromCart} 
            />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to='/products' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
