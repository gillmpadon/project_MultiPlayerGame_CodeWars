import React from "react";
// import "./SinglePlayer.css";
import { Link } from "react-router-dom";

export default function SinglePlayer() {
  return (
    <div className="container">
      <div className="solution">
        <h1>SOLUTION</h1>
        <div className="code">
          <textarea
            spellcheck="false"
            name="code"
            id="code"
            cols="65"
            rows="10"
          ></textarea>
        </div>
        <h3>OUTPUT</h3>
        <div className="contentOutput">
          <div className="output">
            <pre id="outputText"></pre>
          </div>
          <div className="topbuttons">
            <input type="button" id="check" value="Check" />
            <input type="button" id="submit" value="Submit" />
          </div>
        </div>
      </div>

      <div className="side">
        <div className="sidePane">
          <div className="problem">
            <div className="problemContent">
              <h1>PROBLEM 90</h1>
            </div>

            <div className="content">
              <h3>QUESTION?</h3>
              <div className="pane">
                <p id="questionProblem">
                  Write a function that compute the sum of two inputs
                </p>
              </div>

              <h3>INPUTS</h3>
              <div className="pane">
                <p id="inputProblem">sum(9 , 5)</p>
              </div>

              <h3>OUTPUT</h3>
              <div className="pane">
                <p id="outputProblem">14</p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <input type="button" id="prev" value="next" />
          <input type="button" id="next" value="prev" />
          {/* <Link to="/home"> */}
          <input type="button" id="home" value="home" />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
