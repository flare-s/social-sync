import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModal}></div>;
};

const ModalContent = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <>
          <BackDrop closeModal={props.closeModal} />
          <ModalContent>{props.children}</ModalContent>
        </>,
        document.querySelector("#root")
      )}
    </>
  );
};

export default Modal;
