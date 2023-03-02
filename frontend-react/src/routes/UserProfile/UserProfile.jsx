import React from "react";
import "./UserProfile.css";
import bg from "../../assets/img/4455.jpg";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="profile-container">
      <img src={bg} alt="bg" />
      <div className="profile-box">
        <h1>User</h1>
        <h1>
          <span>Profile</span>
        </h1>

        <div className="user-profile">
          <div className="user-info">
            <p>USERNAME:</p>
            <p>Dazai</p>
          </div>
          <div className="user-info">
            <p>USER ID:</p>
            <p>123123</p>
          </div>
          <div className="user-info">
            <p>Email:</p>
            <p>Dazai@gmail.com</p>
          </div>
        </div>

        <div className="first-line">
          <Link to="/settings">
            <button className="btn">SETTINGS</button>
          </Link>
          <Link to="/">
            <button className="btn">LOGOUT</button>
          </Link>
        </div>
        <Link to="/home">
          <button className="btn"> RETURN </button>
        </Link>
      </div>
    </div>
  );
}
