import React from "react";
import "./Contact.css";
import bg from "../../assets/img/4455.jpg";
import contactLogo from "../../assets/img/contact-logo.png";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="container">
      <img src={bg} alt="bg" />
      <div className="contactUs-box">
        <h1>Contact</h1>
        <h1>
          <span>Us</span>
        </h1>
        <h2>HAVE A QUESTION?</h2>
        <input type="text" placeholder="USERNAME" />
        <input type="text" placeholder="EMAIL" id="email" />
        <div className="logo">
          <img src={contactLogo} alt="contactLogo" />
        </div>
        <h3>MESSAGE</h3>
        <textarea
          className="message"
          name="message-box"
          id=""
          cols="40"
          rows="10"
        ></textarea>

        <div className="button">
          <Link to="/settings">
            <button className="btn" id="signlog">
              RETURN
            </button>
          </Link>
          <button className="btn">SEND</button>
        </div>
      </div>
    </div>
  );
}
