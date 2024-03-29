import React, { useState } from "react";
import Leaderboards from "../../components/Leaderboards/Leaderboards";
import Profile from "../../components/Profile/Profile";
import BattleCharacter from "../../components/BattleCharacter/BattleCharacter";
import Match from "../../components/Match/Match";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import "./Home.css";
import bg from "../../assets/img/4455.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useConfigStore from "../../store/configStore";

export default function Home() {
  const navigate = useNavigate();
  const account = useConfigStore((state) => state.account);
  const isConnected = useConfigStore((state) => state.isConnected);
  console.log(account);

  const notify = () => toast("Socket forcefully disconnected.");

  const [find, findMatch] = useState(false);

  useEffect(() => {
    if (account.username === "") {
      navigate("/");
    }

    socket.connect();
  }, []);

  if (socket.id) {
    console.log(socket.id);
  }

  return (
    <div className="container">
      <img src={bg} alt="" />
      <LoadingPage />
      <Match
        showFind={find}
        findMatch={findMatch}
        onSocketDisconnect={notify}
      />
      <Profile username={account.username} />
      <div className="container-box">
        <BattleCharacter findMatch={findMatch} />
        <Leaderboards />
      </div>
      <ToastContainer />
    </div>
  );
}
