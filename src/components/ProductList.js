import React, { useEffect, useState } from "react";
const ProductList = () => {
   const [product, setProduct] = useState([]); 

   useEffect(()=>{
    getProduct();
   },[]);

   const getProduct=async()=>{
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProduct(result);
   }
   
    return (
        <div className="product-list">    
         <h2>Product List</h2>
         <ul className="bg-header-product">
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
         </ul>

         {product && product.map(({name, price, category, company})=>(
            <ul>
            <li>S.No</li>
            <li>{name}</li>
            <li>{price}</li>
            <li>{category}</li>
            <li>{company}</li>
         </ul>
         ))}
        </div>
    )
}
export default ProductList;