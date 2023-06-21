import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
     

      <h1>Albuquerque</h1>
      <ul>
        <li>Wednesday 12:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 0%</li>
            <li>Humidity: 10%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
