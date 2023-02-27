import React from "react";
import charMan from "../../assets/img/final_male_anim_IDLE.gif"
import "./BattleCharacter.css"

export default function BattleCharacter(){
    return(
        <div class="battle-mode">
            <div class="battle-mode-img">
                <img src={charMan} alt=""/>
            </div>
            <div class="option">
                <div class="arrow">
                    <div class="triangle"></div>
                </div>
                <div class="btn btn-option">PVP</div>  
                <div class="arrow">
                    <div class="triangle t-reverse"></div>
                </div>
            </div>
        </div>
    )
}