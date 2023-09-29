import React, { useState } from "react";
import "./RequestPass.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import emailjs from '@emailjs/browser';

export default function RequestPass() {
  const emailError = () => toast("No Email is Found");
  const emailOkay = () => toast("Link is sent to Email.");
  const [ email , setEmail] = useState('')
  const [ username, setUsername ] = useState('')
  const navigate = useNavigate()
  const  getEmail= async(e)=>{
    e.preventDefault();
    if(!email || !email.includes("@")){
      emailError()
    }
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_URL_PREFIX}:3003/api/accounts/${email}`
      );
      
      if(res.status==200){
        setUsername(res.data.username)
        console.log(res.data.username)
          emailOkay()
          emailjs.send('service_m1xbefj', 'template_n4lnrjl', {
            to_email: email,
            message: `http://localhost:5173/UpdatePassword/${res.data.username}`
          }, 'PZi63bX3gCLmznWIu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setTimeout(()=>{
            navigate('/')
          },3000)
        }else{
          emailError()
        }
      
      } catch (error) {
        console.log(error);
        emailError()
      }
    }
  
  return (
    <div className="reqpass">
      <div className="reqpass-box">
        <h1>Code</h1>
        <h1>
          <span>Wars</span>
        </h1>
       <input
          type="text"
          placeholder="EMAIL"
          id="email"
          className="show-email"
          name="to_email"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <div className="first-line">
            <button className="btn" onClick={getEmail} >REQUEST PASSWORD</button>
        </div>
        <div className="reqpass-signlog">
          <div id="signlog-text">
            Back to
            <Link to="/">
              <button id="login">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
  }