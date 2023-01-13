import React from 'react';
import Weather from './components/Weather/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className="background">
      {/* <video autoPlay muted loop id="myVideo">
        <source
          src="./video/Raindrops on tree branches.mp4"
          type="video/mp4"
        />
      </video> */}
      <div className="container">
        <div className="main_block">
          <Weather defaultCity="Kyiv" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
