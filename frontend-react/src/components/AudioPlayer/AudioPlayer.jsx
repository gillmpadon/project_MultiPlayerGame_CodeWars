import React, { useEffect, useRef } from "react";
import backgroundMusic from "../../assets/audio/music.mp3";

export default function AudioPlayer({ isPlaying }) {
  return (
    <div>
      {isPlaying && (
        <div>
          <audio autoPlay loop src={backgroundMusic} type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
