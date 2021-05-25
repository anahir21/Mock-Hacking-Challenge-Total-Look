import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import eyeglass from '../../assets/eyeglass.png'
import moreoffers from '../../assets/Group 55.png'
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import { useHistory } from "react-router-dom";

export default function Navbar() {
		let history = useHistory();
		function handlePath (path) {
			history.push(path);
		}
    return (
        <div>
            <div className="navbar">
                <img className="logotype" src={Logo} alt="Logo totallook"onClick={()=>handlePath('/')}/>  
                <div classnames="promotions">
									<ul className="mainNav">
										<li><a href="#" onClick={()=>handlePath('/clothes')}>CLOTHES</a></li>
										<li><a href="#" onClick={()=>handlePath('/accessories')}>ACCESORIES</a></li>
										<li><a href="#" onClick={()=>handlePath('/shoes')}>SHOES</a></li>
										<li><a href="#" onClick={()=>handlePath('/sports')}>SPORTS</a></li>
										<li><a href="#" onClick={()=>handlePath('/kids')}>KIDS</a></li>
										<li></li>
									</ul>
									<div>
                    <h1><a href="#" onClick={()=>handlePath('/offers')}>MORE OFFERS</a></h1>  
									</div>
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
