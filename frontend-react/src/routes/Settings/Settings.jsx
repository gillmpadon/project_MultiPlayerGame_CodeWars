import React, { useState } from "react";
import "./Settings.css";
import bg from "../../assets/img/4455.jpg";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useConfigStore from "../../store/configStore";
import AudioButton from "../../components/AudioButton/AudioButton";

export default function settings({isTransparent}) {
  const account = useConfigStore((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (account.username === "") {
      navigate("/");
    }
  });


  return (
    <div className="container">
      {!isTransparent && <img src={bg} alt="bg"/>} 
      <div  className={`Settings-box ${isTransparent ? "settings-pvp" : ""}`}>
        <h1>Game</h1>
        <h1>
          <span>Settings</span>
        </h1>
        <div className="audio">
          <p>MUSIC</p>
          <AudioButton />
        </div>
        <div className="audio">
          <p>SOUND</p>
          <div className="vol">
            <div className="vol-oval">ON</div>
            <div className="vol-circle"></div>
          </div>
        </div>
        
        <div className="first-line">
          <Link to="/about">
          { !isTransparent && <button className="btn"> ABOUT </button> }
          </Link>
          <Link to="/contact">
          { !isTransparent && <button className="btn"> CONTACT </button> }
          </Link>
        </div>
        <Link to="/userProfile">
          { !isTransparent && <button className="btn"> RETURN </button> }
        </Link>
      </div>
    </div>
  );
}
