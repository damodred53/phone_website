import './App.css';
import Products from './Components/Products';
import Cart from "./Components/Cart";
import Layout from './Components/Layout';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/phone_website' element={<Layout />}>
          <Route path='/phone_website/products' element={<Products />}/>
          <Route path='/phone_website/cart' element={<Cart />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App