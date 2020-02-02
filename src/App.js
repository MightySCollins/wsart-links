import React from 'react';
import logo from './logo.png';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import links from "./links";

function Icon({icon, text, link}) {
  return (
    <div className="icon">
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
        <FontAwesomeIcon icon={icon} />
        <h1>{text}</h1>
        </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="grid">{links.map((item) => <Icon icon={item.icon} text={item.text} link={item.link} key={item.link} />)}</div>
      </header>
    </div>
  );
}

export default App;
