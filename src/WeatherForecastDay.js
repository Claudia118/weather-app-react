import React from "react";

export default function WeatherForcastDay(props) {
  function maxTemp() {
    return Math.round(props.data.temp.max);
  }

  function minTemp() {
    return Math.round(props.data.temp.min);
  }

  function icon() {
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconUrl;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForcast-day">{day()}</div>
      <div className="WeatherForcast-icon">
        {<img src={icon()} alt="icon" />}
      </div>
      <div className="WeatherForcast-temperatures">
        <span className="WeatherForcast-temp-max">{maxTemp()}°</span>
        <span className="WeatherForcast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
