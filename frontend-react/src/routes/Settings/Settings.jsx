import React from "react";
import "./Settings.css";
import bg from "../../assets/img/4455.jpg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function settings() {
  const account = useSelector((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (account.username === "") {
      navigate("/");
    }
  });
  return (
    <div className="container">
      <img src={bg} alt="bg" />
      <div className="Settings-box">
        <h1>Game</h1>
        <h1>
          <span>Settings</span>
        </h1>
        <div className="audio">
          <p>MUSIC</p>
          <div className="vol">
            <div className="vol-oval">ON</div>
            <div className="vol-circle"></div>
          </div>
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
