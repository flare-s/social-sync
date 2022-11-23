import React, { useState } from "react";
import windowStyles from "./Window.module.scss";

const Window = ({ window }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li
      className={`${windowStyles.window} ${isOpen ? windowStyles.active : ""}`}
      onClick={handleClick}
    >
      <div>{window.day}</div>
      <div>{window.text}</div>
    </li>
  );
};

export default Window;
