import React from "react";
import Button from "./Button.jsx";
function App() {
  const [timerMins, setTimerMins] = React.useState(0);
  const [timerSeconds, setTimerSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds + 1);
      }, 1000);
      if (timerSeconds === 60) {
        setTimerSeconds(0);
        setTimerMins((setTimerMins) => setTimerMins + 1);
      }
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, timerSeconds]);

  function handleReset() {
    setTimerMins(0);
    setTimerSeconds(0);
    setRunning(false);
  }

  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold mb-8 text-white">Stopwatch Timer</h1>
      <div className="flex items-center justify-center">
        <h1
          style={{ maxWidth: "max-content" }}
          className="text-2xl text-[#e0aaff] bg-[#3c096c] p-6 rounded font-bold"
        >
          {timerMins}
        </h1>
        <span className="text-2xl text-[#e0aaff] ml-4 mr-4">:</span>
        <h1
          style={{ maxWidth: "max-content" }}
          className="text-2xl text-[#e0aaff] bg-[#3c096c] p-6 rounded font-bold"
        >
          {timerSeconds}
        </h1>
      </div>
      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button
          bg={"#240046"}
          onClick={() => setRunning(true)}
          nameButton={"Start"}
        />
        <Button
          bg={"#240046"}
          onClick={() => setRunning(false)}
          nameButton={"Stop"}
        />
        <Button bg={"#240046"} onClick={handleReset} nameButton={"Reset"} />
      </div>
    </div>
  );
}

export default App;
