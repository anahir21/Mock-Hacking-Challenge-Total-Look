import React from "react";
import "./Offers.css";
import bannerHS from "../../assets/bannerHS.png";
import bannerT from "../../assets/bannerT.png";
import bannerB from "../../assets/bannerB.png";
import accesoriesbanner from "../../assets/accesoriesbanner.jpg"
import dressesbanner from "../../assets/dressesbanner.jpg";
import kidsbanner from "../../assets/kidsbanner.jpg";
import shoesbanner from "../../assets/shoesbanner.jpg";
import sportsbanner from "../../assets/sportsbanner.jpg"
import underwearbanner from "../../assets/underwearbanner.jpg"


export const Offers = () => {
	return (
		<div classname= "offerList">
		<img className="bannerOffers" src={bannerHS} />
      <img className="bannerOffers" src={bannerT} />
      <img className="bannerOffers" src={bannerB} />
      <img className="bannerOffers" src={accesoriesbanner} />
      <img className="bannerOffers" src={dressesbanner} />
      <img className="bannerOffers" src={kidsbanner} />
      <img className="bannerOffers" src={shoesbanner} />
      <img className="bannerOffers" src={underwearbanner} />
      <img className="bannerOffers" src={sportsbanner} />
		</div>
	)
}

export default Offers;