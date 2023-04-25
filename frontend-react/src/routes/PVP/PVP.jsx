import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaCheck} from "react-icons/fa";

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
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { python } from "@codemirror/lang-python";

const myTheme = createTheme({
    theme: 'light',
    settings: {
      background: '#000000',
      foreground: '#000000',
      caret: '#5d00ff',
      selection: '#036dd626',
      selectionMatch: '#036dd626',
      lineHighlight: '#8a91991a',
      gutterBackground: '#fff',
      gutterForeground: '#8a919966',
    },
    styles: [
      { tag: t.comment, color: '#787b8099' },
      { tag: t.variableName, color: '#0080ff' },
      { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
      { tag: t.number, color: '#5c6166' },
      { tag: t.bool, color: '#5c6166' },
      { tag: t.null, color: '#5c6166' },
      { tag: t.keyword, color: '#5c6166' },
      { tag: t.operator, color: '#5c6166' },
      { tag: t.className, color: '#5c6166' },
      { tag: t.definition(t.typeName), color: '#5c6166' },
      { tag: t.typeName, color: '#5c6166' },
      { tag: t.angleBracket, color: '#5c6166' },
      { tag: t.tagName, color: '#5c6166' },
      { tag: t.attributeName, color: '#5c6166' },
    ],
  });

export default function PVP() {
    const[sett, showSettings] = useState(false);
    const[surrender, showSurrender] = useState(false);
    const[confirm, showconfirm] = useState(false);
    const [playlosersound, setPlayLoserSound] = useState(false);
    
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

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
      }, []);

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
                                <CodeMirror
                                    value=""
                                    height="140px"
                                    extensions={[javascript({ jsx: true })]}
                                    onChange={onChange}
                                    background="transparent"
                                    className="codemirror"
                                    options={{
                                        theme: {myTheme},
                                        lineNumbers: true,
                                        scrollbarStyle: null,
                                        lineWrapping: true,
                                        mode: {python},
                                      }}

                                      style={{ background: "#282c34" }}
                                />
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
                                <div className="btn confirmbtn" onClick={ () => {toggleConfirm();  toggleSurrender();}}><FaCheck className="check"/></div>
                                <div className="btn" onClick={toggleSurrender}><span>X</span></div>
                            </div>
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
                {playlosersound && <div>
                    <audio autoPlay src={lose} type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>}
            </div>
        </>
    )
}