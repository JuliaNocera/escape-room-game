import React from "react";

import RoomContext from "../RoomContext";

const RoomRenderer = () => (
  <RoomContext.Consumer>
    {({ currentRoom }) => (
    <> {currentRoom.renderer}</>
    )}
  </RoomContext.Consumer>
);

export default RoomRenderer;
