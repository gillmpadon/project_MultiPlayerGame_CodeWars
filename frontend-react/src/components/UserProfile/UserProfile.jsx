import React from "react";
import "./UserProfile.css"
import bg from "../../assets/img/4455.jpg"

export default function UserProfile(){
    return(
        <div className="container">
        <img src={bg} alt="bg"/>
        <div className="profile-box">
            <h1>User</h1>
            <h1><span>Profile</span></h1>

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
                <a href="settings.html"><button className="btn">SETTINGS</button></a>
                <a href="signlog.html"><button className="btn">LOGOUT</button></a>
            </div>
            <a href="menu.html"><button className="btn"> RETURN </button></a>
        </div>
    </div>
)
}