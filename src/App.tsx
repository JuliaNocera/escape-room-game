import React, { Component } from "react";

import "./App.css";

import RoomProvider from "./components/RoomProvider";
import Routes from './components/Routes';
import RoomOne from './components/RoomOne';
import RoomTwo from './components/RoomTwo';
import RoomThree from './components/RoomThree';
import { Room } from "./components/RoomContext";

interface AppState {
  rooms: Room[];
  currentRoom: number;
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
    currentRoom: 0,
  };

  // componentDidMount() {
  // Long Term Todo: query param key to firebase & routing
  // temp: use state to track rooms and progress
  // }

  setCurrentRoom = (currentRoom: number) => this.setState({ currentRoom });

  nextRoom = () => {
    const { currentRoom } = this.state;
    this.setCurrentRoom(currentRoom + 1);
  };

  previousRoom = () => {
    const { currentRoom } = this.state;
    this.setCurrentRoom(currentRoom - 1);
  };

  goToRoom = (roomIndex: number) => this.setCurrentRoom(roomIndex);

  render() {
    const { currentRoom, rooms } = this.state;
    return (
      <div className="App">
        <RoomProvider
          rooms={rooms}
          currentRoom={currentRoom}
          nextRoom={this.nextRoom}
          prevRoom={this.previousRoom}
          goToRoom={this.goToRoom}
        >
          <header className="App-header">
            <span>Left</span>
            <span>Center</span>
            <span>Right</span>
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
