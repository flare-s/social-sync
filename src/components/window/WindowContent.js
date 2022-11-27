import React from "react";
import windowStyles from "./Window.module.scss";

const WindowContent = ({ windowObj, closeWindow, video }) => {
  return (
    <>
      {
        <div>
          <button
            className={`${windowStyles["close-window"]} ${
              windowObj.type === "video" ? "video-btn" : ""
            }`}
            aria-label="Close window"
            onClick={(e) => closeWindow(e, windowObj.id)}
          >
            <span aria-hidden>X</span>
          </button>
          {windowObj.type === "image" ? (
            <img src={windowObj.source} alt="" />
          ) : (
            <video src={windowObj.source} width="100%" controls ref={video}>
              sorry, your browser doesn't support embedded video
            </video>
          )}
        </div>
      }
    </>
  );
};

export default WindowContent;
