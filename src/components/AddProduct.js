import React, { useState } from "react";
const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            alert("Please Enter All the feild");
        }
        else {
            const userId = JSON.parse(localStorage.getItem("user"))._id;
            let result = await fetch("http://localhost:5000/add-product", {
                method: "post",
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            result = await result.json();
            console.log(result);
        }

    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className="inputBox" type="text" placeholder="Enter product name" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="inputBox" type="text" placeholder="Enter product price" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="inputBox" type="text" placeholder="Enter product category" />
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="inputBox" type="text" placeholder="Enter product company" />
            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}
export default AddProduct;