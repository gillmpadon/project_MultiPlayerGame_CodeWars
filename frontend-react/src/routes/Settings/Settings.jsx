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
          <button className="btn"> ABOUT </button>
          <Link to="/contact">
            <button className="btn"> CONTACT </button>
          </Link>
        </div>
        <Link to="/userProfile">
          <button className="btn"> RETURN </button>
        </Link>
      </div>
    </div>
  );
}
