import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaCheck } from "react-icons/fa";


import useConfigStore from "../../store/configStore";
import AudioButton from "../../components/AudioButton/AudioButton";
import Settings from "../Settings/Settings";
import "./PVP.css";
import bg from "../../assets/img/4455.jpg";
import clock from "../../assets/img/clock.png";
import charMan from "../../assets/img/final_male_anim_IDLE.gif";
import charWoman from "../../assets/img/final_female_anim_IDLE(fixed frames).gif";
import setting from "../../assets/img/settingbtn.png";
import lose from '../../assets/audio/lose.mp3';
import win from '../../assets/audio/win.mp3';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Console from "../../components/Console/Console";


export default function PVP() {
    const [sett, showSettings] = useState(false);
    const [surrender, showSurrender] = useState(false);
    const [confirm, showconfirm] = useState(false);
    const [playlosersound, setPlayLoserSound] = useState(false);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(seconds => {
            if (seconds === 0) {
              clearInterval(intervalId); // Stop the timer
              return 0;
            } else {
              return seconds - 1;
            }
          });
        }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    const toggleSettings = () => {
        showSettings(!sett);
    }

    const toggleSurrender = () => {
        showSurrender(!surrender);
    }

    const toggleConfirm = () => {
        showconfirm(!confirm);
        showSurrender(surrender);
        setPlayLoserSound(true); setTimeout(() => setPlaySound(false), 3000);
    }

    const getOutput = (value) => {
        if (value) {
            return value.toUpperCase();
        } else {
            return '';
        }
    };


    const handleInputChange = (value) => {
        setInput(value);
    };

    const handleClick = () => {
        console.log(input);
        const code = input;
    
        try {
            const result = eval(code);
            setOutput(result);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
        };

    const handleReset = () => {
        setInput("");
    };

    return (
        <>
            <div className={`settings-pvp  ${sett ? 'on' : 'off'}`} >
                <Settings isTransparent={true} />
            </div>
            <div className="container container-pvp">
                <img src={bg} alt="bg" className="pvp-bg" />
                <div className="pvp-container">
                    <div className="pvp-container-content">
                        <div className="pvp-container-left"> 
                            <div className="pvp-left-content">
                                <div className="question">
                                        <p><strong>Q:</strong> WRITE A FUNCTION THAT COMPUTE THE SUM OF TWO INPUTS</p>
                                    </div>
                                </div> 
                            </div>
                        <div className="pvp-container-right">
                            <div className="pvptop">
                                <div className="pvptop-left">
                                    <div className="hpbar hpbar-left">
                                    </div>
                                </div>
                                <div className="pvptop-center">
                                    <div className="clock">
                                        <img src={clock} />
                                    </div>
                                    <div className="round">
                                        <h2>{seconds}</h2>
                                    </div>
                                </div>
                                <div className="pvptop-right">
                                    <div className="hpbar hpbar-right">

                                    </div>
                                </div>
                                <div className="settings">
                                    <img src={setting} alt="" onClick={toggleSettings} />
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
                        </div>
                    </div>
                    <div className="pvpbottom">
                        <div className="bottom-left">   
                            <div className="userinput">
                                <CodeMirror
                                    value={input}
                                    onChange={handleInputChange}
                                    height="190px"
                                    className="codemirror"
                                    extensions={[javascript({ jsx: true })]}
                                    options={{
                                        theme: 'dark-one',
                                        lineNumbers: true,
                                        scrollbarStyle: null,
                                        lineWrapping: true,
                                    }}
                                />
                                <div className="buttons">
                                    <div className="btn submitbtn" onClick={handleClick}>SUBMIT</div>
                                    <div className="btn clearbtn" onClick={handleReset}>CLEAR</div>
                                </div>

                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="output">
                                <h3>OUTPUT:</h3>
                                <h2>{output}</h2>
                            </div>
                            <div className="btn btn-exit" onClick={toggleSurrender}>EXIT</div>

                        </div>
                    </div>
                </div>
                {surrender &&
                    <div className="surrender">
                        <div className="surrender-container">
                            <div className="surrender-top">
                                <h1>Surrender</h1>
                                <h1>
                                    <span>Game</span>
                                </h1>
                            </div>
                            <div className="surrender-content">
                                <h2>Do you want to surrender?</h2>
                                <h2>You will lose a Star </h2>
                                <div className="surr-buttons">
                                    <div className="btn confirmbtn" onClick={() => { toggleConfirm(); toggleSurrender(); }}><FaCheck className="check" /></div>
                                    <div className="btn" onClick={toggleSurrender}><span>X</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {confirm &&
                    <div className="lose">
                        <Link to="/">
                            <div className="lose-container">
                                <h1>You Lose T_T</h1>
                                <p>Click anywhere to return to lobby</p>
                            </div>
                        </Link>
                    </div>
                }
                {playlosersound && <div>
                    <audio autoPlay src={lose} type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>}
            </div>
        </>
    )
}