import React from "react";
import windowsArray from "../data";

const WindowsList = () => {
  return (
    <ul className="grid">
      {windowsArray.map((window) => (
        <li key={window.id}>
          <div>{window.day}</div>
          <div>{window.text}</div>
        </li>
      ))}
    </ul>
  );
};

export default WindowsList;
