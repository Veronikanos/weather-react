import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
    <div>
      <video autoPlay muted loop id="myVideo"><source src="./video/Raindrops on tree branches.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="main_block">
          <Weather defaultCity="Kyiv"/>
          <footer className="main_block p-sm-2 mt-5">
            <a href="https://github.com/Veronikanos/weather-react">
              Open-source code react-app
            </a>
            <span> by Veronika Tlostiuk</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
