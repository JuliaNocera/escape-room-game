import React, { PropsWithChildren } from "react";

import RoomContext, { Room } from "../RoomContext";

interface RoomProviderProps {
  rooms: Room[]
  currentRoomIndex: number
  goToRoom: (roomIndex: number) => void;
  nextRoom: () => void;
  prevRoom: () => void;
}

const RoomProvider = ({
  rooms,
  currentRoomIndex,
  goToRoom,
  nextRoom,
  prevRoom,
  children,
}: PropsWithChildren<RoomProviderProps>) => (
  <RoomContext.Provider
    value={{ rooms, currentRoom: rooms[currentRoomIndex], currentRoomIndex, goToRoom, nextRoom, prevRoom }}
  >
    {children}
  </RoomContext.Provider>
);

export default RoomProvider;
