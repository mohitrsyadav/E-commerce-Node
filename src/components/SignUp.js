import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        let result = await fetch("http://localhost:5000/registor", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/")
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    })

    return (
        <div className="resister">
            <h1>Sign Up</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
            <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
            <input className="inputBox" type="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" />
            <button onClick={collectData} type="button" className="appButton">Sign Up</button>
        </div>
    )
}
export default SignUp;