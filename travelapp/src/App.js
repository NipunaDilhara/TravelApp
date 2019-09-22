import React from 'react';
//import logo from './logo.svg';
import logo from './images/logo.jpg';
import homeImage from './images/home_image_1280.jpg'
import './App.css';
//import './style.css';

function App() {
  return (
      <div className="App">
      <header>
        <div className="wrapper">
          <div className="logo">
            <img src={logo}/>
          </div>
          <ul className="nav-area">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="welcome-text">
            <h1>Welcome to iTravel</h1>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </header>
      </div>
  );
}

export default App;
