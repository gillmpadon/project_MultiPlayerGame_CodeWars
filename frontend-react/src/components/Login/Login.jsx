import React from "react";
import { useState } from "react";
import "./Login.css"
import bg from "../../assets/img/4455.jpg"

export default function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const onClick = () => {
        setIsLogin(!isLogin)
        let email = document.getElementById('email');
        email.classList.toggle('hide-email');   
    }

    return ( 
    <div className="container">
        <img src={bg} alt="bg" />
        <div className="login-box">
            <h1>Code</h1>
            <h1><span>Wars</span></h1>
            <input type="text" placeholder="USERNAME" />
            <input type="text" placeholder="EMAIL" id="email" className="hide-email show-email"/>
            <input type="password" placeholder="PASSWORD" />
            <button className="btn" id="signlog">
                {isLogin ? 'LOGIN' : 'SIGN UP'  }
            </button>
            <div className="signlog">
                <div id="signlog-text">{isLogin ? "Don't have account?" : 'Already have account?'  }</div>
                <button  id="login" onClick={onClick}>
                    {isLogin ? 'SIGN UP' : 'LOGIN'  }
                </button>
            </div>
        </div>
    </div>
    )
}