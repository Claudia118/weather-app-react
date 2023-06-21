import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather/>

        <footer>
          This project was coded by Claudia and is{" "}
          <a
            href="https://github.com/Claudia118/weather-app-react"
            target="black"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
