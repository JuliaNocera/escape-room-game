import React, { PropsWithChildren } from "react";

import RoomContext from "../RoomContext";

import useRoomState from '../../hooks/useRoomState';

import INITIAL_ROOMS_STATE from '../../lib/constants/rooms';

const RoomProvider = ({children}: PropsWithChildren<{}>) => { 
  const { currentRoomIndex, goToRoom, nextRoom, previousRoom, rooms } = useRoomState(INITIAL_ROOMS_STATE)

  return (
  <RoomContext.Provider
    value={{ rooms, currentRoom: rooms[currentRoomIndex], currentRoomIndex, goToRoom, nextRoom, prevRoom: previousRoom }}
  >
    {children}
  </RoomContext.Provider>
)};

export default RoomProvider;
