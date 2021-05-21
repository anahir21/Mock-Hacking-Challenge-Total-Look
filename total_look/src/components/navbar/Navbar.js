import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import eyeglass from '../../assets/eyeglass.png'
import moreoffers from '../../assets/Group 55.png'


export default function Navbar() {
    return (
        <div>
                    <div>
            <div className="navbar">

                <img className="logotype" src={Logo} alt="Logo totallook" />
                <h1>CLOTHES </h1>
                <h1>SHOES </h1>
                <h1>SPORTS</h1>
                <h1>ACCESORIES</h1>
                <h1>KIDS</h1>
                <div>
                    <img className="eyeglass" src={eyeglass} alt="eye glass" />
                    <input className="search"></input>
                </div>
                <img className="cart" src={cart} alt="shopping cart" />

            </div>
            <div clasName="border">
                <h1>MORE OFFERS</h1>
                <img className="moreoffers" src={moreoffers} alt="more offers" />
            </div>
        </div>
            
        </div>
    )
}
