import React from "react";
import luffy from "../../assets/img/luffy.jpg"
import dazai from "../../assets/img/dazai.png"
import kaito from "../../assets/img/kaito.jpg"
import "./Leaderboards.css"


export default function Leaderboards() {
    return(
        <div className="lboards">
                <div className="lboards-title">
                    <h1>LEADER</h1>
                    <h1><span>BOARDS</span></h1>
                </div>
                <div className="placement">
                    <div className="silver">
                        <div className="silver-img">
                            <img src={luffy} />
                        </div>
                        <div className="text">
                            <h3>2ND</h3>
                            <p>LUFFY</p>
                        </div>  
                    </div>
                    <div className="gold">
                        <div className="gold-img">
                            <img src={dazai} alt="" />
                        </div>
                        <div className="text">
                            <h3>1ST</h3>
                            <p>DAZAI</p>
                        </div>
                    </div>
                    <div className="bronze">
                        <div className="bronze-img">
                            <img src={kaito} alt="" />
                        </div>
                        <div className="text">
                            <h3>3RD</h3>
                            <p>KAITO</p>
                        </div>
                    </div>
                </div>
                <div className="other-place">
                    <p>4. FOURBEES</p>
                    <p>5. FIVELYPO</p>
                    <p>6. SIX SINCE</p>
                    <p>7. SEVEN TEN</p>
                </div>
            </div>
    )
}