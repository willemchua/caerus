import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toolbar, Input } from '@material-ui/core';

function App() {
  return (


    <div className="input-box">
      <Input
        className="input-bar" 
        style = {{backgroundColor: "#7fffd4", color: "7fffd4"}}
        disableUnderline
        placeholder = "Input stuff here, I guess">
      </Input>


    </div>


  );
}

export default App;
