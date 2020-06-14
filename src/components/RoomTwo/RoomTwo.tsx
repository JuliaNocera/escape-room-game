import React from "react";

import RoomContext from '../RoomContext';

const RoomTwo = () => {
  return (
    <RoomContext.Consumer>
      {({ rooms, currentRoom, nextRoom }) => {
        return (
          <div>
            <h1>{rooms[currentRoom].displayName}</h1>
            <button onClick={nextRoom} > Next Room </button>
            <div>TODO: all the things</div>
          </div>
        )      
      }}
    </RoomContext.Consumer>
  );
};

export default RoomTwo;
