import React, { useState } from "react";

const SignUp=()=>{
    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");

    const collectData =()=>{
        console.log(name + email + password)
    }
    return(
        <div className="resister">
            <h1>Sign Up</h1>
            <input className ="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}placeholder="Enter name"/>
            <input className ="inputBox"type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter email"/>
            <input className ="inputBox"type="Password" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder="Enter password"/>
            <button onClick={collectData} type="button" className="appButton">Sign Up</button>
        </div>
    )
}
export default SignUp;