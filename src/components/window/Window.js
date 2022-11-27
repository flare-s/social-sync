import windowStyles from "./Window.module.scss";
import LockStyles from "./Lock.module.scss";
import React, { useRef } from "react";

const Window = ({ windowObj, setWindows, selectedDayDate }) => {
  const video = useRef();
  const openWindow = (id) => {
    if (selectedDayDate < windowObj.day) return;
    setWindows((prevState) => {
      const newWindows = prevState.map((window) => {
        return window.id === id
          ? {
              ...window,
              open: !window.open,
            }
          : window;
      });
      localStorage.setItem("windows", JSON.stringify(newWindows));
      return newWindows;
    });
  };
  const closeWindow = (event, id) => {
    if (event.target.classList.contains("video-btn")) {
      video.current.pause();
      video.current.currentTime = 0;
    }
    setWindows((prevState) => {
      const newWindows = prevState.map((window) => {
        return window.id === id
          ? {
              ...window,
              open: false,
            }
          : window;
      });
      localStorage.setItem("windows", JSON.stringify(newWindows));
      return newWindows;
    });
  };
  return (
    <li
      className={`${windowStyles.window} ${
        windowObj.open && selectedDayDate >= windowObj.day
          ? windowStyles.active
          : ""
      }`}
    >
      {selectedDayDate < windowObj.day && (
        <div className={LockStyles.container}>
          <div className={LockStyles.lock}>{windowObj.day}</div>
        </div>
      )}
      <div
        className={windowStyles.day}
        onClick={() => openWindow(windowObj.id)}
      >
        <span>{windowObj.day}</span>
      </div>
      <div>
        {windowObj.type === "image" && (
          <div>
            <button
              className={windowStyles["close-window"]}
              aria-label="Close window"
              onClick={(e) => closeWindow(e, windowObj.id)}
            >
              <span aria-hidden>X</span>
            </button>
            <img src={windowObj.source} alt="" />
          </div>
        )}
        {windowObj.type === "video" && (
          <div>
            <button
              className={`${windowStyles["close-window"]} video-btn`}
              aria-label="Close window"
              onClick={(e) => closeWindow(e, windowObj.id)}
            >
              <span aria-hidden>X</span>
            </button>
            <video src={windowObj.source} width="100%" controls ref={video}>
              sorry, your browser doesn't support embedded video
            </video>
          </div>
        )}
      </div>
    </li>
  );
};

export default Window;
