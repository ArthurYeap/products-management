import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import {Products} from "./pages/Products.jsx";
import Register
    from "./pages/Register.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
