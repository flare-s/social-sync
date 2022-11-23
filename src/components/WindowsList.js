import React from "react";
import windowsArray from "../data";
import Window from "./window/Window";

const WindowsList = () => {
  return (
    <ul className="grid">
      {windowsArray.map((window) => (
        <Window key={window.id} window={window} />
      ))}
    </ul>
  );
};

export default WindowsList;
