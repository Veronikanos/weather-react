import React from 'react';
import Weather from './components/Weather/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Footer} from './components/Footer/Footer';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Weather />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
