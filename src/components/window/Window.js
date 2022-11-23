import windowStyles from "./Window.module.scss";

const Window = ({ windowObj, setWindows }) => {
  const handleClick = (id) => {
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

  return (
    <li
      className={`${windowStyles.window} ${
        windowObj.open ? windowStyles.active : ""
      }`}
      onClick={() => handleClick(windowObj.id)}
    >
      <div>{windowObj.day}</div>
      <div>{windowObj.text}</div>
    </li>
  );
};

export default Window;
