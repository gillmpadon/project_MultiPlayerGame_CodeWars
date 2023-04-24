import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaRegStar} from "react-icons/fa";


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
    const[surrender, showSurrender] = useState(false);
    const[confirm, showconfirm] = useState(false);

    
    const toggleSettings = () => {
        showSettings(!sett)
    }

    const toggleSurrender = () => {
        showSurrender(!surrender)
    }

    const toggleConfirm = () => {
        showconfirm(!confirm)
        showSurrender(surrender)
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
                            <div className="btn btn-exit" onClick={toggleSurrender}>EXIT</div>
                          
                        </div>
                    </div>
                </div>
                { surrender &&
                    <div className="surrender">
                    <div className="surrender-container">
                        <h1>Are you sure you want to surrender?</h1>
                        <h1>You will lose a Star </h1>
                        <div className="surr-buttons">
                            <div className="btn confirmbtn" onClick={ () => {toggleConfirm();  toggleSurrender();}}>CONFIRM</div>
                            <div className="btn" onClick={toggleSurrender}>CANCEL</div>
                        </div>
                    </div>
                </div>
                }
                { confirm && 
                    <div className="lose">
                         <Link to="/">
                            <div className="lose-container">
                                <h1>You Lose T_T</h1>
                                <p>Click anywhere to return to lobby</p>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}