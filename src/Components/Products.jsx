import React from "react";
import { useDispatch, useSelector} from "react-redux";


const Products =() => {

    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const products = selector.products;

    const cartProducts = selector.cartProducts;

    const addToCart = (id) => {
        let isInCart = false;
        cartProducts.forEach(element => {
            if(id === element.id) {
                isInCart = true;
            } 
        })
        if(!isInCart) {
            dispatch({type: "ADD_TO_CART", payload: products.find((product) => id === product.id)})
        }
        alert("nouveau produit ajouté au panier");
    }


    return (

        <div className="productList">
            {products.map((item) => {
                return (
                    
                    <div className="product" key={item.id} >
                        <img className="productImage"  src={item.image} alt="article en vente"/>
                        <h3>{item.name}</h3>
                        <span>Couleur : {item.color}</span>

                        <div className="priceBlock">
                            <span className="productPrice">{item.price}</span>
                            <button onClick={() => addToCart(item.id)}>Acheter</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Products;