import { useState } from 'react'

import { Room } from '../components/RoomContext'

export interface RoomState {
  currentRoomIndex: number;
  rooms: Room[];
}

const useRoomState = (intialRoomState: RoomState) => {
  const [roomState, updateRoomState] = useState(intialRoomState)
  const { currentRoomIndex, rooms } = roomState

  const setCurrentRoom = (newRoomIndex: number) => {
    updateRoomState({ rooms, currentRoomIndex: newRoomIndex })
  };

  const nextRoom = () => {
    if (currentRoomIndex + 1 < rooms.length) {
      updateRoomState({ rooms, currentRoomIndex: currentRoomIndex + 1 });
    }
  };

  const previousRoom = () => {
    if (currentRoomIndex - 1 >= 0) {
      updateRoomState({ rooms, currentRoomIndex: currentRoomIndex - 1 });
    }
  };

  const goToRoom = (roomIndex: number) => {
    if (roomIndex < rooms.length && roomIndex >= 0) {
      setCurrentRoom(roomIndex) 
    }
  }

  return { rooms, currentRoomIndex, goToRoom, previousRoom, nextRoom }
};

export default useRoomState;