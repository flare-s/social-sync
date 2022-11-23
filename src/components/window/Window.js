import React from "react";

const Window = () => {
  return (
    <li key={window.id}>
      <div>{window.day}</div>
      <div>{window.text}</div>
    </li>
  );
};

export default Window;
