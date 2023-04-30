import { useState } from "react";
import React from "react";
import "./Match.css"
import glass from "../../assets/img/manifyglass.png";
import { FaSearch } from "react-icons/fa";


export default function Match () {
    const [match, findMatch] = useState(false);
    const [cancel, cancelMatch] = useState(false)

    const toggleCancel = () => cancelMatch(!false);

    return(
        <>
            {/* {cancel && */}
                <div className="match-container">
                    <div className="magnifyglass">
                        <FaSearch className="search-icon"/>
                    </div>
                    <h1>Finding Opponent<span>.</span><span>.</span><span>.</span></h1>
                    <div className="btn cancelbtn" onClick={toggleCancel}>CANCEL</div>
                </div>
            {/* } */}
        </>
    )
}