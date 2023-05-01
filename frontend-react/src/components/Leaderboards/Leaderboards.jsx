import React from "react";
import gold from "../../assets/img/gold.png";
import silver from "../../assets/img/silver.png";
import bronze from "../../assets/img/bronze.png";
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
                            <img src={silver} />
                        </div>
                        <div className="text">
                            <h3>2ND</h3>
                            <h2>LUFFY</h2>
                        </div> 
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>800</p>
                        </div>
                    </div>
                    <div className="gold">
                        <div className="gold-img">
                            <img src={gold} alt="" />
                        </div>
                        <div className="text">
                            <h3>1ST</h3>
                            <h2>DAZAI</h2>
                        </div>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>1000</p>
                        </div>
                    </div>
                    <div className="bronze">
                        <div className="bronze-img">
                            <img src={bronze} alt="" />
                        </div>
                        <div className="text">
                            <h3>3RD</h3>
                            <h2>KAITO</h2>
                        </div>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>500</p>
                        </div>
                    </div>
                </div>
                <div className="other-place">
                    <div className="other-place-content">
                        <p>4. FOURBEES</p>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>400</p>
                        </div>
                    </div>
                    <div className="other-place-content">
                        <p>5. FIVELYPO</p>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>300</p>
                        </div>
                    </div>
                    <div className="other-place-content">
                        <p>6. SIX SINCE</p>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>200</p>
                        </div>
                    </div>
                    <div className="other-place-content">
                        <p>7. SEVEN TEN</p>
                        <div className="lboardstar">
                            <p className="lstar"> &#9733;</p>
                            <p>100</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}