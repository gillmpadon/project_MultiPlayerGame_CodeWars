import React from "react";
import Leaderboards from "../../components/Leaderboards/Leaderboards";
import Profile from "../../components/Profile/Profile";
import BattleCharacter from "../../components/BattleCharacter/BattleCharacter";
import "./Home.css";
import bg from "../../assets/img/4455.jpg";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useConfigStore from "../../store/configStore";

export default function Home() {

  const navigate = useNavigate();
  const account = useConfigStore((state) => state.account);

  useEffect(() => {
    if (account.username === "") {
      navigate("/");
    }
  }, []);
  
  return (
    <div className="container">
      <img src={bg} alt="" />
      <Profile username={account.username} />
      <div className="container-box">
        <BattleCharacter />
        <Leaderboards />
      </div>
    </div>
  );
}
