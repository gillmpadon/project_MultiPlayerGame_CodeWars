import React from "react";
import "./Contact.css";
import bg from "../../assets/img/4455.jpg";
import contactLogo from "../../assets/img/contact-logo.png";

export default function ContactUs(){
    return(
        <div class="container">
        <img src={bg} alt="bg"/>
        <div class="contactUs-box">
            <h1>Contact</h1>
            <h1><span>Us</span></h1>
            <h2>HAVE A QUESTION?</h2>
            <input type="text" placeholder="USERNAME" />
            <input type="text" placeholder="EMAIL" id="email" />
            <div class="logo">
                <img src={contactLogo} alt="contactLogo"/>
            </div>
            <h3>MESSAGE</h3>
            <textarea class="message" name="message-box" id="" cols="40" rows="10"></textarea>
            
            <div class="button"> 
                <button class="btn" id="signlog">RETURN</button>
                <button class="btn">SEND</button>
            </div>
        </div>
    </div>
    )
}