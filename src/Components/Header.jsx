import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import Logo from "../assets/logo.jpg";
import Caddie from "../assets/cart.svg";
import { useSelector } from "react-redux";

const Header = () => {

    const selector = useSelector(state => state);
    console.log(selector)
    const caddieProduct = selector.cartProducts.length;


    return (

        <header id="header">
            <NavLink to="/products">
                <img className="siteLogo logo_fictif" src={Logo} alt="logo fictif"  />
            </NavLink>

            <form className="search">
                <input type="text" placeholder="recherche" />
                <button>Accepter</button>
            </form>

            <div className="cartLink">
                <NavLink to="/products">
                    <img src={Logo} alt="siteLogo logo fictif" className="logo_fictif" />
                </NavLink>
                    
                <NavLink to="/cart"> 
                    <img className="logo_caddie" src={Caddie} alt="logo de caddie pour voir le panier" />
                </NavLink>
                <span>{caddieProduct}</span>
            </div>
        </header>

    )
}

export default Header;