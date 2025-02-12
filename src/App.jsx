import './App.css';
import Products from './Components/Products';
import Cart from "./Components/Cart";
import Layout from './Components/Layout';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route >
          <Route path='/phone_website' element={<Layout />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
