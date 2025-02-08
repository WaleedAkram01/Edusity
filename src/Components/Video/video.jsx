import React from "react";
import { useRef, useState } from "react";
import Video from "../../assets/College_Video.mp4";
import "./video.css";
function video({ playState, setPlayState }) {
  let player = useRef(null);
  let closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video_player  ${playState ? "" : "hide"} `}
      ref={player}
      onClick={(e) => closePlayer(e)}
    >
      <video src={Video} autoPlay loop controls></video>
    </div>
  );
}

export default video;
