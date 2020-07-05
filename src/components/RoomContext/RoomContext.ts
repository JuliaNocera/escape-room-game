import { createContext, ReactNode } from 'react'

const noop = () => {}

export interface Room {
  completed: boolean
  displayName: string
  renderer?: ReactNode
}

export interface RoomContextProps {
  rooms: Room[]
  currentRoomIndex: number
  currentRoom: Room
  goToRoom: (roomNumber: number) => void
  nextRoom: () => void
  prevRoom: () => void
}

export default createContext<RoomContextProps>({
  rooms: [],
  currentRoomIndex: 0,
  currentRoom: {
    displayName: '',
    renderer: null,
    completed: false,
  },
  goToRoom: noop,
  nextRoom: noop,
  prevRoom: noop,
})
