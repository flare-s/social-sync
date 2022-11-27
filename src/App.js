// Compatibility with older versions of React
import React, { useState, useRef } from "react";
import DateInput from "./components/DateInput";
import WindowsList from "./components/WindowsList";
function App() {
  const dateInput = useRef();
  const [selectedDayDate, setDate] = useState(1);

  const handleDateChange = () => {
    const getSelectedDayDate = new Date(dateInput.current.value).getDate();
    setDate(getSelectedDayDate);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Social Sync challenge</h1>
      </header>
      <main>
        <div className="container">
          <DateInput inputRef={dateInput} handleDateChange={handleDateChange} />
          <WindowsList selectedDayDate={selectedDayDate} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
