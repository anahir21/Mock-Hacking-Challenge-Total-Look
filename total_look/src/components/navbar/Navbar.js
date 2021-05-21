import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import eyeglass from '../../assets/eyeglass.png'
import moreoffers from '../../assets/Group 55.png'
import ModalLogin from '../../components/ModalLogin/ModalLogin';

export default function Navbar() {
    // const history = useHistory();
    // const handleClothes = () => history.push('/clothes');
    // const handleShoes = () => history.push('/shoes');
    // const handleSports = () => history.push('/sports');
    // const handleAccesories = () => history.push('/accessories');
    // const handleKids = () => history.push('/kids');

    return (
        <div>
            <div className="navbar">
                <img className="logotype" src={Logo} alt="Logo totallook"/>  
                <div classnames="promotions">
									<ul className="mainNav">
										<li>Clothes</li>
										<li>Accessories</li>
										<li>Shoes</li>
										<li>Spors</li>
										<li>Kids</li>
									</ul>
                    <h1>MORE OFFERS</h1>  
                </div> 
            <div className="linkModals">
                    <ModalLogin/>
            </div>      
                {/* <div class="categories">
                    <h2>SHOES</h2>
                    <h2>SPORTS</h2>
                    <h2>ACCESORIES</h2>
                    <h2>KIDS</h2>
                </div> */}
    
            </div>
            
        </div>
    )
}
