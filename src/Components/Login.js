import React, {useState, userEffect} from "react";
import axios from "axios";

const Login = ()=>{
    let[token, setToken]= useState("");

    const loginSubmit= ()=>{
        var obj = {
            "username": "user",
            "password": "1234"
        };
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            console.log(resp.data);
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <button onClick={loginSubmit}>Login</button>
    )
}
export default Login;