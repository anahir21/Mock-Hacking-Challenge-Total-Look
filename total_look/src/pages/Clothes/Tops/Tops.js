import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductsCard/ProductCard.js"
import './Tops.css'
const Tops = ({data}) => {
	console.log(data)
	const [kproducts, setKproducts] = useState();
	const getProducts = async()=> {
		let url = 'http://localhost:5000/products';
		let getFetchData = await fetch(url).then((result) => result.json());
		let filterProducts = getFetchData.filter(
		(item) => item.subcategory === "tops"
		);
		setKproducts(filterProducts);
	}
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='containerCards'>
			{kproducts &&
				kproducts.map((product)=>(
					<ProductCard 
					product={product}
					/>
				))}
		</div>
	)
}

export default Tops;