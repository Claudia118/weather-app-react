import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Albuquerque</h1>
      <ul>
        <li>Wednesday 12:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row ">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
            className="icon"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="city-description">
            <li>Percipitation: 0%</li>
            <li>Humidity: 10%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
