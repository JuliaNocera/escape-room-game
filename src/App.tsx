import React from "react";
import { A } from 'hookrouter';

import './styles.scss';

import RoomProvider from "./components/RoomProvider";
import Button from './components/Button';
import Routes from './components/Routes';
import INITIAL_ROOMS_STATE from './lib/constants/rooms';
import useRoomState from "./hooks/useRoomState";

const App = () => {
    const { currentRoomIndex, goToRoom, nextRoom, previousRoom, rooms } = useRoomState(INITIAL_ROOMS_STATE)

    return (
      <div className="App">
        <RoomProvider
          rooms={rooms}
          currentRoomIndex={currentRoomIndex}
          nextRoom={nextRoom}
          prevRoom={previousRoom}
          goToRoom={goToRoom}
        >
          <header className="App-header">
            <A href="/" className="App-nav-item">Home</A>
            <A href="/game" className="App-nav-item">Game</A>
            <span>Something Else</span>
          </header>
          <div className="App-body">
            <Button onClick={() => goToRoom(0)}>First Room</Button>
            <Button onClick={() => goToRoom(1)}>Second Room</Button>
            <Button onClick={() => goToRoom(2)}>Third Room</Button>
            <Routes />
          </div>
        </RoomProvider>
      </div>
    )
}

export default App;
