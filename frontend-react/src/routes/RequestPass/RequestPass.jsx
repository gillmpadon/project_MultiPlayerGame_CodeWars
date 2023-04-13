import React from "react";
import "./RequestPass.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { removeAccount } from "../../features/account/accountSlice";
import useConfigStore from "../../store/configStore";


export default function RequestPass () {
    const account = useConfigStore((state) => state.account);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (account.username === "") {
        navigate("/");
      }
    });

    return (
        <div className="reqpass">
            <div className="reqpass-box">  
                <h1>Code</h1>
                <h1><span>Wars</span></h1>
                {/* <br><br><br><br><br> */}
                <input type="text" placeholder="EMAIL" id="email" className="show-email" />
                <div className="first-line">
                    <a href="Code.html"><button className="btn">REQUEST PASSWORD</button></a>
                </div>
                
                <div className="reqpass-signlog">
                    <div id="signlog-text">Back to 
                        <Link to="/">
                        <button id="login">
                            LOGIN
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
