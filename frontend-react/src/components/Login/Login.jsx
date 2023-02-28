import React from "react";
import { useState } from "react";
import "./Login.css";
import bg from "../../assets/img/4455.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    setIsLogin(!isLogin);
    let email = document.getElementById("email");
    email.classList.toggle("hide-email");
  };

  const onLogin = async () => {
    if (isLogin) {
      const data = {
        username,
        password,
      };

      const res = await axios.post("http://localhost:3003/api/login", data);

      if (res.status === 200) {
        console.log("navigate");
        navigate("/home");
      }
      console.log(res.status);
    }

    if (!isLogin) {
      const data = {
        username,
        email,
        password,
      };

      const res = await axios.post("http://localhost:3003/api/accounts", data);
      if (res.status === 201) {
        setIsLogin(!isLogin);
        let email = document.getElementById("email");
        email.classList.toggle("hide-email");
      }
    }
  };

  return (
    <div className="container">
      <img src={bg} alt="bg" />
      <div className="login-box">
        <h1>Code</h1>
        <h1>
          <span>Wars</span>
        </h1>
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="EMAIL"
          id="email"
          value={email}
          className="hide-email show-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" id="signlog" onClick={onLogin}>
          {isLogin ? "LOGIN" : "SIGN UP"}
        </button>
        <div className="signlog">
          <div id="signlog-text">
            {isLogin ? "Don't have account?" : "Already have account?"}
          </div>
          <button id="login" onClick={onClick}>
            {isLogin ? "SIGN UP" : "LOGIN"}
          </button>
        </div>
      </div>
    </div>
  );
}
