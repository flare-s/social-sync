import React, { useState } from "react";
import windowStyles from "./Window.module.scss";
import Modal from "../Modal/Modal";

const WindowContent = ({ windowObj, closeWindow, video }) => {
  const [isModal, setIsModal] = useState(false);

  const videoContent = (passRef) => {
    return passRef ? (
      <video src={windowObj.source} width="100%" controls ref={video}>
        sorry, your browser doesn't support embedded video
      </video>
    ) : (
      <video src={windowObj.source} width="100%" controls>
        sorry, your browser doesn't support embedded video
      </video>
    );
  };
  const content = (passRef = false) => {
    return (
      <div>
        {windowObj.type === "image" ? (
          <img src={windowObj.source} alt="" />
        ) : (
          videoContent(passRef)
        )}
      </div>
    );
  };

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);
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
          <button
            className={`${windowStyles["view-content"]}`}
            onClick={openModal}
          >
            View
          </button>
          {content(true)}
        </div>
      }
      {isModal && <Modal closeModal={closeModal}>{content()}</Modal>}
    </>
  );
};

export default WindowContent;
