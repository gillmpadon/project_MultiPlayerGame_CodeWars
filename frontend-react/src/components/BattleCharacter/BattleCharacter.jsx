import React from "react";
import charMan from "../../assets/img/final_male_anim_IDLE.gif";
import "./BattleCharacter.css";
import { Link } from "react-router-dom";

export default function BattleCharacter() {
  return (
    <div className="battle-mode">
      <div className="battle-mode-img">
        <img src={charMan} alt="" />
      </div>
      <div className="option">
        <div className="arrow">
          <div className="triangle"></div>
        </div>
        <Link to="/single-player">
          <div className="btn btn-option">PVP</div>
        </Link>
        <div className="arrow">
          <div className="triangle t-reverse"></div>
        </div>
      </div>
    </div>
  );
}
