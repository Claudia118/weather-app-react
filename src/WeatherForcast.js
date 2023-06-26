import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  // states
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForcast-day">Thu</div>
            <div className="WeatherForcast-icon">icon</div>
            <div className="WeatherForcast-temperatures">
              <span className="WeatherForcast-temp-max">19°</span>
              <span className="WeatherForcast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "49b631c45785fe73d2a88477803dea22";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handelResponse);

    return null;
  }
}
