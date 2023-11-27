import React, { useState, useEffect} from "react";
import "./Choose.css";
import { Link } from "react-router-dom";
import easyQ from "../../easy_questions.json";
import mediumQ from "../../medium_questions.json";
import hardQ from "../../hard_questions.json";
import Cookies from 'js-cookie';

export default function Choose() {
  const [eCount, setECount] = useState([0, 0, 0]);
  const [cookieCount, setCookieCount] = useState([0, 0, 0]);

  useEffect(() => {
    const easyCount = easyQ.length;
    const mediumCount = mediumQ.length;
    const hardCount = hardQ.length;

    setECount([easyCount, mediumCount, hardCount]);

    const cookieEasy =  0;
    const cookieMedium =  0;
    const cookieHard = 0;
    setCookieCount([cookieEasy, cookieMedium, cookieHard]);
  }, []);

  return (
    <div className="bg_select">
      <div className="select">
        <h2>Question Category</h2>
        <Link to={"/single-player?qType=easy"}>
          <div className="select_entry">
            <p>Easy</p>
            <p>{cookieCount[0]}/{eCount[0]}</p>
          </div>
        </Link>
        <Link to={"/single-player?qType=medium"}>
          <div className="select_entry">
            <p>Medium</p>
            <p>{cookieCount[1]}/{eCount[1]}</p>
          </div>
        </Link>
        <Link to={"/single-player?qType=hard"}>
          <div className="select_entry">
            <p>Hard</p>
            <p>{cookieCount[2]}/{eCount[2]}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
