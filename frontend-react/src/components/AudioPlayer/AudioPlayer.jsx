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

// const [isMuted, setIsMuted] = useState(false);
// const toggleMute = () => {
//   audioRef.current.muted = !isMuted;
//   setIsMuted(!isMuted);
// };

// export default function AudioButton () {
//   return(
//     <button className={`toggle-button ${isMuted ? 'off' : 'on'}`} onClick={toggleMute}>
//       <p>ON</p>
//       <p>OFF</p>
//       <div className="toggle-icon"></div>
//     </button>
//   )
// }

// export default function AudioPlayer () {
//     return(
//       <audio autoPlay loop src={backgroundMusic} type="audio/mpeg" ref={audioRef}>
//           Your browser does not support the audio element.
//       </audio>
//     )
// }

// import React, { useEffect, useRef } from 'react';
// import backgroundMusic from '../../assets/audio/music.mp3';

// export default function AudioPlayer () {
//   const audioRef = useRef(null);
//   return (
//     <audio autoPlay loop src={backgroundMusic} type="audio/mpeg" ref={audioRef}>
//       Your browser does not support the audio element.
//     </audio>
//   );
// }
