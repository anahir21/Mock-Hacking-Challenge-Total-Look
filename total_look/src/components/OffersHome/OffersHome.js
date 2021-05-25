import React from "react";
import "./OffersHome.css";
import bannerHS from "../../assets/bannerHS.png";
import bannerT from "../../assets/bannerT.png";
import bannerB from "../../assets/bannerB.png";


export const OffersHome = () => {
	return (
		<div classname= "offerList">
		<img className="bannerOffers" src={bannerHS} />
      <img className="bannerOffers" src={bannerT} />
      <img className="bannerOffers" src={bannerB} />
     
		</div>
	)
}

export default OffersHome;