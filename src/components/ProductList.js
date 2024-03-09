import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
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

   const deleteProduct = async (id)=>{
      let result = await fetch(`http://localhost:5000/product/${id}`, {
         method:"Delete"
      });
      result = await result.json();
      if(result){
         alert("Record is deleted");
      }
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
            <li>Operation</li>
         </ul>

         {product && product.map(({name, price, category, company, _id})=>(
            <ul key ={_id}>
            <li>S.No</li>
            <li>{name}</li>
            <li>{price}</li>
            <li>{category}</li>
            <li>{company}</li>
            <li>
            <button onClick={()=>deleteProduct(_id)}>button</button>
            <Link to={`/update/${_id}`}>Update</Link>
            </li>
           
            
         </ul>
         ))}
        </div>
    )
}
export default ProductList;