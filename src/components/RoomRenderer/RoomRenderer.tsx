import React from "react";

import Button from '../Button';
import RoomContext from "../RoomContext";

const RoomRenderer = () => (
  <RoomContext.Consumer>
    {({ currentRoom, goToRoom }) => (
      <>
        <Button size={Button.SIZE.SMALL} type={Button.TYPE.PLAIN} onClick={() => goToRoom(0)}>First Room</Button>
        <Button size={Button.SIZE.MEDIUM} onClick={() => goToRoom(1)}>Second Room</Button>
        <Button onClick={() => goToRoom(2)}>Third Room</Button>
        {currentRoom.renderer}
      </>
    )}
  </RoomContext.Consumer>
);

export default RoomRenderer;
