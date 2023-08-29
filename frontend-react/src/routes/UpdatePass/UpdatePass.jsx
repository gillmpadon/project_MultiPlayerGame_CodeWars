import React from "react";
import "./UpdatePass.css";
import { Link } from "react-router-dom";

export default function UpdatePass() {
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
        />
        <input
          type="text"
          placeholder="Confirm Password"
          id="CP"
          className="show-email"
        />
        <div className="updatepass-signlog">
          <div className="signlog-text">
            <Link to="/">
              <button className="btn">UPDATE PASSWORD</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
