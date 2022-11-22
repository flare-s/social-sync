// Compatibility with older versions of React
import React from "react";
import DateInput from "./components/DateInput";
function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Social Sync challenge</h1>
      </header>
      <main>
        <div className="container">
          <h1>Each day comes with a pleasant surprise.</h1>
          <DateInput />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
