import React from "react";
import dazai from "../../assets/img/dazai.png";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

export default function Profile({ username }) {
  return (
    <Link to="/userProfile">
      <div>
        <div className="t-profile"></div>
        <div className="profile">
          <div className="pimage">
            <img src={dazai} />
          </div>
          <div className="nameid">
            <p>{username}</p>
            <small>ID: 123123</small>
          </div>
        </div>
      </div>
    </Link>
  );
}
