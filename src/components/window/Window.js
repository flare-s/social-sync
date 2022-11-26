import windowStyles from "./Window.module.scss";
import LockStyles from "./Lock.module.scss";

const Window = ({ windowObj, setWindows, selectedDayDate }) => {
  const handleClick = (id) => {
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
  return (
    <li
      className={`${windowStyles.window} ${
        windowObj.open && selectedDayDate >= windowObj.day
          ? windowStyles.active
          : ""
      }`}
      onClick={() => handleClick(windowObj.id)}
    >
      {selectedDayDate < windowObj.day && (
        <div className={LockStyles.container}>
          <div className={LockStyles.lock}>{windowObj.day}</div>
        </div>
      )}
      <div className={windowStyles.day}>
        <span>{windowObj.day}</span>
      </div>
      <div>
        {windowObj.type === "image" && <img src={windowObj.source} alt="" />}
        {windowObj.type === "video" && (
          <video src={windowObj.source} width="100%" controls>
            sorry, your browser doesn't support embedded video
          </video>
        )}
      </div>
    </li>
  );
};

export default Window;
