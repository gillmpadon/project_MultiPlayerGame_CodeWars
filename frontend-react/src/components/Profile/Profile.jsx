import React from "react"
import dazai from "../../assets/img/dazai.png"
import "./Profile.css"

export default function Profile(){
    return (
        <div>
            <div className="t-profile">
            </div>
            <div className="profile">
                <div className="pimage">
                    <img src={dazai} />
                </div>
                <div className="nameid">
                    <p>Dazai</p>
                    <small>ID: 123123</small>
                </div>
            </div>
        </div>
    )
}


