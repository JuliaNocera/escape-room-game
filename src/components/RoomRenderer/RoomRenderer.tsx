import React from "react";

import RoomContext from "../RoomContext";

const RoomRenderer = () => (
  <RoomContext.Consumer>
    {({rooms, currentRoom}) => (
    <> {rooms[currentRoom].renderer}</>
    )}
  </RoomContext.Consumer>
);

export default RoomRenderer;
