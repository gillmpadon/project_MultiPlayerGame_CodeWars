import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import bg from "../../assets/img/4455.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import useConfigStore from "../../store/configStore";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const account = useConfigStore((state) => state.account);
  const setAccount = useConfigStore((state) => state.setAccount);

  useEffect(() => {
    const userLog = window.localStorage.getItem("loggedUser");
    if (userLog) {
      const { username, email } = JSON.parse(userLog);
      setAccount(username, email);
      navigate("/home");
    }
  }, []);

  const notify = (err) => toast(err);
  const dupeError = () => toast("Username/Email is already taken.");
  const passLen = () => toast("Password should be 8-16 characters.");
  const signSuccessful = () => toast("Your account has been created");

  const onClick = () => {
    setIsLogin(!isLogin);
    let email = document.getElementById("email");
    email.classList.toggle("hide-email");
    setPassword("");
    setEmail("");
    setUsername("");
  };

  const onLogin = async () => {
    if (isLogin) {
      const data = {
        username,
        password,
      };

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_URL_PREFIX}:3003/api/login`,
          data
        );
        if (res.status === 200) {
          console.log(res);
          const {
            data: { username, email },
          } = res;
          window.localStorage.setItem("loggedUser", JSON.stringify(res.data));
          setAccount(username, email);
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        notify(error.message);
      }
    }

    if (!isLogin) {
      if (password.length < 8 || password.length > 16) {
        passLen();
      } else {
        const data = {
          username,
          email,
          password,
        };

        try {
          const res = await axios.post(
            `${import.meta.env.VITE_URL_PREFIX}:3003/api/accounts`,
            data
          );
          if (res.status === 201) {
            signSuccessful();
            setIsLogin(!isLogin);
            let email = document.getElementById("email");
            email.classList.toggle("hide-email");
          }
          setUsername("");
          setPassword("");
          setEmail("");
        } catch (error) {
          dupeError();
        }
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
        <div className="passfield">
          <input
            type={passwordType}
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="icon-toggle" onClick={togglePassword}>
            {passwordType === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

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
      <ToastContainer />
    </div>
  );
}
