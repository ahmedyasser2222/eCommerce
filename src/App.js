import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import {Routes ,Route } from "react-router-dom"
import Products from './component/products';
import Product from './component/product';
import Notfound from './component/notfound';
import Test from './component/test';
import Cart from './component/cart';

function App() {
    
  return (
    <>
   <Navbar /> 
        <Routes>
          <Route  index path='/'         element={<Home />}  />
          <Route   path='/products'      element={<Products 
        
          />}  />
          <Route   path='/products/:id'  element={<Product />}  />
          <Route   path='/*' element={<Notfound />}  />
          <Route path='/test/:id'        element={<Test/>} />
          <Route path='/cart'            element={<Cart />} />
        </Routes>
    </>
  );
}

export default App;
