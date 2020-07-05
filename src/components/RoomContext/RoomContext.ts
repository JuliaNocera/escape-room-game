import { createContext, ReactNode } from 'react'

const noop = () => {}

export interface Room {
  completed: boolean
  displayName: string
  renderer: ReactNode
}

export interface RoomContextProps {
  rooms: Room[]
  currentRoomIndex: number
  completeRoom: (roomIndex: number) => void
  goToRoom: (roomNumber: number) => void
  nextRoom: () => void
  prevRoom: () => void
  loading: boolean
}

export default createContext<RoomContextProps>({
  rooms: [],
  currentRoomIndex: 0,
  completeRoom: noop,
  goToRoom: noop,
  nextRoom: noop,
  prevRoom: noop,
  loading: true,
})
