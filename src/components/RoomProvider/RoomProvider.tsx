import React, { PropsWithChildren } from "react";

import RoomContext, { RoomContextProps } from "../RoomContext";

const RoomProvider = ({
  rooms,
  currentRoom,
  goToRoom,
  nextRoom,
  prevRoom,
  children,
}: PropsWithChildren<RoomContextProps>) => (
  <RoomContext.Provider
    value={{ rooms, currentRoom, goToRoom, nextRoom, prevRoom }}
  >
    {children}
  </RoomContext.Provider>
);

export default RoomProvider;
