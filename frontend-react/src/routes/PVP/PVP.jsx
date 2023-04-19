import React, {useState} from "react";
import { Link } from "react-router-dom";


import useConfigStore from "../../store/configStore";
import AudioButton from "../../components/AudioButton/AudioButton";
import Settings from "../Settings/Settings";
import "./PVP.css";
import bg from "../../assets/img/4455.jpg";
import clock from "../../assets/img/clock.png";
import charMan from "../../assets/img/final_male_anim_IDLE.gif";
import charWoman from "../../assets/img/final_female_anim_IDLE(fixed frames).gif";
import setting from "../../assets/img/settingbtn.png";



export default function PVP() {
    const[sett, showSettings] = useState(false);
    
    const toggleSettings = () => {
        showSettings(!sett)
    }

    return(
        <>
            <div className={`settings-pvp  ${sett ? 'on' : 'off'}`} >
                <Settings isTransparent={true}/>
            </div>
            <div className="container container-pvp">
                <img src={bg} alt="bg" className="pvp-bg" />
                <div className="pvp-container">
                    <div className="pvptop">
                        <div className="pvptop-left">
                            <div className="hpbar hpbar-left">

                            </div>
                        </div>
                        <div className="pvptop-center">
                            <div className="clock">
                                <img src={clock}/>
                            </div>
                            <div className="round">
                                <h2>ROUND 1</h2>
                            </div>
                        </div>
                        <div className="pvptop-right">
                            <div className="hpbar hpbar-right">
                                
                            </div>
                        </div>
                        <div className="settings">
                            <img src={setting} alt="" onClick={toggleSettings}/>
                        </div>
                    </div>
                    <div className="pvp-characters">
                        <div className="firstchar">
                            <img src={charMan} alt="" />
                        </div>
                        <div className="secondchar">
                            <img src={charWoman} alt="" />
                        </div>
                    </div>
                    <div className="pvpbottom">
                        <div className="bottom-left">
                            <div className="question">
                                <p><strong>Q:</strong> WRITE A FUNCTION THAT COMPUTE THE SUM OF TWO INPUTS</p>
                            </div>
                            <div className="userinput">
                                <textarea name="" id="" cols="96" rows="9"></textarea>
                                <div className="buttons">
                                    <div className="btn submitbtn">SUBMIT</div>
                                    <div className="btn clearbtn">CLEAR</div>
                                </div>

                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="output">
                                <h3>OUTPUT</h3>
                            </div>
                            <div className="btn btn-exit">EXIT</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}