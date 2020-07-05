import React from 'react'

import { RoomState } from '../../hooks/useRoomState'
import { RoomOne, RoomTwo, RoomThree } from '../../components/Rooms'

const INITIAL_ROOMS_STATE: RoomState = {
  rooms: [
    {
      displayName: 'Room one',
      completed: false,
    },
    {
      displayName: 'Room two',
      completed: false,
    },
    {
      displayName: 'Room three',
      completed: false,
    },
  ],
  currentRoomIndex: 0,
}
export default INITIAL_ROOMS_STATE
