import {React, useState} from "react";
import mouseclick from '../../assets/audio/mouseclick.mp3';

export default function MouseClick (mclick){
    return(
        <>
            {mclick && <div>
                <audio autoPlay loop src={mouseclick} type="audio/mpeg">
                Your browser does not support the audio element.
                </audio>
            </div>}
        </>
    )
    
}