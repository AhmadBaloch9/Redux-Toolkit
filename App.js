import React from 'react'
  import Navbar from './Components/Navbar';

import ProductCards from './Components/ProductCards';
import CartPage from './Components/cartPage'
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <BrowserRouter>
         <Navbar/>
         <Routes>
        <Route path='/' element={<ProductCards/>}/>
        <Route path='/cart' element={<CartPage/>}/>

         </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App
