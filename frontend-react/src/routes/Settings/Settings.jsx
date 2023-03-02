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
    <div class="container">
      <img src={bg} alt="bg" />
      <div class="Settings-box">
        <h1>Game</h1>
        <h1>
          <span>Settings</span>
        </h1>
        <div class="audio">
          <p>MUSIC</p>
          <div class="vol">
            <div class="vol-oval">ON</div>
            <div class="vol-circle"></div>
          </div>
        </div>
        <div class="audio">
          <p>SOUND</p>
          <div class="vol">
            <div class="vol-oval">ON</div>
            <div class="vol-circle"></div>
          </div>
        </div>
        <div class="first-line">
          <button class="btn">
            {" "}
            <a href="#">ABOUT</a>{" "}
          </button>
          <Link to="/contact">
            <button class="btn">
              {" "}
              <a href="#">CONTACT</a>{" "}
            </button>
          </Link>
        </div>
        <Link to="/userProfile">
          <button class="btn"> RETURN </button>
        </Link>
      </div>
    </div>
  );
}