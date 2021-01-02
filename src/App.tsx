import React from "react";
import "./App.css";
import { useTimer } from "./useTimer";

function App() {
  const [days, hours, minutes, seconds] = useTimer("2021-01-03T13:00:00");

  return (
    <div className="App">
      <p className="timer">
        {days}:{hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

export default App;
