import React from "react";
import "./UserProfile.css";
import bg from "../../assets/img/4455.jpg";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { removeAccount } from "../../features/account/accountSlice";
import useConfigStore from "../../store/configStore";

export default function UserProfile() {
  const navigate = useNavigate();
  const account = useConfigStore((state) => state.account);
  const removeAccount = useConfigStore((state) => state.removeAccount);

  useEffect(() => {
    if (account.username === "") {
      navigate("/");
    }
  });

  const onLogout = () => {
    removeAccount();
    navigate("/");
  };

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
            <p>{account.username}</p>
          </div>
          <div className="user-info">
            <p>USER ID:</p>
            <p>123123</p>
          </div>
          <div className="user-info">
            <p>Email:</p>
            <p>{account.email}</p>
          </div>
        </div>

        <div className="first-line">
          <Link to="/settings">
            <button className="btn">SETTINGS</button>
          </Link>
          <button className="btn" onClick={onLogout}>
            LOGOUT
          </button>
        </div>
        <Link to="/home">
          <button className="btn"> RETURN </button>
        </Link>
      </div>
    </div>
  );
}
