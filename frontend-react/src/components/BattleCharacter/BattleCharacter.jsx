import { React, useState, useEffect } from "react";
import charMan from "../../assets/img/final_male_anim_IDLE.gif";
import charWoman from "../../assets/img/final_female_anim_IDLE(fixed frames).gif";
import "./BattleCharacter.css";
import { Link } from "react-router-dom";
import mouseclick from "../../assets/audio/mouseclick.mp3";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

export default function BattleCharacter({ findMatch }) {
  const [option, setOption] = useState(true);
  const [optionCharacter, setOptionCharacter] = useState(true);
  const [playSound, setPlaySound] = useState(false);
  const navigate = useNavigate();

  const optionClicked = () => setOption(option == false);
  const optionCharacterClicked = () => setOptionCharacter(!optionCharacter);

  const mouseClick = () => {
    setPlaySound(true);
    setTimeout(() => setPlaySound(false), 500);
  };

  const onQueue = () => {
    findMatch(true);
    if (option) {
      socket.emit("queue", true);
    } else {
      navigate("/single-player");
    }
  };

  useEffect(() => {
    socket.on("join-match", ({ room_id, id }) => {
      navigate(`/pvp/${room_id}`, {
        state: id,
      });
    });
  }, []);

  return (
    <div className="battle-modes">
      <div className="char-option">
        <div onClick={optionCharacterClicked} className="arrow arrow-character">
          <div className="triangle t-left" onClick={mouseClick}>
            {playSound && (
              <div>
                <audio autoPlay loop src={mouseclick} type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
        <div className="battle-mode-img">
          <img src={optionCharacter ? charMan : charWoman} alt="" />
        </div>
        <div onClick={optionCharacterClicked} className="arrow arrow-character">
          <div className="triangle t-right" onClick={mouseClick}>
            {playSound && (
              <div>
                <audio autoPlay loop src={mouseclick} type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="option">
        <div className="arrow" onClick={optionClicked}>
          <div className="triangle t-left" onClick={mouseClick}>
            {playSound && (
              <div>
                <audio autoPlay loop src={mouseclick} type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
        {/* <Link to={option ? "/pvp" : "/single-player"}> */}
        <div
          className="btn btn-option"
          style={{ border: "5px solid white" }}
          onClick={onQueue}
        >
          {option ? "PVP" : "PRACTICE"}
        </div>
        {/* </Link> */}
        <div className="arrow" onClick={optionClicked}>
          <div className="triangle t-right" onClick={mouseClick}>
            {playSound && (
              <div>
                <audio autoPlay loop src={mouseclick} type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
