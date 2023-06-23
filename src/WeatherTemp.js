import React, { useState } from "react";

export default function WeatherTemp(props) {
  //state
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFarenheit}>
            {" "}
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showToCelsius}>
            °C{" "}
          </a>{" "}
          |°F
        </span>
      </span>
    );
  }
}
