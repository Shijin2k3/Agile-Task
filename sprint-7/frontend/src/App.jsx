import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Product from './pages/Product';
import Cart from './pages/Cart';



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
         <Route index  element={<Product/>}/>
         <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  
  )
}

export default App
