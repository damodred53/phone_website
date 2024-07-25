import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import './App.css';
import Products from './Components/Products';
import Cart from "./Components/Cart";
import Layout from './Components/Layout';
import { Route, Routes } from "react-router-dom";

const defaultState = {
  products : [
    {
        "id": 1,
        "name": "iPhone 13",
        "color": "Noir",
        "image": "src/assets/iphone_13_noir.webp",
        "price": 999.99,
        "inCart": 1
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S21",
        "color": "Argent",
        "image": "src/assets/Samsung_Galaxy S21_argent.jpeg",
        "price": 849.99,
        "inCart": 1
    },
    {
        "id": 3,
        "name": "Google Pixel 6",
        "color": "Blanc",
        "image": "src/assets/Google_Pixel_6_blanc.avif",
        "price": 799.99,
        "inCart": 1
    },
    {
        "id": 4,
        "name": "OnePlus 9",
        "color": "Bleu",
        "image": "src/assets/OnePlus_9_bleu.webp",
        "price": 729.99,
        "inCart": 1
    },
    {
        "id": 5,
        "name": "Sony Xperia 5 III",
        "color": "Vert",
        "image": "src/assets/Sony_Xperia_5_III_vert.jpg",
        "price": 899.99,
        "inCart": 1
    }
],
  cartProducts : [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return{ ...state, cartProducts : [...state.cartProducts, action.payload]};
    case "INCREMENT_PRODUCT":

      return { ...state, cartProducts: state.cartProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.inCart += action.payload.increment
        }
        return item;
      })};

      case "DECREMENT_PRODUCT":

      return { ...state, cartProducts: state.cartProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.inCart -= action.payload.decrement
        }
        return item;
      })};

      case "REMOVE_PRODUCT":

      return { ...state, cartProducts: state.cartProducts.filter((item) => item.id !== action.payload.id)};


    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
      <Routes>
        <Route >
          <Route path='/phone_website' element={<Layout />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
