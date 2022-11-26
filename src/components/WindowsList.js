import React, { useState, useEffect } from "react";
import windowsArray from "../data";
import Window from "./window/Window";

const WindowsList = ({ selectedDayDate }) => {
  const [windows, setWindows] = useState(windowsArray);

  useEffect(() => {
    const windowsFromLocalStorage = localStorage.getItem("windows");
    // store state in localStorage if it doesn't exist there
    if (!windowsFromLocalStorage) {
      localStorage.setItem("windows", JSON.stringify(windowsArray));
    } else {
      setWindows(JSON.parse(windowsFromLocalStorage));
    }
  }, []);
  return (
    <ul className="grid">
      {windows.map((window) => (
        <Window
          key={window.id}
          windowObj={window}
          setWindows={setWindows}
          selectedDayDate={selectedDayDate}
        />
      ))}
    </ul>
  );
};

export default WindowsList;
