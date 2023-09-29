import React, {useState} from "react";
import "./UpdatePass.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function UpdatePass() {
  const showToast = (str) => toast(str);
  const [ np, setnp] = useState('')
  const [ password, setpassword] = useState('')
  const { username } = useParams()
  const navigate= useNavigate()
  
  const setPass = async ( req,res) =>{
    if(np===password && np && password){
      try {
        const data = { username, password}
        const res = await axios.put(
          `${import.meta.env.VITE_URL_PREFIX}:3003/api/accounts/pass/${username}`, data)
          console.log(res.data)
          showToast(res.data.message)

          setTimeout(()=>{
            navigate('/')
          },2000)
      }
      catch (err) {
        console.log(err);
      }
    }else{
      console.log("Password does not matched")
    }

  }
  return (
    <div className="updatepass">
      <div className="updatepass-box">
        <h1>Code</h1>
        <h1>
          <span>Wars</span>
        </h1>
        <input
          type="text"
          placeholder="New Password"
          id="NP"
          className="show-email"
          onChange={e=> setnp(e.target.value)}

        />
        <input
          type="text"
          placeholder="Confirm Password"
          id="CP"
          className="show-email"
          onChange={e=> setpassword(e.target.value)}
        />
        <div className="updatepass-signlog">
          <div className="signlog-text">
              <button onClick={setPass} className="btn">UPDATE PASSWORD</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
