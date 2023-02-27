// @ts-nocheck
/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react';
import dblslshLogo from "./assets/dblslsh-logo.png";
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header>
        <img className='logo-image' src={dblslshLogo} alt="" height="50px" />
        <div>
          <h1 className='accent-color-lighter'>//DoubleSlash</h1>
          <code>a note taking app for coders</code>
        </div>
      </header>
    </div>
  );
}

export default App;
