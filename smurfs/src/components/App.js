import React, { Component, useEffect, useState } from "react";
import SmurfsContext from "../contexts/SmurfsContext";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SmurfsContext.Provider value={{ smurfs }}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </SmurfsContext.Provider>
      </div>
    );
  }
}

export default App;
