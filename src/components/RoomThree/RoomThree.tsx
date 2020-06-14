import React from "react";

import RoomContext from '../RoomContext';

const RoomThree = () => {
  return (
    <RoomContext.Consumer>
      {({ rooms, currentRoom, nextRoom }) => {
        return (
          <div>
            <h1>Room One: {rooms[currentRoom].displayName}</h1>
            <button onClick={nextRoom} > Next Room </button>
            <div>TODO: all the things</div>
          </div>
        )      
      }}
    </RoomContext.Consumer>
  );
};

export default RoomThree;
