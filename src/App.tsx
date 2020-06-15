import React from "react";
import { A } from 'hookrouter';

import './styles.scss';

import RoomProvider from "./components/RoomProvider";
import Routes from './components/Routes';

const App = () => {
    return (
      <div className="App">
        <RoomProvider>
          <header className="App-header">
            <A href="/" className="App-nav-item">Home</A>
            <A href="/game" className="App-nav-item">Game</A>
            <span>Something Else</span>
          </header>
          <div className="App-body">
            <Routes />
          </div>
        </RoomProvider>
      </div>
    )
}

export default App;
