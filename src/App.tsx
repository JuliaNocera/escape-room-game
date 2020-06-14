import React, { Component } from "react";
import { A } from 'hookrouter';

import "./App.css";

import RoomProvider from "./components/RoomProvider";
import Routes from './components/Routes';
import RoomOne from './components/RoomOne';
import RoomTwo from './components/RoomTwo';
import RoomThree from './components/RoomThree';
import { Room } from "./components/RoomContext";

interface AppState {
  rooms: Room[];
  currentRoomIndex: number;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    rooms: [
      {
        displayName: "Room one",
        completed: false,
        renderer: <RoomOne />
      },
      {
        displayName: "Room two",
        completed: false,
        renderer: <RoomTwo />
      },
      {
        displayName: "Room three",
        completed: false,
        renderer: <RoomThree />
      },
    ],
    currentRoomIndex: 0,
  };

  // componentDidMount() {
  // Long Term Todo: query param key to firebase & routing
  // temp: use state to track rooms and progress
  // }

  setCurrentRoom = (currentRoomIndex: number) => this.setState({ currentRoomIndex });

  nextRoom = () => {
    const { currentRoomIndex, rooms } = this.state;
    if (currentRoomIndex + 1 < rooms.length) {
      this.setCurrentRoom(currentRoomIndex + 1);
    }
  };

  previousRoom = () => {
    const { currentRoomIndex } = this.state;
    if (currentRoomIndex - 1 >= 0) {
      this.setCurrentRoom(currentRoomIndex - 1);
    }
  };

  goToRoom = (roomIndex: number) => {
    const { rooms } = this.state;
    if (roomIndex < rooms.length && roomIndex >= 0) {
      this.setCurrentRoom(roomIndex) 
    }
  };

  render() {
    const { currentRoomIndex, rooms } = this.state;
    return (
      <div className="App">
        <RoomProvider
          rooms={rooms}
          currentRoomIndex={currentRoomIndex}
          nextRoom={this.nextRoom}
          prevRoom={this.previousRoom}
          goToRoom={this.goToRoom}
        >
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
    );
  }
}

export default App;
