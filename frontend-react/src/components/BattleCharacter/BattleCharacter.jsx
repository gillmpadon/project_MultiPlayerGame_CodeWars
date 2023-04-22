import {React, useState} from "react";
import charMan from "../../assets/img/final_male_anim_IDLE.gif";
import "./BattleCharacter.css";
import { Link } from "react-router-dom";

export default function BattleCharacter() {
  const [option, setOption] = useState(true);

  const optionClicked = () => setOption(option==false);

  return (
    <div className="battle-mode">
      <div className="battle-mode-img">
        <img src={charMan} alt="" />
      </div>
      <div className="option">
        <div className="arrow" onClick={optionClicked}>
          <div className="triangle"></div>
        </div>
        <Link to={option ? "/pvp" : "/single-player"}>
          <div className="btn btn-option">{ option ? "PVP" : "PRACTICE" }</div>
        </Link>
        <div className="arrow"  onClick={optionClicked}>
          <div className="triangle t-reverse"></div>
        </div>
      </div>
    </div>
  );
}
