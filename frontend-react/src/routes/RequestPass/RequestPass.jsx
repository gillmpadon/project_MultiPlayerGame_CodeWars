import React from "react";
import "./RequestPass.css";
import { Link } from "react-router-dom";

export default function RequestPass() {
  return (
    <div className="reqpass">
      <div className="reqpass-box">
        <h1>Code</h1>
        <h1>
          <span>Wars</span>
        </h1>
        <input
          type="text"
          placeholder="EMAIL"
          id="email"
          className="show-email"
        />
        <div className="first-line">
          <a href="Code.html">
            <button className="btn">REQUEST PASSWORD</button>
          </a>
        </div>

        <div className="reqpass-signlog">
          <div id="signlog-text">
            Back to
            <Link to="/">
              <button id="login">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
