import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Poubelle from "../assets/poubelle.svg";

const Cart =() => {

    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const cartProducts = selector.cartProducts;

    const incrementItemQuantity = (id) => {
        dispatch({type: "INCREMENT_PRODUCT", payload: {id, increment: 1}})
    }

    const decrementItemQuantity = (id, inCart) => {
        console.log(inCart)
        if (inCart <= 1) {
            removeProduct(id, inCart);
        } else {
            dispatch({type: "DECREMENT_PRODUCT", payload: {id, decrement: 1}})
        }
        
    }

    const removeProduct = (id, inCart) => {
        dispatch({type: "REMOVE_PRODUCT", payload: {id, inCart: 1}});
    }
    
    return (

        <div>
            {cartProducts.length > 0 ? cartProducts.map(item =>
                <div key={item.id} className="cartItem">

                    <div className="cartItemImg">
                        <img src={item.image} alt="photo du produit" />
                    </div>

                    <div className="cartItemInfo">
                        <h3>{item.name}</h3>
                        <span>Couleur : {item.color} </span>
                    </div>

                    <div className="cartItemQuantity">
                        <button onClick={() => decrementItemQuantity(item.id, item.inCart)}>-</button>
                        <span>{item.inCart}</span>
                        <button onClick={() => incrementItemQuantity(item.id)}>+</button>
                    </div>

                    <div className="cartItemPrice">
                        <h3>{item.price}$</h3>
                        <span>Total : {item.price * item.inCart} </span>
                    </div>

                    <div className="removeCartItem">
                        <button>
                            <img onClick={() => removeProduct(item.id, item.inCart)} src={Poubelle} alt="icone de poubelle pour supprimer l'article" />
                        </button>
                    </div>

                </div>
            ) : <h2>Le panier est vide</h2>}
        </div>
    )
}

export default Cart;