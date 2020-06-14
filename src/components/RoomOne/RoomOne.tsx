import React from "react";

import RoomContext from '../RoomContext';

const RoomOne = () => {
  return (
    <RoomContext.Consumer>
      {({currentRoom, nextRoom}) => (
        <div>
          <h1>{currentRoom.displayName}</h1>
          <button onClick={nextRoom} > Next Room </button>
          <div>TODO: all the things</div>
        </div>
      )}
    </RoomContext.Consumer>
  );
};

export default RoomOne;
